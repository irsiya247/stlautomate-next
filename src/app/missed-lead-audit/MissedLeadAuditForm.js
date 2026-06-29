"use client";

import { useEffect, useRef, useState } from "react";

const initialForm = {
  name: "",
  business: "",
  website: "",
  email: "",
  phone: "",
  bestTime: "",
  message: "",
  company_url: ""
};

const inputClass =
  "w-full px-4 py-3 bg-slate-950/60 border border-slate-700 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/15 transition-colors";

export default function MissedLeadAuditForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const successRef = useRef(null);

  useEffect(() => {
    if (status !== "success") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    successRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "center"
    });
  }, [status]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, formType: "missed-lead-audit" })
      });
      const result = await response.json().catch(() => ({ success: false }));

      if (!response.ok || !result.success) {
        throw new Error("Lead submission failed");
      }

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        ref={successRef}
        className="border border-sky-400/30 bg-sky-400/10 rounded-2xl p-8 sm:p-10"
        role="status"
      >
        <div className="w-12 h-12 rounded-full border border-sky-400/30 bg-sky-400/10 flex items-center justify-center text-sky-300 font-bold mb-6">
          OK
        </div>
        <h3 className="text-2xl font-bold">Your request has been submitted</h3>
        <p className="mt-3 text-slate-300 leading-relaxed">
          Thanks for sharing the details. STL Automate has received your request and will review whether a missed lead audit is a fit.
        </p>
      </div>
    );
  }

  return (
    <form
      className="border border-slate-800 bg-slate-900/40 rounded-2xl p-6 sm:p-8 space-y-5"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="formType" value="missed-lead-audit" />
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company_url">Company URL</label>
        <input
          id="company_url"
          name="company_url"
          value={form.company_url}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="audit-name" className="block text-sm text-slate-300 mb-2">
            Full name <span className="text-sky-400">*</span>
          </label>
          <input
            id="audit-name"
            name="name"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="audit-business" className="block text-sm text-slate-300 mb-2">
            Business name <span className="text-sky-400">*</span>
          </label>
          <input
            id="audit-business"
            name="business"
            required
            autoComplete="organization"
            value={form.business}
            onChange={handleChange}
            placeholder="Smith Plumbing LLC"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="audit-website" className="block text-sm text-slate-300 mb-2">Website</label>
        <input
          id="audit-website"
          name="website"
          type="url"
          inputMode="url"
          autoComplete="url"
          value={form.website}
          onChange={handleChange}
          placeholder="https://yourbusiness.com"
          className={inputClass}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="audit-email" className="block text-sm text-slate-300 mb-2">
            Email <span className="text-sky-400">*</span>
          </label>
          <input
            id="audit-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@yourbusiness.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="audit-phone" className="block text-sm text-slate-300 mb-2">
            Phone <span className="text-sky-400">*</span>
          </label>
          <input
            id="audit-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="314-555-0100"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="audit-best-time" className="block text-sm text-slate-300 mb-2">Best time to call</label>
        <input
          id="audit-best-time"
          name="bestTime"
          value={form.bestTime}
          onChange={handleChange}
          placeholder="Weekday mornings, after 9am"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="audit-notes" className="block text-sm text-slate-300 mb-2">Notes</label>
        <textarea
          id="audit-notes"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us how calls, website forms, or follow-up are handled today."
          className={`${inputClass} resize-y`}
        />
      </div>

      <div aria-live="polite">
        {status === "error" && (
          <p className="text-red-300 text-sm mb-4">
            We could not send your request. Please try again or email contact@stlautomate.com.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-sky-600 text-white py-4 px-6 rounded-full font-semibold text-base sm:text-lg hover:bg-sky-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending request..." : "Request Free Missed Lead Audit"}
      </button>
      <p className="text-center text-xs text-slate-500 leading-relaxed">
        Your details will be used to respond to this audit request.
      </p>
    </form>
  );
}
