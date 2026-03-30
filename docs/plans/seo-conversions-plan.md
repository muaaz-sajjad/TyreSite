# Implementation Plan: SEO & Conversions Improvement

**Design**: `docs/designs/seo-conversions-design.md` (rev2, all 5 reviewers approved)
**Execution**: Subagent-driven development

## Work Units

### WU1: Centralized Config + Shared Data Modules
**Files**: `src/config/site.js` (NEW), `src/data/faqs.js` (NEW), `src/data/services.js` (NEW)
**Task**:
1. Create `src/config/site.js` with business info, rating, social config
2. Create `src/data/faqs.js` — extract the 10 FAQ items from `FAQ.jsx` (lines 4-15)
3. Create `src/data/services.js` — extract the 6 services from `Services.jsx` (lines 3-10)
**DoD**: D1 (partial — config created), D12 (shared modules exist)
**Dependencies**: None

### WU2: Update All Components to Use siteConfig
**Files**: `Navbar.jsx`, `Hero.jsx`, `HowItWorks.jsx`, `TrustContent.jsx`, `EmergencyCTA.jsx`, `Footer.jsx`
**Task**:
1. Import `siteConfig` in each component
2. Replace all hardcoded `02080001234`, `tel:02080001234`, `447000000000`, `wa.me/447000000000` with siteConfig references
3. Update `Services.jsx` to import from `src/data/services.js`
4. Update `FAQ.jsx` to import from `src/data/faqs.js`
**DoD**: D1 (all contacts from config), D12 (shared imports)
**Dependencies**: WU1

### WU3: JSON-LD Structured Data + Layout Integration
**Files**: `src/components/StructuredData.jsx` (NEW), `src/app/layout.js`
**Task**:
1. Create `StructuredData.jsx` as server component (NO `'use client'`)
2. Import siteConfig, faqs, services from shared modules
3. Build LocalBusiness, Service (x6), FAQPage, AggregateRating schemas using `JSON.stringify()`
4. Render as `<script type="application/ld+json">` tags
5. Import and add `<StructuredData />` to layout.js body
**DoD**: D2 (LocalBusiness schema), D3 (FAQPage schema)
**Dependencies**: WU1

### WU4: Sitemap, Robots.txt, Meta Tags
**Files**: `public/robots.txt` (NEW), `public/sitemap.xml` (NEW), `src/app/layout.js`
**Task**:
1. Create `public/robots.txt` with Allow all + sitemap reference
2. Create `public/sitemap.xml` with single URL entry
3. Add to layout.js metadata: `metadataBase`, `alternates.canonical`, `robots`, geographic meta
**DoD**: D4 (robots + sitemap), D5 (canonical URL)
**Dependencies**: None (can parallel with WU2/WU3)

### WU5: FAQ ARIA Accessibility
**Files**: `src/components/FAQ.jsx`
**Task**:
1. Add `aria-expanded`, `aria-controls`, `id`, `role="region"`, `aria-hidden`, `aria-labelledby` per WAI-ARIA accordion pattern
2. Add section-level `aria-label="Frequently Asked Questions"`
**DoD**: D6 (ARIA attributes)
**Dependencies**: WU2 (FAQ already imports shared data)

### WU6: Fix Dead Links + Remove Broken Features
**Files**: `src/components/Services.jsx`, `src/components/Footer.jsx`
**Task**:
1. Services: Replace "Learn more →" span with "Call to book →" linking to `siteConfig.business.phoneTel`. Remove `cursor: pointer` from card style
2. Footer: Remove newsletter form + state. Add "Get a Free Quote" WhatsApp CTA button with gold accent
3. Footer: Remove social icons section (FB/IG/TK)
4. Footer: Convert brand name `<a href="#">` to plain `<span>` text
5. Footer: Convert "Same Day Appointments" `href="#"` to WhatsApp link
6. Footer: Remove Privacy Policy / Terms dead links
**DoD**: D7 (no dead links), D8 (newsletter replaced), D9 (social removed), D10 (brands plain text)
**Dependencies**: WU2 (Footer already uses siteConfig)

### WU7: Final Build Verification
**Task**:
1. Run `next build` and verify zero errors
2. Grep for any remaining `href="#"` (except Home anchor)
3. Grep for any remaining hardcoded phone/WhatsApp numbers
4. Verify JSON-LD appears in build output HTML
**DoD**: D11 (build succeeds)
**Dependencies**: All WUs complete

## Execution Order

```
WU1 (config + data) ──► WU2 (update components) ──► WU5 (FAQ ARIA) ──► WU6 (dead links)
                    ──► WU3 (structured data)                                    │
WU4 (sitemap + meta) ──────────────────────────────────────────────────────────► WU7 (verify)
```

WU1 first. Then WU2+WU3+WU4 can run in parallel. Then WU5+WU6 sequentially. Finally WU7 verification.
