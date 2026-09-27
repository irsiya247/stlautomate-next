export const GOOGLE_ADS_ID = "AW-18477400140";
export const GOOGLE_ADS_SEND_TO = "AW-18477400140/UKN4COXN9YcdEMyA2-pE";
export const GOOGLE_ADS_CONSENT_STORAGE_KEY = "stl-google-ads-consent";
export const GOOGLE_ADS_PRIVACY_CHOICES_EVENT = "stl:open-google-ads-privacy-choices";

const INITIALIZED_FLAG = "__stlAutomateGoogleAdsInitialized";
const MEASUREMENT_ALLOWED_FLAG = "__stlAutomateGoogleAdsMeasurementAllowed";
const SIX_MONTHS = 6;
const SUPPORTED_PROJECT_INTAKES = new Set([
  "automation-fix-sprint",
  "custom-project",
  "lead-to-hubspot",
  "phone-receptionist"
]);
const recordedSubmissionIds = new Set();

const deniedConsent = Object.freeze({
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied"
});

const grantedAdsMeasurementConsent = Object.freeze({
  ad_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "denied",
  analytics_storage: "denied"
});

function getConsentExpiry(now) {
  const expiry = new Date(now);
  const originalDay = expiry.getDate();
  expiry.setDate(1);
  expiry.setMonth(expiry.getMonth() + SIX_MONTHS);
  const finalDay = new Date(expiry.getFullYear(), expiry.getMonth() + 1, 0).getDate();
  expiry.setDate(Math.min(originalDay, finalDay));
  return expiry.getTime();
}

export function readGoogleAdsConsent(storage, now = Date.now()) {
  try {
    const stored = storage?.getItem(GOOGLE_ADS_CONSENT_STORAGE_KEY);
    if (!stored) return null;

    let parsed;
    try {
      parsed = JSON.parse(stored);
    } catch {
      storage.removeItem(GOOGLE_ADS_CONSENT_STORAGE_KEY);
      return null;
    }

    if (
      (parsed?.decision !== "granted" && parsed?.decision !== "denied") ||
      !Number.isFinite(parsed?.expiresAt) ||
      parsed.expiresAt <= now
    ) {
      storage.removeItem(GOOGLE_ADS_CONSENT_STORAGE_KEY);
      return null;
    }

    return parsed.decision;
  } catch {
    return null;
  }
}

export function saveGoogleAdsConsent(storage, decision, now = Date.now()) {
  try {
    if (decision !== "granted" && decision !== "denied") return false;
    storage?.setItem(GOOGLE_ADS_CONSENT_STORAGE_KEY, JSON.stringify({
      decision,
      expiresAt: getConsentExpiry(now)
    }));
    return Boolean(storage);
  } catch {
    return false;
  }
}

export function initializeGoogleAdsTag(target, consentGranted) {
  try {
    if (!target || consentGranted !== true) return false;
    if (target[INITIALIZED_FLAG]) return true;

    if (!target.dataLayer || typeof target.dataLayer.push !== "function") {
      target.dataLayer = [];
    }

    if (typeof target.gtag !== "function") {
      target.gtag = function () {
        target.dataLayer.push(arguments);
      };
    }

    target[MEASUREMENT_ALLOWED_FLAG] = false;
    target.gtag("consent", "default", deniedConsent);
    target.gtag("consent", "update", grantedAdsMeasurementConsent);
    target.gtag("js", new Date());
    target.gtag("config", GOOGLE_ADS_ID);
    target[INITIALIZED_FLAG] = true;
    target[MEASUREMENT_ALLOWED_FLAG] = true;
    return true;
  } catch {
    return false;
  }
}

export function updateGoogleAdsConsent(target, decision) {
  try {
    if (!target?.[INITIALIZED_FLAG] || typeof target.gtag !== "function") return false;

    const granted = decision === "granted";
    target[MEASUREMENT_ALLOWED_FLAG] = granted;
    target.gtag("consent", "update", granted ? grantedAdsMeasurementConsent : deniedConsent);
    return true;
  } catch {
    if (target) target[MEASUREMENT_ALLOWED_FLAG] = false;
    return false;
  }
}

export function enableGoogleAdsMeasurement(target) {
  if (target?.[INITIALIZED_FLAG]) return updateGoogleAdsConsent(target, "granted");
  return initializeGoogleAdsTag(target, true);
}

export function trackAcceptedProjectIntakeConversion(options = {}) {
  try {
    const { response, result, formType, submissionId, target } = options ?? {};
    if (response?.ok !== true || result?.success !== true) return false;
    if (!SUPPORTED_PROJECT_INTAKES.has(formType)) return false;
    if (typeof submissionId !== "string" || !submissionId) return false;

    const eventTarget = target ?? (typeof window === "undefined" ? null : window);
    const gtag = eventTarget?.gtag;
    if (eventTarget?.[MEASUREMENT_ALLOWED_FLAG] !== true) return false;
    if (typeof gtag !== "function" || recordedSubmissionIds.has(submissionId)) return false;

    // Keep this request-scoped ID local; the event payload contains no lead data.
    recordedSubmissionIds.add(submissionId);
    gtag("event", "conversion", { send_to: GOOGLE_ADS_SEND_TO });
    return true;
  } catch {
    // Measurement must never affect the accepted intake or buyer-facing flow.
    return false;
  }
}
