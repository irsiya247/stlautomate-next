"use client";

import { useState, useEffect } from "react";

export default function AutomationAuditModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 12000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value,
      goal: form.goal.value
    };

    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setLoading(false);
    setOpen(false);

    // DIRECT CONVERSION PATH (this is key)
    window.location.href = "https://calendly.com/";
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">

      <div className="bg-[#0B1120] border border-slate-800 rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-lg font-semibold text-sky-400">
          Get Your Automation Audit
        </h2>

        <p className="text-sm text-slate-400 mt-2">
          We identify automation opportunities inside your operations and map a system to fix them.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-3">

          <input
            name="name"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-black border border-slate-700"
            required
          />

          <input
            name="email"
            placeholder="Business Email"
            className="w-full p-3 rounded-lg bg-black border border-slate-700"
            required
          />

          <input
            name="company"
            placeholder="Company"
            className="w-full p-3 rounded-lg bg-black border border-slate-700"
            required
          />

          <textarea
            name="goal"
            placeholder="What do you want to automate?"
            className="w-full p-3 rounded-lg bg-black border border-slate-700"
            rows="3"
          />

          <button
            disabled={loading}
            className="w-full bg-sky-500 text-black font-semibold py-3 rounded-lg"
          >
            {loading ? "Submitting..." : "Get Audit + Book Call"}
          </button>

        </form>

        <button
          onClick={() => setOpen(false)}
          className="text-xs text-slate-500 mt-4"
        >
          Close
        </button>

      </div>
    </div>
  );
}