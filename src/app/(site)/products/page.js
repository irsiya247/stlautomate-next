const products = [
  {
    name: 'Agent Floor',
    status: 'Working prototype · Customer Zero validated',
    summary: 'A governed AI-agent execution and control plane focused on authority, approvals, evidence, and controlled action.',
    details: [
      'Defines what an agent is allowed to do before an action is attempted.',
      'Routes sensitive actions through explicit approval and control points.',
      'Preserves durable evidence so teams can review what happened and why.',
    ],
    note: 'Customer Zero V2 completed one governed HubSpot write with durable evidence. Acceptance and freeze are complete. This page does not represent external production customers.',
  },
  {
    name: 'AI GRC',
    status: 'Validation stage',
    summary: 'An assurance-delta and evidence-governance product concept for AI systems that change over time.',
    details: [
      'Examines changes to models, prompts, agents, data, integrations, use cases, and customers.',
      'Helps determine which compliance evidence remains valid after a change.',
      'Surfaces the evidence and review work that may need to be refreshed.',
    ],
    note: 'AI GRC is being validated as a product direction. Its maturity and scope are still being established.',
  },
  {
    name: 'STL AI Ops',
    status: 'Internal product',
    summary: 'A read-only operations monitor for n8n workflows with alerts and recovery-oriented handling.',
    details: [
      'Monitors internal workflow health without taking write actions.',
      'Sends Slack alerts with deduplication to reduce alert noise.',
      'Supports recovery and reopen handling while running as a background service.',
    ],
    note: 'STL AI Ops is described here as an internal product. No customer deployment is claimed.',
  },
];

export const metadata = {
  title: 'Products / R&D | STL Automate',
  description: 'STL Automate proprietary AI product development: Agent Floor, AI GRC, and STL AI Ops.',
};

export default function Products() {
  return (
    <main className="min-h-screen bg-[#030712] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"><div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(56,189,248,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.12) 1px, transparent 1px)', backgroundSize: '60px 60px' }} /></div>
      <div className="absolute top-[-250px] left-1/2 w-[700px] h-[700px] bg-sky-500/10 blur-[160px] rounded-full -translate-x-1/2 pointer-events-none" />
      <div className="relative z-10 pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">Products / R&amp;D</div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">Proprietary AI infrastructure, <span className="text-sky-400">built carefully</span></h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mb-6">STL Automate is both an automation services business and a technology company developing proprietary AI products. Our services help small businesses implement practical workflows. Our R&amp;D work focuses on making agentic systems more governed, observable, and accountable.</p>
          <p className="text-slate-500 text-base leading-relaxed max-w-3xl mb-16">The products below are presented with their current maturity so visitors can distinguish working validation from product concepts and internal tooling.</p>
          <div className="grid lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <article key={product.name} className="border border-slate-800 bg-slate-900/30 rounded-2xl p-7 flex flex-col">
                <div className="text-sky-400 text-xs tracking-widest uppercase mb-4">{product.status}</div>
                <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                <p className="text-slate-300 leading-relaxed mb-6">{product.summary}</p>
                <ul className="space-y-3 text-slate-400 text-sm leading-relaxed flex-1">{product.details.map((detail) => <li key={detail} className="flex items-start gap-3"><span className="text-sky-400 mt-0.5">✓</span><span>{detail}</span></li>)}</ul>
                <p className="border-t border-slate-800 mt-7 pt-5 text-slate-500 text-sm leading-relaxed">{product.note}</p>
              </article>
            ))}
          </div>
          <section className="border-t border-slate-800 mt-20 pt-16 max-w-4xl">
            <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">For reviewers</div>
            <h2 className="text-3xl font-bold mb-5">A services company with an active product-development track</h2>
            <p className="text-slate-300 leading-relaxed">STL Automate LLC provides automation implementation services and uses that work to stay grounded in operational needs. In parallel, the company develops proprietary AI infrastructure products. Agent Floor has completed a Customer Zero validation milestone. AI GRC is in validation, and STL AI Ops is an internal read-only operations product. We are sharing these materials to make the product work and its current maturity verifiable without overstating customers, funding, revenue, or production traction.</p>
          </section>
          <div className="mt-12"><a href="/intake" className="bg-sky-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-500 transition-colors inline-block">Talk To Us</a></div>
        </div>
      </div>
    </main>
  );
}
