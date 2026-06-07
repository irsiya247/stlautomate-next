import WorkflowEngine from "@/components/WorkflowEngine";

export default function Home() {
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
            For small businesses that can&apos;t afford to miss a call or lose a customer
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-[1.05]">
            Your business runs <span className="text-sky-400">24/7</span><br />
            No extra staff required
          </h1>

          <p className="mt-6 text-slate-400 max-w-2xl text-lg">
            We set up phone agents, email systems, and sales outreach tools so your team can focus on the work that actually pays.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#video" className="bg-sky-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-500 transition-colors">
              See It In Action
            </a>
            <a href="/intake" className="border border-slate-700 px-6 py-3 rounded-full text-slate-300 hover:border-slate-500 transition-colors">
              Talk To Us
            </a>
          </div>
        </section>

        {/* VIDEO */}
        <section id="video" className="max-w-4xl mx-auto px-6 mt-20 scroll-mt-24">
          <h2 className="text-2xl font-bold text-center mb-8">Watch how it works in 2 minutes</h2>
          <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://www.loom.com/embed/79983c093ef6428abc9db2afe8effb68?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        </section>

        {/* TRUST STATS */}
        <section className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-12">
          {[
            { value: "24/7", label: "Phones answered, even at 2am" },
            { value: "< 1 min", label: "Average response time" },
            { value: "0", label: "Calls sent to voicemail" },
            { value: "3 tools", label: "Built for your business" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-extrabold">{value}</p>
              <p className="text-slate-500 text-xs tracking-widest uppercase mt-1">{label}</p>
            </div>
          ))}
        </section>

        {/* PRODUCT CARDS */}
        <section className="max-w-6xl mx-auto px-6 mt-20">
          <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">
            What We Build For You
          </div>
          <h2 className="text-3xl font-bold mb-10">Three tools. One less thing to worry about.</h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Automated Receptionist Suite */}
            <div className="border border-slate-800 bg-slate-900/30 rounded-2xl p-7 flex flex-col">
              <div className="text-sky-400 text-xs tracking-widest uppercase mb-3">Automated Receptionist Suite</div>
              <h3 className="font-bold text-xl mb-3">Never lose a lead to a slow reply</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">
                Three workflows working together: answers emails instantly, follows up automatically, and stops the moment someone books. No lead ever falls through the cracks.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">✓</span>
                  Replies to every email from your knowledge base
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">✓</span>
                  Follows up with hot leads over 4 days automatically
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">✓</span>
                  Detects bookings and stops follow-up instantly
                </li>
              </ul>
              <a href="/services#receptionist" className="mt-6 bg-sky-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm text-center hover:bg-sky-500 transition-colors">
                Learn More
              </a>
            </div>

            {/* Automated Sales Outreach */}
            <div className="border border-slate-800 bg-slate-900/30 rounded-2xl p-7 flex flex-col">
              <div className="text-sky-400 text-xs tracking-widest uppercase mb-3">Automated Sales Outreach</div>
              <h3 className="font-bold text-xl mb-3">Find new customers on autopilot</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">
                Give us a prospect list. Our system scores every lead, sends personalized outreach, follows up automatically, and books meetings when someone says yes.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">✓</span>
                  Scores prospects by title, industry, and size
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">✓</span>
                  Sends and follows up without any manual work
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">✓</span>
                  Books the meeting when someone is interested
                </li>
              </ul>
              <a href="/services#sdr" className="mt-6 bg-sky-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm text-center hover:bg-sky-500 transition-colors">
                Learn More
              </a>
            </div>

            {/* Phone Receptionist */}
            <div className="border border-slate-800 bg-slate-900/30 rounded-2xl p-7 flex flex-col">
              <div className="text-sky-400 text-xs tracking-widest uppercase mb-3">Phone Receptionist</div>
              <h3 className="font-bold text-xl mb-3">A voice agent that sounds human</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">
                A fully custom voice assistant for your phone line, built on enterprise-grade voice infrastructure so every caller gets a professional experience.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">✓</span>
                  Natural-sounding conversations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">✓</span>
                  Custom scripts tailored to your business
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">✓</span>
                  Works with your existing phone number
                </li>
              </ul>
              <a href="/services#vapi" className="mt-6 bg-sky-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm text-center hover:bg-sky-500 transition-colors">
                Learn More
              </a>
            </div>

          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="max-w-6xl mx-auto px-6 mt-20 border-t border-slate-800 pt-16">
          <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">
            How It Works
          </div>
          <h2 className="text-3xl font-bold mb-10">Up and running in days, not months.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Tell us about your business", desc: "We do a quick call to learn how you handle calls, bookings, and follow-ups today." },
              { step: "02", title: "We build it for you", desc: "No software to learn. We set everything up and test it before it ever touches a real customer." },
              { step: "03", title: "It runs while you work", desc: "Your systems handle the volume. Your team focuses on the job. You stop losing customers to voicemail." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-5">
                <div className="text-sky-400 font-extrabold text-2xl leading-none mt-1">{step}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ENGINE */}
        <section className="max-w-6xl mx-auto px-6 mt-20">
          <div className="border border-slate-800 bg-slate-900/20 rounded-2xl p-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold">Live Automation Dashboard</h2>
              <p className="text-slate-400 text-sm mt-1">Watching your systems run in real time</p>
            </div>
            <WorkflowEngine />
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="max-w-4xl mx-auto px-6 mt-20 pb-24 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Ready to stop losing customers?</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Book a free 15-minute call. We&apos;ll tell you exactly what we&apos;d build for your business and what it costs. No pitch, no pressure.
          </p>
          <a href="/intake" className="bg-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg inline-block hover:bg-sky-500 transition-colors">
            Book a Free Call
          </a>
        </section>

      </div>
    </main>
  );
}
