"use client";

import posthog from "posthog-js";
import { buildCtaAttribution, saveCtaContext } from "./attribution.mjs";

export default function TrackedLink({ href, placement, cta, children, className, onClick, ...props }) {
  const handleClick = (event) => {
    const attribution = buildCtaAttribution({ href, placement, cta, location: window.location });
    saveCtaContext(attribution);
    posthog.capture("lead_capture_cta_clicked", attribution);
    onClick?.(event);
  };

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}
