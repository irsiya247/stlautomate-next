import "./globals.css";
import { Suspense } from "react";
import PostHogPageView from "./components/PostHogPageView";

export const metadata = {
  title: "STL Automate | Automation Tools for Small Businesses in St. Louis",
  description: "STL Automate builds automated phone receptionists, email systems, and sales outreach tools for small businesses. Never miss a call. Never lose a customer. St. Louis, MO.",
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
