# STL Automate Release Candidate Status

## NP03-WEB-01 social-preview candidate, 2026-10-12

- Scope: root branded image fallback plus complete homepage, Automation Repair, Lead-to-HubSpot, and Custom Automation Open Graph/Twitter cards. Four original opaque RGB PNGs at 1200x630 are tracked in `public/og/`.
- Exact source: `irsiya247/stlautomate-next` main commit `775333a5f40c89cc02adfc897df2c267ebc6d8ed`, read from GitHub and checked out separately. The older issue-audit SHA was not reused.
- Existing titles, descriptions, canonical source values, prices, CTAs, page bodies, structured data, tracking, and integrations are preserved. No customer proof, provider logos, new prices, or outcome claims were added. The credibility ledger was reviewed.
- Verification: full tests PASS (53/53); lint PASS (0 errors, 3 warnings in unchanged files); Next.js 16.2.6 Webpack production build PASS (34/34 pages generated); `git diff --check` PASS.
- Rendered verification PASS: 4 generated static pages, 16 localhost requests across normal/LinkedIn/Twitter/Facebook user agents, 4 image responses (HTTP 200, image/png, 1200x630, matching file bytes), and 3 NP03 tracked-URL variants. Metadata is in the document head, with correct image URL/alt/dimensions, OG title/description/url/type/site name, and Twitter summary_large_image. Homepage origin trailing slash is normalized by Next.js in emitted URLs; canonical source values and URL meaning are unchanged.
- Build environment: default Turbopack attempt stopped after remaining in compilation; sandboxed Webpack compiled but could not create generated files (EPERM). A credential-free local Webpack run outside that filesystem restriction completed. Local HTTP checks ran in the same process context after sandbox networking prevented access. No source/config changes were made to work around the environment.
- Source/assets passed an independent read-only review. Detailed logs, original SVG artwork, generated HTML, rendered-evidence.json, binary patch, source archive, candidate commit, and artifact hashes are in the accompanying NP03-WEB-01 review package.
- State: VERIFIED LOCAL CANDIDATE, awaiting Portfolio Controller acceptance and separate release/deploy authority. No push, PR creation, merge, deployment, publication, activation, production change, credential/security change, spending, or outreach occurred. NP04-B01 was not touched. Public social-platform scrape/rendering remains unverified until a separately authorized deployment and rescrape.


## Canonical sitemap route correction, 2026-10-01

- Defect: Production sitemap advertised `/intake`, which redirects to `/start-project?type=custom-project`, and omitted the live public routes `/fix`, `/build`, `/grow`, and `/agent-floor`.
- Correction: Removed `/intake`; added `/agent-floor`, `/build`, `/fix`, and `/grow`. All other existing sitemap routes were preserved. No `lastModified` values or other route behavior were added.
- Regression coverage: Added a focused sitemap route test for required canonical paths, `/intake` absence, and duplicate prevention. Existing `/start-project` and all four monitored service routes are asserted.
- Verification: Focused sitemap and monitored service tests passed (20/20); full `npm test` passed (43/43); lint passed with 0 errors and 3 existing warnings; production build passed with 34/34 static pages generated; `git diff --check` passed.
- Release state: local only. Nothing was pushed, merged, published, or deployed.
- Base: `9b271db9758047d122ba5468d521cd46e9952f14`.

## St. Louis local-intent metadata hardening, 2026-10-01

- Rationale: Public search sampling supplied for this task shows location-explicit St. Louis automation and receptionist pages surfacing for generic local buyer-intent searches. Search Console query/ranking data is not yet authoritative, so this is a conservative update to existing pages, not a new-page or keyword expansion.
- Credibility review: `docs/marketing/credibility-ledger.json` reviewed. No partner, customer, results, address, review, certification, or LocalBusiness/schema claims were added.
- Homepage metadata: title changed from `STL Automate | FIX. BUILD. GROW.` to `Business Automation Services in St. Louis | STL Automate`. Description changed from `STL Automate helps St. Louis businesses fix broken workflows, build practical systems, and improve the path from lead to customer.` to `Custom business automation for St. Louis businesses and remote teams, plus workflow repair, lead systems, and Phone Receptionist services.`
- Automation Repair title changed from `Automation Repair for Broken Workflows | STL Automate` to `Workflow Automation Repair in St. Louis | STL Automate`. Description changed to `Repair broken n8n, Zapier, or Make workflows, webhooks, APIs, and HubSpot handoffs with STL Automate in St. Louis or remotely. Focused repair sprint starts at $750.` Existing St. Louis/remote eyebrow retained.
- Custom Automation title changed from `Custom Workflow & Business Process Automation | STL Automate` to `Custom Automation in St. Louis | STL Automate`. Description changed to `Custom business process automation and system integrations for St. Louis businesses and remote teams. STL Automate scopes, builds, tests, and hands off workflows.` Eyebrow: `Custom automation · St. Louis and remote`.
- Lead-to-HubSpot title changed from `HubSpot Lead Capture & Automation | STL Automate` to `HubSpot Lead Automation in St. Louis | STL Automate`. Description changed to `Build a reliable website-to-HubSpot lead path with field mapping, duplicate protection, testing, and handoff. STL Automate serves St. Louis and remote teams.` Existing eyebrow retained.
- Phone Receptionist title changed from `Phone Receptionist & Missed Call Automation | STL Automate` to `Phone Receptionist in St. Louis | STL Automate`. Description changed to `A scoped Phone Receptionist for missed-call follow-up and lead capture, serving St. Louis businesses and remote teams. Includes agreed routing, testing, and handoff.` Eyebrow: `Phone Receptionist · St. Louis and remote`.
- Pricing, canonical URLs, CTA destinations, page scope, tracking, intake, and integrations are unchanged. No location pages were added.
- Verification: `git diff --check` passed; focused SEO/service tests passed (21/21); full `npm test` passed (42/42); lint passed with 0 errors and 3 existing warnings; production build passed with all 34 routes generated.
- Release state: local only. Nothing was pushed, merged, published, or deployed.

