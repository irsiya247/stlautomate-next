export default function Tech() {
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
          <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">Under the Hood</div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            The stack, <span className="text-sky-400">if you want to know</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-6">
            Most of our clients don&apos;t care about this page, and that&apos;s fine. But if you&apos;re evaluating us technically, or you&apos;re the person who has to sign off on what goes into your infrastructure, here&apos;s exactly what we use and why.
          </p>
          <p className="text-slate-500 text-sm mb-20">
            No black boxes. No vendor lock-in pitch. Just the actual tools and architecture.
          </p>

          {/* WORKFLOW ORCHESTRATION */}
          <section className="mb-20">
            <div className="text-sky-400 text-xs tracking-widest uppercase mb-3">Workflow Orchestration</div>
            <h2 className="text-3xl font-bold mb-6">n8n</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Every automation we build runs on <span className="text-white font-medium">n8n</span>, an open-source workflow automation platform that handles triggers, logic branching, API calls, and integrations in a single visual pipeline.
                </p>
                <p>
                  We chose n8n because it gives us fine-grained control over every node in the workflow without abstracting away the logic. When something goes wrong, we can see exactly where and why, not just that something failed.
                </p>
                <p>
                  Each client&apos;s workflows are isolated. Your data doesn&apos;t touch another client&apos;s workflow under any circumstance.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Trigger types", value: "Webhooks, schedules, email (IMAP), HTTP" },
                  { label: "Execution model", value: "Event-driven, stateful with wait nodes" },
                  { label: "Error handling", value: "Per-node routing with fallback logging" },
                  { label: "Hosting", value: "n8n Cloud (SOC 2 compliant)" },
                  { label: "Client isolation", value: "Separate workflow namespaces per client" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between gap-4 border-b border-slate-800 pb-3 text-sm">
                    <span className="text-slate-500">{label}</span>
                    <span className="text-slate-300 text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="border-t border-slate-800 mb-20" />

          {/* VOICE */}
          <section className="mb-20">
            <div className="text-sky-400 text-xs tracking-widest uppercase mb-3">Voice Infrastructure</div>
            <h2 className="text-3xl font-bold mb-6">VAPI</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Our Phone Receptionist is built on <span className="text-white font-medium">VAPI</span>, a voice AI platform designed specifically for building production phone agents. It handles call routing, speech-to-text, LLM inference, and text-to-speech in a single low-latency pipeline.
                </p>
                <p>
                  VAPI&apos;s end-of-call webhook fires a structured JSON payload (caller ID, transcript, call duration, and metadata) into our n8n workflow, which then scores the lead, logs it, and fires alerts.
                </p>
                <p>
                  Average latency from speech to response is under 800ms in production. Callers experience a natural conversation, not a robotic pause.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "STT provider", value: "Deepgram (Nova-2)" },
                  { label: "LLM", value: "GPT-4o / configurable per client" },
                  { label: "TTS provider", value: "ElevenLabs / PlayHT" },
                  { label: "Avg. response latency", value: "< 800ms" },
                  { label: "Call data", value: "Full transcript + metadata via webhook" },
                  { label: "Phone number", value: "Works with existing numbers via SIP" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between gap-4 border-b border-slate-800 pb-3 text-sm">
                    <span className="text-slate-500">{label}</span>
                    <span className="text-slate-300 text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="border-t border-slate-800 mb-20" />

          {/* LEAD INTELLIGENCE */}
          <section className="mb-20">
            <div className="text-sky-400 text-xs tracking-widest uppercase mb-3">Lead Intelligence</div>
            <h2 className="text-3xl font-bold mb-6">Scoring & Routing</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Lead scoring runs through a custom JavaScript scoring engine inside n8n, backed by <span className="text-white font-medium">Groq</span> for fast LLM inference on unstructured inputs like email bodies and call transcripts.
                </p>
                <p>
                  Scoring factors include job title seniority, company size, industry vertical, inbound source, and intent signals extracted from message content. Scores map to three tiers: Hot, Warm, and Cold. These determine routing, follow-up cadence, and alert priority.
                </p>
                <p>
                  For the Automated Receptionist Suite, RAG (retrieval-augmented generation) is used to pull answers from a client-specific knowledge base stored in Google Sheets, ensuring responses are always grounded in your actual business information.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Scoring engine", value: "Custom JS + Groq LLM" },
                  { label: "Groq model", value: "Llama 3.1 70B (low latency)" },
                  { label: "Knowledge base", value: "Google Sheets (RAG lookup)" },
                  { label: "Tier thresholds", value: "Hot ≥ 10pts, Warm ≥ 6pts, Cold < 6pts" },
                  { label: "Scoring factors", value: "Title, industry, size, source, intent" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between gap-4 border-b border-slate-800 pb-3 text-sm">
                    <span className="text-slate-500">{label}</span>
                    <span className="text-slate-300 text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="border-t border-slate-800 mb-20" />

          {/* INTEGRATIONS */}
          <section className="mb-20">
            <div className="text-sky-400 text-xs tracking-widest uppercase mb-3">Integrations</div>
            <h2 className="text-3xl font-bold mb-8">What we connect to</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "Gmail / IMAP", desc: "Inbound email parsing, outbound sending, reply detection" },
                { name: "Google Sheets", desc: "Lead logging, knowledge base, CRM-lite for smaller clients" },
                { name: "Google Calendar", desc: "Booking detection, availability checks" },
                { name: "Calendly", desc: "Appointment booking link injection and booking confirmation" },
                { name: "HubSpot CRM", desc: "Contact creation, deal logging, pipeline updates" },
                { name: "Slack", desc: "Hot lead alerts, meeting notifications, internal ops" },
                { name: "WhatsApp (Twilio)", desc: "Real-time SMS/WhatsApp alerts for time-sensitive leads" },
                { name: "Twilio SMS", desc: "Outbound SMS sequences, opt-out handling" },
                { name: "Hunter.io", desc: "Email discovery for outbound prospecting workflows" },
              ].map(({ name, desc }) => (
                <div key={name} className="border border-slate-800 bg-slate-900/30 rounded-xl p-5">
                  <h3 className="font-semibold text-white text-sm mb-2">{name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-slate-800 mb-20" />

          {/* SECURITY */}
          <section className="mb-20">
            <div className="text-sky-400 text-xs tracking-widest uppercase mb-3">Security & Data</div>
            <h2 className="text-3xl font-bold mb-6">What happens to your data</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed max-w-3xl">
              <p>
                We come from a cybersecurity background. Data handling isn&apos;t an afterthought. It&apos;s part of the architecture.
              </p>
              <p>
                Customer data processed by your workflows stays in your own Google Sheets and CRM. We don&apos;t aggregate client data, we don&apos;t train models on your leads, and we don&apos;t store sensitive contact information in our own databases.
              </p>
              <p>
                Credentials are stored in n8n&apos;s encrypted credential store, never in workflow code, never in plain text. API keys are scoped to the minimum permissions required for each integration.
              </p>
              <p>
                If you have specific compliance requirements such as HIPAA, PCI, or SOC 2, tell us on the intake call. Some configurations require additional setup; we&apos;ll be straight with you about what&apos;s possible.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="border border-slate-800 bg-slate-900/20 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-3">Want to go deeper?</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              If you have architecture questions, integration edge cases, or security requirements, book a technical call. We&apos;ll go into as much detail as you need.
            </p>
            <a href="/intake" className="bg-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg inline-block hover:bg-sky-500 transition-colors">
              Book a Technical Call
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}
