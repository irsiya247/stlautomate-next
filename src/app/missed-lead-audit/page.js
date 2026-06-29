import MissedLeadAuditForm from "./MissedLeadAuditForm";

export const metadata = {
  title: "Free Missed Lead Audit | STL Automate",
  description:
    "Request a free review of how your service business handles after-hours calls, website forms, missed calls, and lead follow-up."
};

const problems = [
  {
    number: "01",
    title: "Missed calls",
    description:
      "A caller who reaches voicemail may move on before your team has a chance to call back."
  },
  {
    number: "02",
    title: "Slow replies",
    description:
      "Website inquiries can cool off when they sit in an inbox without a clear response process."
  },
  {
    number: "03",
    title: "Weak follow-up",
    description:
      "Good leads can stall when ownership, reminders, and next steps are not clearly defined."
  }
];

const auditChecks = [
  {
    title: "After-hours response",
    description:
      "What happens when a new customer calls or reaches out outside your normal business hours."
  },
  {
    title: "Form response",
    description:
      "How website inquiries are received, routed, acknowledged, and handed to the right person."
  },
  {
    title: "Missed-call handling",
    description:
      "Whether missed callers receive a timely, consistent path back into a real conversation."
  },
  {
    title: "CRM and follow-up process",
    description:
      "How leads are tracked, assigned, reminded, and moved toward a clear next step."
  }
];

export default function MissedLeadAuditPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" aria-hidden="true">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.12) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
      </div>
      <div
        className="absolute top-[-250px] left-1/2 w-[700px] h-[700px] bg-sky-500/10 blur-[160px] rounded-full -translate-x-1/2 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 pt-32 md:pt-36 pb-12">
        <section className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[11px] tracking-[0.35em] text-sky-400 uppercase">
                Free Missed Lead Audit for Local Service Businesses
              </p>
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.06] max-w-4xl">
                Find out how many leads your business may be losing after hours
              </h1>
              <p className="mt-6 text-slate-400 max-w-2xl text-lg leading-relaxed">
                STL Automate will review your response process and show where calls, forms, and follow-ups may be slipping through.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href="#audit-form"
                  className="bg-sky-600 text-white px-7 py-3.5 rounded-full font-semibold text-center hover:bg-sky-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
                >
                  Request Free Missed Lead Audit
                </a>
                <p className="text-sm text-slate-500">A practical review of your current lead-response process.</p>
              </div>
            </div>

            <div className="border border-slate-800 bg-slate-900/50 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-sky-950/20">
              <p className="text-sky-400 text-xs tracking-widest uppercase mb-5">The path we review</p>
              <div className="space-y-3">
                {["A new inquiry comes in", "Your team receives and responds", "The lead gets a clear next step"].map(
                  (item, index) => (
                    <div key={item} className="flex items-center gap-4 border border-slate-800 bg-slate-950/50 rounded-xl p-4">
                      <span className="w-8 h-8 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-sky-400 text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-slate-200 text-sm font-medium">{item}</span>
                    </div>
                  )
                )}
              </div>
              <p className="mt-5 text-slate-500 text-sm leading-relaxed">
                The audit looks for gaps between these steps so you can decide what deserves attention first.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-20 md:mt-24">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">The problem</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Leads rarely disappear all at once. They slip away between steps.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {problems.map(({ number, title, description }) => (
              <article key={title} className="border border-slate-800 bg-slate-900/30 rounded-2xl p-7">
                <div className="text-sky-400 text-sm font-extrabold">{number}</div>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-20 md:mt-24">
          <div className="border-t border-slate-800 pt-16">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
              <div>
                <p className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">What the audit checks</p>
                <h2 className="text-3xl md:text-4xl font-extrabold">A focused look at the full response path</h2>
                <p className="mt-5 text-slate-400 leading-relaxed">
                  We review the handoffs most likely to create delays or leave an inquiry without a clear owner.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {auditChecks.map(({ title, description }) => (
                  <article key={title} className="border border-slate-800 bg-slate-900/30 rounded-2xl p-6">
                    <div className="w-2 h-2 rounded-full bg-sky-400 mb-5" aria-hidden="true" />
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="mt-3 text-slate-400 text-sm leading-relaxed">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-20 md:mt-24">
          <div className="border border-sky-400/20 bg-sky-400/[0.07] rounded-2xl p-7 sm:p-10 md:p-12">
            <div className="grid md:grid-cols-[0.75fr_1.25fr] gap-8 md:gap-12 items-start">
              <div>
                <p className="text-[11px] tracking-[0.35em] text-sky-300 uppercase mb-4">What you get</p>
                <h2 className="text-3xl md:text-4xl font-extrabold">Clear findings, kept simple</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-sky-300 text-xs tracking-widest uppercase mb-3">01 - Findings summary</p>
                  <p className="text-slate-300 leading-relaxed">
                    A short summary of the response gaps we identify across calls, forms, and follow-up.
                  </p>
                </div>
                <div>
                  <p className="text-sky-300 text-xs tracking-widest uppercase mb-3">02 - Recommended next step</p>
                  <p className="text-slate-300 leading-relaxed">
                    A practical recommendation for the first process improvement worth considering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="audit-form" className="max-w-6xl mx-auto px-6 mt-20 md:mt-24 scroll-mt-24">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">Request your audit</p>
              <h2 className="text-3xl md:text-4xl font-extrabold">Show us how to reach you</h2>
              <p className="mt-5 text-slate-400 leading-relaxed">
                Share a few details about your business and current lead process. STL Automate will review the request and determine whether a missed lead audit is a fit.
              </p>
            </div>
            <MissedLeadAuditForm />
          </div>
        </section>

        <footer className="max-w-6xl mx-auto px-6 mt-20 md:mt-24">
          <div className="border-t border-slate-800 pt-10 text-center">
            <address className="not-italic text-slate-500 text-sm leading-relaxed">
              <span className="text-slate-300 font-semibold">STL Automate</span><br />
              1123 Locust St Ste 422<br />
              St Louis, MO 63101
            </address>
          </div>
        </footer>
      </div>
    </main>
  );
}
