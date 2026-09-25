"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import TrackedLink from "./TrackedLink";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/start-project", label: "Custom Projects" },
    { href: "/automation-fix-sprint", label: "Fix Sprint" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/proof", label: "Proof" },
    { href: "/about", label: "About" },
    { href: "/tech", label: "Tech" },
    { href: "/faq", label: "FAQ" }
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[#030712]/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">STL <span className="text-sky-400">Automate</span></Link>
        <nav className="hidden items-center gap-5 text-sm lg:flex" aria-label="Main navigation">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={pathname === href ? "text-white transition-colors hover:text-white" : "text-slate-400 transition-colors hover:text-white"}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <TrackedLink href="/start-project" placement="header" className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-500">
            Start a Custom Project
          </TrackedLink>
          <button className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            <span className={open ? "block h-0.5 w-5 translate-y-2 rotate-45 bg-white transition-all duration-200" : "block h-0.5 w-5 bg-white transition-all duration-200"} />
            <span className={open ? "block h-0.5 w-5 opacity-0 bg-white transition-all duration-200" : "block h-0.5 w-5 bg-white transition-all duration-200"} />
            <span className={open ? "block h-0.5 w-5 -translate-y-2 -rotate-45 bg-white transition-all duration-200" : "block h-0.5 w-5 bg-white transition-all duration-200"} />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-slate-800 bg-[#030712]/95 backdrop-blur-sm lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4" aria-label="Mobile navigation">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className={pathname === href ? "border-b border-slate-800/50 py-3 text-sm text-white transition-colors last:border-0 hover:text-white" : "border-b border-slate-800/50 py-3 text-sm text-slate-400 transition-colors last:border-0 hover:text-white"}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}