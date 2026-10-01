import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { POST } from "../src/app/api/lead/route.js";
import { buildCtaAttribution, buildIntakeAnalyticsProperties, getServiceCta, getCtaContext, saveCtaContext } from "../src/app/components/attribution.mjs";
import { resolveProjectIntakeType } from "../src/app/components/project-intake-routing.mjs";

const pagePath = new URL("../src/app/(site)/services/hubspot-lead-automation/page.js", import.meta.url);
const sitemapPath = new URL("../src/app/sitemap.js", import.meta.url);
const homePath = new URL("../src/app/(site)/page.js", import.meta.url);
const servicesPath = new URL("../src/app/(site)/services/page.js", import.meta.url);
const customPath = new URL("../src/app/(site)/services/custom-automation/page.js", import.meta.url);
const repairPath = new URL("../src/app/(site)/services/automation-repair/page.js", import.meta.url);
const startPath = new URL("../src/app/(site)/start-project/page.js", import.meta.url);
const formPath = new URL("../src/app/components/ProjectIntakeForm.js", import.meta.url);
const apiPath = new URL("../src/app/api/lead/route.js", import.meta.url);

test("HubSpot lead page has buyer-intent sections, bounded $1,500 scope, and canonical metadata", async () => {
  const page = await readFile(pagePath, "utf8");
  assert.match(page, /title\s*:\s*"HubSpot Lead Automation in St\. Louis \| STL Automate"/);
  assert.match(page, /canonical\s*:\s*"https:\/\/www\.stlautomate\.com\/services\/hubspot-lead-automation"/);
  assert.match(page, /\$1,500/);
  for (const section of ["The problem", "What the system does", "Common starting points", "The $1,500 engagement", "Outside this package", "Customer Zero / internal evidence", "Implementation steps", "What we need from you", "Choose the right starting point", "Lead-to-HubSpot questions"]) assert.ok(page.includes(section), "missing section: " + section);
  assert.match(page, /not an external customer deployment, customer result, HubSpot partnership, or endorsement/i);
});
test("HubSpot lead page is in the sitemap and linked contextually", async () => {
  const [sitemap,home,services,custom,repair,start] = await Promise.all([readFile(sitemapPath,"utf8"),readFile(homePath,"utf8"),readFile(servicesPath,"utf8"),readFile(customPath,"utf8"),readFile(repairPath,"utf8"),readFile(startPath,"utf8")]);
  assert.match(sitemap, /"\/services\/hubspot-lead-automation"/);
  for (const [name,source] of [["home",home],["services",services],["custom automation",custom],["automation repair",repair],["start project",start]]) assert.ok(source.includes("/services/hubspot-lead-automation"),"missing link from "+name);
});

test("Lead-to-HubSpot CTA and intake events preserve canonical type, origin, and attribution", async () => {
  const [page,form,start] = await Promise.all([readFile(pagePath,"utf8"),readFile(formPath,"utf8"),readFile(startPath,"utf8")]);
  const store = new Map(), storage = {getItem:key=>store.get(key)||null,setItem:(key,value)=>store.set(key,value)};
  const location = {pathname:"/services/hubspot-lead-automation",href:"https://www.stlautomate.com/services/hubspot-lead-automation?utm_source=partner&utm_campaign=crm"};
  const click = buildCtaAttribution({href:"/start-project?type=lead-to-hubspot",placement:"hubspot_lead_hero",cta:"Lead-to-HubSpot System",location});
  saveCtaContext(click,storage);
  assert.match(page,/const intakeHref\s*=\s*"\/start-project\?type=lead-to-hubspot"/);
  assert.match(page,/placement="hubspot_lead_hero"/);
  assert.match(page,/placement="hubspot_lead_footer"/);
  assert.match(start,/resolveProjectIntakeType\(query\)/);
  assert.deepEqual(resolveProjectIntakeType({ type: "lead-to-hubspot" }), { formType: "lead-to-hubspot", unsupported: false });
  assert.match(form,/getServiceCta\(formType\)/);
  assert.deepEqual(click,{source_path:"/services/hubspot-lead-automation",source_url:location.href,placement:"hubspot_lead_hero",destination:"/start-project?type=lead-to-hubspot",service:"lead-to-hubspot",form_type:"lead-to-hubspot",cta:"Lead-to-HubSpot System"});
  assert.deepEqual(buildIntakeAnalyticsProperties({formType:"lead-to-hubspot",location:{pathname:"/start-project"},attribution:{referrer:location.href,utm_source:"partner",utm_campaign:"crm"},ctaContext:getCtaContext(storage)}),{
    form_type:"lead-to-hubspot",service:"lead-to-hubspot",cta:"Lead-to-HubSpot System",source_path:"/start-project",origin_path:"/services/hubspot-lead-automation",origin_url:location.href,destination:"/start-project?type=lead-to-hubspot",placement:"hubspot_lead_hero",referrer:location.href,utm_source:"partner",utm_campaign:"crm"
  });
});

