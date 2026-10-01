import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { buildCtaAttribution } from "../src/app/components/attribution.mjs";
import { buildLegacyIntakeRedirect } from "../src/app/components/legacy-intake-redirect.mjs";

const homePath = new URL("../src/app/(site)/page.js", import.meta.url);
const siteLayoutPath = new URL("../src/app/(site)/layout.js", import.meta.url);
const intakePath = new URL("../src/app/(site)/intake/page.js", import.meta.url);
const intakeFormPath = new URL("../src/app/components/ProjectIntakeForm.js", import.meta.url);
const servicePaths = [
  ["../src/app/(site)/services/automation-repair/page.js", '"/start-project?type=automation-fix-sprint"'],
  ["../src/app/(site)/services/custom-automation/page.js", '"/start-project?type=custom-project"'],
  ["../src/app/(site)/services/hubspot-lead-automation/page.js", '"/start-project?type=lead-to-hubspot"'],
  ["../src/app/(site)/services/phone-receptionist/page.js", '"/start-project?type=phone-receptionist"']
];

test("homepage acquisition CTAs use tracked custom-project intake with unique placements", async () => {
  const source = await readFile(homePath, "utf8");
  assert.match(source, /import TrackedLink from "\.\.\/components\/TrackedLink"/);
  assert.doesNotMatch(source, /href="\/intake(?:["?])/);

  const placements = [...source.matchAll(/placement="([^"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(placements, ["homepage_hero_custom_project", "homepage_footer_custom_project"]);

  const links = source.match(/<TrackedLink href="\/start-project\?type=custom-project"[^>]+cta="Custom Project"/g) || [];
  assert.equal(links.length, 2);
  assert.equal(buildCtaAttribution({
    href: "/start-project?type=custom-project",
    placement: "homepage_hero_custom_project",
    cta: "Custom Project",
    location: { href: "https://www.stlautomate.com/", pathname: "/" }
  }).destination, "/start-project?type=custom-project");
});

test("footer consultation CTA uses the tracked canonical custom-project intake", async () => {
  const source = await readFile(siteLayoutPath, "utf8");
  assert.match(source, /import TrackedLink from "\.\.\/components\/TrackedLink"/);
  assert.doesNotMatch(source, /href="\/intake(?:["?])/);
  assert.match(source, /<TrackedLink href="\/start-project\?type=custom-project" placement="footer_consultation_custom_project" cta="Custom Project"[^>]*>Free Consultation<\/TrackedLink>/);
});

test("legacy intake route redirects to the existing custom form and preserves approved attribution parameters", async () => {
  const source = await readFile(intakePath, "utf8");
  assert.match(source, /import \{ redirect \} from "next\/navigation"/);
  assert.match(source, /const query = await searchParams/);
  assert.match(source, /redirect\(buildLegacyIntakeRedirect\(query\)\)/);
  assert.doesNotMatch(source, /fetch\(['"]\/api\/lead/);

  const destination = new URL(buildLegacyIntakeRedirect({
    utm_source: "newsletter",
    utm_medium: "email",
    utm_campaign: "fall-launch",
    utm_term: "automation",
    utm_content: "footer",
    gclid: "google-click-id",
    fbclid: "facebook-click-id",
    formType: "intake",
    lane: "build"
  }), "https://www.stlautomate.com");

  assert.equal(destination.pathname, "/start-project");
  assert.equal(destination.searchParams.get("type"), "custom-project");
  for (const [key, value] of Object.entries({
    utm_source: "newsletter",
    utm_medium: "email",
    utm_campaign: "fall-launch",
    utm_term: "automation",
    utm_content: "footer",
    gclid: "google-click-id",
    fbclid: "facebook-click-id"
  })) {
    assert.equal(destination.searchParams.get(key), value, `${key} was not preserved`);
  }
  assert.equal(destination.searchParams.has("formType"), false);
  assert.equal(destination.searchParams.has("lane"), false);
  assert.equal(buildLegacyIntakeRedirect(), "/start-project?type=custom-project");
});

test("existing service offer destinations, intake event, and Ads conversion contract remain intact", async () => {
  const [serviceSources, intakeForm] = await Promise.all([
    Promise.all(servicePaths.map(async ([path, href]) => [await readFile(new URL(path, import.meta.url), "utf8"), href])),
    readFile(intakeFormPath, "utf8")
  ]);

  for (const [source, href] of serviceSources) assert.ok(source.includes(href), `missing existing offer destination ${href}`);
  assert.match(intakeForm, /posthog\.capture\("lead_intake_submitted"/);
  assert.match(intakeForm, /trackAcceptedProjectIntakeConversion\(/);
});
