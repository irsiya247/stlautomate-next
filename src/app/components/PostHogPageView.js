"use client";

import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { useEffect } from "react";

export default function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    const attributionKey = "stl-website-attribution";
    try {
      if (!window.sessionStorage.getItem(attributionKey)) {
        const params = currentUrl.searchParams;
        window.sessionStorage.setItem(attributionKey, JSON.stringify({
          landing_page: `${currentUrl.origin}${currentUrl.pathname}`,
          referrer: document.referrer,
          utm_source: params.get("utm_source") || "",
          utm_medium: params.get("utm_medium") || "",
          utm_campaign: params.get("utm_campaign") || "",
          utm_content: params.get("utm_content") || "",
          utm_term: params.get("utm_term") || "",
          gclid: params.get("gclid") || "",
          fbclid: params.get("fbclid") || ""
        }));
      }
    } catch {
      // Attribution is optional; form submission still works when storage is unavailable.
    }

    if (
      !process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN ||
      !process.env.NEXT_PUBLIC_POSTHOG_HOST
    ) {
      return;
    }

    posthog.capture("$pageview", {
      $current_url: window.location.href,
    });
  }, [pathname, search]);

  return null;
}