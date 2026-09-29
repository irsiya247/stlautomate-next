const builds = ["Websites and landing pages", "Lead and CRM systems", "n8n automations and integrations", "AI-assisted operational workflows", "Internal tools for repetitive work"];

export const metadata = {
  title: "Build Practical Business Systems | STL Automate",
  description: "Websites, lead systems, automations, integrations, and custom tools built around how your business works.",
};

export default function BuildPage() {
  return (
    <main className="min-h-screen bg-[#030712] px-6 pb-24 pt-36 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] uppercase tracking-[0.35em] text-sky-400">BUILD</p>
        <div className="mt-6 max-w-4xl">
          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">Something needs to exist? We build it.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">A useful system starts with the way your team actually works. We scope the outcome, build in the right tools, and leave you with a clear handoff.</p>
          <a href="/intake?formType=intake&amp;lane=build" className="mt-8 inline-block rounded-full bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-500">Tell us what you need built</a>
        </div>
        <div className="mt-20 grid gap-5 md:grid-cols-2">
          {builds.map((item, index) => <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/35 p-7"><span className="font-mono text-sm text-sky-400">0{index + 1}</span><h2 className="mt-4 text-xl font-bold">{item}</h2><p className="mt-3 text-sm leading-relaxed text-slate-500">Scoped around a real operating need, with testing and documentation included in the handoff.</p></div>)}
        </div>
        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-slate-500">We do not present every specialty as a completed client case study. The right build starts with an honest fit check and a defined first milestone.</p>
      </div>
    </main>
  );
}
