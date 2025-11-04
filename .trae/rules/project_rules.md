0) Mission & Non-Goals

Mission: Rebuild rathodlaw.com using the Lavale theme on Next.js with production-grade code, structured content, and authoritative UX befitting a leading Canadian law firm. Deliver fast, accessible, SEO-strong pages with clean data models and an editor-friendly workflow.

Non-Goals: No experimental libraries. No bespoke design system beyond what’s needed to adapt Lavale. No vendor lock-ins that block export of content.

1) Tech Stack & Standards

Framework: Next.js (App Router) v14+, React 18, TypeScript strict mode.

Styling: Use the Lavale template’s styling approach. If Tailwind present, keep it; otherwise keep CSS modules/emotion from the theme. No mixing paradigms.

Content: File-based Markdown/MDX under /content/** with typed frontmatter; optionally wire Contentlayer. Use JSON for structured collections (bios, practice areas, FAQs).

Runtime: Node 18+ (Vercel default).

Package policy: Minimal deps. Avoid heavy UI kits beyond theme. Prefer native Next features (Image, Fonts, Metadata).

Lint/Format: ESLint (next/core-web-vitals), TypeScript strict, Prettier, import order plugin.

Unit/Smoke tests: Vitest + Testing Library for key components; Playwright smoke for critical flows (contact form, search, lawyer profile opens).

Commits: Conventional Commits (feat:, fix:, chore:). TREA must produce meaningful, scoped messages.

2) Repo & Directory Convention
/
├─ app/
│  ├─ (marketing)/           # static marketing routes
│  ├─ (legal)/               # practice, lawyers, cases
│  ├─ api/                   # server actions & endpoints
│  ├─ sitemap.xml/route.ts   # dynamic sitemap
│  ├─ robots.txt/route.ts
│  └─ layout.tsx, globals.css
├─ components/
│  ├─ ui/                    # theme atoms/molecules
│  ├─ layout/
│  ├─ legal/                 # domain components (LawyerCard, PracticeGrid)
│  └─ common/
├─ lib/
│  ├─ content/               # loaders/parsers, schema validation (zod)
│  ├─ seo/
│  ├─ analytics/
│  └─ utils.ts
├─ content/
│  ├─ practice-areas/*.mdx
│  ├─ lawyers/*.mdx
│  ├─ locations/*.json
│  ├─ testimonials/*.json
│  ├─ faqs/*.md
│  └─ blog/**/*.mdx
├─ public/
│  ├─ images/                # optimized, rights-cleared
│  └─ favicons/
├─ scripts/                  # migration, checks, sitemap tester
└─ tests/

3) Data Modeling (Structured Content)

Use zod schemas in lib/content/schemas.ts. Enforce via Contentlayer (if used) or custom loaders.

Lawyer

const Lawyer = z.object({
  slug: z.string(),             // "aneeta-rathod"
  name: z.string(),
  role: z.string(),             // "Partner", "Associate"
  degrees: z.array(z.string()), // ["J.D., Osgoode Hall"]
  callToBar: z.string().optional(), // "Ontario, 2012"
  languages: z.array(z.string()).optional(),
  practiceAreas: z.array(z.string()), // slugs
  summary: z.string(),
  photo: z.string(),            // /images/lawyers/aneeta.jpg
  email: z.string().email().optional(),
  phone: z.string().optional(),
  socials: z.record(z.string()).optional(), // { linkedin: "..."}
  seo: SeoMeta.optional()
});


Practice Area

const PracticeArea = z.object({
  slug: z.string(),               // "employment-law"
  name: z.string(),
  intro: z.string(),
  services: z.array(z.string()),
  jurisdictions: z.array(z.string()).default(["Canada","Ontario"]),
  leadMagnet: z.string().optional(),
  faqs: z.array(z.string()).optional(), // faq slugs
  related: z.array(z.string()).optional(), // related practice area slugs
  heroImage: z.string().optional(),
  seo: SeoMeta.optional()
});


FAQ

const Faq = z.object({
  slug: z.string(),
  question: z.string(),
  answer: z.string(), // keep plain or MD
  schemaType: z.literal("FAQPage").default("FAQPage")
});


Testimonial

const Testimonial = z.object({
  name: z.string().optional(),
  quote: z.string(),
  practiceArea: z.string().optional(),
  source: z.enum(["google","email","other"]).optional(),
  rating: z.number().min(1).max(5).optional()
});


Location/Office

const Location = z.object({
  slug: z.string(),
  label: z.string(),            // "Toronto Office"
  address: z.string(),
  city: z.string(),
  province: z.string(),         // "ON"
  postalCode: z.string(),
  country: z.literal("Canada"),
  phone: z.string(),
  mapUrl: z.string().url().optional(),
  hours: z.array(z.object({ day:z.string(), open:z.string(), close:z.string() })).optional(),
  geo: z.object({ lat:z.number(), lng:z.number() }).optional()
});


