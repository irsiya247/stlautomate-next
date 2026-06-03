import WorkflowEngine from "@/components/WorkflowEngine";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white relative overflow-hidden">

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
            Lead Capture &amp; Revenue Operations
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-[1.05]">
            We build <span className="text-sky-400">automated systems.</span>
          </h1>

          <p className="mt-6 text-slate-400 max-w-2xl text-lg">
            We turn messy business processes into clean, production-ready workflows: zero operational drag, infinite scale.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/intake" className="bg-sky-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-sky-300 transition-colors">
              Start Implementation
            </a>
            <a href="/infrastructure" className="border border-slate-700 px-6 py-3 rounded-full text-slate-300 hover:border-slate-500 transition-colors">
              View Architecture
            </a>
          </div>
        </section>

        {/* STATS */}
        <section className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-12">
          {[
            { value: "16%", label: "Margin Optimization" },
            { value: "1.0k", label: "Hours Reclaimed" },
            { value: "38.4%", label: "Execution Reliability" },
            { value: "4x", label: "Frictionless Scale" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-extrabold">{value}</p>
              <p className="text-slate-500 text-xs tracking-widest uppercase mt-1">{label}</p>
            </div>
          ))}
        </section>

        {/* ENGINE */}
        <section className="max-w-6xl mx-auto px-6 mt-20">
          <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-6">
            Core Capabilities // System Architecture
          </div>
          <div className="border border-slate-800 bg-slate-900/20 rounded-2xl p-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold">Intelligent Workflow Engine</h2>
              <p className="text-slate-400 text-sm mt-1">
                Live execution visualization of automation pipelines
              </p>
            </div>
            <WorkflowEngine />
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="max-w-6xl mx-auto px-6 mt-10 grid md:grid-cols-3 gap-6">
          <div className="border border-slate-800 rounded-xl p-6">
            <h3 className="font-semibold text-lg">Intelligent Workflows</h3>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
              Eliminate the operational drag capping your daily capacity. We engineer self-sustaining pipelines that instantly capture, qualify, and route leads with zero human friction.
            </p>
            <p className="text-sky-400 text-xs tracking-widest uppercase mt-4">Engineered for immediate speed-to-lead</p>
          </div>
          <div className="border border-slate-800 rounded-xl p-6">
            <h3 className="font-semibold text-lg">Institutional Reliability</h3>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
              Mitigate execution risk with enterprise architecture. Automated pipelines run 24/7, ensuring absolute data integrity.
            </p>
          </div>
          <div className="border border-slate-800 rounded-xl p-6">
            <h3 className="font-semibold text-lg">Executive Oversight</h3>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
              Command total visibility over operations. Track systemic efficiency and live webhook throughput to scale.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 mt-20 text-center border-t border-slate-800 pt-16">
          <h2 className="text-2xl font-semibold">
            Build automation infrastructure for your business
          </h2>
          <p className="text-slate-400 mt-3 text-sm">
            Replace manual operations with scalable execution systems.
          </p>
          <div className="mt-6">
            <a href="/intake" className="bg-sky-400 text-black px-6 py-3 rounded-full font-semibold inline-block hover:bg-sky-300 transition-colors">
              Request Demo
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
