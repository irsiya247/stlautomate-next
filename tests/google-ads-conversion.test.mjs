import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import {
  GOOGLE_ADS_CONSENT_STORAGE_KEY,
  GOOGLE_ADS_ID,
  GOOGLE_ADS_SEND_TO,
  enableGoogleAdsMeasurement,
  initializeGoogleAdsTag,
  readGoogleAdsConsent,
  saveGoogleAdsConsent,
  trackAcceptedProjectIntakeConversion,
  updateGoogleAdsConsent
} from "../src/app/components/google-ads-conversion.mjs";

const formPath = new URL("../src/app/components/ProjectIntakeForm.js", import.meta.url);
const layoutPath = new URL("../src/app/layout.js", import.meta.url);
const managerPath = new URL("../src/app/components/GoogleAdsConsentManager.js", import.meta.url);
const siteLayoutPath = new URL("../src/app/(site)/layout.js", import.meta.url);
const instrumentationPath = new URL("../src/instrumentation-client.js", import.meta.url);
const privacyPath = new URL("../src/app/(site)/privacy/page.js", import.meta.url);

function makeStorage() {
  const values = new Map();
  return {
    values,
    getItem(key) { return values.get(key) ?? null; },
    setItem(key, value) { values.set(key, String(value)); },
    removeItem(key) { values.delete(key); }
  };
}

function makeTarget() {
  const calls = [];
  return {
    calls,
    dataLayer: [],
    gtag(...args) { calls.push(args); }
  };
}

function makeInitializedTarget() {
  const target = makeTarget();
  assert.equal(initializeGoogleAdsTag(target, true), true);
  return target;
}

test("Google tag remains consent-gated and is not initialized by general client startup", async () => {
  const target = { dataLayer: [] };
  assert.equal(initializeGoogleAdsTag(target, false), false);
  assert.equal(typeof target.gtag, "undefined");
  assert.equal(trackAcceptedProjectIntakeConversion({
    response: { ok: true }, result: { success: true }, formType: "custom-project",
    submissionId: "no-consent-0001", target
  }), false);

  const [layout, manager, instrumentation, siteLayout] = await Promise.all([
    readFile(layoutPath, "utf8"),
    readFile(managerPath, "utf8"),
    readFile(instrumentationPath, "utf8"),
    readFile(siteLayoutPath, "utf8")
  ]);
  assert.match(layout, /<GoogleAdsConsentManager\s*\/>/);
  assert.doesNotMatch(layout, /googletagmanager\.com\/gtag\/js/);
  assert.match(manager, /decision === "granted" &&\s*\(/);
  assert.match(manager, /googletagmanager\.com\/gtag\/js/);
  assert.doesNotMatch(instrumentation, /initializeGoogleAdsTag/);
  assert.match(instrumentation, /posthog\.init\(/);
  assert.match(instrumentation, /disable_session_recording: true/);
  assert.match(siteLayout, /GoogleAdsPrivacyChoicesButton/);
  assert.equal(GOOGLE_ADS_ID, "AW-18477400140");
});

test("saved choices persist for six calendar months and expire safely", () => {
  const storage = makeStorage();
  const now = new Date(2026, 0, 31, 12).getTime();

  assert.equal(saveGoogleAdsConsent(storage, "granted", now), true);
  const saved = JSON.parse(storage.values.get(GOOGLE_ADS_CONSENT_STORAGE_KEY));
  assert.equal(saved.decision, "granted");
  assert.equal(saved.expiresAt, new Date(2026, 6, 31, 12).getTime());
  assert.equal(readGoogleAdsConsent(storage, saved.expiresAt - 1), "granted");
  assert.equal(readGoogleAdsConsent(storage, saved.expiresAt), null);
  assert.equal(storage.values.has(GOOGLE_ADS_CONSENT_STORAGE_KEY), false);

  assert.equal(saveGoogleAdsConsent(storage, "denied", now), true);
  assert.equal(readGoogleAdsConsent(storage, now), "denied");
  assert.equal(saveGoogleAdsConsent(storage, "unknown", now), false);
});

test("malformed, stale, or unavailable storage fails closed", () => {
  const storage = makeStorage();
  storage.setItem(GOOGLE_ADS_CONSENT_STORAGE_KEY, "not-json");
  assert.equal(readGoogleAdsConsent(storage), null);
  assert.equal(storage.values.has(GOOGLE_ADS_CONSENT_STORAGE_KEY), false);

  assert.equal(readGoogleAdsConsent(null), null);
  assert.equal(saveGoogleAdsConsent(null, "granted"), false);
  assert.equal(saveGoogleAdsConsent({ setItem() { throw new Error("blocked"); } }, "granted"), false);
});

test("consent defaults and updates precede config, with personalization and analytics denied", () => {
  const target = {};
  assert.equal(initializeGoogleAdsTag(target, true), true);
  assert.equal(initializeGoogleAdsTag(target, true), true);
  const commands = target.dataLayer.map((args) => Array.from(args, (value) => value instanceof Date ? "date" : value));
  assert.deepEqual(commands[0], ["consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied"
  }]);
  assert.deepEqual(commands[1], ["consent", "update", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "denied",
    analytics_storage: "denied"
  }]);
  assert.deepEqual(commands[2], ["js", "date"]);
  assert.deepEqual(commands[3], ["config", GOOGLE_ADS_ID]);
  assert.equal(commands.length, 4);
});

