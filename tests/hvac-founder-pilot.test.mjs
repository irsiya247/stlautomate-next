import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { afterEach, test } from "node:test";
import { POST } from "../src/app/api/lead/route.js";
import {
  buildCtaAttribution,
  buildIntakeAnalyticsProperties,
  clearCtaContext,
  getCtaContext,
  getServiceCta
} from "../src/app/components/attribution.mjs";
import { resolveProjectIntakeType } from "../src/app/components/project-intake-routing.mjs";
import {
  GOOGLE_ADS_SEND_TO,
  initializeGoogleAdsTag,
  trackAcceptedProjectIntakeConversion
} from "../src/app/components/google-ads-conversion.mjs";

const pilotPagePath = new URL("../src/app/(site)/hvac-founder-pilot/page.js", import.meta.url);
const buildPagePath = new URL("../src/app/(site)/services/phone-receptionist/page.js", import.meta.url);
const startPagePath = new URL("../src/app/(site)/start-project/page.js", import.meta.url);
const formPath = new URL("../src/app/components/ProjectIntakeForm.js", import.meta.url);
const apiPath = new URL("../src/app/api/lead/route.js", import.meta.url);
const originalFetch = globalThis.fetch;
const originalWebhook = process.env.N8N_WEBHOOK_URL;

afterEach(() => {
  globalThis.fetch = originalFetch;
  if (originalWebhook === undefined) delete process.env.N8N_WEBHOOK_URL;
  else process.env.N8N_WEBHOOK_URL = originalWebhook;
});

test("HVAC paid-pilot CTAs route to a distinct intake and distinguish the fixed-scope build", async () => {
  const [pilotPage, buildPage, startPage, form] = await Promise.all([
    readFile(pilotPagePath, "utf8"),
    readFile(buildPagePath, "utf8"),
    readFile(startPagePath, "utf8"),
    readFile(formPath, "utf8")
  ]);

  assert.match(pilotPage, /const pilotIntakeHref = "\/start-project\?type=hvac-founder-pilot"/);
  assert.equal((pilotPage.match(/<TrackedLink href={pilotIntakeHref}/g) || []).length, 2);
  assert.equal((pilotPage.match(/placement="hvac_founder_pilot_(?:hero|footer)"/g) || []).length, 2);
  assert.doesNotMatch(pilotPage, /href="\/intake"/);
  assert.match(pilotPage, /\$250\/month pilot is a separate offer from the \$2,500 Phone Receptionist Build &amp; Handoff package/);
  assert.match(buildPage, /const intakeHref = "\/start-project\?type=phone-receptionist"/);
  assert.match(buildPage, /\$2,500/);
  assert.match(startPage, /HVAC Phone Receptionist Paid Pilot/);
  assert.match(form, /Which call coverage should we discuss\?/);
  assert.match(form, /Paid pilot monthly price/);
  assert.match(form, /value="\$250\/month"/);
});

test("pilot CTA and submitted-intake analytics preserve matching origin and first-touch attribution", () => {
  assert.deepEqual(resolveProjectIntakeType({ type: "hvac-founder-pilot" }), {
    formType: "hvac-founder-pilot",
    unsupported: false
  });
  assert.equal(getServiceCta("hvac-founder-pilot"), "HVAC Phone Receptionist Paid Pilot");

  const location = {
    pathname: "/hvac-founder-pilot",
    href: "https://www.stlautomate.com/hvac-founder-pilot?utm_source=directory&utm_campaign=hvac"
  };
  const click = buildCtaAttribution({
    href: "/start-project?type=hvac-founder-pilot",
    placement: "hvac_founder_pilot_hero",
    cta: getServiceCta("hvac-founder-pilot"),
    location
  });

  assert.deepEqual(click, {
    source_path: "/hvac-founder-pilot",
    source_url: location.href,
    placement: "hvac_founder_pilot_hero",
    destination: "/start-project?type=hvac-founder-pilot",
    service: "hvac-founder-pilot",
    form_type: "hvac-founder-pilot",
    cta: "HVAC Phone Receptionist Paid Pilot"
  });
  assert.deepEqual(buildIntakeAnalyticsProperties({
    formType: "hvac-founder-pilot",
    location: { pathname: "/start-project" },
    attribution: { referrer: location.href, utm_source: "directory", utm_campaign: "hvac", gclid: "click-id" },
    ctaContext: click
  }), {
    form_type: "hvac-founder-pilot",
    service: "hvac-founder-pilot",
    cta: "HVAC Phone Receptionist Paid Pilot",
    source_path: "/start-project",
    origin_path: "/hvac-founder-pilot",
    origin_url: location.href,
    destination: "/start-project?type=hvac-founder-pilot",
    placement: "hvac_founder_pilot_hero",
    referrer: location.href,
    utm_source: "directory",
    utm_campaign: "hvac"
  });
});

