# STL Automate Website Status

## Current goal

Repair the missing `robots.txt` and `sitemap.xml` endpoints on a non-production branch without merging or deploying.

## Done

- Created the non-production branch `agent/repair-robots-sitemap` from `main`.
- Confirmed the repository uses the Next.js 16.2.6 App Router under `src/app`.
- Read the bundled Next.js 16.2.6 documentation for `robots.js` and `sitemap.js` metadata routes.
- Confirmed neither metadata route previously existed.
- Enumerated the current public page routes in the repository.
- Verified that `https://stlautomate.com` redirects permanently to the live canonical host at `https://www.stlautomate.com`.
- Added `src/app/robots.js` to allow public crawling, exclude `/api/`, and declare the sitemap URL.
- Added `src/app/sitemap.js` with every current public page route on the canonical host.
- Ran targeted ESLint against both metadata route files successfully.
- Ran the Next.js production build successfully; `/robots.txt` and `/sitemap.xml` were generated as static routes.
- Started the production build on a local-only port and verified both endpoints return HTTP 200.
- Confirmed `robots.txt` returns `text/plain` with the crawler policy and sitemap declaration.
- Confirmed `sitemap.xml` returns `application/xml` with all 16 public page URLs.

## Next steps

1. Review the local commit on `agent/repair-robots-sitemap`.
2. Push the branch only after separate approval.
3. Open and merge a pull request only after separate approval.
4. Deploy only after separate approval.

## Open questions

- None for the scoped repair.

## Relevant files

- `src/app/robots.js`
- `src/app/sitemap.js`
- `STATUS.md`