test("decline and withdrawal update all four signals and block later conversions", () => {
  const target = makeInitializedTarget();
  const accepted = {
    response: { ok: true }, result: { success: true }, formType: "custom-project",
    submissionId: "withdrawal-case-0001", target
  };

  assert.equal(updateGoogleAdsConsent(target, "denied"), true);
  assert.deepEqual(target.calls.at(-1), ["consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied"
  }]);
  assert.equal(trackAcceptedProjectIntakeConversion(accepted), false);

  assert.equal(enableGoogleAdsMeasurement(target), true);
  assert.equal(trackAcceptedProjectIntakeConversion(accepted), true);
  assert.deepEqual(target.calls.at(-1), ["event", "conversion", { send_to: GOOGLE_ADS_SEND_TO }]);
});

test("accepted supported intakes send only the conversion destination and no lead fields", () => {
  const target = makeInitializedTarget();
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

  const conversionCalls = target.calls.filter(([kind, name]) => kind === "event" && name === "conversion");
  assert.equal(conversionCalls.length, formTypes.length);
  for (const call of conversionCalls) {
    assert.deepEqual(call, ["event", "conversion", { send_to: GOOGLE_ADS_SEND_TO }]);
    assert.equal("value" in call[2], false);
    assert.equal("currency" in call[2], false);
    assert.equal(Object.keys(call[2]).some((key) => /email|phone|name|company|message|problem/i.test(key)), false);
  }
});

test("failed API responses and unsupported types never convert", () => {
  const target = makeInitializedTarget();
  const accepted = { formType: "custom-project", submissionId: "failure-case-0001", target };
  const setupCalls = target.calls.length;

  assert.equal(trackAcceptedProjectIntakeConversion({ ...accepted, response: { ok: false }, result: { success: true } }), false);
  assert.equal(trackAcceptedProjectIntakeConversion({ ...accepted, response: undefined, result: { success: true } }), false);
  assert.equal(trackAcceptedProjectIntakeConversion({ ...accepted, response: { ok: true }, result: { success: false } }), false);
  assert.equal(trackAcceptedProjectIntakeConversion({ ...accepted, formType: "future-service", response: { ok: true }, result: { success: true } }), false);
  assert.equal(target.calls.length, setupCalls);

  assert.equal(trackAcceptedProjectIntakeConversion({ ...accepted, response: { ok: true }, result: { success: true } }), true);
  assert.equal(target.calls.length, setupCalls + 1);
});

test("missing or throwing gtag cannot throw into the accepted intake", () => {
  assert.doesNotThrow(() => trackAcceptedProjectIntakeConversion());
  assert.doesNotThrow(() => trackAcceptedProjectIntakeConversion(null));
  assert.doesNotThrow(() => initializeGoogleAdsTag({}, true));

  const target = makeInitializedTarget();
  target.gtag = () => { throw new Error("blocked analytics"); };
  assert.doesNotThrow(() => trackAcceptedProjectIntakeConversion({
    response: { ok: true }, result: { success: true }, formType: "custom-project",
    submissionId: "throw-case-0001", target
  }));
});

test("same request ID is deduplicated while a later distinct submission can convert", () => {
  const target = makeInitializedTarget();
  const accepted = { response: { ok: true }, result: { success: true }, formType: "custom-project", target };

  assert.equal(trackAcceptedProjectIntakeConversion({ ...accepted, submissionId: "dedupe-case-0001" }), true);
  assert.equal(trackAcceptedProjectIntakeConversion({ ...accepted, submissionId: "dedupe-case-0001" }), false);
  assert.equal(trackAcceptedProjectIntakeConversion({ ...accepted, submissionId: "dedupe-case-0002" }), true);
  assert.equal(target.calls.filter(([kind, name]) => kind === "event" && name === "conversion").length, 2);
});

test("form keeps API success as the event boundary and preserves PostHog attribution", async () => {
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

test("first-layer notice clearly scopes the choice and links to Google data information", async () => {
  const manager = await readFile(managerPath, "utf8");
  assert.match(manager, /Google Ads measurement may use cookies or similar identifiers/);
  assert.match(manager, /result in project inquiries/);
  assert.match(manager, /does not include form-field content/);
  assert.match(manager, /This choice only controls Google Ads measurement; PostHog site analytics remains separate/);
  assert.match(manager, /Allow Google Ads measurement/);
  assert.match(manager, />\s*Decline\s*</);
  assert.match(manager, /https:\/\/business\.safety\.google\/privacy\//);
  assert.match(manager, /https:\/\/business\.safety\.google\/privacy\/.*target="_blank"/s);
  assert.match(manager, /Google Ads measurement choices/);
});

test("privacy notice describes the choice, scope, retention, and withdrawal behavior accurately", async () => {
  const privacy = await readFile(privacyPath, "utf8");
  assert.match(privacy, /Google Ads conversion measurement/);
  assert.match(privacy, /up to six months/);
  assert.match(privacy, /six-month period is our browser-storage setting/);
  assert.match(privacy, /change or withdraw your Google Ads measurement choice at any time using Google Ads measurement choices/);
  assert.match(privacy, /does not include form fields/);
  assert.match(privacy, /PostHog site analytics remains separate and is not controlled by this choice/);
  assert.match(privacy, /that update may itself involve a request to Google/);
  assert.match(privacy, /tag code may remain loaded in the current browser tab until you reload the page or close the tab/);
  assert.match(privacy, /After your declined choice is saved, reloading starts a page where the Google Ads tag is not loaded/);
  assert.match(privacy, /Withdrawing consent does not delete information Google may already have received/);
  assert.match(privacy, /https:\/\/business\.safety\.google\/privacy\//);
  assert.match(privacy, /https:\/\/policies\.google\.com\/privacy/);
  assert.doesNotMatch(privacy, /GDPR compliant|CCPA compliant|legally compliant|certified compliant/i);
  assert.doesNotMatch(privacy, /Google receives no (?:data|information) whatsoever/i);
});
