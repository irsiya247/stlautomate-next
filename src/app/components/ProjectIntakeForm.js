"use client";

import { useState } from "react";
import posthog from "posthog-js";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  problem: "",
  current_state: "",
  desired_state: "",
  systems_tools: "",
  is_broken: "",
  timing: "",
  budget_range: "",
  company_url: ""
};

const inputClass =
  "w-full rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/15";

function getAttribution() {
  let firstTouch = {};
  try {
    firstTouch = JSON.parse(window.sessionStorage.getItem("stl-website-attribution") || "{}");
  } catch {
    firstTouch = {};
  }

  return {
    source_page: `${window.location.origin}${window.location.pathname}`,
    page_url: window.location.href,
    landing_page: firstTouch.landing_page || window.location.href,
    referrer: firstTouch.referrer || document.referrer,
    utm_source: firstTouch.utm_source || "",
    utm_medium: firstTouch.utm_medium || "",
    utm_campaign: firstTouch.utm_campaign || "",
    utm_content: firstTouch.utm_content || "",
    utm_term: firstTouch.utm_term || "",
    gclid: firstTouch.gclid || "",
    fbclid: firstTouch.fbclid || ""
  };
}

export default function ProjectIntakeForm({ formType = "custom-project" }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");

    const details = [
      `Problem: ${form.problem.trim()}`,
      `Current state: ${form.current_state.trim()}`,
      `Desired state: ${form.desired_state.trim()}`,
      `Systems and tools: ${form.systems_tools.trim()}`,
      `Something broken: ${form.is_broken}`,
      `Target timing: ${form.timing}`,
      `Budget range: ${form.budget_range}`
    ].join("\n");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          formType,
          service: formType,
          cta: formType === "automation-fix-sprint" ? "Automation Fix Sprint" : "Custom Project",
          message: details,
          submission_id: window.crypto.randomUUID(),
          ...getAttribution()
        })
      });
      const result = await response.json().catch(() => ({ success: false }));
      if (!response.ok || !result.success) throw new Error("Lead submission failed");

      posthog.capture("lead_intake_submitted", {
        form_type: formType,
        source_path: window.location.pathname
      });
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-sky-400/30 bg-sky-400/10 p-8 sm:p-10" role="status">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/10 font-bold text-sky-300">OK</div>
        <h2 className="text-2xl font-bold">Your project request is in</h2>
        <p className="mt-3 leading-relaxed text-slate-300">Thanks for laying out the details. We&apos;ll review the workflow, tools, and timing you shared and follow up by email.</p>
      </div>
    );
  }

  return (
    <form className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-2xl sm:p-8" onSubmit={handleSubmit}>
      <input type="hidden" name="formType" value={formType} />
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="project-company-url">Company URL</label>
        <input id="project-company-url" name="company_url" value={form.company_url} onChange={handleChange} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="project-name" className="mb-2 block text-sm text-slate-300">Your name <span className="text-sky-400">*</span></label>
          <input id="project-name" name="name" required autoComplete="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} />
        </div>
        <div>
          <label htmlFor="project-company" className="mb-2 block text-sm text-slate-300">Company <span className="text-sky-400">*</span></label>
          <input id="project-company" name="company" required autoComplete="organization" value={form.company} onChange={handleChange} placeholder="Smith Plumbing LLC" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="project-email" className="mb-2 block text-sm text-slate-300">Work email <span className="text-sky-400">*</span></label>
          <input id="project-email" name="email" type="email" required autoComplete="email" value={form.email} onChange={handleChange} placeholder="jane@yourcompany.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="project-phone" className="mb-2 block text-sm text-slate-300">Phone <span className="text-slate-500">(optional)</span></label>
          <input id="project-phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={handleChange} placeholder="314-555-0100" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="project-problem" className="mb-2 block text-sm text-slate-300">What problem are you trying to solve? <span className="text-sky-400">*</span></label>
        <textarea id="project-problem" name="problem" required rows={3} value={form.problem} onChange={handleChange} placeholder="Leads arrive from several places, and some never make it into our CRM." className={`${inputClass} resize-y`} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="project-current" className="mb-2 block text-sm text-slate-300">What happens today? <span className="text-sky-400">*</span></label>
          <textarea id="project-current" name="current_state" required rows={3} value={form.current_state} onChange={handleChange} placeholder="Describe the current process and where it stalls." className={`${inputClass} resize-y`} />
        </div>
        <div>
          <label htmlFor="project-desired" className="mb-2 block text-sm text-slate-300">What should happen instead? <span className="text-sky-400">*</span></label>
          <textarea id="project-desired" name="desired_state" required rows={3} value={form.desired_state} onChange={handleChange} placeholder="Describe the outcome you want." className={`${inputClass} resize-y`} />
        </div>
      </div>

      <div>
        <label htmlFor="project-tools" className="mb-2 block text-sm text-slate-300">Which systems or tools are involved? <span className="text-sky-400">*</span></label>
        <input id="project-tools" name="systems_tools" required value={form.systems_tools} onChange={handleChange} placeholder="HubSpot, Gmail, forms, spreadsheets, Zapier..." className={inputClass} />
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="project-broken" className="mb-2 block text-sm text-slate-300">Is something broken? <span className="text-sky-400">*</span></label>
          <select id="project-broken" name="is_broken" required value={form.is_broken} onChange={handleChange} className={inputClass}>
            <option value="">Choose one</option>
            <option value="yes">Yes, a workflow is broken</option>
            <option value="partly">Partly or intermittently</option>
            <option value="no">No, I need a new workflow</option>
          </select>
        </div>
        <div>
          <label htmlFor="project-timing" className="mb-2 block text-sm text-slate-300">Target timing <span className="text-sky-400">*</span></label>
          <select id="project-timing" name="timing" required value={form.timing} onChange={handleChange} className={inputClass}>
            <option value="">Choose one</option>
            <option value="asap">As soon as possible</option>
            <option value="2-4-weeks">Within 2-4 weeks</option>
            <option value="1-3-months">Within 1-3 months</option>
            <option value="exploring">Just exploring</option>
          </select>
        </div>
        <div>
          <label htmlFor="project-budget" className="mb-2 block text-sm text-slate-300">Budget range <span className="text-sky-400">*</span></label>
          <select id="project-budget" name="budget_range" required value={form.budget_range} onChange={handleChange} className={inputClass}>
            <option value="">Choose one</option>
            <option value="$750-$1500">$750-$1,500</option>
            <option value="$1500-$3000">$1,500-$3,000</option>
            <option value="$3000-$7500">$3,000-$7,500</option>
            <option value="$7500+">$7,500+</option>
            <option value="unsure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div aria-live="polite">
        {status === "error" && <p className="text-sm text-red-300" role="alert">We couldn&apos;t send your request. Please try again or email contact@stlautomate.com.</p>}
      </div>
      <button type="submit" disabled={status === "loading"} className="w-full rounded-full bg-sky-600 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400 disabled:cursor-not-allowed disabled:opacity-60">
        {status === "loading" ? "Sending request..." : "Send Project Details"}
      </button>
      <p className="text-center text-xs leading-relaxed text-slate-500">Your details are used to review and respond to this project request. See our <a href="/privacy" className="text-sky-400 hover:text-sky-300">privacy policy</a>.</p>
    </form>
  );
}
