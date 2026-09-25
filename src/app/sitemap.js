const SITE_URL = "https://www.stlautomate.com";

const routes = [
  "",
  "/about",
  "/automation-fix-sprint",
  "/faq",
  "/how-it-works",
  "/hvac-founder-pilot",
  "/infrastructure",
  "/intake",
  "/missed-lead-audit",
  "/never-miss-another-job",
  "/portfolio",
  "/privacy",
  "/products",
  "/proof",
  "/services",
  "/start-project",
  "/tech",
  "/terms",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
  }));
}
