import Link from "next/link";
import Header from "../components/Header";
import { GoogleAdsPrivacyChoicesButton } from "../components/GoogleAdsConsentManager";
import TrackedLink from "../components/TrackedLink";

export default function SiteLayout({ children }) {
  return (
    <div className="bg-[#030712] text-white">
      <Header />
      {children}
      <footer className="border-t border-slate-800 mt-20 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 mb-16">

            {/* Brand */}
            <div className="max-w-xs">
              <Link href="/" className="text-white font-bold text-xl tracking-tight mb-4 inline-block">
                STL <span className="text-sky-400">Automate</span>
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Automation systems for small businesses. Built in St. Louis, MO.
              </p>
              <a href="/start-project" className="bg-sky-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-sky-500 transition-colors inline-block">
                Start a Custom Project
              </a>
            </div>

            {/* Nav columns */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-slate-400 text-xs tracking-widest uppercase mb-4">Services</div>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li><a href="/fix" className="hover:text-white transition-colors">Fix</a></li>
                  <li><a href="/build" className="hover:text-white transition-colors">Build</a></li>
                  <li><a href="/grow" className="hover:text-white transition-colors">Grow</a></li>
                  <li><a href="/services/automation-repair" className="hover:text-white transition-colors">Automation Repair</a></li>
                  <li><a href="/services/hubspot-lead-automation" className="hover:text-white transition-colors">Lead-to-HubSpot System</a></li>
                  <li><a href="/services/phone-receptionist" className="hover:text-white transition-colors">Phone Receptionist</a></li>
                  <li><a href="/services/custom-automation" className="hover:text-white transition-colors">Custom Automation</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors">All services</a></li>
                </ul>
              </div>
              <div>
                <div className="text-slate-400 text-xs tracking-widest uppercase mb-4">Company</div>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li><a href="/agent-floor" className="hover:text-white transition-colors">Agent Floor</a></li>
                  <li><a href="/products" className="hover:text-white transition-colors">Products / R&amp;D</a></li>
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
                  <li><TrackedLink href="/start-project?type=custom-project" placement="footer_consultation_custom_project" cta="Custom Project" className="hover:text-white transition-colors">Free Consultation</TrackedLink></li>
                </ul>
              </div>
            </div>

          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-sm">&copy; {new Date().getFullYear()} STL Automate LLC. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="/terms" className="text-slate-600 text-sm hover:text-slate-400 transition-colors">Terms of Service</a>
              <a href="/privacy" className="text-slate-600 text-sm hover:text-slate-400 transition-colors">Privacy Policy</a>
              <GoogleAdsPrivacyChoicesButton />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