SEO meta (shared)

const SeoMeta = z.object({
  title: z.string(),
  description: z.string(),
  canonical: z.string().url().optional(),
  noindex: z.boolean().optional(),
  image: z.string().optional()
});

4) Pages & Routing (Authoritative)

/ — Home (hero, trust signals, key practice areas, CTA to contact)

/about — Firm story, values, diversity, awards

/lawyers — index + filters; /lawyers/[slug]

/practice-areas — index; /practice-areas/[slug]

/results or /cases — summarized representative matters (no confidential data)

/insights — blog index; /insights/[slug]

/testimonials — (optional) curated quotes

/contact — form + offices

/careers — roles (optional)

/privacy, /terms, /disclaimer

/accessibility — WCAG statement

App Router implementation: each major section is a route group for layout control; use generateStaticParams, revalidate (ISR) where needed.

5) Accessibility & Compliance

WCAG 2.2 AA: Focus states, skip links, logical heading order, form labels, ARIA where necessary only.

Keyboard-only navigation must work everywhere.

Color contrast verified (≥ 4.5:1 for body text).

Legal disclaimers: Not legal advice, past results no guarantee of future outcomes, confidentiality notice for forms.

CASL: No pre-ticked consent boxes for marketing; explicit consent fields and logs if newsletters are used.

Privacy (Canada): Clear privacy policy, data retention, cookie consent for analytics/ads.

Law Society rules: Avoid misleading claims; use “areas of practice,” not “specialties” unless permitted.

6) SEO, Schema & Local

Next Metadata API for titles/descriptions/OG/Twitter image.

Schema.org JSON-LD:

LegalService for firm/practice pages.

Attorney for lawyer profiles.

FAQPage for FAQ sections.

BreadcrumbList site-wide.

LocalBusiness + GeoCoordinates for office pages.

Sitemap & robots: dynamic sitemap, robots.txt per environment.

Canonical URLs and hreflang (en-CA; add fr-CA if French content provided).

Page speed budgets:

LCP ≤ 2.0s (fast 4G)

CLS ≤ 0.05

INP ≤ 200ms

Images: Next/Image with fill/sizes, AVIF/WEBP, responsive breakpoints, descriptive alt.

URLs: kebab-case, stable slugs. No dates in slugs for evergreen practice pages.

7) Content Migration Plan (From rathodlaw.com)

Inventory: Crawl old site; produce CSV of URLs → new route mapping.

Map & normalize: Assign each page to one of the models above; create slugs; capture meta.

Rewrite: Professional, plain-language Canadian legal tone; avoid guarantees; cite statutes jurisprudence at high-level only.

Redirects: 301 map old → new. Keep .csv in scripts/redirects.csv; export to Vercel config.

Assets: Download logos/photos, optimize, license-check.

QA: Broken links, 404s, title/description length, schema validation, Lighthouse ≥ 95 perf/SEO/accessibility on key pages.

8) Forms & Integrations

Contact form: Server Action or app/api/contact/route.ts using Vercel Edge if simple.

Validate (zod), rate-limit (Upstash optional), CAPTCHA (hCaptcha).

Email via Resend/SendGrid. Store submissions to a lightweight DB (KV/Postgres) if required (with consent).

Search: Client-side filter for practice areas/lawyers; add server search if needed later.

Analytics: Vercel Analytics + GA4 (consent-gated). No PII in analytics.

Maps: Static map images or privacy-friendly embeds.

9) Security & Reliability

Headers: Strict-Transport-Security, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy. Add CSP with hashes for inline scripts.

Input sanitization: All forms, avoid HTML injection in MDX (use mdx-bundler/remark-sanitize).

Secrets: Vercel env vars only, never committed.

Error handling: /app/(marketing)/error.tsx, friendly 404, server logs with redaction.

10) Performance Rules

Code splitting: Route-level splits; dynamic import() for heavy components.

No client JS on purely static sections unless needed.

Images must be sized and lazy by default (loading="lazy").

Fonts: Next/font with subsetting; limit to ≤ 2 families, ≤ 3 weights.

3rd-party: Zero unused SDKs; evaluate necessity (no jQuery).

11) Theming & UI Implementation

Lavale adherence: Keep layout, spacing, and components consistent. Replace demo content with real structured data loaders.

Design tokens: Define colors/spacing/typography in a single source (CSS vars or theme file).

Navigation: Desktop mega-menu (Practice Areas, Lawyers, About, Insights, Contact). Mobile drawer with large tap targets.

Trust signals: Awards, memberships, media mentions (structured as JSON for re-use).

12) Internationalization (Optional but Prepared)

