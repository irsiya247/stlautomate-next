export const GOOGLE_ADS_ID = "AW-18477400140";
export const GOOGLE_ADS_SEND_TO = "AW-18477400140/UKN4COXN9YcdEMyA2-pE";

const INITIALIZED_FLAG = "__stlAutomateGoogleAdsInitialized";
const SUPPORTED_PROJECT_INTAKES = new Set([
  "automation-fix-sprint",
  "custom-project",
  "lead-to-hubspot",
  "phone-receptionist"
]);
const recordedSubmissionIds = new Set();

export function initializeGoogleAdsTag(target) {
  try {
    if (!target || target[INITIALIZED_FLAG]) return false;

    if (!target.dataLayer || typeof target.dataLayer.push !== "function") {
      target.dataLayer = [];
    }

    if (typeof target.gtag !== "function") {
      target.gtag = function () {
        target.dataLayer.push(arguments);
      };
    }

    // Mark before queuing so a partial failure cannot duplicate tag setup.
    target[INITIALIZED_FLAG] = true;
    target.gtag("js", new Date());
    target.gtag("config", GOOGLE_ADS_ID);
    return true;
  } catch {
    return false;
  }
}

export function trackAcceptedProjectIntakeConversion(options = {}) {
  try {
    const { response, result, formType, submissionId, target } = options ?? {};
    if (response?.ok !== true || result?.success !== true) return false;
    if (!SUPPORTED_PROJECT_INTAKES.has(formType)) return false;
    if (typeof submissionId !== "string" || !submissionId) return false;

    const eventTarget = target ?? (typeof window === "undefined" ? null : window);
    const gtag = eventTarget?.gtag;
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
