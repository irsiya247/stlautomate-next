import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
import { test } from "node:test";
import { socialImages, withSocialPreview } from "../src/app/social-preview.mjs";

const routes = [
  ["(site)/page.js", "https://www.stlautomate.com/", socialImages.home],
  ["(site)/services/automation-repair/page.js", "https://www.stlautomate.com/services/automation-repair", socialImages.automationRepair],
  ["(site)/services/hubspot-lead-automation/page.js", "https://www.stlautomate.com/services/hubspot-lead-automation", socialImages.hubspotLeadAutomation],
  ["(site)/services/custom-automation/page.js", "https://www.stlautomate.com/services/custom-automation", socialImages.customAutomation],
];

async function readMetadata(path) {
  const source = await readFile(new URL(`../src/app/${path}`, import.meta.url), "utf8");
  const expression = source.match(/export const metadata\s*=\s*([\s\S]*?);/)[1];
  return vm.runInNewContext(`(${expression})`, { URL, socialImages, withSocialPreview });
}

for (const [path, canonical, image] of routes) {
  test(`${path} has a complete, route-specific social card`, async () => {
    const metadata = await readMetadata(path);
    assert.equal(metadata.alternates.canonical, canonical);
    assert.equal(metadata.openGraph.url, canonical);
    assert.equal(metadata.openGraph.title, metadata.title);
    assert.equal(metadata.openGraph.description, metadata.description);
    assert.equal(metadata.openGraph.siteName, "STL Automate");
    assert.equal(metadata.openGraph.type, "website");
    assert.equal(metadata.openGraph.images.length, 1);
    assert.equal(metadata.openGraph.images[0], image);
    assert.equal(metadata.twitter.card, "summary_large_image");
    assert.equal(metadata.twitter.title, metadata.title);
    assert.equal(metadata.twitter.description, metadata.description);
    assert.equal(metadata.twitter.images[0], image);
  });
}

test("root supplies the branded fallback without setting other routes' canonical URL", async () => {
  const metadata = await readMetadata("layout.js");
  assert.equal(metadata.metadataBase.href, "https://www.stlautomate.com/");
  assert.equal(metadata.openGraph.images[0], socialImages.home);
  assert.equal(metadata.twitter.images[0], socialImages.home);
  assert.equal(metadata.twitter.card, "summary_large_image");
  assert.equal(metadata.openGraph.url, undefined);
  assert.equal(metadata.alternates, undefined);
});

test("all card assets are tracked-path opaque PNGs at 1200 by 630", async () => {
  const paths = new Set();
  for (const image of Object.values(socialImages)) {
    assert.match(image.url, /^\/og\/[a-z-]+-v1\.png$/);
    assert.equal(image.width, 1200);
    assert.equal(image.height, 630);
    assert.equal(image.type, "image/png");
    assert.match(image.alt, /^STL Automate/);
    assert.ok(image.alt.length < 200);
    assert.ok(!paths.has(image.url));
    paths.add(image.url);
    const png = await readFile(new URL(`../public${image.url}`, import.meta.url));
    assert.equal(png.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    assert.equal(png.readUInt32BE(16), 1200);
    assert.equal(png.readUInt32BE(20), 630);
    assert.equal(png[25], 2, "expected opaque RGB");
    assert.ok(png.length < 500_000);
  }
});
