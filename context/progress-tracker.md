# Progress Tracker

Update this file after every completed feature. Any AI agent reading this should immediately know what is done, what is in progress, and what is next.

---

## Current Status

**Phase:** Phase 1 — Foundation
**Last completed:** 02 Auth
**Next:** 03 PostHog Initialization

---

## Progress

### Phase 1 — Foundation

- [x] 01 Homepage
- [x] 02 Auth
- [ ] 03 PostHog Initialization
- [ ] 04 Database Schema

### Phase 2 — Profile Page

- [ ] 05 Profile Page — Full UI
- [ ] 06 Profile Save Logic
- [ ] 07 AI Profile Extraction from Resume
- [ ] 08 Resume PDF Generation from Profile

### Phase 3 — Find Jobs Page

- [ ] 09 Find Jobs Page — Full UI
- [ ] 10 Adzuna Job Discovery
- [ ] 11 Filter + Sort + Pagination

### Phase 4 — Job Details Page

- [ ] 12 Job Details Page — Full UI
- [ ] 13 Company Research Agent

### Phase 5 — Dashboard

- [ ] 14 Dashboard Page — Full UI
- [ ] 15 Stats Bar — Real Data
- [ ] 16 Recent Activity — Real Data
- [ ] 17 Analytics Charts — PostHog Data

---

## Decisions Made During Build

- The homepage is built from reusable server components and the supplied public image assets; CTA links are static until authentication is implemented in Feature 02.
- Auth uses `@insforge/sdk/ssr`, the supported SSR entry point in the current InsForge SDK. Next.js 16 protects routes with `proxy.ts` and refreshes sessions with InsForge's `updateSession()` helper.
- OAuth begins in a Server Action so the PKCE verifier remains in an httpOnly cookie. The `/callback` route exchanges the InsForge code, persists the session cookies, and redirects to `/dashboard`.
- A minimal protected dashboard landing exists until the full dashboard UI is built in Feature 14, preventing post-login navigation from reaching a missing route.

---

## Notes

- Verified with Node.js 20.20.2 via `nvm use default`: ESLint and the production build pass.
- InsForge dashboard setup is still required before OAuth can be used end-to-end: enable Google and GitHub, configure their provider credentials, and register the deployed `/callback` URL (plus `http://localhost:3000/callback` for local development) as allowed redirect URLs.
