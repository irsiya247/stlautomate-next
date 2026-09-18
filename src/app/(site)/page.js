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
            Your business <span className="text-sky-400">runs 24/7</span>
          </h1>

          <p className="mt-6 text-slate-400 max-w-2xl text-lg">
            We set up Phone Receptionist, email, and sales-outreach systems so your team can focus on the work that actually pays.
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
              src="https://www.loom.com/embed/79983c093ef6428abc9db2afe8effb68?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&hide_speed=true&hide_emoji=true&hideReactions=true"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
              frameBorder="0"
            />
            {/* Cover Loom reaction bar — their embed API ignores hideReactions */}
            <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#030712] pointer-events-none" />
          </div>
          <p className="text-slate-500 text-sm text-center mt-4">This demo shows an HVAC company. The same system works for dental offices, plumbers, real estate agencies, law firms, and any service business that handles inbound leads.</p>
        </section>

        {/* TRUST STATS */}
        <section className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-12">
          {[
            { value: "24/7", label: "Coverage can include nights and weekends" },
            { value: "Human", label: "Approval before external outreach" },
            { value: "CRM", label: "Connected to your business systems" },
            { value: "Custom", label: "Built around your actual workflow" },
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
            Our Core Products
          </div>
          <h2 className="text-3xl font-bold mb-10">What we build most. Not all <span className="text-sky-400">we can do</span></h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Automated Receptionist Suite */}
            <div className="border border-slate-800 bg-slate-900/30 rounded-2xl p-7 flex flex-col">
              <div className="text-sky-400 text-xs tracking-widest uppercase mb-3">Automated Receptionist Suite</div>
              <h3 className="font-bold text-lg mb-3">Turn inquiries into a structured response queue</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">
                The suite can classify inquiries, prepare response drafts, flag follow-up, detect bookings, and prioritize the work your team should review next.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">✓</span>
                  Classifies inquiries using configured business rules
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">✓</span>
                  Prepares response and follow-up drafts for review
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">✓</span>
                  Detects bookings so unnecessary follow-up can stop
                </li>
              </ul>
              <a href="/services#receptionist" className="mt-6 bg-sky-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm text-center hover:bg-sky-500 transition-colors">
                Learn More
              </a>
            </div>

            {/* Automated Sales Outreach */}
            <div className="border border-slate-800 bg-slate-900/30 rounded-2xl p-7 flex flex-col">
              <div className="text-sky-400 text-xs tracking-widest uppercase mb-3">Automated Sales Outreach</div>
              <h3 className="font-bold text-lg mb-3">Automate the work behind outbound sales</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">
                The system can research and score prospects, prepare personalized outreach, track replies, and surface the next action. Humans approve external messages before sending.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">✓</span>
                  Scores prospects using approved fit criteria
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">✓</span>
                  Prepares personalized outreach and follow-up drafts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">✓</span>
                  Detects interested replies and prepares the next step
                </li>
              </ul>
              <a href="/services#sdr" className="mt-6 bg-sky-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm text-center hover:bg-sky-500 transition-colors">
                Learn More
              </a>
            </div>

            {/* Phone Receptionist */}
            <div className="border border-slate-800 bg-slate-900/30 rounded-2xl p-7 flex flex-col">
              <div className="text-sky-400 text-xs tracking-widest uppercase mb-3">Phone Receptionist</div>
              <h3 className="font-bold text-lg mb-3">A useful next step when your team cannot answer</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">
                A configurable Phone Receptionist for calls your team cannot answer. It can capture caller details, identify what they need, and route the next step into your approved business systems.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">✓</span>
                  Natural conversational call handling
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">✓</span>
                  Scripts and escalation rules tailored to your business
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">✓</span>
                  CRM, calendar, and notification integrations where configured
                </li>
              </ul>
              <a href="/services#vapi" className="mt-6 bg-sky-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm text-center hover:bg-sky-500 transition-colors">
                Learn More
              </a>
            </div>

          </div>
        </section>

        {/* SERVICES + PROPRIETARY PRODUCTS */}
        <section className="max-w-6xl mx-auto px-6 mt-24">
          <div className="border border-sky-400/20 bg-sky-400/5 rounded-2xl p-8 md:p-10">
            <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">Services and R&amp;D</div>
            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-4">STL Automate builds for today and develops for what&apos;s next.</h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  STL Automate provides automation implementation services for small businesses while also developing proprietary AI infrastructure and governance products. Services work keeps us close to real operational problems. Product R&amp;D turns those lessons into reusable systems with controlled actions, approvals, and durable evidence.
                </p>
                <a href="/products" className="inline-block mt-6 text-sky-400 font-semibold hover:text-sky-300 transition-colors">Explore Products / R&amp;D →</a>
              </div>
              <div className="space-y-3 text-sm">
                <div className="border border-slate-700 bg-slate-950/40 rounded-xl p-4"><div className="text-white font-semibold">Agent Floor</div><div className="text-slate-400 mt-1">Working prototype, Customer Zero validated</div></div>
                <div className="border border-slate-700 bg-slate-950/40 rounded-xl p-4"><div className="text-white font-semibold">AI GRC</div><div className="text-slate-400 mt-1">Validation stage</div></div>
                <div className="border border-slate-700 bg-slate-950/40 rounded-xl p-4"><div className="text-white font-semibold">STL AI Ops</div><div className="text-slate-400 mt-1">Internal product</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="max-w-6xl mx-auto px-6 mt-20 border-t border-slate-800 pt-16">
          <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">
            How It Works
          </div>
          <h2 className="text-3xl font-bold mb-10">Configured, tested, and approved <span className="text-sky-400">before go-live</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Tell us how your business works", desc: "Map calls, inquiries, bookings, follow-up, and exceptions." },
              { step: "02", title: "We build and test the workflow", desc: "Configure integrations and run controlled tests before production use." },
              { step: "03", title: "You approve the production behavior", desc: "Move live only after the agreed acceptance checks pass." },
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

        {/* UPWORK TESTIMONIAL */}
        <section className="max-w-3xl mx-auto px-6 mt-20">
          <div className="border border-slate-800 bg-slate-900/30 rounded-2xl p-10 flex gap-8">
            <div className="w-1 flex-shrink-0 bg-sky-500 rounded-full" />
            <div>
              <p className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">Upwork Client Review</p>
              <blockquote className="text-slate-200 text-lg leading-relaxed mb-8">
                &ldquo;Matthew is an absolute professional and an exceptional senior-level engineer.&rdquo;
              </blockquote>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                A verified Upwork client review for a Retell AI, n8n, and GoHighLevel voice receptionist backend hardening project.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
        </section>

        {/* BOTTOM CTA */}
        <section className="max-w-4xl mx-auto px-6 mt-20 pb-24 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Ready to stop <span className="text-sky-400">losing customers?</span></h2>
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
