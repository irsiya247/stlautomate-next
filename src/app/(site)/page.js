import TrackedLink from "../components/TrackedLink";

const lanes = [
  {
    label: "FIX",
    title: "Something is broken? We fix it.",
    copy: "Diagnose and repair workflow failures, CRM issues, websites, APIs, and webhooks. Find the failure, agree on the repair, and verify the result.",
    href: "/fix",
  },
  {
    label: "BUILD",
    title: "Something needs to exist? We build it.",
    copy: "Websites, lead systems, automations, integrations, and custom tools built around the way your business works.",
    href: "/build",
  },
  {
    label: "GROW",
    title: "Need a better path to revenue? We improve it.",
    copy: "Strengthen landing pages, lead capture, follow-up, search visibility, and conversion measurement without promising outcomes we cannot control.",
    href: "/grow",
  },
];

const proof = [
  { label: "Workflow repair", detail: "n8n, GoHighLevel, APIs, webhooks, and lead routing" },
  { label: "Voice intake", detail: "Retell-connected post-call processing and CRM handoff work" },
  { label: "Built in St. Louis", detail: "A practical delivery partner for small businesses" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full" style={{ backgroundImage: "linear-gradient(rgba(56,189,248,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.12) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-[-260px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[160px]" />

      <div className="relative z-10 pt-32">
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-8 md:pb-28">
          <div className="max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.35em] text-sky-400">STL Automate · St. Louis, Missouri</p>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight md:text-8xl">
              FIX. BUILD. <span className="text-sky-400">GROW.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-slate-300 md:text-2xl">
              Practical technology for the next thing your business needs.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
              Bring us the business problem. We will work out the technology, scope the work clearly, and test the result before handoff.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <TrackedLink href="/start-project?type=custom-project" placement="homepage_hero_custom_project" cta="Custom Project" className="rounded-full bg-sky-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-sky-500">Tell us what you need</TrackedLink>
              <a href="/proof" className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition-colors hover:border-slate-500">See our work</a>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-3">
          {lanes.map((lane) => (
            <a key={lane.label} href={lane.href} className="group rounded-2xl border border-slate-800 bg-slate-900/45 p-7 transition-colors hover:border-sky-500/60 hover:bg-slate-900/75">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">{lane.label}</p>
              <h2 className="mt-5 text-2xl font-bold leading-tight">{lane.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{lane.copy}</p>
              <span className="mt-7 inline-block text-sm font-semibold text-sky-400 transition-transform group-hover:translate-x-1">Explore {lane.label.toLowerCase()}</span>
            </a>
          ))}
        </section>

        <section className="border-y border-slate-800/80 bg-slate-950/60">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
            {proof.map((item) => (
              <div key={item.label}>
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-[11px] uppercase tracking-[0.35em] text-sky-400">Existing capabilities</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            <a href="/services/custom-automation" className="hover:text-white">Custom automation</a>
            <a href="/services/hubspot-lead-automation" className="hover:text-white">Lead-to-HubSpot systems</a>
            <a href="/services/phone-receptionist" className="hover:text-white">Phone Receptionist</a>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-sky-400">A controlled start</p>
              <h2 className="mt-4 text-3xl font-bold md:text-5xl">Clear scope. Safe testing. Useful handoff.</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
                We reuse the tools you already have where practical, keep public intake free of credentials and raw customer records, and make the next action visible before work begins.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/35 p-7">
              <ol className="space-y-5">
                {["Describe the problem", "Agree on the work", "Repair or build in a controlled path", "Verify and hand it over"].map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-mono text-sm text-sky-400">0{index + 1}</span>
                    <span className="text-sm text-slate-200">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-28 text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-sky-400">Custom projects available</p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">Start with the thing that is costing you time.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400">Tell us what is broken, what needs to exist, or what should work better. We will help identify the smallest useful next step.</p>
          <TrackedLink href="/start-project?type=custom-project" placement="homepage_footer_custom_project" cta="Custom Project" className="mt-8 inline-block rounded-full bg-sky-600 px-7 py-4 text-lg font-semibold text-white transition-colors hover:bg-sky-500">Tell us what you need</TrackedLink>
        </section>
      </div>
    </main>
  );
}
