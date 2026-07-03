# STL Automate Website Status

## Current goal

Add privacy-safe Sentry error monitoring and PostHog site analytics to the active Next.js App Router website.

## Done

- Confirmed the active repository root and `src/` App Router structure.
- Reviewed the installed Next.js 16.2.6 instrumentation and global error guidance.
- Reviewed the current official Sentry Next.js and PostHog Next.js setup guidance.
- Installed `@sentry/nextjs` 10.63.0 and `posthog-js` 1.396.6.
- Confirmed `package.json` and `package-lock.json` were updated.
- Added browser, server, and edge Sentry initialization using environment variables only.
- Added server request error capture, router transition capture, and a global App Router error boundary.
- Added PostHog browser analytics with session recording disabled and no user identification.
- Wrapped the existing Next.js configuration with `withSentryConfig` for source map uploads.
- Ran targeted ESLint against every monitoring file successfully.
- Ran the production build successfully with all 21 routes generated.
- Ran the repository-wide lint command. It remains blocked by pre-existing source errors and generated files under the untracked nested `stlautomate-next/` directory; no monitoring files reported errors.

## Next steps

1. Add the six required environment variables to Vercel for Production, Preview, and Development as appropriate.
2. Deploy and verify a controlled Sentry error and PostHog pageview in their dashboards.
3. Separately clean up the pre-existing lint failures and stale nested scaffold.

## Open questions

- Production verification requires valid Sentry and PostHog project values in Vercel.

## Relevant files

- `next.config.mjs`
- `package.json`
- `package-lock.json`
- `src/instrumentation-client.js`
- `src/instrumentation.js`
- `src/sentry.server.config.js`
- `src/sentry.edge.config.js`
- `src/app/global-error.js`
- `STATUS.md`
