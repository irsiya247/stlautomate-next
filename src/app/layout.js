import "./globals.css";

export const metadata = {
  title: "STL Automate | AI Tools for Small Businesses in St. Louis",
  description: "STL Automate builds automated phone receptionists, email systems, and sales outreach tools for small businesses. Never miss a call. Never lose a customer. St. Louis, MO."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0B1120] text-white antialiased">
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 bg-[#0B1120]/90 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="text-white font-bold text-lg tracking-tight">
              <span className="font-light">STL</span> Automate
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="/services" className="text-slate-400 hover:text-white transition-colors">Services</a>
              <a href="/how-it-works" className="text-slate-400 hover:text-white transition-colors">How It Works</a>
              <a href="/about" className="text-slate-400 hover:text-white transition-colors">About</a>
              <a href="/faq" className="text-slate-400 hover:text-white transition-colors">FAQ</a>
              <a href="/tech" className="text-slate-400 hover:text-white transition-colors">Tech</a>
            </nav>
            <a href="/intake" className="bg-sky-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-sky-300 transition-colors">
              Book a Free Call
            </a>
          </div>
        </header>
        {children}
        <footer className="border-t border-slate-800 mt-20 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-10 mb-10">
              <div>
                <div className="text-white font-bold text-lg mb-3">
                  <span className="font-light">STL</span> Automate
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  AI tools built for small businesses in St. Louis and beyond.
                </p>
              </div>
              <div>
                <div className="text-slate-300 font-semibold text-sm mb-3 uppercase tracking-widest">Services</div>
                <ul className="space-y-2 text-slate-500 text-sm">
                  <li><a href="/services#receptionist" className="hover:text-white transition-colors">Automated Receptionist</a></li>
                  <li><a href="/services#sdr" className="hover:text-white transition-colors">Automated Sales Outreach</a></li>
                  <li><a href="/services#vapi" className="hover:text-white transition-colors">Phone Receptionist</a></li>
                </ul>
              </div>
              <div>
                <div className="text-slate-300 font-semibold text-sm mb-3 uppercase tracking-widest">Company</div>
                <ul className="space-y-2 text-slate-500 text-sm">
                  <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="/how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                  <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="/tech" className="hover:text-white transition-colors">Tech</a></li>
                </ul>
              </div>
              <div>
                <div className="text-slate-300 font-semibold text-sm mb-3 uppercase tracking-widest">Contact</div>
                <ul className="space-y-2 text-slate-500 text-sm">
                  <li><a href="mailto:matt@stlautomate.com" className="hover:text-white transition-colors">matt@stlautomate.com</a></li>
                  <li><a href="/intake" className="hover:text-white transition-colors">Book a Free Call</a></li>
                  <li className="pt-1 text-slate-600">St. Louis, MO</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs">
              <p>© 2026 STL Automate LLC. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="/terms" className="hover:text-white transition-colors">Terms</a>
                <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
