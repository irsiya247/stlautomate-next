const image = (name, alt) => ({
  url: `/og/${name}-v1.png`,
  width: 1200,
  height: 630,
  type: "image/png",
  alt,
});

export const socialImages = {
  home: image("stl-automate", "STL Automate: Fix. Build. Grow. Business automation for St. Louis and remote teams."),
  automationRepair: image("automation-repair", "STL Automate Automation Repair: Find the failure. Verify the handoff."),
  hubspotLeadAutomation: image("hubspot-lead-automation", "STL Automate Lead-to-HubSpot Systems: Capture, map, route, verify."),
  customAutomation: image("custom-automation", "STL Automate Custom Automation: Workflows built around your business process."),
};

// Next.js replaces nested metadata objects, so each route supplies a complete card.
export function withSocialPreview(metadata, previewImage) {
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "website",
      siteName: "STL Automate",
      title: metadata.title,
      description: metadata.description,
      url: metadata.alternates.canonical,
      images: [previewImage],
    },
    twitter: {
      ...metadata.twitter,
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [previewImage],
    },
  };
}
