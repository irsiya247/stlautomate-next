import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const sitemapPath = new URL("../src/app/sitemap.js", import.meta.url);

test("sitemap advertises canonical public routes without duplicates or legacy redirects", async () => {
  const source = await readFile(sitemapPath, "utf8");
  const routesDeclaration = source.match(/const routes = \[([\s\S]*?)\];/);

  assert.ok(routesDeclaration, "sitemap route list should exist");

  const routes = [...routesDeclaration[1].matchAll(/"([^"\\]*(?:\\.[^"\\]*)*)"/g)]
    .map((match) => JSON.parse(`"${match[1]}"`));

  assert.equal(new Set(routes).size, routes.length, "sitemap routes should be unique");
  assert.ok(!routes.includes("/intake"), "/intake is a compatibility redirect, not a sitemap destination");

  for (const route of [
    "/start-project",
    "/fix",
    "/build",
    "/grow",
    "/agent-floor",
    "/services/automation-repair",
    "/services/custom-automation",
    "/services/hubspot-lead-automation",
    "/services/phone-receptionist",
  ]) {
    assert.ok(routes.includes(route), `${route} should remain in the sitemap`);
  }
});
