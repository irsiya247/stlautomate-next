const levers = ["Landing pages and conversion paths", "Lead capture and follow-up", "Search visibility and intent", "Measurement and attribution", "Revenue operations and next actions"];

export const metadata = {
  title: "Improve Lead and Conversion Systems | STL Automate",
  description: "Improve the systems behind lead capture, follow-up, visibility, conversion measurement, and revenue operations.",
};

export default function GrowPage() {
  return (
    <main className="min-h-screen bg-[#030712] px-6 pb-24 pt-36 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] uppercase tracking-[0.35em] text-sky-400">GROW</p>
        <div className="mt-6 max-w-4xl">
          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">Need more from the systems behind growth?</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">We improve the path from attention to action: clearer landing pages, better lead capture, useful follow-up, and measurement you can inspect.</p>
          <a href="/intake?formType=intake&amp;lane=grow" className="mt-8 inline-block rounded-full bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-500">Talk about what should improve</a>
        </div>
        <div className="mt-20 grid gap-4 border-t border-slate-800 pt-12 md:grid-cols-5">
          {levers.map((lever, index) => <div key={lever} className="rounded-2xl border border-slate-800 bg-slate-900/35 p-5"><span className="font-mono text-sm text-sky-400">0{index + 1}</span><h2 className="mt-4 text-lg font-bold leading-tight">{lever}</h2></div>)}
        </div>
        <div className="mt-16 max-w-2xl rounded-2xl border border-sky-500/20 bg-sky-500/5 p-7"><p className="text-sm leading-relaxed text-slate-300">Growth work is scoped around the system we can actually change. We do not promise rankings, lead volume, revenue, or ROAS.</p></div>
      </div>
    </main>
  );
}
