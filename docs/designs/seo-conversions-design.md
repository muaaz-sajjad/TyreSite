# Mobiluxe Tyres — SEO & Conversions Improvement Design

**Design Review**: rev2 — addresses Architect blocking issue (FAQ data sharing) + incorporates reviewer suggestions

## Problem Statement

The Mobiluxe Tyres site has zero SEO infrastructure (no structured data, no sitemap, no robots.txt), broken/placeholder links throughout, inaccessible FAQ markup (missing rich snippet potential), and non-functional conversion paths (dead CTAs, placeholder phone numbers, broken newsletter). These gaps mean the site is invisible to local search ("mobile tyre fitting near me") and loses potential customers through broken conversion funnels.

## Goals

1. **Local SEO visibility** — appear in Google's local pack and rich results for mobile tyre fitting queries in London
2. **Working conversion funnels** — every CTA leads to a real action (call, WhatsApp, email)
3. **Rich snippets** — FAQ schema markup for Google SERP features
4. **Crawlability** — proper sitemap, robots.txt, canonical URLs

## Non-Goals

- TypeScript migration
- Full test suite
- CSS architecture refactoring
- Cookie consent / GDPR (requires legal input)
- Individual service pages (future work)
- Backend/API integration

## Technical Context

- **Framework**: Next.js 16.1.6, React 19.2.3
- **Build**: Static export (`output: 'export'`), deployed on Netlify
- **Styling**: CSS-in-JS via styled-jsx (inline per component)
- **Structure**: Single page with 13 components, all `'use client'`
- **Constraint**: `StructuredData.jsx` must NOT use `'use client'` — it renders at build time as a server component

## Component Audit (no changes needed)

The following components were audited and confirmed clean — no hardcoded contact info, no dead links:
- `WhyChooseUs.jsx` — display only, no links
- `Stats.jsx` — animated numbers, no links
- `CarBrands.jsx` — brand names only, no external links
- `AreasWeCover.jsx` — area names only, no external links
- `Reviews.jsx` — display only (rating data referenced by siteConfig, see WU1)

## Design

### WU1: Centralized Site Config + Shared Data Modules

Create config and shared data files. Update all components to reference them instead of hardcoded values.

**Dependencies**: None (first WU)

**File**: `src/config/site.js`

```js
export const siteConfig = {
  business: {
    name: 'Mobiluxe Tyres',
    phone: '0208 000 1234',       // Update with real number
    phoneTel: 'tel:02080001234',  // tel: link format
    whatsapp: '447000000000',     // Update with real number
    whatsappUrl: 'https://wa.me/447000000000',
    email: 'info@mobiluxetyres.co.uk',
    url: 'https://mobiluxetyres.co.uk',
  },
  rating: {
    score: 4.9,
    count: 420,
  },
  social: {
    facebook: '',   // Add real URLs when available
    instagram: '',
    tiktok: '',
  },
};
```

**File**: `src/data/faqs.js` — extracted FAQ data (shared between FAQ.jsx and StructuredData.jsx)

```js
export const faqs = [
  { q: 'How quickly can you reach me?', a: '...' },
  // ... all 10 FAQ items
];
```

**File**: `src/data/services.js` — extracted service data (shared between Services.jsx and StructuredData.jsx)

```js
export const services = [
  { icon: '🛞', title: 'Mobile Tyre Fitting', desc: '...' },
  // ... all 6 services
];
```

**Components to update**: Navbar, Hero, HowItWorks, TrustContent, Services, EmergencyCTA, Footer (7 files)

**Why**: Single source of truth. Business owner updates one file to change all contact info. Shared data modules prevent duplication between client components and the server-rendered StructuredData component.

### WU2: JSON-LD Structured Data

**Dependencies**: WU1 (imports siteConfig, faqs, services)

Add LocalBusiness + Service + FAQPage + AggregateRating schema to the layout.

**File**: `src/components/StructuredData.jsx` (new, server component — NO `'use client'` directive)

- Imports `siteConfig` from `src/config/site.js`
- Imports `faqs` from `src/data/faqs.js`
- Imports `services` from `src/data/services.js`
- Uses `JSON.stringify()` for serialization (prevents XSS in `<script>` tags)

Schemas to implement:
1. **LocalBusiness** — name, phone, URL, areaServed, openingHours (24/7), priceRange
2. **Service** (x6) — one per service offered
3. **FAQPage** — all 10 FAQ questions/answers for rich snippet eligibility
4. **AggregateRating** — score/count from `siteConfig.rating`

Injected as `<script type="application/ld+json">` in layout.js `<body>`.

**Why**: JSON-LD is Google-recommended. LocalBusiness schema is #1 for local pack. FAQPage enables rich snippets. Using shared data modules ensures schema content matches what the page actually renders.

### WU3: Sitemap, Robots.txt, Canonical URL

**Dependencies**: None (independent of WU1/WU2)

**`public/robots.txt`**:
```
User-agent: *
Allow: /
Sitemap: https://mobiluxetyres.co.uk/sitemap.xml
```

**`public/sitemap.xml`**:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mobiluxetyres.co.uk</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

