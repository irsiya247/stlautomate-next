"use client";

export default function AuditCTA() {
  return (
    <button
      onClick={() => document.dispatchEvent(new Event("open-audit-modal"))}
      className="mt-6 bg-sky-500 text-black px-6 py-3 rounded-xl font-semibold"
    >
      Get Automation Audit
    </button>
  );
}