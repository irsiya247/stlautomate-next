import Link from "next/link";
import TrackedLink from "../../../components/TrackedLink";

const intakeHref = "/start-project?type=phone-receptionist";

export const metadata = {
  title: "Phone Receptionist & Missed Call Automation | STL Automate",
  description:
    "A bounded Phone Receptionist for missed-call automation, after-hours phone answering, and lead capture from business calls, with agreed routing, testing, and handoff.",
  alternates: {
    canonical: "https://www.stlautomate.com/services/phone-receptionist"
  }
};

const problems = [
  "Calls go to voicemail while your team is serving customers or working in the field.",
  "After-hours and weekend callers do not get a clear next step.",
  "Staff spend time on calls that need basic qualification before a callback.",
  "Caller details or appointment intent are lost between the phone and follow-up."
];

const capabilities = [
  ["Answer the agreed calls", "Configure one inbound business number for one agreed coverage use case, such as overflow or after-hours calls."],
  ["Capture useful details", "Ask the agreed questions about the caller, service need, urgency, and contact details."],
  ["Route the next step", "Follow agreed rules for a callback, transfer, escalation, or appointment request where the connected system supports it."],
  ["Make follow-up visible", "Send the agreed caller summary to one configured CRM or internal destination when the integration and access are in scope."]
];

const included = [
  "One inbound business number and one agreed call-handling use case.",
  "A business-specific greeting, approved information, and a bounded conversation flow.",
  "Basic caller detail and service-need capture with agreed qualification questions.",
  "One agreed next-step path for callback, escalation, routing, or appointment intent.",
  "One scoped CRM or internal handoff when supported by the agreed systems and access.",
  "Representative call-path testing, expected-result verification, and a documented handoff."
];

const excluded = [
  "Replacing a full contact center or supporting unlimited numbers, departments, or call flows.",
  "Complex enterprise IVR, emergency dispatch, or high-risk decisions without separate design and approval.",
  "A complete CRM rebuild, unrestricted custom integrations, or software outside the agreed call flow.",
  "Broad outbound calling campaigns or unapproved customer messages.",
  "Telephony, provider usage, or subscription fees. Any required ongoing cost is identified during scoping."
];

const steps = [
  ["01", "Understand", "Review missed calls, coverage needs, systems, and the desired outcome."],
  ["02", "Map", "Agree on the call flow, questions, routing, fallback, and boundaries."],
  ["03", "Build", "Configure the bounded call flow and one agreed handoff."],
  ["04", "Test and verify", "Run representative scenarios, including expected fallback paths."],
  ["05", "Handoff", "Share the verified behavior, operating notes, and remaining dependencies."]
];

const faqs = [
  ["What does the $2,500 package cover?", "It covers one bounded Phone Receptionist implementation for one inbound number and one agreed use case, including call-flow setup, representative testing, verification, and handoff. We confirm the exact scope before work begins."],
  ["Can it book appointments?", "It can capture appointment intent or connect to one agreed scheduling path when the calendar or booking system supports the required integration and access. We confirm what is feasible during scoping."],
  ["Can it transfer urgent calls to a person?", "We can map an agreed transfer or escalation path where the phone provider and routing configuration support it. Emergency dispatch and decisions that require a trained professional remain with your team."],
  ["Can it use our current number and systems?", "Often, but it depends on your phone provider, number configuration, CRM, calendar, and permissions. We review those constraints before confirming the scope."],
  ["What access do you need?", "We identify the minimum provider, phone, CRM, or calendar access needed for the agreed work. Do not include passwords, API keys, or credentials in the project request."],
  ["How long does setup take?", "Timing depends on the call flow, provider configuration, access, and test cases. We confirm a realistic schedule after reviewing the brief."],
  ["Can you repair or extend a receptionist we already have?", "Yes. A clearly bounded failure may fit the Automation Fix Sprint. A new or expanded call flow may fit this package or a broader Custom Automation project."],
  ["What if our requirements change?", "We explain how the change affects scope, price, and timing, then agree on the next step before additional work begins."]
];

function ArrowLink({ href, children }) {
  return <Link href={href} className="font-semibold text-sky-300 underline decoration-sky-400/40 underline-offset-4 hover:text-sky-200">{children}</Link>;
}

