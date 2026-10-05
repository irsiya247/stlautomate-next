import Link from "next/link";

export const metadata = {
  title: "Business Automation Services in St. Louis | STL Automate",
  description: "Repair broken workflows, route leads into HubSpot, build custom business automation, or improve phone lead capture. STL Automate serves St. Louis and remote teams.",
  alternates: { canonical: "https://www.stlautomate.com/services" },
};

const offers = [
  {
    title: "Automation Fix Sprint",
    description: "Diagnose and repair a broken n8n, Make, or Zapier workflow, webhook, API connection, or CRM handoff. The sprint has a bounded repair scope, representative testing, verification, and handoff.",
    detail: "Starts at $750",
    href: "/services/automation-repair",
    link: "Review automation repair scope",
  },
  {
    title: "Lead-to-HubSpot System",
    description: "Connect one website lead source to one HubSpot portal with agreed field mapping, duplicate protection, routing, testing, and handoff.",
    detail: "$1,500 fixed scope",
    href: "/services/hubspot-lead-automation",
    link: "Review the HubSpot lead system",
  },
  {
    title: "Phone Receptionist",
    description: "Set up a bounded phone intake path for one number and one agreed use case, with caller routing, testing, and a documented handoff.",
    detail: "$2,500 fixed scope",
    href: "/services/phone-receptionist",
    link: "Review the Phone Receptionist scope",
  },
  {
    title: "Custom Automation",
    description: "Design and build a business process automation or system integration when the work does not fit a packaged service. Scope is agreed before implementation.",
    detail: "Scoped to the process",
    href: "/services/custom-automation",
    link: "Explore custom automation",
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-36">
        <p className="text-xs uppercase tracking-[0.3em] text-sky-400">Services · St. Louis and remote</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">Business automation, workflow repair, and system integrations</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">STL Automate helps small businesses repair broken workflows, connect business systems, and automate repetitive processes. Each engagement starts with a defined problem, agreed scope, and a plan to test and hand off the result.</p>
      </section>

      <section aria-label="Automation services" className="mx-auto grid max-w-6xl gap-5 px-6 pb-20 md:grid-cols-2">
        {offers.map((offer) => (
          <article key={offer.title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
            <p className="text-sm font-semibold text-sky-300">{offer.detail}</p>
            <h2 className="mt-3 text-2xl font-bold">{offer.title}</h2>
            <p className="mt-4 leading-relaxed text-slate-400">{offer.description}</p>
            <Link href={offer.href} className="mt-6 inline-block font-semibold text-sky-300 underline underline-offset-4">{offer.link}</Link>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <h2 className="text-3xl font-bold">How a project works</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            ["Describe the process", "Share what happens today, what should happen instead, and where the current process fails."],
            ["Agree on scope", "Identify the systems, access needs, constraints, acceptance checks, and project boundaries before build work begins."],
            ["Build or repair", "Implement the agreed workflow or integration using the systems and architecture selected for the scope."],
            ["Test and hand off", "Run representative paths, verify the expected result, and document the relevant operating and handoff details."],
          ].map(([title, text], index) => (
            <li key={title} className="rounded-xl border border-slate-800 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">Step 0{index + 1}</p>
              <h3 className="mt-2 font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 rounded-2xl border border-sky-400/20 bg-sky-400/5 p-7">
          <h2 className="text-2xl font-bold">Not sure which service fits?</h2>
          <p className="mt-3 leading-relaxed text-slate-300">Tell us what is broken, what needs to connect, or what takes too much manual work. We will review the fit and identify a useful next step.</p>
          <Link href="/start-project?type=custom-project" className="mt-5 inline-block rounded-full bg-sky-600 px-6 py-3 font-semibold hover:bg-sky-500">Describe your project</Link>
        </div>
      </section>
    </main>
  );
}
