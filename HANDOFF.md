# Release Candidate Handoff

## Scope

- Repository: `C:\\Projects\\STL-Automate\\stlautomate-next-rc-recovery-20260928`
- Branch: `codex/release-candidate-fix-build-grow`
- Base commit: `48158a32ff2f55d33171b208f908564d85d037c4`
- Release candidate commit: `c7626c729e24d409c3fd0e94d6c629b4c31fc2e8`
- Terminal state: website release candidate prepared; production deploy and advertising activation remain approval-gated.

## Website changes

- Repositioned the homepage around FIX. BUILD. GROW.
- Added `/fix`, `/build`, `/grow`, and `/agent-floor`.
- Preserved existing service routes, intake validation, webhook routing, consent controls, privacy/terms links, and monitoring hooks.
- Added source-page, UTM, click-ID, landing-page, and referrer capture to the existing intake payload without changing supported API form types.
- Updated navigation and metadata only; no CRM, production n8n, DNS, or external communication changes.

## Verification

- `npm ci --ignore-scripts --no-audit --no-fund`: passed.
- `npm run lint`: passed with three pre-existing warnings only.
- `npm test -- --test-reporter=spec`: 35 passed, 0 failed.
- `npm run build`: passed; Next.js 16.2.6 generated 34/34 routes.
- `git diff --check`: passed.
- Local production smoke tests passed for new/legacy routes, privacy, terms, intake, malformed/unsupported lead POST rejection, 404 behavior, and XSS-reflection check.
- No valid webhook POST was attempted because `N8N_WEBHOOK_URL` was absent from the test process.

## Google Ads native draft

Account: `655-935-8299` (`STL Automate`)

- Campaign: `STL Automate - FIX - Automation Repair`
- Campaign ID: `281499270175396`
- Draft ID: `10216026239`
- Type: Search; website lead-form submissions goal.
- Landing page: `https://www.stlautomate.com/fix`
- Location: St. Louis, Missouri city; presence-only option selected.
- Language: English.
- Search Partners off. Display Network off.
- Bidding: Maximize Clicks with a `$5.00` maximum CPC bid limit.
- Budget: campaign total `$300.00`, September 28 through October 11, 2026.
- One responsive search ad prepared with five approved headlines and two approved descriptions.
- Keywords entered as phrase/exact syntax: `[n8n workflow repair]`, `"n8n troubleshooting service"`, `[n8n consultant]`, `"GoHighLevel workflow help"`, `[GHL automation repair]`.
- AI Max campaign switch was turned off, but the builder continued to display contradictory ad-group text stating that AI Max was on.
- No spend, purchase, publish, or activation occurred.

## Current blocker

Google Ads review showed `Add keywords` and `Changes failed to save`. Google repeatedly presented `Confirm it's you` and required account identity verification to complete the save. That verification was not performed. The `Publish campaign` control was not clicked.

Therefore the Ads portion is not certified as a fully saved, launch-ready campaign. Matthew must complete the native identity-verification gate, then re-open the draft and verify keywords, AI Max state, and the final non-serving/paused state before any activation approval.

## Launch approval boundary

No production deployment, campaign publication, activation, or spend occurred. After the Ads save blocker is cleared and the draft is verified, the single bundled approval should explicitly name the website commit, campaign ID/name, `$300` maximum total spend and dates, and immediate-pause conditions.