Default en-CA. If French is later added:

Use next-intl or built-in i18n routing.

Keep translation keys semantic; content from /content/fr/**.

13) CI/CD & Quality Gates

Vercel Previews for every PR. TREA must post preview URLs.

Checks required to merge:

typecheck (tsc)

lint (eslint)

format (prettier —check)

unit tests (vitest)

lighthouse CI (home, one practice page, one lawyer page) with budgets above.

Git Hooks: husky pre-commit: lint-staged (ts/js/css/md), tsc --noEmit.

14) TREA AI Execution Prompts (What to do, how to do it)

Global Style (always):

Act as a senior full-stack dev (10+ yrs).

Generate production-ready code with docstrings and inline comments only when code is non-obvious.

Keep PR scope small, self-contained, and reversible.

Task Template Prompt (use for each ticket):

You are implementing a focused task in a Next.js (App Router) + TypeScript + Lavale theme repo deployed on Vercel.

Acceptance criteria for this task are listed below. Follow the repo conventions, data models (zod), and directory layout described in the Project Rules. Maintain a11y (WCAG 2.2 AA), performance budgets, and SEO/schema requirements. Prefer static generation (ISR) when possible. Use Next/Image and Metadata API. Add unit tests for logic and component behavior; add Playwright smoke tests for user journeys where relevant.

Deliverables:
1) Code changes
2) Tests
3) Update content files if relevant
4) Update sitemap/redirects as needed
5) Brief PR description with screenshots and Lighthouse results


PR Description Template:

Summary (what/why)

Scope of changes (files/folders)

Screenshots (desktop/mobile)

Lighthouse (Perf/SEO/A11y/Best Practices)

Testing notes (unit/smoke)

Risks & rollback plan

15) Initial Ticket Backlog (ready for TREA)

Scaffold Project

Init Next.js app router TS; integrate Lavale template; add ESLint/Prettier/Vitest/Playwright; set up app/(marketing) and base layouts.

Content Schemas & Loaders

Add zod schemas; content loaders; sample content for 2 lawyers, 2 practice areas, 5 FAQs.

Navigation & Footer

Build header/mega-menu and footer from schema; highlight phone/CTA; add skip link.

Home Page v1

Hero (headline + CTA), top practice areas grid, testimonials slider, office CTA, awards row, schema JSON-LD for LegalService.

Lawyers Listing & Detail

Filter by role/practice; profile page with structured bio; Attorney schema.

Practice Areas Listing & Detail

Service bullets, related areas, FAQ block; FAQPage + BreadcrumbList.

Contact Page

Secure form with zod validation, hCaptcha, email via Resend; thank-you route; CASL checkbox (optional newsletter).

Sitemap/Robots/Redirects

Dynamic sitemap, robots; import 301s from scripts/redirects.csv.

Performance Pass

Optimize images/fonts; code split non-critical; confirm budgets.

Migration Script

Crawl & map old URLs; dump to CSV; generate placeholder content entries to be edited by copywriter.

16) Copy & Tone Guide (for all generated/re-written content)

Tone: Plain language, confident, empathetic, no guarantees. Canadian spelling (labour, licence).

Headlines: Outcome-oriented, specific to Canadian context.

Disclaimers: Prominent where required.

Calls-to-Action: “Speak with a lawyer”, “Request a consultation”, phone number click-to-call.

Inclusivity: Use inclusive language; avoid jargon; explain acronyms on first use.

17) Acceptance Criteria (Definition of Done)

All top-level routes implemented and linked.

Lighthouse (home + 2 key templates) ≥ 95/95/95/95 on Vercel preview.

No a11y violations in Axe scans. Keyboard nav OK.

Valid JSON-LD for at least: LegalService, Attorney, FAQPage, BreadcrumbList.

301 redirects in place; no broken internal links.

Forms send, validate, and rate-limit; success and error states shown.

TypeScript passes with noImplicitAny, strictNullChecks.

Zero console.error in browser or server logs on happy path.

Clear README with run/build/deploy instructions.

18) Environment & Deploy

Envs: NEXT_PUBLIC_SITE_URL, EMAIL_FROM, RESEND_API_KEY, HCAPTCHA_SECRET, etc.

Vercel: Preview → Staging → Production. Protect prod branch. Auto-invalidate ISR as needed.

Monitoring: Vercel Analytics; log anomalies. Consider uptime check (cron ping).

19) Risk & Rollback

Feature-flag high-risk changes.

Keep content in flat files so rollback is a git revert + redeploy.

Maintain redirect map in CSV to edit safely.

20) Deliverables Summary for Client Sign-off

Production site on rathodlaw.com (Vercel).

Source code repo with tests and docs.

Content library (/content/**) with clear schemas.

Redirect map and migration inventory.

Performance & accessibility report.