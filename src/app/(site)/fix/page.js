const problems = [
  "n8n workflow failures",
  "GoHighLevel automation and pipeline issues",
  "CRM, API, and webhook problems",
  "Lead routing and missed-intake failures",
  "Website and integration errors",
];

export const metadata = {
  title: "Fix Broken Workflows and Integrations | STL Automate",
  description: "Scoped troubleshooting and repair for n8n, GoHighLevel, CRM, API, webhook, and lead-routing failures.",
};

export default function FixPage() {
  return (
    <main className="min-h-screen bg-[#030712] px-6 pb-24 pt-36 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] uppercase tracking-[0.35em] text-sky-400">FIX</p>
        <div className="mt-6 grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">Broken workflow? Failed integration? Let&apos;s fix the problem.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">We help businesses diagnose and repair automation problems across n8n, GoHighLevel, CRMs, APIs, and webhooks.</p>
            <a href="/intake?formType=intake&amp;lane=fix" className="mt-8 inline-block rounded-full bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-500">Describe what&apos;s broken</a>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
            <p className="text-sm font-semibold text-white">Common failure patterns</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {problems.map((problem) => <li key={problem} className="flex gap-3"><span className="text-sky-400">+</span>{problem}</li>)}
            </ul>
          </div>
        </div>
        <div className="mt-20 grid gap-5 border-t border-slate-800 pt-12 md:grid-cols-3">
          {["Review the failure", "Agree on the scope", "Repair, test, and hand over"].map((step, index) => <div key={step}><span className="font-mono text-sm text-sky-400">0{index + 1}</span><h2 className="mt-3 text-xl font-bold">{step}</h2><p className="mt-2 text-sm leading-relaxed text-slate-500">A bounded next step keeps the repair understandable and avoids turning a specific failure into an open-ended rebuild.</p></div>)}
        </div>
      </div>
    </main>
  );
}
