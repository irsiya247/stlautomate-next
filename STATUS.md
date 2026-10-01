# STL Automate Release Candidate Status

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
