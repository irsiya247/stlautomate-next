import WorkflowEngine from "@/components/WorkflowEngine";

export default function Infrastructure() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold">
        Automation Infrastructure
      </h1>

      <p className="text-slate-400 mt-4 max-w-2xl">
        We build execution-layer systems that connect APIs, CRMs, and data pipelines into real-time automation networks.
      </p>

      <div className="mt-10 border border-slate-800 bg-slate-900/20 rounded-2xl p-10">
        <WorkflowEngine />
      </div>

      <div className="mt-10 text-slate-400 text-sm space-y-3">
        <p>• Webhook-driven architecture</p>
        <p>• Deterministic workflow execution</p>
        <p>• Zero manual processing dependency</p>
      </div>

    </main>
  );
}