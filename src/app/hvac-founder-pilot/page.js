const standardPricing = [
  {
    name: "AI Receptionist Starter",
    price: "$1,500+ setup + $399/month",
    description:
      "A phone receptionist that answers calls, captures job details, and helps route urgent leads."
  },
  {
    name: "AI Lead Response System",
    price: "$1,000+ setup + $299/month",
    description:
      "Fast email and form follow-up so new leads hear back while they are still ready to book."
  },
  {
    name: "CRM & Workflow Automation Sprint",
    price: "$1,500+ setup",
    description:
      "A focused build to clean up handoffs, reminders, lead tracking, and repetitive admin work."
  },
  {
    name: "Custom Automation Build",
    price: "$2,500+",
    description:
      "Custom systems for specialized workflows, integrations, reporting, and internal operations."
  }
];

const pilotIncludes = [
  "AI receptionist configured around your HVAC call flow",
  "Missed-call and after-hours lead capture",
  "Lead notes and booking details sent to your team",
  "Pilot feedback loop so the system improves around real calls"
];

export const metadata = {
  title: "HVAC Founder Pilot | STL Automate",
  description:
    "STL Automate is onboarding 3 HVAC companies for a focused AI receptionist pilot."
};

export default function HVACFounderPilot() {
  return (
    <main className="min-h-screen bg-[#030712] text-white relative overflow-hidden">

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.12) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div className="absolute top-[-250px] left-1/2 w-[700px] h-[700px] bg-sky-500/10 blur-[160px] rounded-full -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 pt-36 pb-24">
        <section className="max-w-6xl mx-auto px-6">
          <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">
            HVAC Founder Pilot
          </div>

          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-10 items-start">
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05]">
                Stop losing HVAC jobs from <span className="text-sky-400">missed calls</span>
              </h1>

              <p className="mt-6 text-slate-400 max-w-2xl text-lg leading-relaxed">
                STL Automate is onboarding 3 HVAC companies for a focused AI receptionist pilot.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="/intake" className="bg-sky-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-500 transition-colors">
                  Apply For The Pilot
                </a>
                <a href="#pricing" className="border border-slate-700 px-6 py-3 rounded-full text-slate-300 hover:border-slate-500 transition-colors">
                  View Pricing
                </a>
              </div>
            </div>

            <div className="border border-sky-400/30 bg-sky-400/10 rounded-2xl p-7">
              <div className="text-sky-300 text-xs tracking-widest uppercase mb-3">Founder Pilot Rate</div>
              <div className="text-4xl md:text-5xl font-extrabold leading-none">$500</div>
              <p className="text-slate-300 mt-2 font-semibold">setup + $250/month</p>
              <p className="text-slate-400 text-sm leading-relaxed mt-5">
                Built for HVAC owners who want every caller answered, every lead captured, and every after-hours opportunity handled before the customer calls someone else.
              </p>
              <div className="mt-6 border-t border-sky-400/20 pt-5">
                <p className="text-slate-500 text-xs tracking-widest uppercase mb-1">Standard AI Receptionist Pricing</p>
                <p className="text-white font-semibold">Starting at $1,500 setup + $399/month</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { value: "3", label: "HVAC companies accepted into this pilot" },
            { value: "24/7", label: "Coverage for calls after hours and weekends" },
            { value: "$1,000+", label: "Setup savings compared with standard receptionist pricing" }
          ].map(({ value, label }) => (
            <div key={label} className="border border-slate-800 bg-slate-900/30 rounded-2xl p-7">
              <p className="text-4xl font-extrabold">{value}</p>
              <p className="text-slate-500 text-xs tracking-widest uppercase mt-2 leading-relaxed">{label}</p>
            </div>
          ))}
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-20">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">
                Why This Exists
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-5">
                HVAC leads are urgent. Your phone system should treat them that way.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                When a furnace is out, an AC unit fails, or a homeowner needs a quote, speed matters. The founder pilot gives a small group of HVAC companies early access to an AI receptionist system at a reduced rate while we tune the workflow around real HVAC calls.
              </p>
            </div>

            <div className="space-y-4">
              {pilotIncludes.map((item, index) => (
                <div key={item} className="border border-slate-700 bg-slate-900/40 rounded-xl p-5 flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-sky-400 text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="max-w-6xl mx-auto px-6 mt-20 scroll-mt-24">
          <div className="border-t border-slate-800 pt-16">
            <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">
              Standard Pricing
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Regular STL Automate packages
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mb-10">
              The HVAC founder pilot is a limited onboarding rate. These are the standard starting prices for our core automation builds.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {standardPricing.map(({ name, price, description }) => (
                <div key={name} className="border border-slate-800 bg-slate-900/30 rounded-2xl p-7 flex flex-col">
                  <div className="text-sky-400 text-xs tracking-widest uppercase mb-3">{name}</div>
                  <p className="text-2xl font-extrabold mb-4">{price}</p>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 mt-20 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Want one of the <span className="text-sky-400">3 pilot spots?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Tell us about your HVAC business and how calls are handled today. We will confirm whether the pilot is a fit before anything gets built.
          </p>
          <a href="/intake" className="bg-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg inline-block hover:bg-sky-500 transition-colors">
            Apply For The HVAC Pilot
          </a>
        </section>
      </div>
    </main>
  );
}
