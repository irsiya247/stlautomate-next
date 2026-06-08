"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Do I need any technical knowledge to use this?",
    a: "None at all. We handle everything: setup, configuration, testing, and go-live. You don't install any software, log into any new platform, or learn anything new. We build it, we run it, and we maintain it. You just see the results."
  },
  {
    q: "What does it actually cost?",
    a: "It depends on which system you need and how complex your setup is. We don't publish fixed pricing because every business is different. A dental office needs something different than a plumbing company. What we can tell you: our setup fees are a fraction of what you'd pay a full-time hire, and there's no long-term contract. Book a free call and we'll give you a straight number."
  },
  {
    q: "How long does it take to get set up?",
    a: "Most systems are live within one to two weeks from our first call. The first week is spent learning your business and building the system. The second week is testing and refinement. We don't cut corners on testing. A system that misbehaves with real customers is worse than no system at all."
  },
  {
    q: "What if I already have a receptionist or a sales person?",
    a: "This isn't a replacement. It is backup and overflow. Your receptionist can't answer every call at once, and they go home at 5pm. Your sales person can't follow up with every lead the same hour it comes in. Our systems handle the volume so your people can focus on the conversations that actually need a human."
  },
  {
    q: "Does the phone agent actually sound like a real person?",
    a: "Yes. We use professional voice infrastructure with natural-sounding speech. Most callers don't know they're talking to an automated system unless they ask directly. We configure the agent to be honest if they do. We don't do deceptive bots. We do helpful ones."
  },
  {
    q: "What happens when something goes wrong?",
    a: "You have a direct line to the person who built your system, not a support ticket, not a help desk. If something breaks or behaves unexpectedly, we fix it. We also monitor systems proactively so most issues get caught before you even notice them."
  },
  {
    q: "Will this work with the tools I already use?",
    a: "Most likely yes. Our systems connect with Google Calendar, Google Sheets, HubSpot, Gmail, and most standard business tools. If you use something less common, tell us on the call and we'll be straight with you about whether we can connect it."
  },
  {
    q: "Is this just for St. Louis businesses?",
    a: "No. We work with businesses anywhere. That said, if you're in St. Louis, you also have the option of meeting in person, which some clients prefer when they want to see a live demo or just shake hands before signing on."
  },
  {
    q: "What do you mean by 'lead scoring'?",
    a: "When a contact reaches out by email or phone, our system evaluates signals like their job title, company size, what they're asking about, and how they found you. Based on that, it labels them Hot, Warm, or Cold. Hot leads get faster follow-up and an immediate alert to you. Cold leads get a polite response and get logged. You always know who to prioritize."
  },
  {
    q: "Is there a monthly fee?",
    a: "Yes. After setup, there's a monthly retainer that covers hosting, API costs, monitoring, and ongoing support. We don't set it and forget it. Your system stays maintained, updated, and running. The retainer is what keeps that true."
  },
  {
    q: "Is there a contract or minimum commitment?",
    a: "No long-term contracts. We earn your continued business by being useful. After the initial setup, we work on a month-to-month basis. If you want to pause or cancel, you can. We'd rather build something that works so well you don't want to."
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-800 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-900/40 transition-colors"
      >
        <span className="font-semibold text-white text-base">{q}</span>
        <span className={`text-sky-400 text-xl flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm border-t border-slate-800 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <main className="min-h-screen bg-[#030712] text-white relative overflow-hidden">

      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: "linear-gradient(rgba(56,189,248,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>
      <div className="absolute top-[-250px] left-1/2 w-[700px] h-[700px] bg-sky-500/10 blur-[160px] rounded-full -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-6">

          <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">FAQ</div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Questions we <span className="text-sky-400">actually get asked</span>
          </h1>
          <p className="text-slate-400 text-lg mb-16">
            Straight answers. If you have one we didn&apos;t cover, ask it on the call.
          </p>

          <div className="space-y-3 mb-20">
            {faqs.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>

          <div className="border border-slate-800 bg-slate-900/20 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-3">Still have a question?</h2>
            <p className="text-slate-400 mb-8">
              Email us directly or book a call. Either way, you&apos;ll get a real answer from the person who built the thing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/intake" className="bg-sky-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-500 transition-colors">
                Book a Free Call
              </a>
              <a href="mailto:contact@stlautomate.com" className="border border-slate-700 px-6 py-3 rounded-full text-slate-300 hover:border-slate-500 transition-colors">
                Email Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
