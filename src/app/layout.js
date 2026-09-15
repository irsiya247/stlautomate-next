import "./globals.css";
import { Suspense } from "react";
import PostHogPageView from "./components/PostHogPageView";

export const metadata = {
  title: "STL Automate | Automation Services and Proprietary AI Products",
  description: "STL Automate provides automation implementation services and develops proprietary AI infrastructure products, including Agent Floor, AI GRC, and STL AI Ops.",
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
        <Suspense fallback={null}>
          <PostHogPageView />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
