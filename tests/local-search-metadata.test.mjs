import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const homePath = new URL("../src/app/layout.js", import.meta.url);
const pages = [
  {
    path: "../src/app/(site)/services/automation-repair/page.js",
    title: "Workflow Automation Repair in St. Louis | STL Automate",
    description: "Repair broken n8n, Zapier, or Make workflows, webhooks, APIs, and HubSpot handoffs with STL Automate in St. Louis or remotely. Focused repair sprint starts at $750.",
    canonical: "https://www.stlautomate.com/services/automation-repair",
    intake: "/start-project?type=automation-fix-sprint",
    eyebrow: "Automation repair · St. Louis and remote"
  },
  {
    path: "../src/app/(site)/services/custom-automation/page.js",
    title: "Custom Automation in St. Louis | STL Automate",
    description: "Custom business process automation and system integrations for St. Louis businesses and remote teams. STL Automate scopes, builds, tests, and hands off workflows.",
    canonical: "https://www.stlautomate.com/services/custom-automation",
    intake: "/start-project?type=custom-project",
    eyebrow: "Custom automation · St. Louis and remote"
  },
  {
    path: "../src/app/(site)/services/hubspot-lead-automation/page.js",
    title: "HubSpot Lead Automation in St. Louis | STL Automate",
    description: "Build a reliable website-to-HubSpot lead path with field mapping, duplicate protection, testing, and handoff. STL Automate serves St. Louis and remote teams.",
    canonical: "https://www.stlautomate.com/services/hubspot-lead-automation",
    intake: "/start-project?type=lead-to-hubspot",
    eyebrow: "Lead capture and HubSpot routing"
  },
  {
    path: "../src/app/(site)/services/phone-receptionist/page.js",
    title: "Phone Receptionist in St. Louis | STL Automate",
    description: "A scoped Phone Receptionist for missed-call follow-up and lead capture, serving St. Louis businesses and remote teams. Includes agreed routing, testing, and handoff.",
    canonical: "https://www.stlautomate.com/services/phone-receptionist",
    intake: "/start-project?type=phone-receptionist",
    eyebrow: "Phone Receptionist · St. Louis and remote"
  }
];

test("homepage metadata leads with business automation, St. Louis, and custom work", async () => {
  const source = await readFile(homePath, "utf8");
  assert.match(source, /title: "Business Automation Services in St\. Louis \| STL Automate"/);
  assert.match(source, /description: "Custom business automation for St\. Louis businesses and remote teams, plus workflow repair, lead systems, and Phone Receptionist services\."/);
});

test("monitored service pages add natural St. Louis and remote relevance without changing their offers", async () => {
  for (const page of pages) {
    const source = await readFile(new URL(page.path, import.meta.url), "utf8");
    assert.ok(source.includes(`title:"${page.title}"`) || source.includes(`title: "${page.title}"`), `title mismatch for ${page.path}`);
    assert.ok(source.includes(page.description), `description mismatch for ${page.path}`);
    assert.ok(source.includes(page.canonical), `canonical changed for ${page.path}`);
    assert.ok(source.includes(page.intake), `intake destination changed for ${page.path}`);
    assert.ok(source.includes(page.eyebrow), `expected existing-page location cue missing for ${page.path}`);
    assert.match(page.description, /St\. Louis/);
    assert.match(page.description, /remote|remotely/);
  }

  const phone = await readFile(new URL(pages[3].path, import.meta.url), "utf8");
  assert.doesNotMatch(pages[3].title + pages[3].description, /AI receptionist/i);
  for (const [path, price] of [
    [pages[0].path, "$750"],
    [pages[2].path, "$1,500"],
    [pages[3].path, "$2,500"]
  ]) {
    assert.ok((await readFile(new URL(path, import.meta.url), "utf8")).includes(price));
  }
  assert.ok(phone.includes("/start-project?type=phone-receptionist"));
});
