# UI Registry

Living document. Updated after every component is built. Read this before building any new component — match existing patterns exactly before inventing new ones.

---

## How to Use

Before building any component:

1. Check if a similar component already exists here
2. If yes — match its exact classes
3. If no — build it following ui-rules.md and ui-tokens.md, then add it here

After building any component — update this file with the component name, file path, and exact classes used.

---

## Components

### Homepage hero

File: components/homepage/Hero.tsx
Last updated: 2026-07-30

| Property | Class |
| --- | --- |
| Background | `soft-hero`, `bg-surface-tertiary` |
| Border | `border border-border`, `border-t border-border` |
| Border radius | none — the reference uses square page sections |
| Text — primary | `text-text-slate`, `text-text-primary` |
| Text — secondary | `text-text-secondary` |
| Spacing | `px-6 py-22`, `px-5 py-16`, `mt-7`, `mt-8` |
| Hover state | `hover:opacity-90`, `hover:bg-surface-secondary` |
| Shadow | token-derived dashboard image drop shadow |
| Accent usage | `text-accent`, `bg-overlay` CTA |

**Pattern notes:** Editorial landing sections use a token-based soft background and square divisions; hero CTA pairs a dark primary button with a white bordered secondary button.

### Homepage feature spotlight

File: components/homepage/FeatureSpotlight.tsx
Last updated: 2026-07-30

| Property | Class |
| --- | --- |
| Background | `bg-surface`, `bg-surface-tertiary` |
| Border | `border-x border-border`, `divide-y divide-border` |
| Border radius | none |
| Text — primary | `text-text-slate` |
| Text — secondary | `text-text-secondary` |
| Spacing | `p-8 sm:p-16`, `p-7 sm:p-12` |
| Hover state | none |
| Shadow | none |
| Accent usage | `border-l-2 border-accent`, `border-l-2 border-success` |

**Pattern notes:** Split feature areas pair a white editorial panel with a `bg-surface-tertiary` asset panel. The first detail item carries the section’s two-pixel token-colored left rule.

### Homepage testimonial

File: components/homepage/Testimonial.tsx
Last updated: 2026-07-30

| Property | Class |
| --- | --- |
| Background | `bg-surface` inherited |
| Border | none |
| Border radius | `rounded-lg` avatar |
| Text — primary | `text-text-slate`, `text-text-black` |
| Text — secondary | `text-text-secondary` |
| Spacing | `px-6 py-24 sm:py-32`, `mt-8` |
| Hover state | none |
| Shadow | none |
| Accent usage | `text-accent` label |

**Pattern notes:** Testimonial sections are centered, with an all-caps accent eyebrow and a compact image/name attribution.

### Homepage closing CTA

File: components/homepage/FinalCta.tsx
Last updated: 2026-07-30

| Property | Class |
| --- | --- |
| Background | `soft-hero` |
| Border | `border-y border-border`, `border border-border` |
| Border radius | `rounded-md` buttons |
| Text — primary | `text-text-slate`, `text-text-primary` |
| Text — secondary | `text-text-dark` |
| Spacing | `px-6 py-20 sm:py-24`, `mt-8` |
| Hover state | `hover:opacity-90`, `hover:bg-surface-secondary` |
| Shadow | none |
| Accent usage | `bg-overlay` primary CTA |

**Pattern notes:** The closing CTA repeats the hero action pair and is framed by token-based diagonal divider bands.

### Site navigation and footer

Files: components/layout/Navbar.tsx, components/layout/Footer.tsx
Last updated: 2026-07-30

| Property | Class |
| --- | --- |
| Background | `bg-surface` |
| Border | `border-b border-border`, `border-t border-border` |
| Border radius | `rounded-md` primary CTA |
| Text — primary | `text-text-dark`, `text-accent-foreground` |
| Text — secondary | none |
| Spacing | `h-16 px-6`, `px-6 py-12`, `gap-8` |
| Hover state | `hover:text-accent`, `hover:opacity-90` |
| Shadow | none |
| Accent usage | `hover:text-accent` |

**Pattern notes:** Site chrome uses a full-width white surface, token border, `max-w-[1440px]` centered content, and 24px horizontal padding.

### OAuth login form

File: components/auth/LoginForm.tsx
Last updated: 2026-08-14

| Property | Class |
| --- | --- |
| Background | `bg-background`, `bg-surface` |
| Border | `border border-border` |
| Border radius | `rounded-lg` |
| Text — primary | `text-text-slate`, `text-text-primary` |
| Text — secondary | `text-text-secondary` |
| Spacing | `px-6 py-12`, `p-6 sm:p-8`, `mt-8`, `space-y-3` |
| Hover state | `hover:bg-surface-secondary`, `disabled:opacity-60` |
| Shadow | `shadow-sm` |
| Accent usage | `text-accent` eyebrow |

**Pattern notes:** Authentication uses a centered white card on the page background. Provider actions are full-width outlined buttons with token-colored iconography and a subtle secondary-surface hover state.

### Authenticated dashboard landing

File: app/dashboard/page.tsx
Last updated: 2026-08-14

| Property | Class |
| --- | --- |
| Background | `bg-background`, `bg-surface` |
| Border | `border border-border` |
| Border radius | `rounded-lg` |
| Text — primary | `text-text-slate` |
| Text — secondary | `text-text-secondary` |
| Spacing | `px-6 py-12`, `p-6 sm:p-8` |
| Hover state | none |
| Shadow | `shadow-sm` |
| Accent usage | `text-accent` eyebrow |

**Pattern notes:** Until the full dashboard arrives in Feature 14, the protected landing destination uses the standard card treatment and routes the newly authenticated user toward profile completion.

### PostHog identity boundary

File: components/analytics/PostHogIdentify.tsx
Last updated: 2026-08-15

| Property | Class |
| --- | --- |
| Background | none |
| Border | none |
| Border radius | none |
| Text — primary | none |
| Text — secondary | none |
| Spacing | none |
| Hover state | none |
| Shadow | none |
| Accent usage | none |

**Pattern notes:** This client-only boundary renders no UI. The root layout mounts it only for an authenticated user so PostHog events share the InsForge user ID.
