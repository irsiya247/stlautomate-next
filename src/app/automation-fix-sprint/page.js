import Link from "next/link";

export const metadata = {
  title: "Automation Fix Sprint | STL Automate",
  description:
    "A focused 72-hour sprint to diagnose and repair one broken automation workflow."
};

const problemAreas = [
  "Broken Zapier",
  "Broken Make",
  "Broken n8n",
  "HubSpot",
  "Forms",
  "Alerts",
  "CRM handoffs",
  "Lead routing",
  "Duplicate records",
  "Failed notifications",
  "Messy data syncs"
];

const includedItems = [
  ["Diagnostic audit", "We trace the workflow, identify the failure point, and confirm the repair scope."],
  ["Fix or rebuild one core workflow", "One clearly defined automation gets the sprint's full attention."],
  ["Test cases", "We run practical test cases through the repaired workflow and document the results."],
  ["Loom handoff", "You receive a clear video walkthrough of what changed and how the workflow operates."],
  ["Simple documentation", "We leave a concise reference for the workflow, connections, and routine checks."],
  ["7-day bug-fix window", "Bugs tied to the agreed sprint scope are covered for seven days after handoff."]
];

const sprintSteps = [
  ["01", "Diagnose", "Review the broken workflow, connected tools, recent failures, and intended outcome."],
  ["02", "Repair", "Fix or rebuild the agreed workflow, then run focused test cases against the repair."],
  ["03", "Hand off", "Deliver the Loom walkthrough, simple documentation, and seven-day bug-fix window."]
];

const bookingHref =
  "mailto:contact@stlautomate.com?subject=Automation%20Fix%20Sprint%20Call";

export default function AutomationFixSprintPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111f] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.25) 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }}
        />
      </div>
      <div
        className="pointer-events-none absolute left-1/2 top-[-22rem] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-sky-500/15 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
          <Link
            href="/"
            className="text-sm font-bold tracking-[0.18em] text-white uppercase"
          >
            STL Automate
          </Link>
          <a
            href={bookingHref}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
          >
            contact@stlautomate.com
          </a>
        </header>

        <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-24 md:pb-28 md:pt-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.35em] text-sky-400 uppercase">
                Automation Fix Sprint
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-5xl md:text-7xl">
                We fix broken automations in 72 hours.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
                A focused repair sprint for the workflow that is dropping leads,
                missing alerts, duplicating records, or forcing your team back
                into manual work.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={bookingHref}
                  className="rounded-full bg-sky-500 px-7 py-4 text-center font-bold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
                >
                  Book a 15-minute automation fix call
                </a>
                <p className="text-sm leading-relaxed text-slate-400">
                  Fixed-scope repair projects typically start at $750.
                </p>
              </div>
            </div>

            <aside className="rounded-3xl border border-slate-700/80 bg-slate-900/70 p-7 shadow-2xl shadow-sky-950/40 backdrop-blur sm:p-9">
              <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">
                Focused repair scope
              </p>
              {[
                ["1 core workflow", "One clearly defined automation receives the sprint's full attention."],
                ["72-hour sprint", "Diagnose, repair, test, and hand off in a short, contained engagement."],
                ["7-day window", "Bug fixes tied to the agreed repair scope remain covered after handoff."]
              ].map(([title, description], index) => (
                <div
                  key={title}
                  className={
                    index < 2
                      ? "border-b border-slate-700/80 py-6"
                      : "pb-0 pt-6"
                  }
                >
                  <p className="text-3xl font-extrabold">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {description}
                  </p>
                </div>
              ))}
            </aside>
          </div>
        </section>

        <section className="border-y border-slate-800/90 bg-slate-950/40">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.35em] text-sky-400 uppercase">
                What we repair
              </p>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl">
                When the handoff breaks, the whole process feels broken.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-400">
                The sprint is built for a specific automation problem with a
                clear business impact and a repairable scope.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {problemAreas.map((problem) => (
                <span
                  key={problem}
                  className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200"
                >
                  {problem}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.35em] text-sky-400 uppercase">
                What is included
              </p>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl">
                A repair you can understand and operate.
              </h2>
              <p className="mt-5 leading-relaxed text-slate-400">
                The goal is a working core workflow, tested and handed back
                with enough context for your team to use it confidently.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {includedItems.map(([title, description]) => (
                <article
                  key={title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/45 p-6"
                >
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/10 text-sm font-bold text-sky-300"
                    aria-hidden="true"
                  >
                    ✓
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
          <div className="rounded-3xl border border-sky-400/20 bg-sky-400/[0.06] p-7 sm:p-10 md:p-12">
            <p className="text-[11px] font-semibold tracking-[0.35em] text-sky-300 uppercase">
              How the sprint works
            </p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl">
              Three steps, one repair target.
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {sprintSteps.map(([number, title, description]) => (
                <article key={number}>
                  <p className="text-sm font-extrabold text-sky-300">{number}</p>
                  <h3 className="mt-4 text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
          <div className="rounded-3xl border border-slate-700/80 bg-slate-900/70 p-7 shadow-2xl shadow-sky-950/40 backdrop-blur sm:p-10 md:p-12">
            <p className="text-[11px] font-semibold tracking-[0.35em] text-sky-400 uppercase">
              Client Review From Upwork
            </p>
            <blockquote className="mt-6">
              <p className="text-sm font-semibold leading-relaxed text-white sm:text-base">
                &ldquo;Matthew is an absolute professional and an exceptional senior-level engineer.&rdquo;
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                I brought him on to audit and optimize an AI voice receptionist system integrated across Retell AI, n8n, and GoHighLevel, and he went completely above and beyond. Not only did he successfully stabilize, harden, and secure our entire multi-tenant backend architecture, but he also pulled forward advanced features—like post-call logging for call duration, sentiment analysis, AI summaries, and recording URLs—directly into our CRM. When the project required deeper troubleshooting around payload structures and token permissions, he carried the rollout through to production as a goodwill gesture to ensure everything was left in a pristine, working state.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                His communication is flawless, his technical documentation is sharp, and his work ethic is rare. I will absolutely be hiring Matthew again for future development phases. If you need a high-caliber developer who delivers masterclass results, hire him!
              </p>
              <footer className="mt-6 flex flex-col gap-1">
                <cite className="not-italic">
                  <span className="text-sm font-bold text-white">Taiquann D.</span>
                  <span className="mx-2 text-slate-600">&middot;</span>
                  <span className="text-sm text-slate-400">TDorsey Solutions</span>
                </cite>
                <p className="text-xs text-slate-500">
                  Upwork Client Review | Retell AI, n8n, and GoHighLevel voice receptionist backend hardening
                </p>
              </footer>
            </blockquote>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
          <div className="grid items-center gap-8 border-t border-slate-800 pt-16 md:grid-cols-[1fr_auto] md:gap-12">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.35em] text-sky-400 uppercase">
                Start with the broken workflow
              </p>
              <h2 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
                Tell us what stopped working.
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-slate-400">
                We will use the 15-minute call to understand the failure,
                confirm whether it fits one sprint, and define the repair scope.
              </p>
            </div>
            <div className="md:text-right">
              <a
                href={bookingHref}
                className="inline-flex rounded-full bg-sky-500 px-7 py-4 text-center font-bold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
              >
                Book a 15-minute automation fix call
              </a>
              <p className="mt-3 text-sm text-slate-500">
                Projects typically start at $750.
              </p>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-800 bg-slate-950/50">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold text-slate-300">STL Automate</p>
            <address className="not-italic">
              1123 Locust St Ste 422, St Louis, MO 63101
            </address>
          </div>
        </footer>
      </div>
    </main>
  );
}
