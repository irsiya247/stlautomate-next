import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import { POST } from "../src/app/api/lead/route.js";

const originalFetch = globalThis.fetch;
const originalWebhook = process.env.N8N_WEBHOOK_URL;

afterEach(() => {
  globalThis.fetch = originalFetch;
  if (originalWebhook === undefined) delete process.env.N8N_WEBHOOK_URL;
  else process.env.N8N_WEBHOOK_URL = originalWebhook;
});

function post(body) {
  return POST(new Request("http://localhost/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }));
}

const validProject = {
  formType: "custom-project",
  submission_id: "capture-test-0001",
  name: "Jane Smith",
  email: "jane@example.com",
  phone: "",
  company: "Example Plumbing",
  problem: "Lead details are getting lost.",
  current_state: "Leads arrive by web form and email.",
  desired_state: "Each lead should create a complete CRM record.",
  systems_tools: "Website forms, email, HubSpot",
  is_broken: "yes",
  timing: "asap",
  budget_range: "$750-$1500",
  source_page: "https://www.stlautomate.com/start-project",
  landing_page: "https://www.stlautomate.com/",
  referrer: "https://www.google.com/",
  utm_source: "search",
  utm_medium: "organic",
  utm_campaign: "repair-intent"
};

test("custom project submissions use the configured server-side webhook and retain attribution", async () => {
  process.env.N8N_WEBHOOK_URL = "https://n8n.example.invalid/webhook/demand-capture";
  let forwardedUrl = "";
  let forwardedLead = null;
  globalThis.fetch = async (url, options) => {
    forwardedUrl = String(url);
    forwardedLead = JSON.parse(options.body);
    return new Response(null, { status: 204 });
  };

  const response = await post(validProject);
  assert.equal(response.status, 200);
  assert.equal((await response.json()).success, true);
  assert.equal(forwardedUrl, "https://n8n.example.invalid/webhook/demand-capture");
  assert.equal(forwardedLead.form_type, "custom-project");
  assert.equal(forwardedLead.business_name, "Example Plumbing");
  assert.equal(forwardedLead.problem, validProject.problem);
  assert.equal(forwardedLead.current_state, validProject.current_state);
  assert.equal(forwardedLead.desired_state, validProject.desired_state);
  assert.equal(forwardedLead.systems_tools, validProject.systems_tools);
  assert.equal(forwardedLead.is_broken, "yes");
  assert.equal(forwardedLead.timing, "asap");
  assert.equal(forwardedLead.budget_range, "$750-$1500");
  assert.equal(forwardedLead.utm_source, "search");
  assert.equal(forwardedLead.utm_campaign, "repair-intent");
  assert.equal(forwardedLead.source_page, validProject.source_page);
  assert.equal(forwardedLead.landing_page, validProject.landing_page);
});

test("incomplete project briefs are rejected before webhook forwarding", async () => {
  let called = false;
  globalThis.fetch = async () => {
    called = true;
    return new Response(null, { status: 204 });
  };

  const response = await post({ ...validProject, desired_state: "" });
  assert.equal(response.status, 400);
  assert.equal(called, false);
});
