import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { POST } from "../src/app/api/lead/route.js";
import { resolveProjectIntakeType } from "../src/app/components/project-intake-routing.mjs";
import {
  buildCtaAttribution,
  buildIntakeAnalyticsProperties,
  getCtaContext,
  getServiceCta,
  saveCtaContext
} from "../src/app/components/attribution.mjs";

const pagePath = new URL("../src/app/(site)/services/phone-receptionist/page.js", import.meta.url);
const sitemapPath = new URL("../src/app/sitemap.js", import.meta.url);
const homePath = new URL("../src/app/(site)/page.js", import.meta.url);
const servicesPath = new URL("../src/app/(site)/services/page.js", import.meta.url);
const customPath = new URL("../src/app/(site)/services/custom-automation/page.js", import.meta.url);
const repairPath = new URL("../src/app/(site)/services/automation-repair/page.js", import.meta.url);
const hubspotPath = new URL("../src/app/(site)/services/hubspot-lead-automation/page.js", import.meta.url);
const startPath = new URL("../src/app/(site)/start-project/page.js", import.meta.url);
const formPath = new URL("../src/app/components/ProjectIntakeForm.js", import.meta.url);
const apiPath = new URL("../src/app/api/lead/route.js", import.meta.url);

test("Phone Receptionist page has buyer-intent scope, proof labels, and canonical metadata", async () => {
  const page = await readFile(pagePath, "utf8");
  assert.match(page, /title:\s*"Phone Receptionist in St\. Louis \| STL Automate"/);
  assert.match(page, /canonical:\s*"https:\/\/www\.stlautomate\.com\/services\/phone-receptionist"/);
  assert.match(page, /\$2,500/);
  for (const section of [
    "What it solves", "What the system can do", "Typical call flow",
    "The $2,500 engagement", "Outside this package", "Related implementation evidence",
    "Implementation steps", "What helps us scope it", "Phone Receptionist questions"
  ]) assert.ok(page.includes(section), "missing section: " + section);
  assert.match(page, /one inbound business number/i);
  assert.match(page, /not a claim of external customer deployment or measured results/i);
  assert.match(page, /Telephony, provider usage, or subscription fees/);
  assert.doesNotMatch(page, /guaranteed jobs|customer results from this package/i);
});

test("Phone Receptionist page is in sitemap and internally linked from all requested surfaces", async () => {
  const [sitemap, home, services, custom, repair, hubspot, start] = await Promise.all([
    readFile(sitemapPath, "utf8"), readFile(homePath, "utf8"), readFile(servicesPath, "utf8"),
    readFile(customPath, "utf8"), readFile(repairPath, "utf8"), readFile(hubspotPath, "utf8"),
    readFile(startPath, "utf8")
  ]);
  assert.match(sitemap, /"\/services\/phone-receptionist"/);
  for (const [name, source] of [["homepage", home], ["Services", services], ["Custom Automation", custom], ["Automation Repair", repair], ["Lead-to-HubSpot", hubspot], ["project intake", start]]) {
    assert.ok(source.includes("/services/phone-receptionist"), "missing link from " + name);
  }
});

test("tracked Phone Receptionist CTA preserves service attribution through intake", async () => {
  const [page, start, form] = await Promise.all([
    readFile(pagePath, "utf8"), readFile(startPath, "utf8"), readFile(formPath, "utf8")
  ]);
  const values = new Map();
  const storage = { getItem: (key) => values.get(key) || null, setItem: (key, value) => values.set(key, value) };
  const sourceUrl = "https://www.stlautomate.com/services/phone-receptionist?utm_source=directory&utm_campaign=phone";
  const location = { pathname: "/services/phone-receptionist", href: sourceUrl };
  const click = buildCtaAttribution({
    href: "/start-project?type=phone-receptionist",
    placement: "phone_receptionist_hero",
    cta: "Phone Receptionist",
    location
  });
  saveCtaContext(click, storage);

  assert.equal((page.match(/placement="phone_receptionist_(?:hero|footer)"/g) || []).length, 2);
  assert.match(page, /const intakeHref = "\/start-project\?type=phone-receptionist"/);
  assert.match(start, /resolveProjectIntakeType\(query\)/);
  assert.match(form, /getServiceCta\(formType\)/);
  assert.match(form, /What should the receptionist handle\?/);
  assert.match(form, /We miss calls when our team is working or after hours/);
  assert.match(form, /Phone provider, CRM, calendar, or other tools/);
  assert.deepEqual(click, {
    source_path: "/services/phone-receptionist",
    source_url: sourceUrl,
    placement: "phone_receptionist_hero",
    destination: "/start-project?type=phone-receptionist",
    service: "phone-receptionist",
    form_type: "phone-receptionist",
    cta: "Phone Receptionist"
  });
  assert.deepEqual(buildIntakeAnalyticsProperties({
    formType: "phone-receptionist",
    location: { pathname: "/start-project" },
    attribution: { referrer: sourceUrl, utm_source: "directory", utm_campaign: "phone" },
    ctaContext: getCtaContext(storage)
  }), {
    form_type: "phone-receptionist",
    service: "phone-receptionist",
    cta: "Phone Receptionist",
    source_path: "/start-project",
    origin_path: "/services/phone-receptionist",
    origin_url: sourceUrl,
    destination: "/start-project?type=phone-receptionist",
    placement: "phone_receptionist_hero",
    referrer: sourceUrl,
    utm_source: "directory",
    utm_campaign: "phone"
  });
});