**Note**: `lastmod` is hardcoded. For a single-page static site this is acceptable. Update on each deployment or consider build-time generation as future work.

**Canonical URL**: Add `<link rel="canonical">` in layout.js metadata.

### WU4: FAQ Accessibility + ARIA

**Dependencies**: WU1 (FAQ.jsx imports from `src/data/faqs.js`)

Update FAQ component with proper WAI-ARIA accordion pattern:
- Import FAQ data from `src/data/faqs.js` (replaces inline array)
- Add `role="region"` and `aria-label="Frequently Asked Questions"` to section
- Add `aria-expanded={open === i}` to each question button
- Add `aria-controls={`faq-answer-${i}`}` to each button
- Add `id={`faq-answer-${i}`}`, `role="region"`, `aria-hidden={open !== i}` to each answer div
- Add `aria-labelledby` to connect answer to question

### WU5: Fix Dead Links + Remove Broken Features

**Dependencies**: WU1 (Footer uses siteConfig)

All dead `href="#"` links addressed:

1. **Services "Learn more →"**: Remove the misleading `<span>` text. Also remove `cursor: pointer` from `.services__card` since cards are no longer interactive. Replace with micro-CTA: "Call to book →" linking to `siteConfig.business.phoneTel`
2. **Footer social links** (FB/IG/TK): Remove social icons entirely (no real URLs available)
3. **Footer "Same Day Appointments"** (`href="#"`): Convert to WhatsApp link with pre-filled message
4. **Footer "Tyre Brands" column** (8x `href="#"`): Convert brand names from `<a>` tags to plain `<span>` text (no destination exists)
5. **Privacy Policy / Terms** (`href="#"`): Remove links (no pages exist). Add back when legal content is ready
6. **Newsletter form**: Remove entirely. Replace with a visually prominent CTA: "Get a Free Quote" button linking to WhatsApp, styled with gold accent to maintain visual weight in the brand column

### WU6: Meta Tags Enhancement

**Dependencies**: WU1 (uses siteConfig.business.url)

Enhance `layout.js` metadata:
- Add `metadataBase: new URL('https://mobiluxetyres.co.uk')`
- Add `alternates: { canonical: '/' }` for canonical URL
- Add `robots: { index: true, follow: true }`
- Add geographic meta tags (`geo.region: 'GB-LND'`, `geo.placename: 'London'`) via `other` metadata field

## Files In Scope

| File | Changes |
|------|---------|
| `src/config/site.js` | NEW — centralized business config |
| `src/data/faqs.js` | NEW — shared FAQ data |
| `src/data/services.js` | NEW — shared service data |
| `src/components/StructuredData.jsx` | NEW — JSON-LD schemas (server component) |
| `src/app/layout.js` | Add StructuredData, metadataBase, canonical, robots, geo |
| `src/components/Navbar.jsx` | Use siteConfig for contacts |
| `src/components/Hero.jsx` | Use siteConfig for contacts |
| `src/components/HowItWorks.jsx` | Use siteConfig for contacts |
| `src/components/TrustContent.jsx` | Use siteConfig for contacts |
| `src/components/Services.jsx` | Import shared services, replace "Learn more" with "Call to book" CTA |
| `src/components/EmergencyCTA.jsx` | Use siteConfig for contacts |
| `src/components/FAQ.jsx` | Import shared faqs, add ARIA attributes |
| `src/components/Footer.jsx` | Use siteConfig, remove newsletter/social/dead links, add quote CTA |
| `public/robots.txt` | NEW |
| `public/sitemap.xml` | NEW |

## Definition of Done

- [ ] D1: All phone/WhatsApp links use `siteConfig` — no hardcoded contact info in components
- [ ] D2: JSON-LD LocalBusiness schema renders in page source with correct business data
- [ ] D3: JSON-LD FAQPage schema renders with all 10 Q&A pairs
- [ ] D4: `robots.txt` and `sitemap.xml` exist in `public/` and are valid
- [ ] D5: Canonical URL is set in metadata
- [ ] D6: FAQ buttons have `aria-expanded` and `aria-controls` attributes
- [ ] D7: No dead links remain (no `href="#"` except Home anchor)
- [ ] D8: Newsletter form removed, replaced with "Get a Free Quote" WhatsApp CTA
- [ ] D9: Social links removed (no real URLs available)
- [ ] D10: Footer brand names are plain text, not dead `<a>` tags
- [ ] D11: `next build` succeeds with zero errors
- [ ] D12: FAQ and service data imported from shared modules (no duplication)

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Phone numbers are still placeholders | Config file makes it one-line change; document in README |
| Static export doesn't support API routes | All changes are build-time/client; no server routes needed |
| Removing newsletter may upset stakeholder | Replace with stronger "Get a Free Quote" CTA; newsletter can return with proper backend |
| FAQ data duplication | Shared `src/data/faqs.js` module used by both FAQ.jsx and StructuredData.jsx |
| StructuredData accidentally made client component | Design explicitly notes: NO `'use client'` directive |

## Human Checkpoints

1. After WU1 (config + data extraction): Confirm contact details and verify data modules work
2. After WU5 (dead link fixes + newsletter removal): Visual review of footer changes
3. After WU6 (final): Full build verification
