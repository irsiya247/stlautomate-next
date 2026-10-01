const SITE_URL = "https://www.stlautomate.com";

const routes = [
  "",
  "/about",
  "/agent-floor",
  "/automation-fix-sprint",
  "/build",
  "/faq",
  "/fix",
  "/how-it-works",
  "/hvac-founder-pilot",
  "/infrastructure",
  "/missed-lead-audit",
  "/never-miss-another-job",
  "/portfolio",
  "/privacy",
  "/products",
  "/proof",
  "/grow",
  "/services",
  "/services/automation-repair",
  "/services/custom-automation",
  "/services/hubspot-lead-automation",
  "/services/phone-receptionist",
  "/start-project",
  "/tech",
  "/terms",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
  }));
}