test("CTA context survives a failed retry, clears after success, and cannot clear a newer offer click", async () => {
  const values = new Map();
  const storage = {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    removeItem: (key) => values.delete(key)
  };
  const pilot = {
    ...buildCtaAttribution({
      href: "/start-project?type=hvac-founder-pilot",
      placement: "hvac_founder_pilot_hero",
      cta: getServiceCta("hvac-founder-pilot"),
      location: { pathname: "/hvac-founder-pilot", href: "https://www.stlautomate.com/hvac-founder-pilot" }
    })
  };
  const build = buildCtaAttribution({
    href: "/start-project?type=phone-receptionist",
    placement: "phone_receptionist_build",
    cta: getServiceCta("phone-receptionist"),
    location: { pathname: "/services/phone-receptionist", href: "https://www.stlautomate.com/services/phone-receptionist" }
  });

  // A failed request does not consume its context, so the retry keeps attribution.
  storage.setItem("stl-website-cta-attribution", JSON.stringify(pilot));
  assert.deepEqual(getCtaContext(storage), pilot);
  assert.equal(clearCtaContext(pilot, storage), true); // successful retry

  // A later direct/repeat intake has no origin context to reuse.
  assert.deepEqual(getCtaContext(storage), {});
  assert.equal(clearCtaContext(pilot, storage), false);

  // If the visitor clicks a different offer while a request is pending, its newer context survives.
  storage.setItem("stl-website-cta-attribution", JSON.stringify(pilot));
  storage.setItem("stl-website-cta-attribution", JSON.stringify(build));
  assert.equal(clearCtaContext(pilot, storage), false);
  assert.deepEqual(getCtaContext(storage), build);

  const form = await readFile(formPath, "utf8");
  assert.match(form, /if \(matchingCtaContext\.form_type === formType\) clearCtaContext\(matchingCtaContext\)/);
  assert.ok(form.indexOf("clearCtaContext(matchingCtaContext)") < form.indexOf("setStatus(\"success\")"));
  assert.ok(form.indexOf("clearCtaContext(matchingCtaContext)") > form.indexOf("} catch {\n      submissionLockRef.current = false"));
});

test("pilot API payload forwards explicit identity and attribution through a local webhook mock", async () => {
  process.env.N8N_WEBHOOK_URL = "https://n8n.example.invalid/webhook/demand-capture";
  let forwardedUrl;
  let forwarded;
  globalThis.fetch = async (url, options) => {
    forwardedUrl = String(url);
    forwarded = JSON.parse(options.body);
    return new Response(null, { status: 204 });
  };

  const response = await POST(new Request("http://localhost/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      formType: "hvac-founder-pilot",
      service: "hvac-founder-pilot",
      submission_id: "hvac-founder-pilot-test-01",
      name: "Jamie Example",
      email: "jamie@example.com",
      company: "Example HVAC Co",
      problem: "We miss HVAC calls during busy periods.",
      current_state: "Calls reach voicemail after hours and on weekends.",
      desired_state: "Capture caller details and route the agreed next step.",
      systems_tools: "Business phone and CRM",
      is_broken: "after-hours",
      timing: "exploring",
      budget_range: "$250/month",
      cta: "HVAC Phone Receptionist Paid Pilot",
      source_page: "https://www.stlautomate.com/start-project",
      page_url: "https://www.stlautomate.com/start-project?type=hvac-founder-pilot",
      landing_page: "https://www.stlautomate.com/hvac-founder-pilot?utm_source=directory",
      referrer: "https://www.stlautomate.com/hvac-founder-pilot",
      origin_path: "/hvac-founder-pilot",
      origin_url: "https://www.stlautomate.com/hvac-founder-pilot?utm_source=directory",
      destination: "/start-project?type=hvac-founder-pilot",
      placement: "hvac_founder_pilot_hero",
      utm_source: "directory",
      utm_campaign: "hvac",
      gclid: "click-id"
    })
  }));

  assert.equal(response.status, 200);
  assert.equal(forwardedUrl, "https://n8n.example.invalid/webhook/demand-capture");
  assert.equal(forwarded.form_type, "hvac-founder-pilot");
  assert.equal(forwarded.service, "hvac-founder-pilot");
  assert.equal(forwarded.cta, "HVAC Phone Receptionist Paid Pilot");
  assert.equal(forwarded.budget_range, "$250/month");
  assert.equal(forwarded.origin_path, "/hvac-founder-pilot");
  assert.equal(forwarded.origin_url, "https://www.stlautomate.com/hvac-founder-pilot?utm_source=directory");
  assert.equal(forwarded.destination, "/start-project?type=hvac-founder-pilot");
  assert.equal(forwarded.placement, "hvac_founder_pilot_hero");
  assert.equal(forwarded.utm_source, "directory");
  assert.equal(forwarded.utm_campaign, "hvac");
  assert.equal(forwarded.gclid, "click-id");
  assert.match(forwarded.message, /Call-handling priority: after-hours/);

  const [api, form] = await Promise.all([readFile(apiPath, "utf8"), readFile(formPath, "utf8")]);
  assert.match(api, /"phone-receptionist",\s*"hvac-founder-pilot"/);
  assert.match(form, /ctaContext\.form_type === formType/);
  assert.match(form, /origin_path: matchingCtaContext\.source_path/);
});

test("accepted pilot intake conversion keeps consent, success, and duplicate guards with no lead data", () => {
  const calls = [];
  const target = { gtag: (...args) => calls.push(args) };
  const submission = {
    response: { ok: true },
    result: { success: true },
    formType: "hvac-founder-pilot",
    submissionId: "hvac-pilot-conversion-0001",
    target
  };

  assert.equal(trackAcceptedProjectIntakeConversion(submission), false);
  assert.equal(initializeGoogleAdsTag(target, true), true);
  assert.equal(trackAcceptedProjectIntakeConversion({ ...submission, response: { ok: false } }), false);
  assert.equal(trackAcceptedProjectIntakeConversion(submission), true);
  assert.equal(trackAcceptedProjectIntakeConversion(submission), false);
  assert.deepEqual(calls.filter(([kind, name]) => kind === "event" && name === "conversion"), [
    ["event", "conversion", { send_to: GOOGLE_ADS_SEND_TO }]
  ]);
  assert.equal(calls.some((call) => JSON.stringify(call).includes("jamie@example.com")), false);
});
