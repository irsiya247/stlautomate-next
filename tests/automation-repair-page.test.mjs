import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const routePath = new URL("../src/app/(site)/services/automation-repair/page.js", import.meta.url);
const sitemapPath = new URL("../src/app/sitemap.js", import.meta.url);

test("automation repair landing page has focused metadata, canonical URL, and sprint CTAs", async () => {
  const source = await readFile(routePath, "utf8");

  assert.match(source, /title: "Automation Repair for Broken Workflows \| STL Automate"/);
  assert.match(source, /description:[\s\S]*?broken n8n, Zapier, or Make workflow/);
  assert.match(source, /canonical: "https:\/\/www\.stlautomate\.com\/services\/automation-repair"/);
  assert.equal((source.match(/href=\{bookingHref\}/g) ?? []).length, 2);
  assert.match(source, /const bookingHref = "\/start-project\?type=automation-fix-sprint"/);
  assert.match(source, /placement="automation_repair_hero"/);
  assert.match(source, /placement="automation_repair_footer"/);
  assert.match(source, /starts at <strong className="text-white">\$750<\/strong>/);
});

test("automation repair route appears in the sitemap", async () => {
  const sitemap = await readFile(sitemapPath, "utf8");
  assert.match(sitemap, /"\/services\/automation-repair"/);
});
