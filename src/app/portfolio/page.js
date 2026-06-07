export default function Portfolio() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold">Results & Systems Built</h1>

      <p className="text-slate-400 mt-4">
        Real-world automation outcomes from deployed systems.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-6">

        <div className="border border-slate-800 p-6 rounded-xl">
          <h3 className="font-semibold">Lead Automation System</h3>
          <p className="text-slate-400 text-sm mt-2">
            Reduced manual lead handling by 87% through webhook-based routing pipelines.
          </p>
        </div>

        <div className="border border-slate-800 p-6 rounded-xl">
          <h3 className="font-semibold">CRM Sync Engine</h3>
          <p className="text-slate-400 text-sm mt-2">
            Real-time data synchronization across multiple sales systems.
          </p>
        </div>

      </div>

    </main>
  );
}