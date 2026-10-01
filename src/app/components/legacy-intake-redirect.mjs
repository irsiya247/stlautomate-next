export const LEGACY_INTAKE_ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid"
];

export function buildLegacyIntakeRedirect(searchParams = {}) {
  const query = new URLSearchParams({ type: "custom-project" });

  for (const key of LEGACY_INTAKE_ATTRIBUTION_KEYS) {
    const value = searchParams[key];
    const firstValue = Array.isArray(value) ? value[0] : value;
    if (typeof firstValue === "string" && firstValue) query.set(key, firstValue);
  }

  return `/start-project?${query.toString()}`;
}
