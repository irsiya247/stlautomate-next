import Link from "next/link";
import TrackedLink from "../../../components/TrackedLink";

const projectHref = "/start-project?type=custom-project";

export const metadata = {
  title: "Custom Workflow & Business Process Automation | STL Automate",
  description:
    "Plan and build custom business process automation, workflow automation, and system integrations around the way your business works.",
  alternates: {
    canonical: "https://www.stlautomate.com/services/custom-automation"
  }
};

const automationAreas = [
  "Repetitive business processes",
  "Lead and data routing",
  "CRM workflows and handoffs",
  "System-to-system integrations",
  "Webhook and API workflows",
  "Follow-up processes",
  "Operational handoffs",
  "Custom workflows outside a packaged service"
];

const engagementIncludes = [
  "Understand the current process and desired outcome.",
  "Identify the systems, dependencies, and access required.",
  "Agree on scope boundaries, acceptance checks, and timing.",
  "Build or integrate the agreed workflow.",
  "Test representative paths and verify the expected result.",
  "Document the result and hand over a clear operating reference."
];

const scopingQuestions = [
  "What happens today, and what should happen instead?",
  "Which systems, tools, or teams are involved?",
  "Where is the current pain point or failure?",
  "When do you need the first useful result?",
  "What constraints, approvals, or access limits should we plan around?",
  "Do you have a budget range to guide the scope?"
];

const faqs = [
  ["What counts as a custom automation project?", "A project is custom when it connects a specific business process, systems, or handoffs that do not fit one of our packaged services. We start with the outcome you need and determine the right scope from there."],
  ["How is custom work priced?", "We review the current process, systems, dependencies, and desired result, then agree on a written scope, price, and timing before implementation begins. The intake request itself does not commit you to a project."],
  ["How do you handle access and security?", "We identify the access needed for the agreed work and request only the permissions required. Do not include passwords, API keys, or other credentials in the project request form."],
  ["How long does a project take?", "Timing depends on the systems involved, access, and agreed acceptance checks. We confirm a realistic schedule after reviewing the brief and before work starts."],
  ["Can you work with systems we already use?", "Often, yes. Share the tools and how they connect today. We will assess the available integrations, APIs, permissions, and constraints before confirming the scope."],
  ["Can you repair and extend an existing automation?", "Yes. A single, clearly defined failure may fit the Automation Fix Sprint. If the work extends into a new workflow or a larger integration, we can scope it as a custom project."],
  ["What happens if requirements change?", "We review the change with you, explain its effect on scope, price, and timing, and agree on the next step before doing additional work."]
];

function ArrowLink({ href, children }) {
  return (
    <Link href={href} className="font-semibold text-sky-300 underline decoration-sky-400/40 underline-offset-4 hover:text-sky-200">
      {children}
    </Link>
  );
}

