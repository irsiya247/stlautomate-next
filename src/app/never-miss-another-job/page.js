"use client";

import { useEffect } from "react";

const PAGE_STYLES = `
:root{--navy:#0f2a43;--navy2:#1b3f63;--ink:#1a2331;--accent:#ff6b35;--accent2:#e85a2a;--green:#16a34a;--light:#f5f7fa;--line:#e3e8ef;--muted:#5b6b7f;}
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;color:var(--ink);line-height:1.55;background:#fff;}
.wrap{max-width:900px;margin:0 auto;padding:0 22px;}
a{color:inherit;text-decoration:none;}
img{max-width:100%;}
nav{background:#fff;border-bottom:1px solid var(--line);padding:14px 0;position:sticky;top:0;z-index:100;}
nav .inner{display:flex;align-items:center;justify-content:space-between;}
.logo{font-weight:800;font-size:17px;color:var(--navy);letter-spacing:-.3px;}
.logo span{color:var(--accent);}
.nav-cta{background:var(--accent);color:#fff;font-weight:700;padding:9px 18px;border-radius:7px;font-size:14px;transition:background .15s;}
.nav-cta:hover{background:var(--accent2);}
header{background:linear-gradient(160deg,#0b1f33,#1b3f63);color:#fff;padding:72px 0 64px;}
.eyebrow{display:inline-block;background:rgba(255,107,53,.18);border:1px solid rgba(255,107,53,.4);color:var(--accent);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;padding:5px 12px;border-radius:20px;margin-bottom:20px;}
h1{font-size:44px;line-height:1.12;font-weight:800;max-width:750px;margin-bottom:20px;}
h1 em{color:var(--accent);font-style:normal;}
.hero-sub{font-size:19px;opacity:.9;max-width:600px;line-height:1.55;margin-bottom:32px;}
.cta-stack{display:flex;flex-direction:column;gap:10px;max-width:420px;}
.btn-primary{display:flex;align-items:center;justify-content:center;gap:9px;background:var(--accent);color:#fff;font-weight:700;padding:17px 28px;border-radius:9px;font-size:18px;transition:background .15s;border:none;cursor:pointer;}
.btn-primary:hover{background:var(--accent2);}
.btn-ghost{display:flex;align-items:center;justify-content:center;gap:9px;background:transparent;color:#fff;border:2px solid rgba(255,255,255,.4);font-weight:600;padding:14px 28px;border-radius:9px;font-size:16px;transition:border-color .15s;}
.btn-ghost:hover{border-color:#fff;}
.hero-call-link{display:inline-block;margin-top:14px;font-size:14px;opacity:.8;text-decoration:underline;}
.hero-call-link:hover{opacity:1;}
.trust-pills{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px;}
.pill{display:flex;align-items:center;gap:6px;font-size:13px;opacity:.85;}
.pill svg{flex-shrink:0;}
.pain-band{background:var(--accent);color:#fff;padding:28px 0;text-align:center;}
.pain-band p{font-size:18px;font-weight:600;max-width:700px;margin:0 auto;}
.pain-band b{font-size:21px;}
.calc-section{padding:64px 0;background:var(--navy);color:#fff;}
.calc-eyebrow{display:inline-block;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.25);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;padding:5px 12px;border-radius:20px;margin-bottom:18px;}
.calc-section h2{font-size:30px;font-weight:800;margin-bottom:8px;}
.calc-section .sub{font-size:16px;opacity:.8;margin-bottom:34px;max-width:560px;}
.calc-box{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);border-radius:18px;padding:36px;display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;}
.calc-field{margin-bottom:24px;}
.calc-field:last-child{margin-bottom:0;}
.calc-field label{display:flex;justify-content:space-between;font-size:14px;font-weight:600;margin-bottom:10px;opacity:.9;}
.calc-val{color:var(--accent);font-weight:800;}
.calc-field input[type="range"]{width:100%;accent-color:var(--accent);height:6px;cursor:pointer;}
.calc-result{background:rgba(0,0,0,.18);border-radius:14px;padding:28px;text-align:center;}
.calc-result-label{font-size:13px;text-transform:uppercase;letter-spacing:.5px;opacity:.75;margin-bottom:10px;}
.calc-result-num{font-size:42px;font-weight:800;color:var(--accent);line-height:1;margin-bottom:6px;}
.calc-result-num span{font-size:16px;color:#fff;opacity:.7;font-weight:600;margin-left:4px;}
.calc-result-sub{font-size:13px;opacity:.7;margin-bottom:22px;line-height:1.5;}
.calc-result .btn-primary{width:100%;font-size:15px;padding:14px 18px;margin-bottom:10px;}
.btn-ghost-dark{display:block;font-size:13px;opacity:.75;text-decoration:underline;}
.btn-ghost-dark:hover{opacity:1;}
.pain-section{padding:64px 0;background:#fff;}
.pain-section h2{font-size:32px;font-weight:800;color:var(--navy);margin-bottom:10px;}
.pain-section .sub{font-size:17px;color:var(--muted);margin-bottom:40px;}
.pain-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;}
.pain-card{background:#fff8f5;border:1px solid #ffd5c2;border-radius:12px;padding:24px;}
.pain-card .icon{font-size:26px;margin-bottom:10px;}
.pain-card h3{font-size:17px;font-weight:700;color:var(--navy);margin-bottom:6px;}
.pain-card p{font-size:15px;color:var(--muted);}
.how{background:var(--light);padding:64px 0;}
.how h2{font-size:32px;font-weight:800;color:var(--navy);margin-bottom:8px;}
.how .sub{font-size:17px;color:var(--muted);margin-bottom:40px;}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
.step{background:#fff;border:1px solid var(--line);border-radius:14px;padding:28px;position:relative;}
.step-num{width:36px;height:36px;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:16px;margin-bottom:16px;}
.step h3{font-size:17px;font-weight:700;color:var(--navy);margin-bottom:8px;}
.step p{font-size:15px;color:var(--muted);}
.step-arrow{position:absolute;right:-18px;top:50%;transform:translateY(-50%);font-size:22px;color:var(--accent);font-weight:700;z-index:1;}
.what{padding:64px 0;background:#fff;}
.what h2{font-size:32px;font-weight:800;color:var(--navy);margin-bottom:8px;}
.what .sub{font-size:17px;color:var(--muted);margin-bottom:40px;}
.features{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.feature{display:flex;gap:14px;align-items:flex-start;padding:20px;border:1px solid var(--line);border-radius:12px;}
.feature-icon{width:40px;height:40px;border-radius:9px;background:var(--navy);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px;}
.feature h3{font-size:16px;font-weight:700;color:var(--navy);margin-bottom:4px;}
.feature p{font-size:14px;color:var(--muted);}
.math{background:linear-gradient(160deg,#0b1f33,#1b3f63);color:#fff;padding:64px 0;}
.math h2{font-size:32px;font-weight:800;margin-bottom:8px;}
.math .sub{font-size:17px;opacity:.85;margin-bottom:40px;}
.math-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.math-card{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:14px;padding:28px;text-align:center;}
.math-card .big{font-size:40px;font-weight:800;color:var(--accent);line-height:1.1;margin-bottom:6px;}
.math-card p{font-size:14px;opacity:.8;}
.guarantee{padding:64px 0;background:var(--light);}
.g-box{background:var(--navy);border-radius:16px;padding:46px 40px;text-align:center;color:#fff;}
.g-badge{display:inline-flex;align-items:center;gap:7px;background:var(--accent);color:#fff;font-weight:700;text-transform:uppercase;letter-spacing:.5px;font-size:13px;padding:6px 14px;border-radius:20px;margin-bottom:20px;}
.g-box h2{font-size:32px;font-weight:800;color:#fff;margin-bottom:16px;}
.g-box p{font-size:18px;opacity:.9;max-width:560px;margin:0 auto 28px;}
.g-terms{font-size:13px;opacity:.6;margin-top:14px;}
.pricing{padding:64px 0;background:#fff;}
.pricing h2{font-size:32px;font-weight:800;color:var(--navy);margin-bottom:8px;}
.pricing .sub{font-size:17px;color:var(--muted);margin-bottom:40px;}
.price-cards{display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:700px;}
.price-card{border:2px solid var(--line);border-radius:16px;padding:32px;}
.price-card.featured{border-color:var(--accent);position:relative;}
.featured-badge{position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:var(--accent);color:#fff;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;padding:4px 14px;border-radius:20px;white-space:nowrap;}
.price-label{font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);margin-bottom:10px;}
.price-amount{font-size:46px;font-weight:800;color:var(--navy);line-height:1;}
.price-amount small{font-size:18px;color:var(--muted);font-weight:600;}
.price-setup{font-size:14px;color:var(--muted);margin:6px 0 20px;}
.price-features{list-style:none;display:flex;flex-direction:column;gap:10px;margin-bottom:28px;}
.price-features li{display:flex;align-items:flex-start;gap:8px;font-size:15px;}
.check{color:var(--green);font-weight:700;flex-shrink:0;margin-top:1px;}
.faq-section{padding:64px 0;background:var(--light);}
.faq-section h2{font-size:32px;font-weight:800;color:var(--navy);margin-bottom:40px;}
.faq-list{display:flex;flex-direction:column;gap:16px;}
.faq-item{background:#fff;border:1px solid var(--line);border-radius:12px;padding:24px;}
.faq-item h3{font-size:17px;font-weight:700;color:var(--navy);margin-bottom:8px;}
.faq-item p{font-size:15px;color:var(--muted);line-height:1.6;}
.about{padding:64px 0;background:#fff;}
.about-inner{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;}
.about h2{font-size:30px;font-weight:800;color:var(--navy);margin-bottom:16px;}
.about p{font-size:16px;color:var(--muted);margin-bottom:14px;line-height:1.65;}
.about-stat{display:flex;flex-direction:column;gap:18px;}
.astat{background:var(--light);border:1px solid var(--line);border-radius:12px;padding:22px;}
.astat .big{font-size:34px;font-weight:800;color:var(--accent);margin-bottom:4px;}
.astat p{font-size:14px;color:var(--muted);}
footer{background:linear-gradient(160deg,#0b1f33,#1b3f63);color:#fff;padding:72px 0 40px;}
footer h2{font-size:36px;font-weight:800;margin-bottom:16px;max-width:600px;}
footer p{font-size:18px;opacity:.85;max-width:540px;margin-bottom:36px;}
.footer-cta-row{display:flex;flex-wrap:wrap;gap:14px;}
.footer-bottom{border-top:1px solid rgba(255,255,255,.12);margin-top:48px;padding-top:24px;font-size:13px;opacity:.55;display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;}
@media(max-width:720px){
h1{font-size:32px;}
.pain-grid,.features,.math-cards,.price-cards,.steps{grid-template-columns:1fr;}
.about-inner{grid-template-columns:1fr;}
.calc-box{grid-template-columns:1fr;padding:26px;}
.step-arrow{display:none;}
footer h2{font-size:27px;}
}
`;