## Customer acquisition legacy intake convergence, 2026-10-01

- Defect: Homepage acquisition CTAs and the footer Free Consultation link sent visitors to `/intake`, whose legacy form bypassed the tracked CTA context and `lead_intake_submitted` event.
- Correction: Homepage and footer acquisition links now use uniquely placed `TrackedLink` CTAs to `/start-project?type=custom-project`. The `/intake` route remains available and redirects to the existing custom-project form while carrying `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`, and `fbclid` when present.
- Form, PostHog, Google Ads conversion, and server intake behavior are unchanged. No second project form was added.
- Regression coverage checks homepage/footer tracking, the compatibility redirect and attribution allowlist, current offer destinations, and the intake event/conversion contract.
- Verification: `git diff --check` passed; targeted acquisition, service-route, and Google Ads conversion tests passed (38 tests); full `npm test` passed (40 tests); lint passed with 0 errors and 3 existing warnings; production build passed and generated the dynamic `/intake` redirect route.
- Release state: local only. No push, merge, publish, or deployment.
- Base: `bfef80c76b4c55490b17e70199a305f11acd66f9`. Fetch was attempted but GitHub DNS was unavailable; the cached `origin/main` ref matched this base at worktree creation.

## Current state

- Branch: `codex/release-candidate-fix-build-grow`
- Base commit: `48158a32ff2f55d33171b208f908564d85d037c4`
- Release candidate commit: `c7626c729e24d409c3fd0e94d6c629b4c31fc2e8`
- Website RC is implemented and verified in the clean recovery checkout.
- Google Ads has a non-serving Search draft, but final draft-save verification is blocked by native account identity verification.
- No production deploy, ad publish, activation, spend, CRM mutation, or external communication occurred.

## Website acceptance

- Routes added: `/fix`, `/build`, `/grow`, `/agent-floor`.
- Existing service routes and intake behavior preserved.
- Attribution capture added without expanding the API supported form-type contract.
- Lint passed with three pre-existing warnings.
- Tests: 35 passed, 0 failed.
- Build: passed, 34/34 routes generated.
- Local HTTP, malformed-input, unsupported-form, 404, homepage-link, and injection-reflection checks passed.

## Google Ads draft

- Account: `655-935-8299`.
- Campaign: `STL Automate - FIX - Automation Repair`.
- Campaign ID: `281499270175396`.
- Draft ID: `10216026239`.
- Native settings observed: Search, St. Louis city, presence-only targeting, English, Search Partners off, Display off, Maximize Clicks, `$5.00` CPC ceiling, `$300.00` campaign-total budget, September 28 to October 11, 2026, website lead-form goal, `/fix` landing page.
- One responsive search ad was prepared with approved n8n/GHL repair copy.
- Keywords were entered with phrase/exact syntax, but Google review still reported `Add keywords` after a save failure, so server-side persistence is not certified.
- AI Max campaign control was set to off; ad-group UI remained contradictory and requires recheck after identity verification.

## Blocker and human boundary

The native builder displayed `Changes failed to save` and required `Confirm it's you`. I did not perform identity verification and did not click `Publish campaign`. The remaining action is Matthew's account-security step, followed by read-only verification of the saved draft. Only then can the website and campaign bundle reach launch approval.

## Next safe action

Matthew completes Google Ads identity verification in the open handoff tab. After that, re-open draft `10216026239`, verify keywords and AI Max, confirm the draft is paused and non-serving with no spend, and return for the bundled launch approval.