export default function PhoneReceptionistPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <div className="h-full w-full" style={{ backgroundImage: "linear-gradient(rgba(56,189,248,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.18) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>
      <div className="relative z-10">
        <section className="mx-auto max-w-6xl px-6 pb-16 pt-28 md:pb-24 md:pt-36">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">Inbound call answering and missed-call follow-up</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">Give every caller a clear next step, even when your team cannot answer.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">Missed calls, slow callbacks, and incomplete caller details can cost a service business its next conversation. STL Automate builds a Phone Receptionist around one agreed call flow, your business rules, and the systems that need the handoff.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <TrackedLink href={intakeHref} placement="phone_receptionist_hero" cta="Phone Receptionist" className="rounded-full bg-sky-500 px-7 py-4 text-center font-bold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">Plan my Phone Receptionist</TrackedLink>
                <p className="text-sm text-slate-400">Fixed-scope implementation: <strong className="text-white">$2,500</strong>.</p>
              </div>
            </div>
            <aside className="rounded-3xl border border-slate-700 bg-slate-900/70 p-7 sm:p-9">
              <p className="text-xs font-semibold tracking-[0.2em] text-sky-300 uppercase">One call flow, clearly scoped</p>
              <h2 className="mt-4 text-2xl font-bold">Answer → capture → route → verify</h2>
              <p className="mt-3 leading-relaxed text-slate-300">Agree on coverage, caller questions, and the next step before configuring the phone and system handoff.</p>
              <p className="mt-5 border-t border-slate-700 pt-5 text-sm leading-relaxed text-slate-400">One number and one use case are included. Additional call flows or integrations are scoped separately.</p>
            </aside>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-950/50">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
            <div><p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">What it solves</p><h2 className="mt-4 text-3xl font-bold">Stop losing the next conversation to voicemail.</h2><p className="mt-4 leading-relaxed text-slate-400">A guided call flow gives callers a consistent way to explain what they need and gives your team useful information for the next step.</p></div>
            <ul className="space-y-4">{problems.map((item) => <li key={item} className="flex gap-3 leading-relaxed text-slate-300"><span className="text-sky-400" aria-hidden="true">→</span><span>{item}</span></li>)}</ul>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
          <div><p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">What the system can do</p><h2 className="mt-4 text-3xl font-bold">A practical call flow with a human next step.</h2><div className="mt-7 space-y-4">{capabilities.map(([title, description]) => <div key={title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4"><h3 className="font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p></div>)}</div></div>
          <aside className="rounded-3xl border border-slate-800 bg-slate-900/50 p-7 sm:p-9"><p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">Typical call flow</p><h2 className="mt-4 text-2xl font-bold">From ringing phone to useful follow-up.</h2><ol className="mt-6 space-y-4">{[["01","Answer","Use the agreed greeting and coverage rules."],["02","Capture","Ask for caller details and what they need."],["03","Qualify","Apply basic agreed questions and urgency rules."],["04","Route","Offer the agreed callback, transfer, or appointment-intent path."],["05","Hand off","Send the captured details to one configured destination, then verify the result."]].map(([number,title,description]) => <li key={number} className="flex gap-4"><span className="pt-1 text-sm font-bold text-sky-300">{number}</span><div><h3 className="font-bold text-white">{title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-300">{description}</p></div></li>)}</ol></aside>
        </section>

        <section className="border-y border-slate-800 bg-sky-400/[0.04]">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
            <div><p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">The $2,500 engagement</p><h2 className="mt-4 text-3xl font-bold">A bounded implementation, tested before handoff.</h2><p className="mt-4 leading-relaxed text-slate-300">The fixed implementation scope covers one inbound business number and one agreed call use case. We confirm the provider, call rules, integration, and acceptance checks before work begins.</p><ul className="mt-7 space-y-4">{included.map((item) => <li key={item} className="flex gap-3 leading-relaxed text-slate-200"><span className="text-sky-400" aria-hidden="true">✓</span><span>{item}</span></li>)}</ul></div>
            <aside className="rounded-3xl border border-slate-700 bg-slate-950/70 p-7 sm:p-9"><p className="text-xs font-semibold tracking-[0.25em] text-sky-300 uppercase">Outside this package</p><h2 className="mt-4 text-2xl font-bold">Keep the first release focused.</h2><ul className="mt-5 space-y-4">{excluded.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300"><span className="text-slate-500" aria-hidden="true">•</span><span>{item}</span></li>)}</ul><p className="mt-6 border-t border-slate-800 pt-5 text-sm leading-relaxed text-slate-400">For a wider process or several systems, explore <ArrowLink href="/services/custom-automation">Custom Automation</ArrowLink>.</p></aside>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
          <div><p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">Related implementation evidence</p><h2 className="mt-4 text-3xl font-bold">Evidence with its scope clearly labeled.</h2>
            <div className="mt-6 space-y-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"><h3 className="font-bold text-white">Verified Upwork client review</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">A verified client review describes backend stabilization for a voice-receptionist project, including payload and permission troubleshooting and post-call CRM logging. It documents related engineering work, not a customer result from this package.</p><p className="mt-4 text-sm"><ArrowLink href="/automation-fix-sprint#upwork-review">Read the review and project context</ArrowLink></p></div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"><h3 className="font-bold text-white">STL Automate demonstration and pilot materials</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">Existing HVAC materials describe a demonstration call flow for year-round answering, caller-detail capture, and callback routing. This is internal demonstration and offer-design evidence, not a claim of external customer deployment or measured results.</p><p className="mt-4 text-sm"><ArrowLink href="/hvac-founder-pilot">Review the HVAC demonstration and pilot scope</ArrowLink></p></div>
            </div>
          </div>
          <aside className="rounded-3xl border border-slate-800 bg-slate-900/50 p-7 sm:p-9"><p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">Implementation steps</p><h2 className="mt-4 text-2xl font-bold">Understand → Map → Build → Test → Verify → Handoff</h2><ol className="mt-6 space-y-4">{steps.map(([number,title,description]) => <li key={number} className="flex gap-4"><span className="pt-1 text-sm font-bold text-sky-300">{number}</span><div><h3 className="font-bold text-white">{title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-300">{description}</p></div></li>)}</ol></aside>
        </section>

        <section className="border-y border-slate-800 bg-slate-950/50">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
            <div><p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">What helps us scope it</p><h2 className="mt-4 text-3xl font-bold">Bring the call flow and its constraints.</h2><ul className="mt-6 space-y-3 text-slate-300">{["Your current phone provider and how calls arrive today.","When calls go unanswered and which hours need coverage.","What callers should be asked and what information the team needs.","How urgent calls, transfers, appointments, or callbacks should work.","The CRM, calendar, or internal destination involved.","Timing, access constraints, and a budget range."].map((item) => <li key={item} className="flex gap-3"><span className="text-sky-400" aria-hidden="true">→</span><span>{item}</span></li>)}</ul></div>
            <aside className="rounded-3xl border border-slate-800 bg-slate-900/50 p-7 sm:p-9"><h2 className="text-2xl font-bold">Access is discussed after the brief.</h2><p className="mt-4 leading-relaxed text-slate-300">We identify required provider, phone, CRM, and calendar permissions during scoping. Do not send passwords, API keys, or credentials in the project request form.</p><p className="mt-4 text-sm leading-relaxed text-slate-400">Provider compatibility and ongoing usage costs are confirmed before implementation begins.</p></aside>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">Choose the right starting point</p><h2 className="mt-4 text-3xl font-bold">Use the offer that fits the work.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"><h3 className="text-lg font-bold">One broken workflow</h3><p className="mt-3 text-sm leading-relaxed text-slate-400">For a defined automation failure, start with the <ArrowLink href="/automation-fix-sprint">Automation Fix Sprint</ArrowLink>.</p></div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"><h3 className="text-lg font-bold">One web lead path into HubSpot</h3><p className="mt-3 text-sm leading-relaxed text-slate-400">For one source and one HubSpot portal, see the <ArrowLink href="/services/hubspot-lead-automation">Lead-to-HubSpot System</ArrowLink>.</p></div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"><h3 className="text-lg font-bold">Several systems or call flows</h3><p className="mt-3 text-sm leading-relaxed text-slate-400">For broader integrations or workflows beyond this package, explore <ArrowLink href="/services/custom-automation">Custom Automation</ArrowLink>.</p></div>
          </div>
        </section>

        <section className="border-t border-slate-800"><div className="mx-auto max-w-4xl px-6 py-16 md:py-20"><p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">Phone Receptionist questions</p><h2 className="mt-4 text-3xl font-bold">Before you start</h2><dl className="mt-8 divide-y divide-slate-800">{faqs.map(([question,answer]) => <div key={question} className="py-5"><dt className="font-bold text-white">{question}</dt><dd className="mt-2 leading-relaxed text-slate-400">{answer}</dd></div>)}</dl></div></section>

        <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28"><div className="grid items-center gap-8 rounded-3xl border border-sky-400/20 bg-sky-400/[0.06] p-7 sm:p-10 md:grid-cols-[1fr_auto]"><div><p className="text-xs font-semibold tracking-[0.25em] text-sky-300 uppercase">Start with the missed calls</p><h2 className="mt-4 text-3xl font-bold">Map a better next step for callers.</h2><p className="mt-3 max-w-2xl leading-relaxed text-slate-300">Tell us how calls are handled today, what should happen instead, and which systems are involved. We will confirm whether the one-flow $2,500 package fits.</p></div><TrackedLink href={intakeHref} placement="phone_receptionist_footer" cta="Phone Receptionist" className="rounded-full bg-sky-500 px-7 py-4 text-center font-bold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">Plan my Phone Receptionist</TrackedLink></div></section>
      </div>
    </main>
  );
}
