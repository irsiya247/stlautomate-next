"use client";

import posthog from "posthog-js";

export default function TrackedLink({ href, placement, children, className, ...props }) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => posthog.capture("lead_capture_cta_clicked", { placement, destination: href })}
      {...props}
    >
      {children}
    </a>
  );
}