test("Phone Receptionist intake is supported while existing service CTAs remain stable", () => {
  assert.equal(getServiceCta("phone-receptionist"), "Phone Receptionist");
  assert.equal(getServiceCta("automation-fix-sprint"), "Automation Fix Sprint");
  assert.equal(getServiceCta("custom-project"), "Custom Project");
  assert.equal(getServiceCta("lead-to-hubspot"), "Lead-to-HubSpot System");
});

test("direct intake routes unknown and duplicate types to an explicit safe state", () => {
  assert.deepEqual(resolveProjectIntakeType(undefined), { formType: "custom-project", unsupported: false });
  assert.deepEqual(resolveProjectIntakeType({}), { formType: "custom-project", unsupported: false });
  for (const type of ["automation-fix-sprint", "custom-project", "lead-to-hubspot", "phone-receptionist"]) {
    assert.deepEqual(resolveProjectIntakeType({ type }), { formType: type, unsupported: false });
  }
  assert.deepEqual(resolveProjectIntakeType({ type: "future-service" }), { formType: null, unsupported: true });
  assert.deepEqual(resolveProjectIntakeType({ type: ["phone-receptionist", "custom-project"] }), { formType: null, unsupported: true });
  assert.deepEqual(resolveProjectIntakeType({ type: "" }), { formType: null, unsupported: true });
});

test("Phone Receptionist attribution degrades safely when sessionStorage is unavailable or corrupt", () => {
  const originalWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
  const installStorage = (storageGetter) => {
    const fakeWindow = {};
    Object.defineProperty(fakeWindow, "sessionStorage", { configurable: true, get: storageGetter });
    Object.defineProperty(globalThis, "window", { configurable: true, value: fakeWindow });
  };

  try {
    installStorage(() => { throw new Error("sessionStorage is disabled"); });
    assert.deepEqual(getCtaContext(), {});
    assert.doesNotThrow(() => saveCtaContext({ cta: "Phone Receptionist" }));

    installStorage(() => ({
      getItem: () => "{invalid json",
      setItem: () => { throw new Error("sessionStorage is read-only"); }
    }));
    const ctaContext = getCtaContext();
    assert.deepEqual(ctaContext, {});
    assert.doesNotThrow(() => saveCtaContext({ cta: "Phone Receptionist" }));
    assert.deepEqual(buildIntakeAnalyticsProperties({
      formType: "phone-receptionist",
      location: { pathname: "/start-project" },
      attribution: {},
      ctaContext
    }), {
      form_type: "phone-receptionist",
      service: "phone-receptionist",
      cta: "Phone Receptionist",
      source_path: "/start-project"
    });

    installStorage(() => ({ getItem: () => "null", setItem: () => {} }));
    assert.deepEqual(getCtaContext(), {});
    assert.doesNotThrow(() => buildIntakeAnalyticsProperties({
      formType: "phone-receptionist",
      location: { pathname: "/start-project" },
      attribution: {},
      ctaContext: getCtaContext()
    }));
  } finally {
    if (originalWindow) Object.defineProperty(globalThis, "window", originalWindow);
    else delete globalThis.window;
  }
});

test("Phone Receptionist project submission forwards explicit type, CTA, and call-handling context", async () => {
  const api = await readFile(apiPath, "utf8");
  const originalFetch = globalThis.fetch;
  const originalWebhook = process.env.N8N_WEBHOOK_URL;
  process.env.N8N_WEBHOOK_URL = "https://n8n.example.invalid/webhook/demand-capture";
  let forwarded;
  globalThis.fetch = async (_url, options) => {
    forwarded = JSON.parse(options.body);
    return new Response(null, { status: 204 });
  };

  try {
    const response = await POST(new Request("http://localhost/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType: "phone-receptionist",
        submission_id: "phone-receptionist-test-01",
        name: "Jamie Example",
        email: "jamie@example.com",
        company: "Example Service Co",
        problem: "After-hours callers reach voicemail.",
        current_state: "Calls are missed when the team is off the clock.",
        desired_state: "Capture caller details and route an agreed next step.",
        systems_tools: "Business phone, CRM, calendar",
        is_broken: "qualify-route",
        timing: "2-4-weeks",
        budget_range: "$1500-$3000",
        page_url: "https://www.stlautomate.com/start-project?type=phone-receptionist",
        landing_page: "https://www.stlautomate.com/services/phone-receptionist"
      })
    }));

    assert.equal(response.status, 200);
    assert.equal(forwarded.form_type, "phone-receptionist");
    assert.equal(forwarded.service, "phone-receptionist");
    assert.equal(forwarded.cta, "Phone Receptionist");
    assert.match(forwarded.message, /Call-handling priority: qualify-route/);
    assert.equal(forwarded.landing_page, "https://www.stlautomate.com/services/phone-receptionist");
    assert.match(api, /"lead-to-hubspot",\s*"phone-receptionist"/);
  } finally {
    globalThis.fetch = originalFetch;
    if (originalWebhook === undefined) delete process.env.N8N_WEBHOOK_URL;
    else process.env.N8N_WEBHOOK_URL = originalWebhook;
  }
});

test("lead API rejects an unexpected form type before forwarding", async () => {
  const originalFetch = globalThis.fetch;
  let called = false;
  globalThis.fetch = async () => {
    called = true;
    return new Response(null, { status: 204 });
  };

  try {
    const response = await POST(new Request("http://localhost/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType: "phone-receptionist-unknown", service: "phone-receptionist" })
    }));
    assert.equal(response.status, 400);
    assert.equal(called, false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
