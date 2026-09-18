export const metadata = {
  title: "HVAC Phone Receptionist | STL Automate",
  description:
    "A configurable Phone Receptionist that captures caller details, follows approved intake rules, and routes the next step to your team.",
  openGraph: {
    title: "HVAC Phone Receptionist | STL Automate",
    description:
      "Give callers a useful next step with call handling configured around your service area, hours, booking rules, and business systems.",
    type: "website",
  },
};

const PAGE_STYLES = `
:root{--navy:#0f2a43;--navy2:#1b3f63;--ink:#1a2331;--accent:#ff6b35;--accent2:#e85a2a;--green:#16a34a;--light:#f5f7fa;--line:#e3e8ef;--muted:#5b6b7f;}
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;color:var(--ink);line-height:1.55;background:#fff;}
.wrap{max-width:900px;margin:0 auto;padding:0 22px;}
a{color:inherit;text-decoration:none;}
nav{background:#fff;border-bottom:1px solid var(--line);padding:14px 0;position:sticky;top:0;z-index:100;}
nav .inner{display:flex;align-items:center;justify-content:space-between;}
.logo{font-weight:800;font-size:17px;color:var(--navy);letter-spacing:-.3px;}
.logo span{color:var(--accent);}
.nav-cta{background:var(--accent);color:#fff;font-weight:700;padding:9px 18px;border-radius:7px;font-size:14px;transition:background .15s;}
.nav-cta:hover{background:var(--accent2);}
header{background:linear-gradient(160deg,#0b1f33,#1b3f63);color:#fff;padding:72px 0 64px;}
.eyebrow{display:inline-block;background:rgba(255,107,53,.18);border:1px solid rgba(255,107,53,.4);color:var(--accent);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;padding:5px 12px;border-radius:20px;margin-bottom:20px;}
h1{font-size:44px;line-height:1.12;font-weight:800;max-width:780px;margin-bottom:20px;}
h1 em{color:var(--accent);font-style:normal;}
.hero-sub{font-size:19px;opacity:.9;max-width:650px;line-height:1.55;margin-bottom:32px;}
.cta-stack{display:flex;flex-direction:column;gap:10px;max-width:420px;}
.btn-primary{display:flex;align-items:center;justify-content:center;gap:9px;background:var(--accent);color:#fff;font-weight:700;padding:17px 28px;border-radius:9px;font-size:18px;transition:background .15s;border:none;cursor:pointer;}
.btn-primary:hover{background:var(--accent2);}
.btn-ghost{display:flex;align-items:center;justify-content:center;gap:9px;background:transparent;color:#fff;border:2px solid rgba(255,255,255,.4);font-weight:600;padding:14px 28px;border-radius:9px;font-size:16px;transition:border-color .15s;}
.btn-ghost:hover{border-color:#fff;}
.hero-call-link{display:inline-block;margin-top:14px;font-size:14px;opacity:.8;text-decoration:underline;}
.hero-call-link:hover{opacity:1;}
.hero-demo-note{font-size:13px;opacity:.7;max-width:600px;margin-top:8px;}
.trust-pills{display:flex;flex-wrap:wrap;gap:12px;margin-top:22px;}
.pill{display:flex;align-items:center;gap:6px;font-size:13px;opacity:.9;}
.intro-band{background:var(--accent);color:#fff;padding:28px 0;text-align:center;}
.intro-band p{font-size:18px;font-weight:600;max-width:720px;margin:0 auto;}
.discovery{padding:64px 0;background:var(--navy);color:#fff;}
.section-eyebrow{display:inline-block;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.25);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;padding:5px 12px;border-radius:20px;margin-bottom:18px;}
.discovery h2,.readiness h2{font-size:32px;font-weight:800;margin-bottom:10px;}
.discovery .sub,.readiness .sub{font-size:17px;opacity:.82;max-width:680px;margin-bottom:32px;}
.input-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;}
.input-card{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.15);border-radius:12px;padding:20px;}
.input-card h3{font-size:16px;margin-bottom:5px;}
.input-card p{font-size:14px;opacity:.75;}
.pain-section{padding:64px 0;background:#fff;}
.pain-section h2,.how h2,.what h2,.scope h2,.about h2,.faq-section h2{font-size:32px;font-weight:800;color:var(--navy);margin-bottom:10px;}
.pain-section .sub,.how .sub,.what .sub,.scope .sub{font-size:17px;color:var(--muted);margin-bottom:40px;}
.pain-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;}
.pain-card{background:#fff8f5;border:1px solid #ffd5c2;border-radius:12px;padding:24px;}
.pain-card .icon{font-size:26px;margin-bottom:10px;}
.pain-card h3{font-size:17px;font-weight:700;color:var(--navy);margin-bottom:6px;}
.pain-card p{font-size:15px;color:var(--muted);}
.how{background:var(--light);padding:64px 0;}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
.step{background:#fff;border:1px solid var(--line);border-radius:14px;padding:28px;position:relative;}
.step-num{width:36px;height:36px;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:16px;margin-bottom:16px;}
.step h3{font-size:17px;font-weight:700;color:var(--navy);margin-bottom:8px;}
.step p{font-size:15px;color:var(--muted);}
.step-arrow{position:absolute;right:-18px;top:50%;transform:translateY(-50%);font-size:22px;color:var(--accent);font-weight:700;z-index:1;}
.confirmation{margin-top:24px;background:#fff;border-left:4px solid var(--accent);border-radius:8px;padding:18px 20px;color:var(--navy);font-weight:700;}
.what{padding:64px 0;background:#fff;}
.features{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.feature{display:flex;gap:14px;align-items:flex-start;padding:20px;border:1px solid var(--line);border-radius:12px;}
.feature-icon{width:40px;height:40px;border-radius:9px;background:var(--navy);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px;}
.feature h3{font-size:16px;font-weight:700;color:var(--navy);margin-bottom:4px;}
.feature p{font-size:14px;color:var(--muted);}
.readiness{background:linear-gradient(160deg,#0b1f33,#1b3f63);color:#fff;padding:64px 0;}
.readiness-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.readiness-card{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:12px;padding:22px;}
.readiness-card h3{font-size:16px;margin-bottom:5px;color:var(--accent);}
.readiness-card p{font-size:14px;opacity:.78;}
.proof-section{padding:64px 0;background:var(--light);}
.proof-box{background:var(--navy);border-radius:16px;padding:46px 40px;color:#fff;}
.proof-box h2{font-size:32px;font-weight:800;margin-bottom:16px;}
.proof-box p{font-size:17px;opacity:.88;max-width:680px;margin-bottom:20px;}
.proof-list{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;list-style:none;}
.proof-list li{background:rgba(255,255,255,.08);border-radius:9px;padding:14px;font-size:14px;}
.scope{padding:64px 0;background:#fff;}
.scope-box{border:2px solid var(--line);border-radius:16px;padding:34px;max-width:760px;}
.scope-box ul{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:12px 20px;margin:24px 0;}
.scope-box li{display:flex;gap:8px;font-size:15px;}
.check{color:var(--green);font-weight:700;}
.about{padding:64px 0;background:#fff;}
.about-inner{display:grid;grid-template-columns:1.1fr .9fr;gap:48px;align-items:start;}
.about p{font-size:16px;color:var(--muted);margin-bottom:14px;line-height:1.65;}
.about-rules{display:flex;flex-direction:column;gap:14px;}
.rule{background:var(--light);border:1px solid var(--line);border-radius:12px;padding:20px;}
.rule h3{font-size:16px;color:var(--navy);margin-bottom:4px;}
.rule p{font-size:14px;margin:0;}
.faq-section{padding:64px 0;background:var(--light);}
.faq-section h2{margin-bottom:40px;}
.faq-list{display:flex;flex-direction:column;gap:16px;}
.faq-item{background:#fff;border:1px solid var(--line);border-radius:12px;padding:24px;}
.faq-item h3{font-size:17px;font-weight:700;color:var(--navy);margin-bottom:8px;}
.faq-item p{font-size:15px;color:var(--muted);line-height:1.6;}
footer{background:linear-gradient(160deg,#0b1f33,#1b3f63);color:#fff;padding:72px 0 40px;}
footer h2{font-size:36px;font-weight:800;margin-bottom:16px;max-width:650px;}
footer p{font-size:18px;opacity:.85;max-width:580px;margin-bottom:36px;}
.footer-cta-row{display:flex;flex-wrap:wrap;gap:14px;}
.footer-bottom{border-top:1px solid rgba(255,255,255,.12);margin-top:48px;padding-top:24px;font-size:13px;opacity:.55;display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;}
@media(max-width:720px){
h1{font-size:32px;}
.input-grid,.pain-grid,.features,.steps,.readiness-grid,.proof-list,.scope-box ul,.about-inner{grid-template-columns:1fr;}
.step-arrow{display:none;}
.proof-box{padding:34px 24px;}
footer h2{font-size:27px;}
}
`;

