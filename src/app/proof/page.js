export const metadata = {
  title: "Proof STL Automate Can Ship | STL Automate",
  description: "Verified client feedback and project snapshots from automation work that has been shipped, tested, or reviewed by real users.",
};

export default function ProofPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white relative overflow-hidden">

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.12) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      {/* GLOW ORB */}
      <div className="absolute top-[-250px] left-1/2 w-[700px] h-[700px] bg-sky-500/10 blur-[160px] rounded-full -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 pt-36">

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase">
            Real Client Feedback
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-[1.05]">
            Proof before <span className="text-sky-400">promises.</span>
          </h1>
          <p className="mt-6 text-slate-400 max-w-2xl text-lg">
            Verified client feedback and project snapshots from automation work that has been shipped, tested, or reviewed by real users.
          </p>
        </section>

        {/* CLIENT REVIEWS */}
        <section className="max-w-6xl mx-auto px-6 mt-20 border-t border-slate-800 pt-16">
          <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-10">
            Client Reviews
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Card 1 — Michael A. */}
            <div className="border border-slate-800 bg-slate-900/30 rounded-2xl p-8 flex flex-col">
              <div className="text-sky-400 text-xs tracking-widest uppercase mb-2">Local App Build</div>
              <h2 className="font-bold text-lg mb-6">Split-billing app review</h2>
              <div className="flex gap-6 flex-1">
                <div className="w-1 flex-shrink-0 bg-sky-500 rounded-full" />
                <div>
                  <blockquote className="text-slate-200 text-base leading-relaxed mb-6">
                    Splitting costs on a group trip used to mean spreadsheets, back-and-forth texts, and someone always getting it wrong. STL Automate built a custom split-billing app for me and it changed all of that. Clean, fast, it just works.
                  </blockquote>
                  <div>
                    <p className="text-white font-semibold text-sm">Michael A.</p>
                    <p className="text-slate-500 text-xs tracking-widest uppercase mt-1">St. Louis, MO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 — Taiquann D. */}
            <div className="border border-slate-800 bg-slate-900/30 rounded-2xl p-8 flex flex-col">
              <div className="text-sky-400 text-xs tracking-widest uppercase mb-2">Upwork Client Review</div>
              <h2 className="font-bold text-lg mb-6">Retell AI, n8n, and GoHighLevel backend hardening</h2>
              <div className="flex gap-6 flex-1">
                <div className="w-1 flex-shrink-0 bg-sky-500 rounded-full" />
                <div className="flex flex-col flex-1">
                  <blockquote className="text-slate-200 text-base leading-relaxed mb-4">
                    &ldquo;Matthew is an absolute professional and an exceptional senior-level engineer.&rdquo;
                  </blockquote>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    A verified Upwork client review for a Retell AI, n8n, and GoHighLevel voice receptionist backend hardening project.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mt-auto">
                    <div>
                      <p className="text-white font-semibold text-sm">Taiquann D.</p>
                      <p className="text-slate-500 text-xs tracking-widest uppercase mt-1">TDorsey Solutions</p>
                    </div>
                    <a
                      href="/automation-fix-sprint#upwork-review"
                      className="text-sky-400 text-sm font-semibold hover:text-sky-300 transition-colors"
                    >
                      Read the full review →
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* WHAT COUNTS AS PROOF */}
        <section className="max-w-6xl mx-auto px-6 mt-20 border-t border-slate-800 pt-16">
          <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">
            Standards
          </div>
          <h2 className="text-3xl font-bold mb-8">What counts as <span className="text-sky-400">proof</span></h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Verified client feedback",
              "Shipped workflow or app work",
              "Tested automation fixes",
              "CRM or workflow results that can be shown without exposing private client data",
              "Screenshots or case studies only when permission is clear",
            ].map((item) => (
              <div key={item} className="border border-slate-800 bg-slate-900/30 rounded-xl p-5 flex items-start gap-3">
                <span className="text-sky-400 mt-0.5 flex-shrink-0">✓</span>
                <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="max-w-4xl mx-auto px-6 mt-20 pb-24 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Have a workflow that needs <span className="text-sky-400">proof, not promises?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Book a free 15-minute call. We&apos;ll map the workflow, the likely fix, and the next step before you spend money.
          </p>
          <a href="/intake" className="bg-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg inline-block hover:bg-sky-500 transition-colors">
            Book a Free Call
          </a>
        </section>

      </div>
    </main>
  );
}
