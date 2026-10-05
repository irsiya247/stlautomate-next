import "./globals.css";
import { Suspense } from "react";
import PostHogPageView from "./components/PostHogPageView";
import GoogleAdsConsentManager from "./components/GoogleAdsConsentManager";

export const metadata = {
  metadataBase: new URL("https://www.stlautomate.com"),
  title: "Business Automation Services in St. Louis | STL Automate",
  description: "Custom business automation for St. Louis businesses and remote teams, plus workflow repair, lead systems, and Phone Receptionist services.",
  openGraph: {
    type: "website",
    siteName: "STL Automate",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.stlautomate.com/#organization",
        name: "STL Automate",
        legalName: "STL Automate LLC",
        url: "https://www.stlautomate.com/",
        description: "Business automation, workflow repair, and system integration services for St. Louis businesses and remote teams.",
        areaServed: {
          "@type": "City",
          name: "St. Louis",
          containedInPlace: { "@type": "State", name: "Missouri" },
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.stlautomate.com/#website",
        url: "https://www.stlautomate.com/",
        name: "STL Automate",
        publisher: { "@id": "https://www.stlautomate.com/#organization" },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        <GoogleAdsConsentManager />
        <Suspense fallback={null}>
          <PostHogPageView />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