const PAGE_BODY = `
<nav><div class="wrap inner"><div class="logo">STL <span>Automate</span></div><a class="nav-cta" href="https://calendly.com/stlautomate/hvac-missed-call-demo">Book a Demo &rarr;</a></div></nav>

<header><div class="wrap">
 <div class="eyebrow">&#9889; HVAC Call Coverage &middot; St. Louis, MO</div>
 <h1>Give callers a useful next step instead of <em>another voicemail.</em></h1>
 <p class="hero-sub">When your team cannot answer, the Phone Receptionist can handle the conversation, capture caller details and service needs, and route the result to your team.</p>
 <div class="cta-stack"><a class="btn-primary" href="#discovery">Map Your Call-Coverage Needs</a><a class="btn-ghost" href="https://calendly.com/stlautomate/hvac-missed-call-demo">Book a Demo</a></div>
 <a class="hero-call-link" href="tel:+13148649065">Call the live Phone Receptionist: (314) 864-9065</a>
 <p class="hero-demo-note">This is STL Automate&apos;s live demonstration line. Your Phone Receptionist is configured for your business and connected according to the approved phone-routing plan.</p>
 <div class="trust-pills"><span class="pill">&#10003; Configured around your business rules</span><span class="pill">&#10003; CRM and calendar integrations available</span><span class="pill">&#10003; Controlled testing before go-live</span></div>
</div></header>

<div class="intro-band"><div class="wrap"><p>Call coverage should reflect your service area, hours, escalation rules, and the jobs your team is actually prepared to accept.</p></div></div>

<section class="discovery" id="discovery"><div class="wrap">
 <div class="section-eyebrow">Discovery before assumptions</div>
 <h2>What happens to calls your team cannot answer?</h2>
 <p class="sub">The operational and financial impact depends on your actual business. We use your inputs instead of generic industry averages.</p>
 <div class="input-grid">
  <div class="input-card"><h3>Call volume and timing</h3><p>Review normal volume, missed-call patterns, and after-hours demand.</p></div>
  <div class="input-card"><h3>Current callback process</h3><p>Map who responds, how quickly, and what information they need.</p></div>
  <div class="input-card"><h3>Service area and emergency rules</h3><p>Define locations, services, urgency, and when escalation is required.</p></div>
  <div class="input-card"><h3>Booking eligibility</h3><p>Identify which requests can be scheduled and which require human review.</p></div>
  <div class="input-card"><h3>CRM and calendar requirements</h3><p>Confirm the authoritative systems and the exact writes the workflow may make.</p></div>
  <div class="input-card"><h3>Financial modeling inputs</h3><p>If useful, use your real call data and average job value to estimate impact.</p></div>
 </div>
</div></section>

<section class="pain-section"><div class="wrap">
 <h2>Built around real home-service intake constraints</h2>
 <p class="sub">The workflow needs to account for what happens in the field, not just what looks good in a demo.</p>
 <div class="pain-grid">
  <div class="pain-card"><div class="icon">&#128295;</div><h3>Technicians are working in the field</h3><p>Calls can arrive while the team is driving, diagnosing equipment, or completing a job.</p></div>
  <div class="pain-card"><div class="icon">&#127769;</div><h3>After-hours requests need rules</h3><p>Emergency requests, routine service, and unsupported locations should not follow the same path.</p></div>
  <div class="pain-card"><div class="icon">&#128197;</div><h3>Not every request should be booked</h3><p>Eligibility, service area, availability, and escalation requirements must be checked first.</p></div>
  <div class="pain-card"><div class="icon">&#128221;</div><h3>Your systems need usable details</h3><p>The team needs accurate contact, service, location, and summary information for the next action.</p></div>
 </div>
</div></section>

<section class="how"><div class="wrap">
 <h2>How it works</h2><p class="sub">The production behavior follows the call path and rules your team approves.</p>
 <div class="steps">
  <div class="step"><div class="step-num">1</div><h3>Call reaches the configured coverage path</h3><p>Routing can use an existing number, forwarding, SIP, or a provisioned number where supported.</p><span class="step-arrow">&rsaquo;</span></div>
  <div class="step"><div class="step-num">2</div><h3>The Phone Receptionist handles the approved conversation</h3><p>It captures caller details, identifies the request, and follows configured escalation and fallback rules.</p><span class="step-arrow">&rsaquo;</span></div>
  <div class="step"><div class="step-num">3</div><h3>The result routes to the appropriate business system</h3><p>Approved summaries, alerts, CRM updates, or calendar actions are sent to the configured destination.</p></div>
 </div>
 <div class="confirmation">No appointment is represented as booked unless the backend booking system confirms it.</div>
</div></section>

<section class="what"><div class="wrap">
 <h2>What&apos;s included</h2><p class="sub">The exact configuration depends on the approved scope and the systems your team already uses.</p>
 <div class="features">
  <div class="feature"><div class="feature-icon">&#9742;</div><div><h3>Phone Receptionist configuration</h3><p>Conversation flow, business information, service rules, and escalation paths.</p></div></div>
  <div class="feature"><div class="feature-icon">&#128100;</div><div><h3>Caller-detail capture</h3><p>Required contact, service, location, and urgency details defined with your team.</p></div></div>
  <div class="feature"><div class="feature-icon">&#128203;</div><div><h3>CRM integration</h3><p>Approved contact, activity, and summary updates in the configured CRM.</p></div></div>
  <div class="feature"><div class="feature-icon">&#128276;</div><div><h3>Team alerts</h3><p>Notifications routed according to urgency, hours, and escalation rules.</p></div></div>
  <div class="feature"><div class="feature-icon">&#128197;</div><div><h3>Calendar integration where approved</h3><p>Availability checks and confirmed appointment creation when the backend supports it.</p></div></div>
  <div class="feature"><div class="feature-icon">&#128736;</div><div><h3>Fallback handling and acceptance testing</h3><p>Defined behavior for failures, timeouts, duplicates, and unsupported requests before go-live.</p></div></div>
 </div>
</div></section>

<section class="readiness"><div class="wrap">
 <h2>Production readiness</h2><p class="sub">A useful demo is not the same as a production-ready intake workflow. These checks are part of the acceptance process.</p>
 <div class="readiness-grid">
  <div class="readiness-card"><h3>Caller identification</h3><p>Confirm how caller identity is captured and handled when information is missing.</p></div>
  <div class="readiness-card"><h3>Required details</h3><p>Validate contact, service, location, urgency, and consent fields.</p></div>
  <div class="readiness-card"><h3>Timezone and business hours</h3><p>Test operating hours, holidays, after-hours rules, and local time handling.</p></div>
  <div class="readiness-card"><h3>CRM writes</h3><p>Verify field mapping, permissions, duplicate handling, and authoritative records.</p></div>
  <div class="readiness-card"><h3>Calendar truth</h3><p>Use actual availability and require backend confirmation before reporting a booking.</p></div>
  <div class="readiness-card"><h3>Call summaries</h3><p>Check that summaries are accurate, useful, and routed to the right team.</p></div>
  <div class="readiness-card"><h3>Failures and timeouts</h3><p>Define safe fallback behavior when a provider or integration is unavailable.</p></div>
  <div class="readiness-card"><h3>Unsupported requests</h3><p>Escalate or decline requests outside the approved conversation scope.</p></div>
  <div class="readiness-card"><h3>Customer acceptance</h3><p>Move live only after the agreed scenarios and acceptance checks pass.</p></div>
 </div>
</div></section>

<section class="proof-section"><div class="wrap"><div class="proof-box">
 <h2>Prove the workflow before relying on it.</h2>
 <p>We test the configured call path against realistic scenarios and verify the results in the actual backend systems. Production use begins only after your team reviews the behavior and accepts the agreed checks.</p>
 <ul class="proof-list"><li>Controlled call scenarios</li><li>Backend record verification</li><li>Calendar confirmation checks</li><li>Failure and timeout tests</li><li>Duplicate-prevention tests</li><li>Customer acceptance before go-live</li></ul>
</div></div></section>

<section class="scope"><div class="wrap">
 <h2>Scope first. Price second.</h2><p class="sub">Pricing is provided after the production scope and support requirements are confirmed.</p>
 <div class="scope-box"><p>The implementation scope depends on:</p>
  <ul><li><span class="check">&#10003;</span>Phone routing</li><li><span class="check">&#10003;</span>Voice infrastructure</li><li><span class="check">&#10003;</span>CRM requirements</li><li><span class="check">&#10003;</span>Calendar requirements</li><li><span class="check">&#10003;</span>Messaging and alerts</li><li><span class="check">&#10003;</span>Workflow complexity</li><li><span class="check">&#10003;</span>Testing requirements</li><li><span class="check">&#10003;</span>Ongoing support</li></ul>
  <a class="btn-primary" href="https://calendly.com/stlautomate/hvac-missed-call-demo">Confirm the Scope</a>
 </div>
</div></section>

<section class="about"><div class="wrap"><div class="about-inner">
 <div><h2>Configured for the way your shop handles calls</h2><p>Home-service intake has real constraints. Technicians are in the field, after-hours calls need different handling, and not every request should be scheduled automatically.</p><p>The Phone Receptionist is configured around your service area, operating hours, booking rules, escalation paths, and CRM process. Those rules are tested before the workflow is approved for production use.</p><p>Call the live demonstration line to hear the experience, then use the booking link to discuss your actual call flow.</p><div style="margin-top:24px;display:flex;flex-wrap:wrap;gap:12px;"><a class="btn-primary" href="https://calendly.com/stlautomate/hvac-missed-call-demo">Book a Demo</a><a class="btn-ghost" style="color:var(--navy);border-color:var(--navy);" href="tel:+13148649065">Call the Live Receptionist</a></div></div>
 <div class="about-rules"><div class="rule"><h3>Service area</h3><p>Route or decline requests based on the locations your team serves.</p></div><div class="rule"><h3>Hours and escalation</h3><p>Use different behavior for normal hours, after hours, and urgent situations.</p></div><div class="rule"><h3>Booking rules</h3><p>Schedule only eligible requests with confirmed backend availability.</p></div><div class="rule"><h3>CRM process</h3><p>Write approved details to the system your team uses as its source of truth.</p></div></div>
</div></div></section>

<section class="faq-section"><div class="wrap"><h2>Common questions</h2><div class="faq-list">
 <div class="faq-item"><h3>We already have an answering service. How is this different?</h3><p>We start by mapping the gaps in your current process. The Phone Receptionist can capture structured details, apply approved intake rules, and route the result into your business systems where configured. Whether it complements or replaces part of an answering-service workflow depends on the scope.</p></div>
 <div class="faq-item"><h3>Does this replace my receptionist?</h3><p>Not necessarily. It can provide configured overflow or after-hours coverage while your staff continues to handle the calls and decisions that need a person.</p></div>
 <div class="faq-item"><h3>Do I have to change my phone number?</h3><p>Phone routing is selected per deployment. Options can include an existing number, forwarding, SIP, or a provisioned number where supported. We confirm the routing plan before implementation.</p></div>
 <div class="faq-item"><h3>How fast can it be live?</h3><p>The timeline depends on routing, integrations, conversation rules, and acceptance testing. We provide a timeline after the scope is confirmed and do not move live until the agreed checks pass.</p></div>
 <div class="faq-item"><h3>Can it book appointments automatically?</h3><p>Calendar actions are configured only when approved. A request is represented as booked only after the backend calendar confirms the appointment. Requests that do not meet the booking rules are routed for the appropriate next step.</p></div>
 <div class="faq-item"><h3>What happens if an integration fails?</h3><p>Failure, timeout, duplicate, and fallback behavior is defined during implementation and tested before go-live. The exact fallback depends on the systems and risk of the workflow.</p></div>
 <div class="faq-item"><h3>What does the demo show?</h3><p>Call (314) 864-9065 to hear STL Automate&apos;s live Phone Receptionist handle an HVAC-style inquiry and capture caller details. It is a demonstration line. Your implementation is configured around your business rules and approved systems.</p></div>
 <div class="faq-item"><h3>Do you work with shops outside St. Louis?</h3><p>Yes, depending on the deployment requirements and support scope. The discovery call confirms whether the implementation is a fit.</p></div>
</div></div></section>

<footer><div class="wrap">
 <h2>Give unanswered callers a clear, approved next step.</h2><p>Call the live Phone Receptionist to hear the demonstration, then book a scope conversation when you are ready to map your call flow and acceptance checks.</p>
 <div class="footer-cta-row"><a class="btn-primary" href="https://calendly.com/stlautomate/hvac-missed-call-demo">&#128197; Book a Demo</a><a class="btn-ghost" href="tel:+13148649065">&#128222; Call the Live Receptionist: (314) 864-9065</a></div>
 <div class="footer-bottom"><span>STL Automate &middot; 1123 Locust St, Ste 422, St Louis, MO 63101 &middot; <a href="mailto:contact@stlautomate.com" style="opacity:.8">contact@stlautomate.com</a></span><span>stlautomate.com</span></div>
</div></footer>
`;

export default function NeverMissAnotherJobPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: PAGE_BODY }} />
    </>
  );
}
