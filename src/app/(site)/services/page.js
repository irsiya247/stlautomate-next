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
            Every product is built, configured, and tested by STL Automate. Our team handles the technical setup and shows you how the workflow operates before it goes live.
          </p>

          {/* ── PRODUCT 1: AI RECEPTIONIST SUITE ── */}
          <div id="receptionist" className="mb-28 scroll-mt-24">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-sky-400 text-xs tracking-widest uppercase mb-3">Product 01</div>
                <h2 className="text-4xl font-extrabold mb-4">Automated <span className="text-sky-400">Receptionist Suite</span></h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  Your inbox becomes a structured lead-response queue. The system can classify inquiries, prepare response drafts, flag follow-up, and detect bookings so your team knows what needs attention.
                </p>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  The goal is to reduce slow responses and missed follow-up while keeping your team in control of external messages.
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
                    Reviews configured inbound emails, uses your approved business information to prepare a response draft, and scores each lead as Hot, Warm, or Cold for your team.
                  </p>
                </div>

                <div className="border border-slate-700 bg-slate-900/40 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-sky-400 text-xs font-bold">2</div>
                    <h3 className="font-semibold text-white">Follow-Up Draft Queue</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Follow-up drafts can be scheduled by lead status and routed for human approval. When a booking is detected, pending follow-up is removed from the approval queue.
                  </p>
                </div>

                <div className="border border-slate-700 bg-slate-900/40 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-sky-400 text-xs font-bold">3</div>
                    <h3 className="font-semibold text-white">Booking Detector</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Checks the connected calendar on a defined interval. When a lead books, the CRM status is updated and pending follow-up is flagged to stop before another message is approved.
                  </p>
                </div>

                <div className="border border-sky-400/20 bg-sky-400/5 rounded-xl p-4">
                  <p className="text-sky-300 text-sm font-medium">🔔 Hot-lead and workflow alerts can be routed to your team in Slack.</p>
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
                <h2 className="text-4xl font-extrabold mb-4">Phone <span className="text-sky-400">Receptionist</span></h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  A Phone Receptionist that answers your phone line, talks with callers, captures their needs, and helps your team prioritize callbacks.
                </p>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  Missed calls can become lost opportunities. The Phone Receptionist is designed to reduce voicemail drop-off and give each caller a clear next step.
                </p>
                <a href="/intake" className="bg-sky-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-500 transition-colors inline-block">
                  Get This For My Business
                </a>
              </div>

              <div className="space-y-4">
                <div className="border border-slate-700 bg-slate-900/40 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Provides 24/7 call coverage</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    The Phone Receptionist can be configured to answer during business hours, after hours, and on weekends so callers receive a guided response instead of a generic voicemail.
                  </p>
                </div>
                <div className="border border-slate-700 bg-slate-900/40 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Scores the call after it ends</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    When the call is over, the system can review the transcript, score the lead as Hot, Warm, or Cold, and log the result to HubSpot.
                  </p>
                </div>
                <div className="border border-slate-700 bg-slate-900/40 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Alerts you on the right calls</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Hot and Warm callers can trigger a Slack alert with the captured details so your team can prioritize the callback.
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
                <h2 className="text-4xl font-extrabold mb-4">Automated <span className="text-sky-400">Sales Outreach</span></h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  Give STL Automate an approved list of businesses you want to reach. The system prepares personalized drafts, routes them for human approval, detects replies, and keeps the next action visible.
                </p>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  Research, drafting, follow-up planning, and CRM logging can be automated. External outreach remains under your team&apos;s approval.
                </p>
                <a href="/intake" className="bg-sky-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-500 transition-colors inline-block">
                  Get This For My Business
                </a>
              </div>

              <div className="space-y-4">
                <div className="border border-slate-700 bg-slate-900/40 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Scores prospects before approval</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Before a draft enters the approval queue, the system scores each prospect using approved fit criteria. Higher-fit prospects can receive a more specific draft.
                  </p>
                </div>
                <div className="border border-slate-700 bg-slate-900/40 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Prepares follow-up for approval</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    The system prepares the first message and later follow-up drafts. A person reviews and approves each external send.
                  </p>
                </div>
                <div className="border border-slate-700 bg-slate-900/40 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Detects interest and books the meeting</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    When someone replies with interest, the system alerts your team in Slack and prepares a booking response with your calendar link for approval.
                  </p>
                </div>
                <div className="border border-slate-700 bg-slate-900/40 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Every email is written for that recipient</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Not a template with a name swapped in. The system reads each prospect&apos;s company, industry, and likely pain points and writes a message specific to them.
                  </p>
                </div>
                <div className="border border-slate-700 bg-slate-900/40 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Logs everything to your CRM</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Configured lead, email, approval, and reply events are logged to HubSpot so your team has one CRM record of what happened.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM CTA */}
          <div id="custom" className="border-t border-slate-800 pt-20 text-center scroll-mt-24">
            <h2 className="text-3xl font-bold mb-4">Don&apos;t see exactly <span className="text-sky-400">what you need?</span></h2>
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
      </div>
    </main>
  );
}