const PAGE_BODY = `
<nav>
 <div class="wrap inner">
 <div class="logo">STL <span>Automate</span></div>
 <a class="nav-cta" href="https://calendly.com/stlautomate/hvac-missed-call-demo">Book a Demo &rarr;</a>
 </div>
</nav>

<header>
 <div class="wrap">
 <div class="eyebrow">&#9889; HVAC Missed-Call Recovery &middot; St. Louis, MO</div>
 <h1>Your HVAC shop is losing <em>$45,000+ a year</em> to voicemail. We fix that.</h1>
 <p class="hero-sub">We answer every call you miss, text the homeowner back in seconds, and book the job straight to your calendar, nights, weekends, and the middle of your busiest season.</p>
 <div class="cta-stack">
 <a class="btn-primary" href="#calculator">See What Missed Calls Cost You</a>
 <a class="btn-ghost" href="https://calendly.com/stlautomate/hvac-missed-call-demo">Skip Ahead, Book a Demo</a>
 </div>
 <a class="hero-call-link" href="tel:+13143298230">Or just call Matthew directly: (314) 329-8230</a>
 <div class="trust-pills">
 <span class="pill"><svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.5l-4.8 2.4.9-5.4L2.2 7.7l5.4-.8L10 2z" fill="#ff6b35"/></svg>3 booked jobs in 30 days or full refund</span>
 <span class="pill">&#10003; Founding rate, first 5 St. Louis shops only</span>
 <span class="pill">&#10003; Setup in 2 days. Nothing changes in how you work.</span>
 </div>
 </div>
</header>

<div class="pain-band">
 <div class="wrap">
 <p>The average HVAC shop misses <b>1 in 4 calls</b> and loses <b>$45,000&ndash;$120,000 a year</b> just to voicemail. Every ring you don't answer is a job your competitor is booking right now.</p>
 </div>
</div>

<section class="calc-section" id="calculator">
 <div class="wrap">
 <div class="calc-eyebrow">&#9201; Takes 15 seconds &middot; No email, no signup</div>
 <h2>What are missed calls actually costing your shop?</h2>
 <p class="sub">Move the sliders to match your numbers. This isn't a lead form. It's just the math, calculated live.</p>
 <div class="calc-box">
 <div class="calc-inputs">
 <div class="calc-field">
 <label>Calls you get per week <span class="calc-val" id="callsVal">30</span></label>
 <input type="range" id="callsRange" min="5" max="150" value="30" step="5">
 </div>
 <div class="calc-field">
 <label>Roughly how many go unanswered? <span class="calc-val" id="missedVal">25%</span></label>
 <input type="range" id="missedRange" min="10" max="50" value="25" step="5">
 </div>
 <div class="calc-field">
 <label>Average job value <span class="calc-val" id="ticketVal">$900</span></label>
 <input type="range" id="ticketRange" min="400" max="2000" value="900" step="50">
 </div>
 </div>
 <div class="calc-result">
 <p class="calc-result-label">Estimated revenue lost to missed calls</p>
 <div class="calc-result-num" id="resultNum">$87,750<span>/year</span></div>
 <p class="calc-result-sub" id="resultSub">Assumes a conservative 25% close rate on the calls that go unanswered. Most shops close higher than that.</p>
 <a class="btn-primary" href="https://calendly.com/stlautomate/hvac-missed-call-demo" id="calcCta">See exactly how we'd stop this &rarr;</a>
 <a class="btn-ghost-dark" href="tel:+13143298230">Or just call Matthew: (314) 329-8230</a>
 </div>
 </div>
 </div>
</section>

<section class="pain-section">
 <div class="wrap">
 <h2>Sound familiar?</h2>
 <p class="sub">These are the exact problems HVAC owners tell us about every week.</p>
 <div class="pain-grid">
 <div class="pain-card"><div class="icon">&#128266;</div><h3>Calls go to voicemail and never call back</h3><p>Research shows 85% of people who hit voicemail don't leave a message, and they call your competitor immediately.</p></div>
 <div class="pain-card"><div class="icon">&#127769;</div><h3>After-hours calls are just lost</h3><p>AC breaks on a Friday night. Homeowner calls you, gets voicemail, calls the next guy. That was a $600&ndash;$2,000 job gone.</p></div>
 <div class="pain-card"><div class="icon">&#128295;</div><h3>Your techs are too busy to answer</h3><p>When you're on a roof, you can't pick up. But that call still expects an answer in under 3 minutes or they move on.</p></div>
 <div class="pain-card"><div class="icon">&#128176;</div><h3>You're paying for leads you never actually close</h3><p>Angi, HomeAdvisor, Google ads. If the lead calls and you miss it, you paid for nothing. The problem isn't the leads.</p></div>
 </div>
 </div>
</section>

<section class="how">
 <div class="wrap">
 <h2>How it works</h2>
 <p class="sub">Three steps. Runs automatically. You wake up to booked jobs.</p>
 <div class="steps">
 <div class="step"><div class="step-num">1</div><h3>Call comes in, you can't answer</h3><p>Your techs are on a roof, it's after hours, or all lines are busy. Normally that caller is gone forever.</p><span class="step-arrow">&rsaquo;</span></div>
 <div class="step"><div class="step-num">2</div><h3>We text them back in seconds</h3><p>The caller gets a personal text within 30 seconds. Our AI asks what's wrong, gets their info, and schedules them. Automatically.</p><span class="step-arrow">&rsaquo;</span></div>
 <div class="step"><div class="step-num">3</div><h3>Job lands on your calendar</h3><p>You get a notification. The appointment is there with the customer's name, address, and the problem. Done.</p></div>
 </div>
 </div>
</section>

<section class="what">
 <div class="wrap">
 <h2>What's included</h2>
 <p class="sub">Everything runs on your existing number. You don't change a thing.</p>
 <div class="features">
 <div class="feature"><div class="feature-icon">&#9889;</div><div><h3>Instant missed-call text-back</h3><p>Every missed call gets a text within 30 seconds. Catches the caller before they dial your competitor.</p></div></div>
 <div class="feature"><div class="feature-icon">&#129302;</div><div><h3>24/7 AI phone receptionist</h3><p>Answers after-hours calls, asks qualifying questions, handles basic FAQs. Sounds professional, never takes a sick day.</p></div></div>
 <div class="feature"><div class="feature-icon">&#128197;</div><div><h3>Automatic appointment booking</h3><p>Syncs with your calendar. Jobs get booked directly, no callbacks, no back-and-forth texting.</p></div></div>
 <div class="feature"><div class="feature-icon">&#128202;</div><div><h3>Live dashboard + tracking</h3><p>You see every call, every text, every booked job. This is how we prove the guarantee, fully transparent.</p></div></div>
 <div class="feature"><div class="feature-icon">&#128241;</div><div><h3>Works on your current number</h3><p>No new number, no training your customers. We route through a tracking line invisibly. Same number, smarter system.</p></div></div>
 <div class="feature"><div class="feature-icon">&#128295;</div><div><h3>Setup in 2 business days</h3><p>We handle the entire setup. You don't touch anything technical. It's running in 48 hours.</p></div></div>
 </div>
 </div>
</section>

<section class="math">
 <div class="wrap">
 <h2>The math is not close</h2>
 <p class="sub">A single recovered job covers months of this service. Here's what the numbers actually look like.</p>
 <div class="math-cards">
 <div class="math-card"><div class="big">1 in 4</div><p>Calls the average HVAC shop misses. That's 25% of your inbound demand going to voicemail</p></div>
 <div class="math-card"><div class="big">$600&ndash;$2k</div><p>Average value of a recovered HVAC service call. One job per week pays for this 12&times; over.</p></div>
 <div class="math-card"><div class="big">30 sec</div><p>Our text-back time. Research shows responding in under 5 minutes is 21&times; more likely to convert than waiting an hour.</p></div>
 </div>
 </div>
</section>

<section class="guarantee">
 <div class="wrap">
 <div class="g-box">
 <div class="g-badge">&#128737;&#65039; Our Guarantee</div>
 <h2>3 booked jobs in 30 days, or you pay nothing.</h2>
 <p>Every call runs through your tracking line. You can see every job we book on your live dashboard. If the system doesn't book you at least 3 new jobs in the first 30 days, you get a full refund, setup included, and you keep the jobs we already booked you.</p>
 <a class="btn-primary" style="display:inline-flex;margin-top:10px;" href="https://calendly.com/stlautomate/hvac-missed-call-demo">Book Your Demo Now</a>
 <p class="g-terms">No contracts. Cancel anytime after 30 days. Refund issued within 3 business days.</p>
 </div>
 </div>
</section>

<section class="pricing">
 <div class="wrap">
 <h2>Simple, results-based pricing</h2>
 <p class="sub">No contracts. No hidden fees. Cancel anytime after the first 30 days.</p>
 <div class="price-cards">
 <div class="price-card featured">
 <div class="featured-badge">&#9889; Founding Rate, 5 Spots Only</div>
 <div class="price-label">Founding Member</div>
 <div class="price-amount">$497<small>/mo</small></div>
 <div class="price-setup">+ $500 one-time setup</div>
 <ul class="price-features">
 <li><span class="check">&#10003;</span>Instant missed-call text-back (24/7)</li>
 <li><span class="check">&#10003;</span>AI phone receptionist</li>
 <li><span class="check">&#10003;</span>Automatic calendar booking</li>
 <li><span class="check">&#10003;</span>Live call + booking dashboard</li>
 <li><span class="check">&#10003;</span>Setup in 2 business days</li>
 <li><span class="check">&#10003;</span>30-day money-back guarantee</li>
 <li><span class="check">&#10003;</span>Priority onboarding from Matthew</li>
 </ul>
 <a class="btn-primary" href="https://calendly.com/stlautomate/hvac-missed-call-demo">Claim Founding Rate &rarr;</a>
 </div>
 <div class="price-card">
 <div class="price-label">Standard</div>
 <div class="price-amount">$797<small>/mo</small></div>
 <div class="price-setup">+ $750 one-time setup</div>
 <ul class="price-features">
 <li><span class="check">&#10003;</span>Everything in Founding</li>
 <li><span class="check">&#10003;</span>Standard onboarding timeline</li>
 <li><span class="check">&#10003;</span>30-day money-back guarantee</li>
 </ul>
 <a class="btn-primary" style="background:var(--navy);" href="https://calendly.com/stlautomate/hvac-missed-call-demo">Get Started &rarr;</a>
 </div>
 </div>
 </div>
</section>

<section class="about">
 <div class="wrap">
 <div class="about-inner">
 <div>
 <h2>Built for HVAC. By someone who knows the trade.</h2>
 <p>I'm Matthew, co-founder of STL Automate. I spent years around the HVAC industry and watched owner after owner lose jobs to missed calls. Not bad service, not bad pricing, just missed calls.</p>
 <p>So Akshay and I built a system specifically for HVAC shops. Not a generic call center. Not a chatbot. A purpose-built system that understands HVAC urgency and books jobs the way your business actually runs.</p>
 <p>We're local to St. Louis. You can call me directly. If it doesn't work, you don't pay. That's the whole deal.</p>
 <div style="margin-top:24px;display:flex;flex-wrap:wrap;gap:12px;">
 <a class="btn-primary" href="https://calendly.com/stlautomate/hvac-missed-call-demo">Book a Demo</a>
 <a class="btn-ghost" style="color:var(--navy);border-color:var(--navy);" href="tel:+13143298230">Call (314) 329-8230</a>
 </div>
 </div>
 <div class="about-stat">
 <div class="astat"><div class="big">85%</div><p>of callers who hit voicemail don't leave a message, they call someone else</p></div>
 <div class="astat"><div class="big">21&times;</div><p>more likely to book when you respond in under 5 minutes vs. waiting an hour</p></div>
 <div class="astat"><div class="big">$497</div><p>per month to recover jobs worth $600&ndash;$2,000 each. The math isn't hard.</p></div>
 </div>
 </div>
 </div>
</section>

<section class="faq-section">
 <div class="wrap">
 <h2>Common questions</h2>
 <div class="faq-list">
 <div class="faq-item"><h3>We already have an answering service. Why do we need this?</h3><p>Traditional answering services take a message. We book the job. The difference is a message in a queue vs. an appointment on your calendar. The conversion rate between those two outcomes is not comparable.</p></div>
 <div class="faq-item"><h3>Does this replace my receptionist?</h3><p>No. It handles the calls your receptionist can't: after hours, weekends, when she's on another call. Think of it as 24/7 overflow coverage that also books automatically.</p></div>
 <div class="faq-item"><h3>Do I have to change my phone number?</h3><p>No. We set up a tracking line that forwards through your existing number. Your number stays the same. Your customers call the same number. We just make sure every call gets answered.</p></div>
 <div class="faq-item"><h3>How fast can it be live?</h3><p>2 business days from the time you sign up. We handle the entire setup. You don't touch anything technical.</p></div>
 <div class="faq-item"><h3>What if it doesn't work?</h3><p>You get a full refund, setup included, if we don't book you at least 3 new jobs in 30 days. You keep the jobs we booked. We absorb the loss. We only make money if the system actually works for you.</p></div>
 <div class="faq-item"><h3>What does the demo look like?</h3><p>10 minutes on a call with Matthew. He'll show you exactly how the system works on a live example. You can see a test call come in, the instant text-back fire, and the booking complete. No slides, no pitch decks. You just watch it work.</p></div>
 <div class="faq-item"><h3>We're not in St. Louis. Do you work with shops elsewhere?</h3><p>Right now we're focused on St. Louis for the founding cohort. Reach out anyway. If we have capacity and your market makes sense, we'll talk.</p></div>
 </div>
 </div>
</section>

<footer>
 <div class="wrap">
 <h2>Stop letting summer calls go to your competitor's voicemail.</h2>
 <p>It's June. Peak season is right now. Every day you wait is more jobs walking out the door. The demo is 10 minutes. See your number above, then book.</p>
 <div class="footer-cta-row">
 <a class="btn-primary" href="https://calendly.com/stlautomate/hvac-missed-call-demo">&#128197; Book a Demo</a>
 <a class="btn-ghost" href="tel:+13143298230">&#128222; Call Matthew: (314) 329-8230</a>
 </div>
 <div class="footer-bottom">
 <span>STL Automate &middot; 1123 Locust St, Ste 422, St Louis, MO 63101 &middot; <a href="mailto:contact@stlautomate.com" style="opacity:.8">contact@stlautomate.com</a></span>
 <span>stlautomate.com</span>
 </div>
 </div>
</footer>
`;

