export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-[#030712] text-white relative overflow-hidden">

      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: "linear-gradient(rgba(56,189,248,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>
      <div className="absolute top-[-250px] left-1/2 w-[700px] h-[700px] bg-sky-500/10 blur-[160px] rounded-full -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">The Process</div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Simple for you <span className="text-sky-400">powerful underneath</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-20">
            You don&apos;t need to understand how it works. You just need to know it does. But if you&apos;re curious, here&apos;s exactly what happens from the moment you reach out to the moment your system goes live.
          </p>

          {/* STEPS */}
          <div className="space-y-0">

            {/* Step 1 */}
            <div className="grid md:grid-cols-[80px_1fr] gap-8 pb-16 relative">
              <div className="hidden md:block">
                <div className="w-14 h-14 rounded-full border-2 border-sky-400 flex items-center justify-center text-sky-400 font-extrabold text-xl">1</div>
                <div className="w-px h-full bg-slate-800 ml-7 mt-4" />
              </div>
              <div className="pb-8 border-b border-slate-800">
                <div className="text-sky-400 text-xs tracking-widest uppercase mb-2">Week 1</div>
                <h2 className="text-2xl font-bold mb-4">We learn your business</h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  We start with a 30-minute call. No slides, no demos, just questions. We want to understand how your business works today: how leads come in, how you follow up, what your team does manually every day, and where things fall through the cracks.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  By the end of that call, we know exactly which system to build and what it needs to do.
                </p>
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {["How do customers contact you today?", "What questions do you answer over and over?", "How do you follow up with leads?", "What does your team do that feels like busy work?"].map(q => (
                    <div key={q} className="bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-400 italic">&ldquo;{q}&rdquo;</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-[80px_1fr] gap-8 pb-16 relative">
              <div className="hidden md:block">
                <div className="w-14 h-14 rounded-full border-2 border-sky-400 flex items-center justify-center text-sky-400 font-extrabold text-xl">2</div>
                <div className="w-px h-full bg-slate-800 ml-7 mt-4" />
              </div>
              <div className="pb-8 border-b border-slate-800">
                <div className="text-sky-400 text-xs tracking-widest uppercase mb-2">Week 1–2</div>
                <h2 className="text-2xl font-bold mb-4">We build it. You don&apos;t touch a thing</h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  We configure every workflow, write every script, and connect every integration. If it&apos;s an email system, we load your knowledge base and set the response logic. If it&apos;s a phone agent, we write the script, set the voice, and define how calls get handled.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  You don&apos;t install anything, configure anything, or log into any new software. We handle all of it.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Workflow configuration", "Script writing", "Knowledge base setup", "Lead scoring logic", "Calendar integration", "CRM connection", "Alert setup", "Testing"].map(tag => (
                    <span key={tag} className="bg-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-[80px_1fr] gap-8 pb-16 relative">
              <div className="hidden md:block">
                <div className="w-14 h-14 rounded-full border-2 border-sky-400 flex items-center justify-center text-sky-400 font-extrabold text-xl">3</div>
                <div className="w-px h-full bg-slate-800 ml-7 mt-4" />
              </div>
              <div className="pb-8 border-b border-slate-800">
                <div className="text-sky-400 text-xs tracking-widest uppercase mb-2">Before Go-Live</div>
                <h2 className="text-2xl font-bold mb-4">We test it against real scenarios</h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Before anything touches a real customer, we run it through the situations your business actually faces. We simulate tricky emails, edge-case calls, and unusual requests to make sure the system handles them the way you would.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  If something isn&apos;t right, we fix it. You review the output and give a thumbs up before we flip the switch.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-[80px_1fr] gap-8 pb-16 relative">
              <div className="hidden md:block">
                <div className="w-14 h-14 rounded-full border-2 border-sky-400 flex items-center justify-center text-sky-400 font-extrabold text-xl">4</div>
                <div className="w-px h-full bg-slate-800 ml-7 mt-4" />
              </div>
              <div className="pb-8 border-b border-slate-800">
                <div className="text-sky-400 text-xs tracking-widest uppercase mb-2">Go-Live</div>
                <h2 className="text-2xl font-bold mb-4">It goes live and just runs</h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Your system is live. Emails get answered. Calls get handled. Leads get followed up with. Bookings get detected. You get WhatsApp or Slack alerts when something needs your attention. When everything is running smoothly, you get silence.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Most clients tell us they forget it&apos;s running, until they check the logs and see how much it did while they were focused on actual work.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid md:grid-cols-[80px_1fr] gap-8">
              <div className="hidden md:block">
                <div className="w-14 h-14 rounded-full border-2 border-sky-400 flex items-center justify-center text-sky-400 font-extrabold text-xl">5</div>
              </div>
              <div>
                <div className="text-sky-400 text-xs tracking-widest uppercase mb-2">Ongoing</div>
                <h2 className="text-2xl font-bold mb-4">We stay on as your automation partner</h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Your business changes. New services, new team members, new questions customers keep asking. We update the system as you grow so it stays accurate and useful, not something you set up once and slowly forget about.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  We&apos;re a small team in St. Louis. You&apos;ll have a direct line to the person who built your system.
                </p>
              </div>
            </div>

          </div>

          {/* WHAT YOU DON'T NEED */}
          <div className="mt-24 border border-slate-800 bg-slate-900/20 rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-8 text-center">What you don&apos;t need to have</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "A technical team",
                "Any software experience",
                "An IT department",
                "A big budget",
                "Multiple vendors",
                "A long onboarding process",
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                  <span className="text-sky-400 text-lg">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              The first call is free and takes 30 minutes. We&apos;ll tell you exactly what we&apos;d build and what it would cost. No pressure, no pitch deck.
            </p>
            <a href="/intake" className="bg-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg inline-block hover:bg-sky-500 transition-colors">
              Book That Call
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}
