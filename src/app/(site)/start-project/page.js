import ProjectIntakeForm from "../../components/ProjectIntakeForm";

export const metadata = {
  title: "Start a Custom Automation Project | STL Automate",
  description: "Tell STL Automate what your business needs automated, how the process works today, and what should happen instead."
};

export default async function StartProjectPage({ searchParams }) {
  const query = await searchParams;
  const isRepair = query?.type === "automation-fix-sprint";
  const formType = isRepair ? "automation-fix-sprint" : "custom-project";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <div className="h-full w-full" style={{ backgroundImage: "linear-gradient(rgba(56,189,248,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.12) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-[-250px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[160px]" aria-hidden="true" />
      <div className="relative z-10 px-6 pb-24 pt-36">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[11px] tracking-[0.35em] text-sky-400 uppercase">{isRepair ? "Automation Fix Sprint" : "Custom Automation Project"}</p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">{isRepair ? "Tell us what stopped working." : "Tell us what you need built."}</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              {isRepair ? "Share the broken workflow, where it fails, and the systems involved. The focused repair sprint starts at $750; we'll review the scope with you before any work begins." : "Bring the process, integration, or idea that does not fit a standard service. A few details help us understand the problem before we talk."}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-slate-500">We&apos;ll review your request and follow up by email. Sending this form does not commit you to a project.</p>
          </div>
          <ProjectIntakeForm formType={formType} />
        </div>
      </div>
    </main>
  );
}