export default function CustomAutomationPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <div className="h-full w-full" style={{ backgroundImage: "linear-gradient(rgba(56,189,248,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.18) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="relative z-10">
        <section className="mx-auto max-w-6xl px-6 pb-16 pt-28 md:pb-24 md:pt-36">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">Custom business process automation</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">Tell us what needs to happen. We&apos;ll build the automation around your process.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">Already know what your business needs automated? STL Automate takes custom projects alongside packaged services, from workflow automation to system integrations and operational handoffs.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <TrackedLink href={projectHref} placement="custom_automation_hero" cta="Custom Project" className="rounded-full bg-sky-500 px-7 py-4 text-center font-bold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">Discuss a Custom Project</TrackedLink>
                <p className="text-sm text-slate-400">Share the outcome, systems, and constraints. We&apos;ll review the fit before work begins.</p>
              </div>
            </div>
            <aside className="rounded-3xl border border-slate-700 bg-slate-900/70 p-7 sm:p-9">
              <p className="text-xs font-semibold tracking-[0.2em] text-sky-300 uppercase">Built around your process</p>
              <h2 className="mt-4 text-2xl font-bold">A clear scope before a build.</h2>
              <p className="mt-3 leading-relaxed text-slate-300">We map the current process, define the expected result, and agree what is included before connecting systems or changing workflows.</p>
              <p className="mt-5 border-t border-slate-700 pt-5 text-sm leading-relaxed text-slate-400">Custom work is available in addition to the Automation Fix Sprint and STL Automate&apos;s other packaged offers.</p>
            </aside>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-950/50">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">What we automate</p>
              <h2 className="mt-4 text-3xl font-bold">Connect the work that gets stuck between systems.</h2>
              <p className="mt-4 leading-relaxed text-slate-400">Start with the work your team repeats, the data that needs to move, and the handoff that should happen reliably.</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {automationAreas.map((item) => <li key={item} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4 leading-relaxed text-slate-300"><span className="text-sky-400" aria-hidden="true">→</span><span>{item}</span></li>)}
            </ul>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">Relevant work and systems</p>
            <h2 className="mt-4 text-3xl font-bold">Practical integrations, scoped to the job.</h2>
            <p className="mt-4 leading-relaxed text-slate-400">The right implementation depends on your systems, data, permissions, and acceptance checks. We work from the process and choose integrations that fit the agreed scope.</p>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li><strong className="text-white">CRM and lead handoffs:</strong> a verified Upwork client review documents backend stabilization involving n8n and GoHighLevel, including payload troubleshooting and token permissions. <ArrowLink href="/automation-fix-sprint#upwork-review">Read the client review</ArrowLink>.</li>
              <li><strong className="text-white">Internal workflow orchestration:</strong> STL Automate&apos;s internal production automation runs on self-hosted n8n. This describes internal technology use, not a claim that every customer deployment uses n8n.</li>
              <li><strong className="text-white">Webhook and API intake:</strong> STL Automate&apos;s project intake uses a structured website-to-automation handoff with source attribution. Customer workflows are designed and tested against their own requirements.</li>
            </ul>
          </div>
          <aside className="rounded-3xl border border-slate-800 bg-slate-900/50 p-7 sm:p-9">
            <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">A scoped engagement</p>
            <h2 className="mt-4 text-2xl font-bold">What a custom project includes</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">{engagementIncludes.map((item) => <li key={item} className="flex gap-3"><span className="text-sky-400" aria-hidden="true">✓</span><span>{item}</span></li>)}</ul>
          </aside>
        </section>

        <section className="border-y border-slate-800 bg-sky-400/[0.04]">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">How custom scoping works</p>
            <h2 className="mt-4 text-3xl font-bold">Agree on the result before building.</h2>
            <ol className="mt-8 grid gap-8 md:grid-cols-3">
              {[["01", "Describe the process", "Tell us what happens today, what should happen instead, and which people or systems are involved."], ["02", "Confirm a bounded scope", "We review integrations, access, constraints, acceptance checks, timing, and budget, then propose the work that fits."], ["03", "Build, verify, hand off", "We implement the agreed workflow, test representative paths against the expected result, and document the handoff."]].map(([number, title, text]) => <li key={number}><span className="text-sm font-bold text-sky-300">{number}</span><h3 className="mt-3 text-xl font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-300">{text}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">What helps us scope it</p>
            <h2 className="mt-4 text-3xl font-bold">Bring the process and the desired outcome.</h2>
            <ul className="mt-6 space-y-3 text-slate-300">{scopingQuestions.map((item) => <li key={item} className="flex gap-3"><span className="text-sky-400" aria-hidden="true">→</span><span>{item}</span></li>)}</ul>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-7 sm:p-9">
            <h2 className="text-2xl font-bold">Access is discussed after the brief.</h2>
            <p className="mt-4 leading-relaxed text-slate-300">The project request form helps us understand your process and tools. We identify required systems and permissions during scoping; do not send credentials in the form.</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">Where possible, the access model follows the agreed deployment architecture and uses only permissions required for the work.</p>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-950/50">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">Choose the right starting point</p>
            <h2 className="mt-4 text-3xl font-bold">A packaged offer may be a better fit.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"><h3 className="text-lg font-bold">One broken workflow</h3><p className="mt-3 text-sm leading-relaxed text-slate-400">For one clearly scoped existing automation failure, start with the $750 <ArrowLink href="/automation-fix-sprint">Automation Fix Sprint</ArrowLink>.</p></div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"><h3 className="text-lg font-bold">Lead routing and CRM follow-up</h3><p className="mt-3 text-sm leading-relaxed text-slate-400">See the <ArrowLink href="/services#sdr">lead follow-up and HubSpot handoff</ArrowLink> workflows in our services, including review and approval steps.</p></div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"><h3 className="text-lg font-bold">Calls and missed follow-up</h3><p className="mt-3 text-sm leading-relaxed text-slate-400">Explore the <ArrowLink href="/services#vapi">Phone Receptionist</ArrowLink> for call capture and routing or the <ArrowLink href="/services#receptionist">Receptionist Suite</ArrowLink> for email triage and follow-up preparation.</p></div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-800">
          <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
            <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">Custom project questions</p>
            <h2 className="mt-4 text-3xl font-bold">Before you start</h2>
            <dl className="mt-8 divide-y divide-slate-800">{faqs.map(([question, answer]) => <div key={question} className="py-5"><dt className="font-bold text-white">{question}</dt><dd className="mt-2 leading-relaxed text-slate-400">{answer}</dd></div>)}</dl>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
          <div className="grid items-center gap-8 rounded-3xl border border-sky-400/20 bg-sky-400/[0.06] p-7 sm:p-10 md:grid-cols-[1fr_auto]">
            <div><p className="text-xs font-semibold tracking-[0.25em] text-sky-300 uppercase">Start with the process</p><h2 className="mt-4 text-3xl font-bold">Tell us what needs to happen.</h2><p className="mt-3 max-w-2xl leading-relaxed text-slate-300">Share the current workflow, the result you want, and the systems involved. We&apos;ll review the fit and agree on scope before work starts.</p></div>
            <TrackedLink href={projectHref} placement="custom_automation_footer" cta="Custom Project" className="rounded-full bg-sky-500 px-7 py-4 text-center font-bold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">Discuss a Custom Project</TrackedLink>
          </div>
        </section>
      </div>
    </main>
  );
}