test("existing package CTA labels remain stable", () => {
  assert.equal(getServiceCta("automation-fix-sprint"),"Automation Fix Sprint");
  assert.equal(getServiceCta("custom-project"),"Custom Project");
  assert.equal(getServiceCta("lead-to-hubspot"),"Lead-to-HubSpot System");
});

test("Lead-to-HubSpot service and CTA reach the existing n8n-facing payload", async () => {
  const originalFetch=globalThis.fetch, originalWebhook=process.env.N8N_WEBHOOK_URL;
  process.env.N8N_WEBHOOK_URL="https://n8n.example.invalid/webhook/demand-capture";
  let forwarded;
  globalThis.fetch=async(_url,options)=>{forwarded=JSON.parse(options.body);return new Response(null,{status:204});};
  try {
    const response=await POST(new Request("http://localhost/api/lead",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
      formType:"lead-to-hubspot",cta:"Lead-to-HubSpot System",submission_id:"hubspot-package-test-01",name:"Jamie Example",email:"jamie@example.com",company:"Example Co",problem:"Leads lose attribution.",current_state:"A website form is copied into HubSpot.",desired_state:"Correct record is created or updated.",systems_tools:"Website form, HubSpot",is_broken:"yes",timing:"2-4-weeks",budget_range:"$1500-$3000",source_page:"https://www.stlautomate.com/start-project",page_url:"https://www.stlautomate.com/start-project?type=lead-to-hubspot",landing_page:"https://www.stlautomate.com/services/hubspot-lead-automation",referrer:"https://www.stlautomate.com/services/hubspot-lead-automation",utm_source:"partner",utm_campaign:"crm"
    })}));
    assert.equal(response.status,200); assert.equal(forwarded.form_type,"lead-to-hubspot"); assert.equal(forwarded.service,"lead-to-hubspot"); assert.equal(forwarded.cta,"Lead-to-HubSpot System"); assert.equal(forwarded.utm_source,"partner"); assert.equal(forwarded.landing_page,"https://www.stlautomate.com/services/hubspot-lead-automation");
  } finally {
    globalThis.fetch=originalFetch;
    if(originalWebhook===undefined) delete process.env.N8N_WEBHOOK_URL; else process.env.N8N_WEBHOOK_URL=originalWebhook;
  }
});

test("Automation Fix Sprint and Custom Project remain supported", async () => {
  const [start,api]=await Promise.all([readFile(startPath,"utf8"),readFile(apiPath,"utf8")]);
  assert.match(start,/resolveProjectIntakeType\(query\)/);
  assert.deepEqual(resolveProjectIntakeType({ type: "automation-fix-sprint" }), { formType: "automation-fix-sprint", unsupported: false });
  assert.deepEqual(resolveProjectIntakeType({ type: "custom-project" }), { formType: "custom-project", unsupported: false });
  assert.match(api,/"custom-project",\s*"automation-fix-sprint",\s*"lead-to-hubspot"/);
});
