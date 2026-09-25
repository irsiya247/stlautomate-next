# STL Automate Website Status

## Credibility association rule

- Added the canonical machine-readable credibility ledger at `docs/marketing/credibility-ledger.json` and the content review checklist at `docs/marketing/content-review-checklist.md`.
- Added a global marketing and publishing rule to `AGENTS.md` covering all requested public and sales content surfaces.
- Approved claims include internal self-hosted n8n use, HubSpot source-of-truth/one-write Customer Zero validation, Vercel website hosting, and STL Automate's user-confirmed approval for AWS Activate. Do not imply AWS Partner/Amazon Partner status, AWS backing, endorsement, sponsorship, an AWS customer/investor/client relationship, or any specific credits-awarded amount without separate evidence. AWS logo/mark rights remain unverified; OpenAI and Twilio remain pending for public association claims, and logo/mark rights remain unverified for all entries.
- Audited current site copy. The technology page already gives the scoped internal n8n claim, and the product page already states the exact HubSpot Customer Zero milestone. Left site copy unchanged because these claims are already visible in context and no additional verified association offered a material low-risk improvement.
- No external publication or account changes made.

## Current goal

Complete the public website prerequisites for the existing STL Automate Google OAuth application without changing scopes, credentials, DNS, or workflow code.

## Done

- Confirmed `https://stlautomate.com` redirects to the canonical production origin `https://www.stlautomate.com`.
- Identified the production source as `github.com/irsiya247/stlautomate-next`.
- Identified the framework as Next.js 16.2.6 App Router and the deployment provider as Vercel.
- Recorded production rollback revision `8219524718d4def3d5804ed10059678a04192517` and deployment `EnRJPDhZrVz63U4yc7H6mQR1hNTi`.
- Confirmed `/privacy` and `/terms` already exist and are linked from the homepage footer.
- Checked current Google OAuth branding, homepage, privacy, authorized-domain, and Limited Use requirements in official Google documentation.
- Updated the Privacy Policy to disclose the actual Gmail and Google Sheets job-search automation data practices and Google API Limited Use compliance.
- Updated the Terms of Service with proportionate service, permitted-use, misuse, availability, intellectual-property, third-party-service, disclaimer, liability, termination, governing-law, and contact terms.
- Expanded the existing footer labels to `Privacy Policy` and `Terms of Service` without changing its structure.
- Ran the Next.js production build successfully; `/`, `/privacy`, and `/terms` are generated as static routes.
- Ran targeted ESLint successfully on both policy pages. Repository-wide lint still reports two pre-existing internal-link errors and three unrelated warnings.
- Verified the homepage and both policy routes locally, including footer navigation and the Google Limited Use statement.
- Confirmed the updated pages produce no browser-console errors.
- Checked a 390px mobile viewport. Policy content and the new legal links fit; the pre-existing footer contact email extends 35px beyond the viewport and was left unchanged as unrelated scope.
- Captured the Google OAuth baseline: Audience `External`, status `Testing`, authorized domains `openai.com` and `stlautomate.com`, blank app-domain URL fields, and no scopes listed on the Data Access page.
- Captured the existing client baseline: client ID `404753221615-rrd2vnjchjlrhnn6971hclra9vs8kgi0.apps.googleusercontent.com` and two redirect URIs (ChatGPT callback and the existing n8n callback).
- Confirmed n8n credential `Gmail account` is currently connected, uses the expected client ID and callback, and has Custom Scopes disabled.
- Confirmed `Job Search — Master Pipeline` is published and active on version `29d0049e-2171-4d53-881b-74575d99646e`.
- Confirmed all four named Gmail nodes reference `Gmail account` without executing any node or workflow.

## Next steps

1. Review the exact changed files and confirm no unrelated changes.
2. Commit the minimal change locally.
3. Obtain the action-time confirmation required before publishing public website text.
4. Push `main` so Vercel deploys it.
5. Verify all three public URLs.
6. Complete Google OAuth branding and publish the app if no DNS or verification blocker appears.
7. Reconnect the existing n8n Gmail credential once, then re-verify the production workflow references without running it.

## Open questions

- Whether Google already recognizes `stlautomate.com` as an authorized and verified domain. This will be checked in Google Cloud after the website deploy.

## Relevant files

- `src/app/(site)/privacy/page.js`
- `src/app/(site)/terms/page.js`
- `src/app/(site)/layout.js`
- `STATUS.md`
