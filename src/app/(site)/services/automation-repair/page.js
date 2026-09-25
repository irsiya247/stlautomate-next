import TrackedLink from "../../../components/TrackedLink";

const bookingHref = "/start-project?type=automation-fix-sprint";

export const metadata = {
  title: "Automation Repair for Broken Workflows | STL Automate",
  description:
    "Repair a broken n8n, Zapier, or Make workflow, webhook, API, or HubSpot handoff. One focused Automation Fix Sprint starts at $750.",
  alternates: {
    canonical: "https://www.stlautomate.com/services/automation-repair"
  }
};

const failureModes = [
  "A workflow stops after a trigger or a specific step.",
  "A webhook or API call fails, times out, or sends an unexpected payload.",
  "Expired credentials or changed permissions block a connection.",
  "HubSpot records are missing fields, landing in the wrong place, or duplicated.",
  "Data reaches the wrong team, system, or notification channel.",
  "Retries create duplicate runs, or expected runs fail without a useful alert."
];

const includes = [
  "Trace one agreed workflow and identify its failure point.",
  "Repair or rebuild one clearly scoped core workflow.",
  "Run practical test cases and document the results.",
  "Provide a Loom handoff, concise documentation, and a seven-day bug-fix window for the agreed scope."
];

const faqs = [
  ["What fits one sprint?", "One core workflow with a clear failure and repair target. We review the brief first and confirm the scope before work begins."],
  ["What access will you need?", "Access depends on the systems and agreed repair. We identify the required workflow, logs, and permissions during scoping; share only access needed for that work."],
  ["How long does it take?", "The Automation Fix Sprint is a focused 72-hour engagement. Timing starts once scope and required access are confirmed."],
  ["What is outside the sprint?", "Multiple unrelated workflows, broad platform migrations, and new system builds may not fit. If diagnosis shows the issue is larger, we explain what we found and propose a separate scope before expanding work."],
  ["What if it is not a fit?", "We will explain why the issue falls outside one sprint and what a larger project would involve. No additional work starts without an agreed scope."]
];

