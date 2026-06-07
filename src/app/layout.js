import "./globals.css";

export const metadata = {
  title: "STL Automate | AI Tools for Small Businesses in St. Louis",
  description: "STL Automate builds automated phone receptionists, email systems, and sales outreach tools for small businesses. Never miss a call. Never lose a customer. St. Louis, MO."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#030712] text-white antialiased">
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 bg-[#030712]/90 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="text-white font-bold text-lg tracking-tight">
              STL <span className="text-sky-400">Automate</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="/services" className="text-slate-400 hover:text-white transition-colors">Services</a>
              <a href="/how-it-works" className="text-slate-400 hover:text-white transition-colors">How It Works</a>
              <a href="/about" className="text-slate-400 hover:text-white transition-colors">About</a>
              <a href="/faq" className="text-slate-400 hover:text-white transition-colors">FAQ</a>
              <a href="/tech" className="text-slate-400 hover:text-white transition-colors">Tech</a>
            </nav>
            <a href="/intake" className="bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-sky-500 transition-colors">
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
                  STL <span className="text-sky-400">Automate</span>
                </d