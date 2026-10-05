const faqs = [
  {
    q: "What kinds of business work can STL Automate help automate?",
    a: "STL Automate repairs broken workflows, connects business systems, routes leads, and builds custom process automation. Examples include webhook and API workflows, CRM handoffs, and agreed follow-up processes. The systems and boundaries are confirmed during scoping."
  },
  {
    q: "What does a project cost?",
    a: "The Automation Fix Sprint starts at $750, the one-source Lead-to-HubSpot System is $1,500, and the bounded Phone Receptionist package is $2,500. Custom projects are scoped to the process and systems involved. Each service page explains its scope and exclusions."
  },
  {
    q: "How long does an automation project take?",
    a: "Timing depends on the agreed scope, systems, access, and test cases. STL Automate confirms a delivery estimate after reviewing those details, before implementation begins."
  },
  {
    q: "Can you repair or extend an automation we already use?",
    a: "Yes. Share the platform, connected systems, failure point, and desired behavior. The Automation Fix Sprint is for a bounded repair; broader changes can be evaluated as custom work. We confirm fit and boundaries before starting."
  },
  {
    q: "Which systems can you connect?",
    a: "The fit depends on the systems' APIs, permissions, and requirements. Current service examples include n8n, Make, Zapier, HubSpot, webhooks, and APIs. Tell us what you use so we can confirm feasibility instead of assuming every connection is available."
  },
  {
    q: "How do you test the work?",
    a: "The agreed scope defines representative paths and expected results. STL Automate runs those checks, verifies the outcome, and documents the relevant handoff. Production access and testing boundaries are agreed before any live changes."
  },
  {
    q: "How should I share access or sensitive information?",
    a: "Describe the systems and access constraints in the project brief, but do not submit passwords, API keys, credentials, or raw customer records through the public form. Access requirements and a safe transfer method are agreed during scoping."
  },
  {
    q: "Do you work with businesses outside St. Louis?",
    a: "Yes. STL Automate is based in St. Louis, Missouri and also works with remote teams. The project intake and delivery approach are agreed for each engagement."
  },
  {
    q: "What if the requirements change after work begins?",
    a: "A request outside the agreed boundaries is reviewed before implementation. STL Automate will explain the scope, timing, or cost impact and get agreement on the next step before expanding the work."
  },
];

export const metadata = {
  title: "Business Automation Questions and Answers | STL Automate",
  description: "Answers about business automation, workflow repair, project pricing, testing, integrations, security, and serving St. Louis and remote teams.",
  alternates: { canonical: "https://www.stlautomate.com/faq" },
};

function FAQItem({ q, a }) {
  return (
    <details className="border border-slate-800 rounded-xl overflow-hidden">
      <summary className="w-full cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-900/40 transition-colors">
        <span className="font-semibold text-white text-base">{q}</span>
        <span aria-hidden="true" className="text-sky-400 text-xl flex-shrink-0">+</span>
      </summary>
      <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm border-t border-slate-800 pt-4">
          {a}
      </div>
    </details>
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
              Send a project brief or email us with your question. We will review the details and respond with a practical next step.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/start-project?type=custom-project" className="bg-sky-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-500 transition-colors">
                Describe Your Project
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
