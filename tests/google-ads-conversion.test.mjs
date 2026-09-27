import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import {
  GOOGLE_ADS_ID,
  GOOGLE_ADS_SEND_TO,
  initializeGoogleAdsTag,
  trackAcceptedProjectIntakeConversion
} from "../src/app/components/google-ads-conversion.mjs";

const formPath = new URL("../src/app/components/ProjectIntakeForm.js", import.meta.url);
const layoutPath = new URL("../src/app/layout.js", import.meta.url);
const instrumentationPath = new URL("../src/instrumentation-client.js", import.meta.url);

function makeTarget() {
  const calls = [];
  return {
    calls,
    gtag: (...args) => calls.push(args)
  };
}

test("sitewide Google tag configures the Ads ID once", async () => {
  const target = { dataLayer: [] };
  assert.equal(initializeGoogleAdsTag(target), true);
  assert.equal(initializeGoogleAdsTag(target), false);
  assert.deepEqual(target.dataLayer.map((args) => Array.from(args, (value) => value instanceof Date ? "date" : value)), [
    ["js", "date"],
    ["config", GOOGLE_ADS_ID]
  ]);

  const [layout, instrumentation] = await Promise.all([
    readFile(layoutPath, "utf8"),
    readFile(instrumentationPath, "utf8")
  ]);
  assert.equal((layout.match(/id="google-ads-gtag-loader"/g) || []).length, 1);
  assert.match(layout, /googletagmanager\.com\/gtag\/js\?id=AW-18477400140/);
  assert.match(instrumentation, /initializeGoogleAdsTag\(window\)/);
});

test("accepted supported intakes send one minimal conversion event", () => {
  const target = makeTarget();
  const formTypes = [
    "automation-fix-sprint",
    "custom-project",
    "lead-to-hubspot",
    "phone-receptionist"
  ];

  for (const [index, formType] of formTypes.entries()) {
    assert.equal(trackAcceptedProjectIntakeConversion({
      response: { ok: true },
      result: { success: true },
      formType,
      submissionId: `00000000-0000-4000-8000-${String(index + 1).padStart(12, "0")}`,
      target
    }), true);
  }

  assert.equal(target.calls.length, formTypes.length);
  for (const call of target.calls) {
    assert.deepEqual(call, ["event", "conversion", { send_to: GOOGLE_ADS_SEND_TO }]);
    assert.equal("value" in call[2], false);
    assert.equal("currency" in call[2], false);
  }
  assert.equal(GOOGLE_ADS_ID, "AW-18477400140");
});

test("failure, unsuccessful responses, and unsupported types never convert", () => {
  const target = makeTarget();
  const common = { formType: "custom-project", submissionId: "failure-case-0001", target };

  assert.equal(trackAcceptedProjectIntakeConversion({ ...common, response: { ok: false }, result: { success: true } }), false);
  assert.equal(trackAcceptedProjectIntakeConversion({ ...common, response: undefined, result: { success: true } }), false);
  assert.equal(trackAcceptedProjectIntakeConversion({ ...common, response: { ok: true }, result: { success: false } }), false);
  assert.equal(trackAcceptedProjectIntakeConversion({ ...common, formType: "future-service", response: { ok: true }, result: { success: true } }), false);
  assert.equal(target.calls.length, 0);

  assert.equal(trackAcceptedProjectIntakeConversion({ ...common, response: { ok: true }, result: { success: true } }), true);
  assert.equal(target.calls.length, 1);
});

test("missing or throwing gtag cannot throw into the intake and retries stay deduplicated", () => {
  const accepted = { response: { ok: true }, result: { success: true }, formType: "custom-project", submissionId: "throw-case-0001" };
  assert.doesNotThrow(() => trackAcceptedProjectIntakeConversion());
  assert.doesNotThrow(() => trackAcceptedProjectIntakeConversion(null));
  assert.doesNotThrow(() => trackAcceptedProjectIntakeConversion({ ...accepted, target: {} }));

  let attempts = 0;
  const throwingTarget = { gtag: () => { attempts += 1; throw new Error("blocked analytics"); } };
  assert.doesNotThrow(() => trackAcceptedProjectIntakeConversion({ ...accepted, target: throwingTarget }));
  assert.doesNotThrow(() => trackAcceptedProjectIntakeConversion({ ...accepted, target: throwingTarget }));
  assert.equal(attempts, 1);
});

test("tag initialization failures and unavailable browser storage are harmless", () => {
  const brokenTarget = {};
  Object.defineProperty(brokenTarget, "dataLayer", {
    get() { throw new Error("blocked storage"); }
  });
  assert.doesNotThrow(() => initializeGoogleAdsTag(brokenTarget));

  const target = makeTarget();
  assert.equal(trackAcceptedProjectIntakeConversion({
    response: { ok: true },
    result: { success: true },
    formType: "custom-project",
    submissionId: "storage-case-0001",
    target
  }), true);
  assert.deepEqual(target.calls[0], ["event", "conversion", { send_to: GOOGLE_ADS_SEND_TO }]);
});

test("same submission ID is deduplicated while a later distinct submission can convert", () => {
  const target = makeTarget();
  const accepted = { response: { ok: true }, result: { success: true }, formType: "custom-project", target };

  assert.equal(trackAcceptedProjectIntakeConversion({ ...accepted, submissionId: "dedupe-case-0001" }), true);
  assert.equal(trackAcceptedProjectIntakeConversion({ ...accepted, submissionId: "dedupe-case-0001" }), false);
  assert.equal(trackAcceptedProjectIntakeConversion({ ...accepted, submissionId: "dedupe-case-0002" }), true);
  assert.equal(target.calls.length, 2);
});

test("form sends Ads and PostHog events only after API acceptance using the request UUID", async () => {
  const [form] = await Promise.all([readFile(formPath, "utf8")]);
  const acceptedCheck = form.indexOf("if (!response.ok || !result.success)");
  const conversionCall = form.indexOf("trackAcceptedProjectIntakeConversion({");
  const posthogCall = form.indexOf('posthog.capture("lead_intake_submitted"');
  const successState = form.indexOf('setStatus("success")', conversionCall);
  const catchStart = form.indexOf("} catch {", conversionCall);

  assert.ok(acceptedCheck >= 0 && conversionCall > acceptedCheck);
  assert.ok(posthogCall > acceptedCheck);
  assert.ok(successState > conversionCall);
  assert.equal(catchStart >= 0 && form.slice(catchStart).includes("trackAcceptedProjectIntakeConversion({"), false);
  assert.match(form, /if \(submissionLockRef\.current\) return/);
  assert.ok(form.indexOf("submissionLockRef.current = true") < form.indexOf('fetch("/api/lead"'));
  assert.match(form, /const submissionId = window\.crypto\.randomUUID\(\)/);
  assert.match(form, /submission_id: submissionId/);
  assert.match(form, /submissionId\s*\n\s*\}/);
  assert.match(form, /name="email"[^\n]*required/);
  assert.match(form, /name="problem"[^\n]*required/);
  assert.match(form, /const result = await response\.json\(\)\.catch\(\(\) => \(\{ success: false \}\)\)/);
});