export default function NeverMissAnotherJobPage() {
  useEffect(() => {
    const calls = document.getElementById("callsRange");
    const missed = document.getElementById("missedRange");
    const ticket = document.getElementById("ticketRange");
    const callsVal = document.getElementById("callsVal");
    const missedVal = document.getElementById("missedVal");
    const ticketVal = document.getElementById("ticketVal");
    const resultNum = document.getElementById("resultNum");
    const CLOSE_RATE = 0.25;

    if (!calls || !missed || !ticket || !callsVal || !missedVal || !ticketVal || !resultNum) {
      return;
    }

    function fmtMoney(n) {
      return "$" + Math.round(n).toLocaleString("en-US");
    }

    function calc() {
      const c = parseInt(calls.value, 10);
      const mPct = parseInt(missed.value, 10);
      const m = mPct / 100;
      const t = parseInt(ticket.value, 10);

      callsVal.textContent = c;
      missedVal.textContent = mPct + "%";
      ticketVal.textContent = "$" + t.toLocaleString("en-US");

      const missedCallsPerYear = c * 52 * m;
      const lostJobsPerYear = missedCallsPerYear * CLOSE_RATE;
      const lostRevenue = lostJobsPerYear * t;

      resultNum.innerHTML = fmtMoney(lostRevenue) + "<span>/year</span>";
    }

    [calls, missed, ticket].forEach((el) => {
      el.addEventListener("input", calc);
    });

    calc();

    return () => {
      [calls, missed, ticket].forEach((el) => {
        el.removeEventListener("input", calc);
      });
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: PAGE_BODY }} />
    </>
  );
}
