'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/about', label: 'About' },
    { href: '/tech', label: 'Tech' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-white font-bold text-lg tracking-tight">
          STL <span className="text-sky-400">Automate</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map(({ href, label }) => (
            <a key={href} href={href} className={`transition-colors hover:text-white ${pathname === href ? 'text-white' : 'text-slate-400'}`}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="/intake" className="bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-sky-500 transition-colors">
            Book a Free Call
          </a>
          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-[#030712]/95 backdrop-blur-sm">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`py-3 text-sm border-b border-slate-800/50 last:border-0 transition-colors hover:text-white ${pathname === href ? 'text-white' : 'text-slate-400'}`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
