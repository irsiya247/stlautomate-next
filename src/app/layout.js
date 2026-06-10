import "./globals.css";
import Header from "./components/Header";

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
      <body className="bg-[#030712] text-white antialiased">
        <Header />
        {children}
        <footer className="border-t border-slate-800 mt-20 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 mb-16">

              {/* Brand */}
              <div className="max-w-xs">
                <a href="/" className="text-white font-bold text-xl tracking-tight mb-4 inline-block">
                  STL <span className="text-sky-400">Automate</span>
                </a>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Automation systems for small businesses. Built in St. Louis, MO.
                </p>
                <a href="/intake" className="bg-sky-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-sky-500 transition-colors inline-block">
                  Book a Free Call
                </a>
              </div>

              {/* Nav columns */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-slate-400 text-xs tracking-widest uppercase mb-4">Services</div>
                  <ul className="space-y-3 text-sm text-slate-500">
                    <li><a href="/services#receptionist" className="hover:text-white transition-colors">Receptionist Suite</a></li>
                    <li><a href="/services#vapi" className="hover:text-white transition-colors">Phone Receptionist</a></li>
                    <li><a href="/services#sdr" className="hover:text-white transition-colors">Sales Outreach</a></li>
                    <li><a href="/services#custom" className="hover:text-white transition-colors">Custom Automation</a></li>
                  </ul>
                </div>
                <div>
                  <div className="text-slate-400 text-xs tracking-widest uppercase mb-4">Company</div>
                  <ul className="space-y-3 text-sm text-slate-500">
                    <li><a href="/how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                    <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                    <li><a href="/tech" className="hover:text-white transition-colors">Tech</a></li>
                    <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
                  </ul>
                </div>
                <div>
                  <div className="text-slate-400 text-xs tracking-widest uppercase mb-4">Contact</div>
                  <ul className="space-y-3 text-sm text-slate-500">
                    <li><a href="mailto:contact@stlautomate.com" className="hover:text-white transition-colors">contact@stlautomate.com</a></li>
                    <li><a href="/intake" className="hover:text-white transition-colors">Free Consultation</a></li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-600 text-sm">&copy; {new Date().getFullYear()} STL Automate LLC. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="/terms" className="text-slate-600 text-sm hover:text-slate-400 transition-colors">Terms</a>
                <a href="/privacy" className="text-slate-600 text-sm hover:text-slate-400 transition-colors">Privacy</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
