import assert from "node:assert/strict";
import { test } from "node:test";
import { buildCtaAttribution, buildIntakeAnalyticsProperties, getCtaContext, saveCtaContext } from "../src/app/components/attribution.mjs";

test("repair CTA context survives navigation and enriches the later intake event", () => {
  const values = new Map();
  const storage = {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value)
  };
  const sourceLocation = { pathname: "/services/automation-repair", href: "https://www.stlautomate.com/services/automation-repair?utm_source=campaign" };
  const click = buildCtaAttribution({
    href: "/start-project?type=automation-fix-sprint",
    placement: "automation_repair_hero",
    cta: "Automation Fix Sprint",
    location: sourceLocation
  });
  saveCtaContext(click, storage);

  assert.deepEqual(getCtaContext(storage), click);
  assert.deepEqual(click, {
    source_path: "/services/automation-repair",
    source_url: sourceLocation.href,
    placement: "automation_repair_hero",
    destination: "/start-project?type=automation-fix-sprint",
    service: "automation-fix-sprint",
    form_type: "automation-fix-sprint",
    cta: "Automation Fix Sprint"
  });

  const event = buildIntakeAnalyticsProperties({
    formType: "automation-fix-sprint",
    location: { pathname: "/start-project" },
    attribution: { referrer: sourceLocation.href, utm_source: "campaign", utm_campaign: "repair" },
    ctaContext: getCtaContext(storage)
  });
  assert.deepEqual(event, {
    form_type: "automation-fix-sprint",
    service: "automation-fix-sprint",
    cta: "Automation Fix Sprint",
    source_path: "/start-project",
    origin_path: "/services/automation-repair",
    origin_url: sourceLocation.href,
    destination: "/start-project?type=automation-fix-sprint",
    placement: "automation_repair_hero",
    referrer: sourceLocation.href,
    utm_source: "campaign",
    utm_campaign: "repair"
  });
});
