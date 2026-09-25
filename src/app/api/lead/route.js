import { randomUUID } from "node:crypto";

const FORM_TYPES = new Set([
  "missed-lead-audit",
  "intake",
  "custom-project",
  "automation-fix-sprint"
]);
const ATTRIBUTION_FIELDS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid"
];

function clean(value, maxLength = 500) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function normalizeSubmissionId(value) {
  const submissionId = clean(value, 100);
  return /^[A-Za-z0-9][A-Za-z0-9._:-]{7,99}$/.test(submissionId)
    ? submissionId
    : randomUUID();
}

function isValidEmail(value) {
  return /^\S+@\S+\.\S+$/.test(value);
}

function normalizeWebsite(value) {
  const website = clean(value, 500);
  if (!website || /^https?:\/\//i.test(website)) return website;
  return `https://${website}`;
}

function getWebhookUrl(formType) {
  if (formType === "missed-lead-audit") {
    return "https://n8n.stlautomate.com/webhook/missed-lead-audit-hardening-v2-5";
  }

  const value = process.env.N8N_WEBHOOK_URL?.trim();
  if (!value) return null;

  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

function logOperationalFailure(reason, status) {
  console.error("Lead API operational failure", { reason, status });
}

function makeProjectMessage(body) {
  return [
    `Problem: ${clean(body.problem, 1500)}`,
    `Current state: ${clean(body.current_state, 1500)}`,
    `Desired state: ${clean(body.desired_state, 1500)}`,
    `Systems and tools: ${clean(body.systems_tools, 500)}`,
    `Something broken: ${clean(body.is_broken, 80)}`,
    `Target timing: ${clean(body.timing, 120)}`,
    `Budget range: ${clean(body.budget_range, 120)}`
  ].join("\n");
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return Response.json({ success: false, message: "Invalid request." }, { status: 400 });
    }

    // Honeypot field used by public lead forms. Return success without forwarding bots.
    if (clean(body.company_url, 200)) return Response.json({ success: true });

    const requestedFormType = clean(body.formType, 50) || "missed-lead-audit";
    if (!FORM_TYPES.has(requestedFormType)) {
      return Response.json({ success: false, message: "Invalid form type." }, { status: 400 });
    }
    const formType = requestedFormType;
    const projectRequest = formType === "custom-project" || formType === "automation-fix-sprint";
    const submissionId = normalizeSubmissionId(body.submission_id || body.submissionId);
    const name = clean(body.name, 120);
    const email = clean(body.email, 254).toLowerCase();
    const phone = clean(body.phone, 40);
    const businessName = clean(
      body.business || body.business_name || body.company || body.company_name,
      160
    );
    const website = normalizeWebsite(body.website);
    const message = clean(body.message, 5000) || (projectRequest ? makeProjectMessage(body) : "");
    const lead = {
      submission_id: submissionId,
      form_type: formType,
      service: formType,
      name,
      email,
      phone,
      business_name: businessName,
      company: businessName,
      business: businessName,
      industry: clean(body.industry, 100),
      website,
      best_time_to_call: clean(body.bestTime || body.best_time_to_call, 160),
      problem: clean(body.problem, 1500),
      current_state: clean(body.current_state, 1500),
      desired_state: clean(body.desired_state, 1500),
      systems_tools: clean(body.systems_tools, 500),
      is_broken: clean(body.is_broken, 80),
      timing: clean(body.timing, 120),
      budget_range: clean(body.budget_range, 120),
      message,
      source: `stlautomate.com ${formType.replaceAll("-", " ")} form`,
      cta: formType === "automation-fix-sprint" ? "Automation Fix Sprint" : formType === "custom-project" ? "Custom Project" : clean(body.cta, 200),
      source_detail: clean(body.utm_source, 160) || clean(body.referrer, 500) || "direct",
      source_page: clean(body.source_page || body.page_url, 1000) || "https://www.stlautomate.com/",
      page_url: clean(body.page_url, 1000),
      landing_page: clean(body.landing_page, 1000),
      referrer: clean(body.referrer, 1000),
      ...Object.fromEntries(ATTRIBUTION_FIELDS.map((field) => [field, clean(body[field], 250)])),
      submitted_at: new Date().toISOString()
    };

    const missingProjectFields = projectRequest && [
      !lead.problem,
      !lead.current_state,
      !lead.desired_state,
      !lead.systems_tools,
      !lead.is_broken,
      !lead.timing,
      !lead.budget_range
    ].some(Boolean);

    if (
      !lead.name ||
      (!lead.email && !lead.phone) ||
      (lead.email && !isValidEmail(lead.email)) ||
      !lead.business_name ||
      !lead.message ||
      missingProjectFields
    ) {
      return Response.json(
        { success: false, message: "Please complete the required project and contact details." },
        { status: 400 }
      );
    }

    const webhookUrl = getWebhookUrl(formType);
    if (!webhookUrl) {
      logOperationalFailure("webhook_configuration_unavailable", 503);
      return Response.json({ success: false, message: "Submission service unavailable." }, { status: 503 });
    }

    let response;
    try {
      response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
        cache: "no-store"
      });
    } catch {
      logOperationalFailure("webhook_request_failed", 502);
      return Response.json({ success: false, message: "Submission failed." }, { status: 502 });
    }

    if (!response.ok) {
      logOperationalFailure("webhook_rejected_request", response.status);
      return Response.json({ success: false, message: "Submission failed." }, { status: 502 });
    }

    return Response.json({ success: true, message: "Request received." });
  } catch {
    logOperationalFailure("unexpected_route_failure", 500);
    return Response.json({ success: false, message: "Submission failed." }, { status: 500 });
  }
}
