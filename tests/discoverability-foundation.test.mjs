import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const source = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("root provides accurate site and organization structured data without invented local business details", async () => {
  const layout = await source("../src/app/layout.js");
  assert.match(layout, /metadataBase: new URL\("https:\/\/www\.stlautomate\.com"\)/);
  assert.match(layout, /"@type": "Organization"/);
  assert.match(layout, /"@type": "WebSite"/);
  assert.match(layout, /name: "STL Automate"/);
  assert.match(layout, /legalName: "STL Automate LLC"/);
  assert.match(layout, /name: "St\. Louis"/);
  assert.match(layout, /type="application\/ld\+json"/);
  assert.doesNotMatch(layout, /streetAddress|telephone:|sameAs:|aggregateRating/);
});

test("homepage and services have descriptive canonical metadata and current service paths", async () => {
  const [home, services] = await Promise.all([
    source("../src/app/(site)/page.js"),
    source("../src/app/(site)/services/page.js"),
  ]);
  assert.match(home, /title: "Business Automation Services in St\. Louis \| STL Automate"/);
  assert.match(home, /canonical: "https:\/\/www\.stlautomate\.com\/"/);
  assert.match(services, /title: "Business Automation Services in St\. Louis \| STL Automate"/);
  assert.match(services, /canonical: "https:\/\/www\.stlautomate\.com\/services"/);
  for (const path of [
    "/services/automation-repair",
    "/services/hubspot-lead-automation",
    "/services/phone-receptionist",
    "/services/custom-automation",
  ]) assert.ok(services.includes(path), `missing service link ${path}`);
  for (const price of ["$750", "$1,500", "$2,500"]) assert.ok(services.includes(price));
  assert.doesNotMatch(services, /AI SDR|Receptionist Suite|\/intake|proactively|one to two weeks/i);
});

test("FAQ gives concise, current answers and keeps answers in server-rendered source", async () => {
  const faq = await source("../src/app/(site)/faq/page.js");
  assert.match(faq, /canonical: "https:\/\/www\.stlautomate\.com\/faq"/);
  assert.match(faq, /What does a project cost\?/);
  assert.match(faq, /Can you repair or extend an automation we already use\?/);
  assert.match(faq, /How should I share access or sensitive information\?/);
  assert.match(faq, /<details className=/);
  assert.match(faq, /<summary className=/);
  assert.doesNotMatch(faq, /"use client"/);
  assert.match(faq, /\/start-project\?type=custom-project/);
  assert.doesNotMatch(faq, /one to two weeks|monthly retainer|proactively|most callers don't know|fraction of what you'd pay/i);
});

test("global footer links to current service routes rather than retired service anchors", async () => {
  const layout = await source("../src/app/(site)/layout.js");
  for (const path of [
    "/services/automation-repair",
    "/services/hubspot-lead-automation",
    "/services/phone-receptionist",
    "/services/custom-automation",
  ]) assert.ok(layout.includes(path), `missing footer link ${path}`);
  assert.doesNotMatch(layout, /\/services#(?:receptionist|vapi|sdr)/);
});
