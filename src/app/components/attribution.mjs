export const CTA_ATTRIBUTION_KEY = "stl-website-cta-attribution";

const CTA_BY_FORM_TYPE = {
  "automation-fix-sprint": "Automation Fix Sprint",
  "custom-project": "Custom Project",
  "lead-to-hubspot": "Lead-to-HubSpot System",
  "phone-receptionist": "Phone Receptionist"
};

export function getServiceCta(formType) {
  return CTA_BY_FORM_TYPE[formType] || "Custom Project";
}

export function getCtaContext(storage) {
  try {
    const contextStorage = storage ?? window.sessionStorage;
    const context = JSON.parse(contextStorage.getItem(CTA_ATTRIBUTION_KEY) || "{}");
    return context && typeof context === "object" && !Array.isArray(context) ? context : {};
  } catch {
    return {};
  }
}

export function buildCtaAttribution({ href, placement, cta, location }) {
  const destination = new URL(href, location.href);
  const service = destination.searchParams.get("type") || undefined;
  return {
    source_path: location.pathname,
    source_url: location.href,
    placement,
    destination: `${destination.pathname}${destination.search}`,
    ...(service ? { service, form_type: service } : {}),
    ...(cta ? { cta } : {})
  };
}

export function saveCtaContext(context, storage) {
  try {
    const contextStorage = storage ?? window.sessionStorage;
    contextStorage.setItem(CTA_ATTRIBUTION_KEY, JSON.stringify(context));
  } catch {
    // Analytics attribution is optional when session storage is unavailable.
  }
}

export function buildIntakeAnalyticsProperties({ formType, location, attribution, ctaContext }) {
  return {
    form_type: formType,
    service: formType,
    cta: ctaContext.cta || getServiceCta(formType),
    source_path: location.pathname,
    ...(ctaContext.source_path ? { origin_path: ctaContext.source_path } : {}),
    ...(ctaContext.source_url ? { origin_url: ctaContext.source_url } : {}),
    ...(ctaContext.destination ? { destination: ctaContext.destination } : {}),
    ...(ctaContext.placement ? { placement: ctaContext.placement } : {}),
    ...(attribution.referrer ? { referrer: attribution.referrer } : {}),
    ...Object.fromEntries(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].filter((key) => attribution[key]).map((key) => [key, attribution[key]]))
  };
}
