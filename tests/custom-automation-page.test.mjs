import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import {
  buildCtaAttribution,
  buildIntakeAnalyticsProperties,
  getCtaContext,
  saveCtaContext
} from "../src/app/components/attribution.mjs";

const routePath = new URL("../src/app/(site)/services/custom-automation/page.js", import.meta.url);
const sitemapPath = new URL("../src/app/sitemap.js", import.meta.url);
const homePath = new URL("../src/app/(site)/page.js", import.meta.url);
const servicesPath = new URL("../src/app/(site)/services/page.js", import.meta.url);
const repairPath = new URL("../src/app/(site)/services/automation-repair/page.js", import.meta.url);
const startProjectPath = new URL("../src/app/(site)/start-project/page.js", import.meta.url);
const intakeFormPath = new URL("../src/app/components/ProjectIntakeForm.js", import.meta.url);

test("custom automation route exists with targeted metadata, canonical, and key sections", async () => {
  const source = await readFile(routePath, "utf8");

  assert.match(source, /title: "Custom Workflow & Business Process Automation \| STL Automate"/);
  assert.match(source, /description:[\s\S]*?custom business process automation, workflow automation, and system integrations/);
  assert.match(source, /canonical: "https:\/\/www\.stlautomate\.com\/services\/custom-automation"/);
  for (const section of ["What we automate", "Relevant work and systems", "What a custom project includes", "How custom scoping works", "What helps us scope it", "Choose the right starting point", "Custom project questions"]) {
    assert.ok(source.includes(section), `missing section: ${section}`);
  }
  assert.ok(source.includes("/automation-fix-sprint#upwork-review"));
  assert.ok(source.includes("/services#sdr"));
  assert.ok(source.includes("/services#vapi"));
  assert.ok(source.includes("/services#receptionist"));
  assert.doesNotMatch(source, /Twilio/);
});

test("custom automation route appears in sitemap and relevant pages link to it", async () => {
  const [sitemap, home, services, repair, startProject] = await Promise.all([
    readFile(sitemapPath, "utf8"),
    readFile(homePath, "utf8"),
    readFile(servicesPath, "utf8"),
    readFile(repairPath, "utf8"),
    readFile(startProjectPath, "utf8")
  ]);

  assert.match(sitemap, /"\/services\/custom-automation"/);
  assert.match(home, /href="\/services\/custom-automation"/);
  assert.match(services, /href="\/services\/custom-automation"/);
  assert.match(repair, /href="\/services\/custom-automation"/);
  assert.match(startProject, /href="\/services\/custom-automation"/);
});

test("custom project CTA attribution bridges into the existing intake event", async () => {
  const [page, intakeForm] = await Promise.all([
    readFile(routePath, "utf8"),
    readFile(intakeFormPath, "utf8")
  ]);
  const values = new Map();
  const storage = {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value)
  };
  const sourceLocation = {
    pathname: "/services/custom-automation",
    href: "https://www.stlautomate.com/services/custom-automation?utm_source=partner&utm_campaign=custom"
  };
  const click = buildCtaAttribution({
    href: "/start-project?type=custom-project",
    placement: "custom_automation_hero",
    cta: "Custom Project",
    location: sourceLocation
  });
  saveCtaContext(click, storage);

  assert.match(page, /const projectHref = "\/start-project\?type=custom-project"/);
  assert.match(page, /placement="custom_automation_hero"/);
  assert.match(page, /placement="custom_automation_footer"/);
  assert.match(page, /cta="Custom Project"/);
  assert.match(intakeForm, /formType = "custom-project"/);
  assert.match(intakeForm, /fetch\("\/api\/lead"/);

  assert.deepEqual(click, {
    source_path: "/services/custom-automation",
    source_url: sourceLocation.href,
    placement: "custom_automation_hero",
    destination: "/start-project?type=custom-project",
    service: "custom-project",
    form_type: "custom-project",
    cta: "Custom Project"
  });

  const event = buildIntakeAnalyticsProperties({
    formType: "custom-project",
    location: { pathname: "/start-project" },
    attribution: {
      referrer: sourceLocation.href,
      utm_source: "partner",
      utm_campaign: "custom"
    },
    ctaContext: getCtaContext(storage)
  });

  assert.deepEqual(event, {
    form_type: "custom-project",
    service: "custom-project",
    cta: "Custom Project",
    source_path: "/start-project",
    origin_path: "/services/custom-automation",
    origin_url: sourceLocation.href,
    destination: "/start-project?type=custom-project",
    placement: "custom_automation_hero",
    referrer: sourceLocation.href,
    utm_source: "partner",
    utm_campaign: "custom"
  });
});
