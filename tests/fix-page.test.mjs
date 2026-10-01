import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const routePath = new URL("../src/app/(site)/fix/page.js", import.meta.url);

test("FIX landing page routes paid traffic through tracked Automation Fix Sprint intake", async () => {
  const source = await readFile(routePath, "utf8");

  assert.match(source, /import TrackedLink/);
  assert.match(source, /const bookingHref = "\/start-project\?type=automation-fix-sprint"/);
  assert.match(source, /href=\{bookingHref\}/);
  assert.match(source, /placement="fix_hero"/);
  assert.match(source, /cta="Automation Fix Sprint"/);
  assert.doesNotMatch(source, /\/intake\?formType=intake/);
});
