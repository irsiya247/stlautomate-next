export const metadata = {
  title: "Agent Floor | Controlled Agent Actions by STL Automate",
  description: "Agent Floor is STL Automate's controlled product experience for approvals, permits, evidence, and authority boundaries around consequential agent actions.",
};

export default function AgentFloorPage() {
  return (
    <main className="min-h-screen bg-[#030712] px-6 pb-24 pt-36 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-sky-400">STL Automate product</p>
          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">Agent <span className="text-sky-400">Floor</span></h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-300">Control the actions that should never happen without the right authority, approval, and evidence.</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">Agent Floor is in a controlled validation stage grounded in STL Automate&apos;s Customer Zero work. This page describes a design-partner direction, not general availability or enterprise certification.</p>
          <a href="/intake?formType=agent-floor" className="mt-8 inline-block rounded-full bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-500">Discuss a controlled pilot</a>
        </div>
        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {[{ title: "Approvals", copy: "Make a consequential action wait for the right human decision." }, { title: "Permits", copy: "Keep authority boundaries explicit instead of hiding them in workflow logic." }, { title: "Evidence", copy: "Preserve what happened, why it happened, and what can be reviewed later." }].map((item) => <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/35 p-7"><h2 className="text-xl font-bold">{item.title}</h2><p className="mt-3 text-sm leading-relaxed text-slate-500">{item.copy}</p></div>)}
        </div>
        <div className="mt-16 border-t border-slate-800 pt-10"><p className="max-w-2xl text-sm leading-relaxed text-slate-500">A controlled pilot would begin with one bounded agent action, a defined success test, an access boundary, and a clear review path. It does not require a new legal entity, self-service billing, or a multi-tenant rewrite before the first design-partner conversation.</p></div>
      </div>
    </main>
  );
}
