import "./globals.css";

export const metadata = {
  title: "STL Automate | Lead Capture Automation St. Louis & AI Infrastructure",
  description: "We deploy custom AI infrastructure and lead capture automation for St. Louis businesses looking to optimize complex workflows, lower OPEX, and scale revenue."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0B1120] text-white antialiased">
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 bg-[#0B1120]/90 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="text-white font-bold text-lg">
              <span className="font-light">STL</span> Automate
            </a>
            <nav className="flex items-center gap-6">
              <a href="/infrastructure" className="text-slate-400 hover:text-white text-sm transition-colors">Infrastructure</a>
              <a href="/portfolio" className="text-slate-400 hover:text-white text-sm transition-colors">Portfolio</a>
              <a href="/intake" className="bg-sky-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-sky-300 transition-colors">Get Audit</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-slate-800 mt-20 py-10">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© 2026 STL Automate LLC. All rights reserved. | St. Louis, MO</p>
            <div className="flex gap-6">
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="mailto:matt@stlautomate.com" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
