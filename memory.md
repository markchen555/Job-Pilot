# Memory — Homepage Foundation

Last updated: 2026-07-30 (America/Los_Angeles)

## What was built

- Completed Feature 01: the full homepage landing experience, matching `context/designs/landing-page.png`.
- Created reusable homepage components: `Hero`, `FeatureSpotlight`, `Testimonial`, and `FinalCta`.
- Created shared `Navbar` and `Footer` layout components.
- Updated `app/page.tsx`, `app/layout.tsx`, and `app/globals.css`; the layout now uses Inter and the homepage metadata is set.
- Reused the supplied assets in `public/` for the logo, dashboard preview, job-list preview, agent log, and testimonial avatar.
- Updated `context/progress-tracker.md` (Feature 01 complete) and `context/ui-registry.md` with the new UI patterns.

## Decisions made

- Homepage is composed from server components under `components/homepage/` and shared layout components under `components/layout/`.
- CTA links are intentionally static until Feature 02 authentication is implemented: primary CTAs point to `/login`; job-match CTAs point to `/find-jobs`.
- Visual treatments use project design tokens only. `soft-hero` and `diagonal-rule` utility classes were added in `app/globals.css` for the design’s pastel panels and divider bands.

## Problems solved

- Removed a leftover duplicate default export in `app/page.tsx` found by the production build.
- The session shell still starts with Node 19.8.1 even though NVM’s default is v20.20.2. Run `nvm use default` before Node commands in this environment.
- `next/font/google` needs access to Google Fonts during a production build. The build succeeded when retried with network access.

## Current state

- `npm run lint` passes.
- `nvm use default && npm run build` passes under Node v20.20.2 with network access.
- Phase 1 / Feature 01 is complete. Features 02–17 remain unbuilt.

## Next session starts with

Implement Feature 02 (InsForge Google and GitHub OAuth, callback handling, session middleware, and protected-route redirects) after reading the relevant current Next.js docs and InsForge guidance.

## Open questions

- No open implementation questions. InsForge configuration and credentials still need to be provided/configured before Feature 02 can be completed end-to-end.