export default function AutomationRepairPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <div className="h-full w-full" style={{ backgroundImage: "linear-gradient(rgba(56,189,248,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.18) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>
      <div className="relative z-10">
        <section className="mx-auto max-w-6xl px-6 pb-16 pt-28 md:pb-24 md:pt-36">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">Automation repair · St. Louis and remote</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">Broken workflow? Find the failure and get one core automation repaired.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">When a workflow stops, drops data, repeats an action, or loses its connection, manual work piles up. The Automation Fix Sprint is a focused repair for one clearly defined workflow.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <TrackedLink href={bookingHref} placement="automation_repair_hero" cta="Automation Fix Sprint" className="rounded-full bg-sky-500 px-7 py-4 text-center font-bold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">Describe the broken workflow</TrackedLink>
                <p className="text-sm text-slate-400">One focused 72-hour sprint starts at <strong className="text-white">$750</strong>.</p>
              </div>
            </div>
            <aside className="rounded-3xl border border-slate-700 bg-slate-900/70 p-7 sm:p-9">
              <p className="text-xs font-semibold tracking-[0.2em] text-sky-300 uppercase">A defined repair</p>
              <h2 className="mt-4 text-2xl font-bold">One core workflow</h2>
              <p className="mt-3 leading-relaxed text-slate-300">Diagnose the agreed failure, repair or rebuild the workflow, test it, and hand it back with documentation.</p>
              <p className="mt-5 border-t border-slate-700 pt-5 text-sm leading-relaxed text-slate-400">The sprint is scoped before work begins. Larger or unrelated work needs a separate agreement.</p>
            </aside>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-950/50">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">What we fix</p>
              <h2 className="mt-4 text-3xl font-bold">Find where the handoff breaks.</h2>
              <p className="mt-4 leading-relaxed text-slate-400">Repair starts with the actual failure and intended outcome, not a generic rebuild.</p>
            </div>
            <ul className="space-y-4">
              {failureModes.map((item) => <li key={item} className="flex gap-3 leading-relaxed text-slate-300"><span className="text-sky-400" aria-hidden="true">→</span><span>{item}</span></li>)}
            </ul>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">Systems and tools</p>
            <h2 className="mt-4 text-3xl font-bold">Work in the systems your workflow already uses.</h2>
            <p className="mt-4 leading-relaxed text-slate-400">The existing Fix Sprint scope covers broken Zapier, Make, and n8n workflows, along with HubSpot, forms, alerts, CRM handoffs, and data syncs. API calls, webhooks, and authentication issues are considered as part of the agreed workflow.</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">Every repair depends on the specific system, access, and failure. STL Automate uses self-hosted n8n for its internal production automation; this does not mean every customer workflow runs on n8n.</p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-7">
            <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">Sprint scope</p>
            <h2 className="mt-4 text-2xl font-bold">What the $750 Fix Sprint includes</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">{includes.map((item) => <li key={item} className="flex gap-3"><span className="text-sky-400" aria-hidden="true">✓</span><span>{item}</span></li>)}</ul>
            <p className="mt-6 border-t border-slate-800 pt-5 text-sm leading-relaxed text-slate-400">Excludes additional unrelated workflows, platform migrations, and new builds unless separately scoped. Sprint bugs tied to the agreed repair are covered for seven days after handoff.</p>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-sky-400/[0.04]">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">How the engagement works</p>
            <h2 className="mt-4 text-3xl font-bold">Scope, repair, test, hand off.</h2>
            <ol className="mt-8 grid gap-8 md:grid-cols-3">
              {[["01", "Describe", "Tell us what failed, what should happen, and which systems are involved."], ["02", "Confirm scope", "We review the brief and confirm whether one core workflow fits the sprint, along with required access."], ["03", "Repair and hand off", "We work through the agreed 72-hour sprint, test the repair, and provide the walkthrough and documentation."]].map(([number, title, text]) => <li key={number}><span className="text-sm font-bold text-sky-300">{number}</span><h3 className="mt-3 text-xl font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-300">{text}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl rounded-3xl border border-slate-800 bg-slate-900/50 p-7 sm:p-9">
            <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">Relevant project evidence</p>
            <h2 className="mt-4 text-2xl font-bold">A verified review describes backend troubleshooting.</h2>
            <p className="mt-4 leading-relaxed text-slate-300">An Upwork client review documents work stabilizing and hardening a Retell AI, n8n, and GoHighLevel backend, including troubleshooting payload structures and token permissions. That project is evidence of related technical work, not a claim that it was an Automation Fix Sprint.</p>
            <a href="/automation-fix-sprint#upwork-review" className="mt-5 inline-block font-semibold text-sky-300 underline decoration-sky-400/50 underline-offset-4 hover:text-sky-200">Read the full verified client review</a>
          </div>
        </section>

        <section className="border-t border-slate-800">
          <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
            <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">Repair questions</p>
            <h2 className="mt-4 text-3xl font-bold">Before you start</h2>
            <dl className="mt-8 divide-y divide-slate-800">{faqs.map(([question, answer]) => <div key={question} className="py-5"><dt className="font-bold text-white">{question}</dt><dd className="mt-2 leading-relaxed text-slate-400">{answer}</dd></div>)}</dl>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
          <div className="grid items-center gap-8 rounded-3xl border border-sky-400/20 bg-sky-400/[0.06] p-7 sm:p-10 md:grid-cols-[1fr_auto]">
            <div><p className="text-xs font-semibold tracking-[0.25em] text-sky-300 uppercase">Start with the failure</p><h2 className="mt-4 text-3xl font-bold">Tell us what stopped working.</h2><p className="mt-3 max-w-2xl leading-relaxed text-slate-300">Share the failure, intended result, and systems involved. We will review whether it fits the $750 Automation Fix Sprint.</p></div>
            <TrackedLink href={bookingHref} placement="automation_repair_footer" cta="Automation Fix Sprint" className="rounded-full bg-sky-500 px-7 py-4 text-center font-bold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">Start an Automation Fix Sprint</TrackedLink>
          </div>
          <p className="mt-5 text-center text-sm text-slate-500">Looking for a new workflow build? <a href="/start-project" className="text-sky-300 underline underline-offset-4">Describe a custom project</a>.</p>
        </section>
      </div>
    </main>
  );
}
