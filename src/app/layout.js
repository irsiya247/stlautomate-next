import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "STL Automate | Automation Tools for Small Businesses in St. Louis",
  description: "STL Automate builds automated phone receptionists, email systems, and sales outreach tools for small businesses. Never miss a call. Never lose a customer. St. Louis, MO.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#030712] text-white antialiased">
        <Header />
        {children}
        <footer className="border-t border-slate-800 mt-20 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-10 mb-10">
              <div>
                <div className="text-white font-bold text-lg mb-3">
                  STL <span className="text-sky-400">Automate</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Automation systems for small businesses. Built in St. Louis.
                </p>
              </div>
              <div>
                <div className="text-slate-400 text-xs tracking-widest uppercase mb-4">Services</div>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li><a href="/services#receptionist" className="hover:text-white transition-colors">Automated Receptionist Suite</a></li>
                  <li><a href="/services#vapi" className="hover:text-white transition-colors">Phone Receptionist</a></li>
                  <li><a href="/services#sdr" className="hover:text-white transition-colors">Automated Sales Outreach</a></li>
                </ul>
              </div>
              <div>
                <div className="text-slate-400 text-xs tracking-widest uppercase mb-4">Company</div>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li><a href="/how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                  <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="/tech" className="hover:text-white transition-colors">Tech</a></li>
                </ul>
              </div>
              <div>
                <div className="text-slate-400 text-xs tracking-widest uppercase mb-4">Contact</div>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li><a href="/intake" className="hover:text-white transition-colors">Book a Free Call</a></li>
                  <li><a href="mailto:contact@stlautomate.com" className="hover:text-white transition-colors">contact@stlautomate.com</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-600 text-sm">&copy; {new Date().getFullYear()} STL Automate LLC. All rights reserved.</p>
              <p className="text-slate-600 text-sm">St. Louis, MO</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
