import "./globals.css";
import { Suspense } from "react";
import PostHogPageView from "./components/PostHogPageView";
import GoogleAdsConsentManager from "./components/GoogleAdsConsentManager";

export const metadata = {
  title: "STL Automate | FIX. BUILD. GROW.",
  description: "STL Automate helps St. Louis businesses fix broken workflows, build practical systems, and improve the path from lead to customer.",
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
