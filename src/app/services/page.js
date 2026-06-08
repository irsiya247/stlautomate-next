export default function Services() {
  return (
    <main className="min-h-screen bg-[#030712] text-white relative overflow-hidden">

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: "linear-gradient(rgba(56,189,248,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>
      <div className="absolute top-[-250px] left-1/2 w-[700px] h-[700px] bg-sky-500/10 blur-[160px] rounded-full -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* PAGE HEADER */}
          <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">What We Build</div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Three tools <span className="text-sky-400">zero guesswork</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-20">
            Every product is built, configured, and tested by us. You don&apos;t touch any software. You just start getting more customers.
          </p>

          {/* ── PRODUCT 1: AI RECEPTIONIST SUITE ── */}
          <div id="receptionist" className="mb-28 scroll-mt-24">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-sky-400 text-xs tracking-widest uppercase mb-3">Product 01</div>
                <h2 className="text-4xl font-extrabold mb-4">Automated Receptionist Suite</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  Your inbox becomes a 24/7 sales assistant. Every email gets answered instantly, every lead gets followed up automatically, and every booking gets detected the moment it happens. Your team never has to chase anyone.
                </p>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  Most businesses lose customers because they respond too slowly or forget to follow up. This system eliminates both problems entirely.
                </p>
                <a href="/intake" className="bg-sky-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-500 transition-colors inline-block">
                  Get This For My Business
                </a>
              </div>

              <div className="space-y-4">
                {/* Three workflow cards */}
                <div className="border border-slate-700 bg-slate-900/40 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-sky-400 text-xs font-bold">1</div>
                    <h3 className="font-semibold text-white">Email Receptionist</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Reads every inbound email, pulls the right answer from your business knowledge base, and replies within seconds, day or night. Scores each lead as Hot, Warm, or Cold so you always know who matters most.
                  </p>
                </div>

                <div className="border border-slate-700 bg-slate-900/40 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-sky-400 text-xs font-bold">2</div>
                    <h3 className="font-semibold text-white">Automatic Follow-Up</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Hot leads get two follow-up emails over 4 days. Warm leads get one at 72 hours. No one falls through the cracks. It all stops automatically the moment they book.
                  </p>
                </div>

                <div className="border border-slate-700 bg-slate-900/40 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-sky-400 text-xs font-bold">3</div>
                    <h3 className="font-semibold text-white">Booking Detector</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Checks your calendar every 15 minutes. The moment a lead books an appointment, the follow-up stops and the lead is marked as Booked. You will never accidentally email someone who already said yes.
                  </p>
                </div>

                <div className="border border-sky-400/20 bg-sky-400/5 rounded-xl p-4">
                  <p className="text-sky-300 text-sm font-medium">🔔 You also get a WhatsApp alert the moment a hot lead lands in your inbox.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mb-28" />

          {/* ── PRODUCT 2: VAPI RECEPTIONIST ── */}
          <div id="vapi" className="mb-28 scroll-mt-24">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-sky-400 text-xs tracking-widest uppercase mb-3">Product 02</div>
                <h2 className="text-4xl font-extrabold mb-4">Phone Receptionist</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  A voice agent that answers your phone line, has real conversations with callers, and scores every call. You will always know which calls are worth calling back first.
                </p>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  Every missed call is a potential customer that called your competitor instead. This stops that from happening.
                </p>
                <a href="/intake" className="bg-sky-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-500 transition-colors inline-block">
                  Get This For My Business
                </a>
              </div>

              <div className="space-y-4">
                <div className="border border-slate-700 bg-slate-900/40 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Answers every call, 24/7</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    A natural-sounding voice agent picks up every call: during business hours, after hours, and on weekends. Callers get real answers, not a voicemail.
                  </p>
                </div>
                <div className="border border-slate-700 bg-slate-900/40 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Scores the call after it ends</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    When the call is over, the system reviews the transcript, scores the lead as Hot, Warm, or Cold, and logs it to your spreadsheet automatically.
                  </p>
                </div>
                <div className="border border-slate-700 bg-slate-900/40 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Alerts you on the right calls</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Hot and Warm callers trigger an instant WhatsApp alert to you. Call back the people who actually want to buy, not tire-kickers.
                  </p>
                </div>
                <div className="border border-slate-700 bg-slate-900/40 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Custom script, your voice</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We write the script, configure the persona, and test it against real call scenarios before it ever touches a customer. Works with your existing phone number.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mb-28" />

          {/* ── PRODUCT 3: AI SDR ── */}
          <div id="sdr" className="mb-20 scroll-mt-24">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-sky-400 text-xs tracking-widest uppercase mb-3">Product 03</div>
                <h2 className="text-4xl font-extrabold mb-4">Automated Sales Outreach</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  Give us a list of businesses you want to reach. Our system sends personalized emails, follows up on its own, detects when someone is interested, and books the meeting, without you lifting a finger.
                </p>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  This is what a full-time sales rep does: prospecting, emailing, following up, booking calls. All of it automated and running around the clock.
                </p>
                <a href="/intake" className="bg-sky-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-500 transition-colors inline-block">
                  Get This For My Business
                </a>
              </div>

              <div className="space-y-4">
                <div className="border border-slate-700 bg-slate-900/40 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Scores every prospect before sending</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Before a single email goes out, the system scores each prospect by job title, company size, and industry. Hot leads get a different message than warm or cold ones.
                  </p>
                </div>
                <div className="border border-slate-700 bg-slate-900/40 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Sends and follows up automatically</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    The system sends the first email, waits, follows up, and sends a second touch, all on its own. If someone doesn&apos;t respond, it moves on. No manual work.
                  </p>
                </div>
                <div className="border border-slate-700 bg-slate-900/40 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Detects interest and books the meeting</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    When someone replies with interest, the system detects it, sends a booking email with your calendar link, and alerts you on Slack. Not-interested replies get archived automatically.
                  </p>
                </div>
                <div className="border border-slate-700bg-slate-900/40 rounded-xl p-5 border border-slate-700">
                  <h3 className="font-semibold text-white mb-2">Logs everything to your CRM</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Every lead, every email, every reply is logged to HubSpot and Google Sheets automatically. You always have a clean record of what happened with every prospect.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM CTA */}
          <div id="custom" className="border-t border-slate-800 pt-20 text-center scroll-mt-24">
            <h2 className="text-3xl font-bold mb-4">Don&apos;t see exactly what you need?</h2>
            <p className="text-slate-400 text-lg mb-4 max-w-xl mx-auto">
              These three are our most common builds. We also take on custom projects for businesses with specific workflows, integrations, or ideas that don&apos;t fit a standard product.
            </p>
            <p className="text-slate-500 text-base mb-8 max-w-xl mx-auto">
              If you have something in mind, tell us about it on the call. We&apos;ll be straight with you about whether we can build it.
            </p>
            <a href="/intake" className="bg-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg inline-block hover:bg-sky-500 transition-colors">
              Book a Free Call
            </a>
          </div>

        </div>
      </