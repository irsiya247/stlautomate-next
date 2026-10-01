import "./globals.css";
import { Suspense } from "react";
import PostHogPageView from "./components/PostHogPageView";
import GoogleAdsConsentManager from "./components/GoogleAdsConsentManager";

export const metadata = {
  title: "Business Automation Services in St. Louis | STL Automate",
  description: "Custom business automation for St. Louis businesses and remote teams, plus workflow repair, lead systems, and Phone Receptionist services.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GoogleAdsConsentManager />
        <Suspense fallback={null}>
          <PostHogPageView />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
