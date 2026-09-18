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
            The stack <span className="text-sky-400">if you want to know</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-6">
            Most clients do not need every implementation detail. If you are evaluating us technically or approving what connects to your infrastructure, this page explains how we choose and validate the architecture for each deployment.
          </p>
          <p className="text-slate-500 text-sm mb-20">
            The exact providers, models, and integrations depend on the approved scope.
          </p>

          {/* WORKFLOW ORCHESTRATION */}
          <section className="mb-20">
            <div className="text-sky-400 text-xs tracking-widest uppercase mb-3">Workflow Orchestration</div>
            <h2 className="text-3xl font-bold mb-6">n8n</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  STL Automate&apos;s internal production automation runs on self-hosted <span className="text-white font-medium">n8n</span>, an open-source workflow automation platform that handles triggers, logic branching, API calls, and integrations.
                </p>
                <p>
                  We chose n8n because it gives us fine-grained control over every node in the workflow without abstracting away the logic. When something goes wrong, we can see exactly where and why, not just that something failed.
                </p>
                <p>
                  Client deployments may be customer-owned or STL-managed depending on scope. Credentials and workflows are separated according to the approved deployment architecture.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Trigger types", value: "Webhooks, schedules, email (IMAP), HTTP" },
                  { label: "Execution model", value: "Event-driven, stateful with wait nodes" },
                  { label: "Error handling", value: "Per-node routing with fallback logging" },
                  { label: "Deployment", value: "STL-managed or customer-owned, depending on scope" },
                  { label: "Separation", value: "Defined by the approved deployment architecture" },
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
            <h2 className="text-3xl font-bold mb-6">Programmable Voice</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  The Phone Receptionist uses programmable voice infrastructure selected for the needs of each deployment. Provider, conversation model, speech services, and routing are configured for the approved call flow.
                </p>
                <p>
                  Where supported, call events and metadata can route into n8n for approved classification, logging, notifications, and follow-up preparation.
                </p>
                <p>
                  Provider, model, and phone-routing choices are tested and validated for each implementation before production use.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Voice provider", value: "Selected per deployment" },
                  { label: "Conversation model", value: "Configurable" },
                  { label: "Speech services", value: "Configurable" },
                  { label: "Call metadata", value: "Available where supported" },
                  { label: "Phone routing", value: "Existing number, forwarding, SIP, or provisioned number where supported" },
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
            <h2 className="text-3xl font-bold mb-6">Scoring & <span className="text-sky-400">Routing</span></h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Scoring and routing begin with explicit business rules. Where useful, AI-assisted classification can help interpret unstructured inputs such as email bodies and call transcripts.
                </p>
                <p>
                  Criteria, thresholds, models, labels, and routing rules are defined per implementation. They are tested against the customer&apos;s actual use cases before they affect production behavior.
                </p>
                <p>
                  Knowledge sources are selected according to the workflow. Customer-approved systems remain authoritative where applicable, and generated drafts can be grounded in the business information approved for that use.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Scoring approach", value: "Explicit rules with optional AI-assisted classification" },
                  { label: "Criteria", value: "Defined and approved per implementation" },
                  { label: "Knowledge sources", value: "Selected from approved business systems" },
                  { label: "Thresholds", value: "Configured and tested for the use case" },
                  { label: "Routing", value: "Based on approved outcomes and exceptions" },
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
            <h2 className="text-3xl font-bold mb-8">Common integrations <span className="text-sky-400">include</span></h2>
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
            <h2 className="text-3xl font-bold mb-6">What happens <span className="text-sky-400">to your data</span></h2>
            <div className="space-y-4 text-slate-400 leading-relaxed max-w-3xl">
              <p>
                We come from a cybersecurity background. Data handling isn&apos;t an afterthought. It&apos;s part of the architecture.
              </p>
              <p>
                We minimize access to what each workflow needs. Customer systems remain authoritative systems of record where applicable, while other approved components may process the minimum data required for the configured workflow.
              </p>
              <p>
                We use managed credential mechanisms where supported and scope access to the minimum permissions required for each integration.
              </p>
              <p>
                Regulated-data and compliance requirements require a separate review. STL Automate does not represent an implementation as HIPAA, PCI, SOC 2, or otherwise compliant merely because particular software vendors are used.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="border border-slate-800 bg-slate-900/20 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-3">Want to <span className="text-sky-400">go deeper?</span></h2>
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
