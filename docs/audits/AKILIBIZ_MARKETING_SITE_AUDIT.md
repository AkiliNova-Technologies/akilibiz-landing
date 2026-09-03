# AkiliBiz Marketing Site Audit

*Generated from a full codebase inspection on 30 August 2026. All findings cite specific source files.*

---

## 1. Executive Summary

### Current maturity

The AkiliBiz marketing site is a **well-structured early-stage marketing scaffold** built with Next.js 16, React 19, Tailwind CSS v4, and Radix UI primitives (shadcn/ui pattern). It has 10 distinct routes, a coherent component library, and thoughtful information architecture. It compiles cleanly and generates all pages as static content.

### What already works well

- **Information architecture is unusually strong for an early site.** The nav-data model (`components/marketing/nav-data.ts`) cleanly separates primary nav, resources dropdown, products dropdown, and footer sections. Pages exist for features, solutions, pricing, FAQ, docs, download, business, and marketplace — each with a clear purpose.
- **Component decomposition is disciplined.** `MarketingContainer`, `SectionHeading`, `FeatureCard`, `ProductRouteCard`, `PricingCard`, `FAQAccordion`, `CTASection`, `ComingSoonNotice`, and `HeroDashboardVisual` are properly separated, reusable, and not over-engineered.
- **Design tokens are well-organized.** The CSS custom properties in `app/globals.css` define a semantic brand palette (brand, ink, lavender, success, amber) that maps cleanly to Tailwind v4's `@theme inline` directive. This is a proper design-system foundation, not ad-hoc color picking.
- **Copy is honest and restrained.** The site avoids inflated claims. "Coming soon" badges are used consistently. No invented customer numbers, compliance claims, or fake testimonials.
- **Accessibility foundations are solid.** `prefers-reduced-motion` handling, `:focus-visible` outline, `aria-hidden` on decorative elements, semantic HTML landmarks, and `sr-only` text on the mobile close button.

### Most important weaknesses

1. **Zero visual assets.** No product screenshots, no photography, no illustrations, no favicon beyond the default. The only image in the entire project is the inline SVG logo mark. The `public/` directory contains only Next.js/Vercel boilerplate SVGs (`vercel.svg`, `next.svg`, `window.svg`, `file.svg`, `globe.svg`) — none are used by the marketing site.
2. **No real product evidence.** The hero visual is a schematic diagram (floating cards with labels like "Today's Sales" and "Stock Alerts") rather than an actual product screenshot. Every section describes capabilities in abstract terms. A visitor cannot tell what AkiliBiz actually looks like to use.
3. **No social proof.** Zero testimonials, zero customer logos, zero case studies, zero trust badges, zero usage statistics.
4. **Contact form is non-functional.** The contact page explicitly states "This form isn't connected to a live submission service yet" — it only shows a success message client-side.
5. **No geographic/cultural specificity.** Despite being a Uganda-focused product, the site contains zero references to Uganda, UGX, Kampala, East Africa, mobile money, or any local context. The generic English copy could belong to any SaaS product anywhere.
6. **Missing credibility infrastructure.** No privacy policy, no terms of service, no about/team page, no company details, no physical address or phone number.
7. **No Open Graph / social sharing metadata**, no sitemap, no robots.txt, no web manifest, and the favicon appears to be the default Next.js icon.
8. **Inline `style={{ color: "var(--ink-700)" }}` overrides appear in 10 places**, suggesting the Tailwind token `text-ink-700` is not being applied correctly or the developer needed to force it. This is a code-quality smell and potential token-definition bug.

### Design direction recommendation

**Refine, don't rebuild.** The token system, component architecture, and page structure are solid bones. The site needs: (a) real product visuals, (b) Uganda-specific grounding, (c) social proof, (d) a more assertive colour palette with less lavender/generic-indigo, and (e) trust-building infrastructure. The current "clean startup template" aesthetic should evolve toward a "credible African business platform" identity.

---

## 2. Current Implementation Inventory

### Framework and versions

| Dependency | Version | Notes |
| --- | --- | --- |
| Next.js | 16.3.3 | App Router, Turbopack build |
| React | 19.2.8 | Server components, client components |
| Tailwind CSS | v4 | `@theme inline` in CSS, no `tailwind.config` file |
| TypeScript | ^5 | Strict mode enabled |
| Radix UI | Various | Accordion, Dialog, DropdownMenu, Label, NavigationMenu, Slot |
| class-variance-authority | ^0.7.1 | Component variant system |
| clsx + tailwind-merge | Latest | `cn()` utility pattern |
| lucide-react | ^1.37.0 | Icon library |

### Styling approach

- **Tailwind CSS v4** via `@tailwindcss/postcss` PostCSS plugin
- **CSS custom properties** in `:root` mapped to Tailwind v4 `@theme inline` block
- **No `tailwind.config.js`/`ts`** — all configuration is in `app/globals.css`
- **No CSS Modules, no styled-components, no CSS-in-JS**
- **CVA (class-variance-authority)** for component variants (Button, Badge)
- **Inline `style` attributes** used in 10 places for color overrides (a code smell)

### Main landing-site routes (13 total, all statically generated)

| Route | File | Purpose |
| --- | --- | --- |
| `/` | `app/page.tsx` | Homepage with hero, capability chips, feature grid, product ecosystem, CTA |
| `/solutions` | `app/solutions/page.tsx` | Business-type audience segments |
| `/features` | `app/features/page.tsx` | Detailed feature breakdown with alternating sections |
| `/pricing` | `app/pricing/page.tsx` | Three-tier pricing cards (no listed prices) with FAQ |
| `/contact` | `app/contact/page.tsx` | Contact form (non-functional client-side only) |
| `/faq` | `app/faq/page.tsx` | FAQ accordion |
| `/docs` | `app/docs/page.tsx` | Documentation hub (coming soon — topic outlines only) |
| `/download` | `app/download/page.tsx` | Desktop download page (no actual download links) |
| `/business` | `app/business/page.tsx` | AkiliBiz Business web app (coming soon) |
| `/marketplace` | `app/marketplace/page.tsx` | AkiliBiz Marketplace (coming soon) |

### Shared layout

| File | Purpose |
| --- | --- |
| `app/layout.tsx` | Root layout: metadata, imports globals.css, renders navbar + main + footer |

Only one layout file exists. There are no nested layouts, no route groups, and no `error.tsx` or `not-found.tsx` files.

### Reusable UI components

**Marketing components** (`components/marketing/`):

| File | Purpose |
| --- | --- |
| `marketing-navbar.tsx` | Sticky top nav with desktop dropdowns and mobile slide-in dialog |
| `marketing-footer.tsx` | Four-column footer with Product/Resources/Company sections |
| `nav-data.ts` | Centralized navigation data (primary, resources, products, footer) |
| `logo.tsx` | Inline SVG logo mark + "AkiliBiz" text |
| `container.tsx` | Max-width container (1152px / `max-w-6xl`) |
| `section-heading.tsx` | Reusable eyebrow + title + description heading block |
| `feature-card.tsx` | Icon + title + description card with hover shadow |
| `product-route-card.tsx` | Product card with icon, badge, description, and CTA link |
| `pricing-card.tsx` | Pricing tier card with features list and CTA |
| `faq-accordion.tsx` | Thin wrapper around Accordion for FAQ data |
| `cta-section.tsx` | Full-width dark-background CTA block |
| `coming-soon-notice.tsx` | Info banner for "coming soon" pages |
| `hero-dashboard-visual.tsx` | Schematic dashboard diagram with floating cards and SVG connectors |

**Base UI components** (`components/ui/`):

| File | Purpose |
| --- | --- |
| `button.tsx` | Button with 5 variants (primary, secondary, ghost, outlineOnDark, link) and 4 sizes |
| `badge.tsx` | Badge with 4 variants (brand, available, soon, neutral) |
| `input.tsx` | Text input |
| `textarea.tsx` | Textarea |
| `label.tsx` | Radix Label |
| `card.tsx` | Generic card with header/title/description/content/footer slots |
| `accordion.tsx` | Radix Accordion with trigger/content |
| `dialog.tsx` | Radix Dialog (used for mobile nav) |
| `dropdown-menu.tsx` | Radix DropdownMenu (used for desktop nav) |

### Utility

| File | Purpose |
| --- | --- |
| `lib/utils.ts` | `cn()` function: `clsx` + `twMerge` |

---

## 3. Brand and Visual Identity Audit

### Colors

All meaningful colors are defined in `app/globals.css` as CSS custom properties and mapped to Tailwind v4 via `@theme inline`.

| Role | Current value | Defined in | Used in | Assessment | Recommendation |
| --- | --- | --- | --- | --- | --- |
| Background | `#ffffff` | `globals.css` :root | Global body | Clean white, correct | Keep |
| Foreground / Body text | `#16152b` → `#14132a` (ink-900) | `globals.css` | Body, headings | Very dark navy, good readability | Keep |
| Brand 950 (CTA dark bg) | `#14103a` | `globals.css` | CTA section bg, pricing highlighted | Deep indigo, strong | Keep |
| Brand 800 | `#2f2478` | `globals.css` | Not directly used in Tailwind | Unused token | Remove or find use |
| Brand 700 | `#4338b8` | `globals.css` | Icons, text, active nav | Primary brand expression — a medium indigo | Evaluate: is this "AkiliBiz" enough? |
| Brand 600 | `#5941d9` | `globals.css` | Buttons, focus rings, icon containers | Slightly lighter indigo — functional primary | Keep but test contrast |
| Brand 500 | `#6d5ef0` | `globals.css` | Status dots, hero blur arcs | Lighter violet — decorative | Keep for accents |
| Brand 400 | `#8a7cf5` | `globals.css` | Hero blur decoration | Light lavender-violet — very decorative | Keep |
| Brand Blue | `#4f7cf6` | `globals.css` | Gradient endpoint, blur arcs | Blue accent — used only in gradients | Consider: blue + indigo tension |
| Lavender 25 | `#fbfaff` | `globals.css` | Section backgrounds | Almost white with blue tint | Keep |
| Lavender 50 | `#f4f2fe` | `globals.css` | Focus/active states, info boxes | Light purple tint | Keep |
| Lavender 100 | `#ece8fc` | `globals.css` | Icon backgrounds, badges, chips | Purple tint — dominant surface color | Keep |
| Lavender 200 | `#ddd6fa` | `globals.css` | SVG connector lines, borders | Mid-light purple | Keep |
| Ink 900 | `#14132a` | `globals.css` | Headings, body text | Near-black indigo | Keep |
| Ink 700 | `#3b3a55` | `globals.css` | Body text, nav items | Medium dark | **Problematic** — has inline `style` overrides in 10 files |
| Ink 500 | `#656487` | `globals.css` | Descriptions, secondary text | Muted purple-gray | Keep |
| Ink 400 | `#8988a6` | `globals.css` | Placeholders, footnotes | Light muted | Keep |
| Ink 200 | `#e2e1ee` | `globals.css` | Borders, dividers | Light lavender-gray | Keep |
| Ink 100 | `#edecf6` | `globals.css` | Hover backgrounds | Very light lavender | Keep |
| Success 600 | `#1d7a52` | `globals.css` | "Available" badge text | Green | Keep |
| Success 50 | `#e9f7f0` | `globals.css` | Success badge bg | Light green | Keep |
| Amber 600 | `#a15c07` | `globals.css` | "Coming soon" badge text | Warm amber | Keep |
| Amber 50 | `#fdf3e3` | `globals.css` | "Coming soon" badge bg | Light warm | Keep |

**Key assessment:** The palette is coherent (all values sit within an indigo-to-blue-to-neutral gamut) and internally consistent. However, it is **very generic** — it reads as "purple SaaS startup," not as "East African business platform." The heavy lavender-tinted surfaces give a soft, safe, almost startup-incubator feel that may undermine the seriousness of a financial/business-management product.

**The `text-ink-700` override problem:** In 10 locations across 7 files, developers have written both `text-ink-700` (Tailwind class) AND `style={{ color: "var(--ink-700)" }}` (inline override). This suggests Tailwind v4's theme mapping for `ink-700` may not be resolving correctly, or the developer didn't trust it. This should be diagnosed and fixed.

### Typography

**Font families:**

- `--font-sans`: `"Inter"` declared in `@theme inline` in `globals.css`
- `--font-mono`: system monospace stack
- **No `next/font` import exists anywhere** — the README claims Geist is used but the layout does not import it. The CSS declares `Inter` as the font family, but **no CSS `@import` or `<link>` loads Inter from Google Fonts or any CDN.** The browser will fall back to `ui-sans-serif, system-ui, ...`. This means the site is using system fonts by default.

**Font sizes used (from Tailwind classes):**

- `text-[11px]` — eyebrow badges
- `text-[10px]` — small "Soon" badges
- `text-[13px]` — dashboard tile labels
- `text-xs` (12px) — footnotes, hints, badge text
- `text-sm` (14px) — body descriptions, nav items, form labels, card descriptions
- `text-base` (16px) — card titles, body copy, nav mobile items
- `text-lg` (18px) — hero body text
- `text-[15px]` — large button text
- `text-xl` (20px) — not used
- `text-2xl` (24px) — feature section headings on mobile
- `text-3xl` (30px) — section headings, CTA headings
- `text-4xl` (36px) — hero heading on mobile
- `text-5xl` (48px) — hero heading on tablet+
- `text-[3.25rem]` (52px) — hero heading on desktop

**Font weights used:**

- `font-medium` (500) — nav items, badges, eyebrow labels, form inputs
- `font-semibold` (600) — headings, card titles, logo
- `font-mono` — eyebrow pill labels only

**Hierarchy assessment:** There is a clear hierarchy (eyebrow → h1 → h2 → body → captions), but the size steps are somewhat ad-hoc. The jump from 36px to 48px is large. `text-xl` is never used, creating a gap between 18px body text and 24px/30px headings. Line heights are mostly controlled via Tailwind's `leading-relaxed` (1.625) which is good for readability.

**Letter spacing:** Tight tracking (`tracking-tight`) on headings, wider tracking (`tracking-wide`, `tracking-[0.12em]`) on eyebrow labels. This is a coherent pattern.

**Gaps/inconsistencies:** The declared `Inter` font is never actually loaded — the site runs on system fonts. This should be resolved.

### Spacing, Layout, and Grid

**Container:**

- `MarketingContainer`: `max-w-6xl` (1152px) + `px-6 lg:px-8` — a single container width used everywhere. This is clean but may feel constrained on ultrawide displays.

**Section padding:**

- Hero: `py-16 sm:py-20` top, `pb-20 lg:pb-28` bottom
- Feature sections: `py-20 sm:py-24`
- Inner sections: `py-16 sm:py-20`
- Alternating sections on features page use the same padding values

**Grid patterns:**

- Hero: `lg:grid-cols-2`
- Feature cards: `sm:grid-cols-2 lg:grid-cols-3`
- Product ecosystem: `sm:grid-cols-2 lg:grid-cols-3`
- Solutions: `sm:grid-cols-2 lg:grid-cols-3`
- Download platforms: `sm:grid-cols-3`
- Contact: `lg:grid-cols-[1fr,1.2fr]`
- Features detail: `lg:grid-cols-[0.9fr,1.1fr]`
- Pricing: `lg:grid-cols-3`
- Footer: `sm:grid-cols-4 lg:grid-cols-1` (column span logic)

**Assessment:** Grid usage is consistent and responsive. The asymmetric grid on the features page (`[0.9fr,1.1fr]`) is a nice touch. Gap values are consistently `gap-5`, `gap-6`, or `gap-10`/`gap-12`/`gap-16` at larger breakpoints. Overall density is good — generous whitespace without feeling empty.

### Shapes, Surfaces, and Effects

**Border radii (usage frequency):**

- `rounded-full` — pills, buttons, badges, status dots, nav items (most common interactive shape)
- `rounded-2xl` (1rem) — cards, form fields, accordions, notice boxes, CTA sections (most common surface)
- `rounded-3xl` — contact form container, CTA dark section
- `rounded-xl` (0.75rem) — icon containers, input fields, dropdown items
- `rounded-lg` — small icon containers in nav dropdowns

The base `--radius` is `1rem`, used with Tailwind's calculated variants (`rounded-md` = 10px, `rounded-sm` = 6px). However, most components use `rounded-2xl` (16px) or `rounded-xl` (12px) directly rather than the theme radius tokens.

**Shadows:**

- `shadow-[0_1px_2px_rgba(20,19,42,0.04)]` — card resting state (very subtle)
- `shadow-[0_18px_40px_-20px_rgba(67,56,184,0.35)]` — feature card hover (purple-tinted)
- `shadow-[0_15px_35px_-10px_rgba(67,56,184,0.6)]` — hero hub (strong purple)
- `shadow-[0_30px_60px_-25px_rgba(20,16,58,0.55)]` — highlighted pricing card
- `shadow-[0_20px_50px_-15px_rgba(20,19,42,0.25)]` — dropdown menus
- `shadow-lg` — floating status chips in hero

**Assessment:** Shadow system uses two tones: purple-tinted (brand color at higher opacity) for interactive/brand elements, and neutral dark for resting surfaces. This is a coherent two-tone shadow system.

**Gradients:**

- Hero background: `from-lavender-50 to-white` (linear, vertical)
- Logo mark: `linear-gradient(135deg, var(--brand-600), var(--brand-blue))` — indigo to blue
- Text gradient: `.text-gradient-brand` class — brand-600 to brand-blue (used on "clarity" in hero)
- CTA dark section: decorative radial blur blobs with brand-400/brand-blue
- Grid dot pattern: `.bg-grid-fade` class — radial dot grid (defined but usage not found)

**Blur/glass effects:**

- Navbar: `backdrop-blur-md` on `bg-white/85` — glassmorphism header
- Mobile menu overlay: `backdrop-blur-[2px]` on semi-transparent dark
- Decorative blur blobs behind hero and CTA sections

**Button styles:**

- Primary: brand-600 bg, white text, purple shadow, rounded-full, hover brand-700
- Secondary: white bg, ink-200 border, hover brand-400 border + brand-700 text
- Ghost: transparent, hover ink-100 bg
- Outline on dark: white/30 border, hover white/10 bg
- Link: brand-700 text, underline on hover

**Form styles:**

- Inputs: rounded-xl, ink-200 border, brand-500 border on focus
- Select: same styling (but using native `<select>` element, not styled)
- Textarea: same as input with min-height

**Hover/focus/active:**

- Cards: shadow transition on hover (feature-card only)
- Nav items: background color transition
- Buttons: color transition 150ms
- Icons in feature cards: background color transition on group hover (lavender-100 → brand-600 bg)
- Focus: `outline: 2px solid var(--brand-600)` with 2px offset (global `:focus-visible`)

**Animations:**

- Float animation: `float-slow` (7s) and `float-slower` (9s) — gentle vertical oscillation on hero dashboard tiles
- Accordion content: no animation (explicitly `animate-none`)
- All animations respect `prefers-reduced-motion`

**System assessment:** The visual system is coherent and internally consistent. All surfaces use `bg-white` with `border-ink-200`. All icon containers use `bg-lavender-100 text-brand-700`. All cards use `rounded-2xl`. This is a recognisable pattern — but it's recognisable as a **generic shadcn/ui template**, not as AkiliBiz.

---

## 4. Page-by-Page UX and Content Audit

### Header / Navigation (`components/marketing/marketing-navbar.tsx`)

**Purpose:** Primary site navigation with sticky positioning and mobile responsiveness.

**Existing content:**

- Logo mark (inline SVG) + "AkiliBiz" wordmark
- Desktop: Home, Solutions, Features, Pricing, Resources (dropdown), Products (dropdown)
- Desktop CTA: "Request a Demo" (ghost) + "Get Started" (primary)
- Mobile: Hamburger → slide-in dialog with full nav + dropdowns + CTAs

**Strengths:**

- Clean hierarchy between primary nav and dropdowns
- "Soon" badges on planned products set honest expectations
- Mobile nav is a proper slide-in panel, not a janky overlay
- Active page highlighting with `aria-current="page"`
- Glassmorphism background works well conceptually

**Weaknesses:**

- No logo SVG file — the logo is an inline hand-coded SVG that looks like a zigzag/chart line. It's ambiguous and not memorable.
- Both CTAs ("Request a Demo" and "Get Started") go to `/contact` — they should be differentiated.
- No language selector (Uganda has English + Luganda + Swahili audiences).
- The sticky header lacks a shadow on scroll — it's flat `bg-white/85 backdrop-blur-md` which can look washed out.

### Hero Section (`app/page.tsx`)

**Purpose:** First impression — communicate what AkiliBiz is and invite action.

**Existing content:**

- Eyebrow: "Business management, connected."
- H1: "Run your business with clarity." (with gradient on "clarity")
- Body: 2 sentences about bringing operations into one system
- CTAs: "Get Started" → /contact, "Explore Features" → /features
- Visual: `HeroDashboardVisual` — schematic diagram with floating cards

**Strengths:**

- Copy is clear, confident, and specific about what the product covers
- The gradient text on "clarity" is tasteful
- Two CTAs with appropriate differentiation (primary action vs. exploration)

**Weaknesses:**

- The hero visual is the biggest weakness. It shows abstract floating cards labeled "Today's Sales" / "Stock Alerts" / "VAT Summary" / "Business Insights" connected by SVG lines to a central hub. This looks like a design-system demo, not a product.
- No product screenshot, no real interface glimpse
- The tagline "Run your business with clarity" is good but generic — it could be any business tool
- No social proof, no metrics, no "Trusted by X businesses"
- The capability chips strip below is well-done but reads as feature checklist

**Content gaps:**

- No mention of offline-first capability in the hero (this is a key differentiator)
- No mention of Uganda, Africa, or local context
- No specific numbers or proof points

### Product/Ecosystem Section (home page)

**Purpose:** Show the AkiliBiz product family (Desktop, Business web, Marketplace).

**Strengths:**

- Clear differentiation between "Available now" and "Coming soon"
- Product Route Card component is well-designed
- Honest about what's available vs. planned

**Weaknesses:**

- Two of three products are "coming soon" — this makes the ecosystem section feel empty
- No screenshots for any product
- The copy for "Business" and "Marketplace" is speculative ("Manage your business from the web as your team and operations grow")

### Features Page (`app/features/page.tsx`)

**Purpose:** Detailed feature breakdown organized by functional area.

**Strengths:**

- 6 feature sections cover the full product: Sales & POS, Inventory, Customers & Suppliers, VAT & Reports, Business Insights, Security/Roles
- Each section has a description + 3 bullet-point cards in a 2-column grid
- Alternating lavender backgrounds provide visual rhythm
- Copy is grounded in operational reality, not marketing fluff

**Weaknesses:**

- No visual evidence — every section is text-only. No screenshots, no diagrams, no workflow illustrations.
- The 3-point cards per section feel generic ("Point-of-sale workflow built for daily, repeated use" could be any POS)
- The page is long with no visual breaks — all text, no images

### Solutions Page (`app/solutions/page.tsx`)

**Purpose:** Show how AkiliBiz applies to different business types.

**Strengths:**

- Covers 6 relevant business types: retail shops, supermarkets, pharmacies, hardware, fashion, growing multi-user businesses
- Each gets a clear, specific description
- The "one core system" section at the bottom ties it together

**Weaknesses:**

- All cards are visually identical — no way to distinguish which solution matters to a specific visitor
- No links from solution cards to relevant features or use-case stories
- No Ugandan or East African context (no mention of markets, trading centers, matooke shops, kiosks)
- No photos of real businesses, no case studies
- The "Not sure which fits your business?" card is well-placed but leads to a non-functional contact form

### Pricing Page (`app/pricing/page.tsx`)

**Purpose:** Show pricing tiers and encourage contact.

**Strengths:**

- Three tiers (Starter, Growth, Business) with clear differentiation
- "Most popular" badge on Growth plan
- FAQ section addressing why prices aren't listed
- Honest about pricing being custom/tailored

**Weaknesses:**

- No prices shown at all — this is a significant conversion barrier
- "Custom pricing · Request a quote" is generic and could feel evasive
- No ROI information, no "saves X hours/week" claims
- The pricing page is a major conversion point but directs to the same non-functional contact form

### Contact Page (`app/contact/page.tsx`)

**Purpose:** Primary conversion point — demo requests, enquiries, support.

**Strengths:**

- Clean form layout with sensible fields (name, business, contact, help topic, message)
- Good UX: success state with clear messaging
- Left sidebar has "Enquiries" and "Where we work" info cards

**Weaknesses:**

- **The form does not work.** It explicitly says "This form isn't connected to a live submission service yet." This is the biggest functional gap on the site.
- No phone number, no WhatsApp link, no physical address (critical for a Uganda-focused business product)
- The "Where we work" card says "AkiliBiz supports businesses getting started with digitising daily operations" — this is not an address or location info
- The `<select>` element uses native browser styling, not matching the rest of the form
- `noValidate` on the form disables native validation with no apparent custom validation

### FAQ Page (`app/faq/page.tsx`)

**Purpose:** Address common questions.

**Strengths:**

- 9 well-chosen questions covering offline support, stock, VAT, multi-user, web version, marketplace, CSV import, subscriptions, mobile money
- Honest answers that acknowledge what's available and what's planned
- Clean accordion UI

**Weaknesses:**

- No questions about pricing specifics, implementation timeline, data security, or support
- No search functionality (minor for 9 items)
- Could be more detailed — each answer is 1-2 sentences

### Footer (`components/marketing/marketing-footer.tsx`)

**Purpose:** Site-wide navigation, legal, branding.

**Strengths:**

- Three organized columns: Product, Resources, Company
- Logo + tagline in first column
- Copyright with dynamic year
- "Soon" badges on planned products

**Weaknesses:**

- No privacy policy link
- No terms of service link
- No physical address or contact info
- No social media links (no Twitter/X, LinkedIn, Facebook)
- The "Company" column only has "Contact us" and "Request a demo" — both point to /contact
- No "Made in Uganda" or local identity

### Download Page (`app/download/page.tsx`)

**Purpose:** Distribute AkiliBiz Desktop.

**Strengths:**

- Three platforms covered (Windows, macOS, Linux)
- Good offline-first messaging
- "Available now" / "Coming soon" status for download links vs. feature availability

**Weaknesses:**

- **No actual download links.** All buttons say "Coming to this page soon" and are disabled.
- No system requirements
- No screenshots of the desktop app
- No installation instructions
- The page exists as a placeholder

### Documentation Page (`app/docs/page.tsx`)

**Purpose:** Help center / knowledge base.

**Strengths:**

- 9 guide topics listed with icons and descriptions
- Covers a realistic range of topics from getting started to security
- "Coming soon" notice is prominent

**Weaknesses:**

- No actual content — just topic outlines
- No search
- This is purely a placeholder page

### Business Page (`app/business/page.tsx`) and Marketplace Page (`app/marketplace/page.tsx`)

**Purpose:** Announce and describe planned products.

**Strengths:**

- Honest about "coming soon" status
- Feature cards describe the value proposition clearly
- CTAs redirect to contact or download

**Weaknesses:**

- These pages exist primarily as SEO placeholders
- No visual concept for what these products will look like
- Could be consolidated into a single "Roadmap" or "What's Next" page

---

## 5. Assets, Illustration, and Iconography Audit

### Logo treatment

**Current state:** The logo (`components/marketing/logo.tsx`) is:

- An inline SVG path resembling a zigzag chart line (`M2 12.5 6 3.5 8 8l2-2.5 4 7`)
- Wrapped in a rounded-xl gradient box (brand-600 → brand-blue, 135deg)
- Paired with the text "AkiliBiz" in 17px semibold
- **No SVG file, no PNG, no favicon version, no icon-only version, no dark-mode version**

**Assessment:** The logo mark is too ambiguous. The zigzag path could be a stock chart, a heartbeat monitor, or a random line. It doesn't communicate "business management," "connectivity," or "Akili" (which means "intellect" in Swahili). A logo refresh is essential.

### Icons

**Library:** `lucide-react` v1.37.0 — a high-quality, consistent line-icon library.

**Usage:** Icons are used consistently:

- Feature icons: ShoppingCart, Boxes, Handshake, Receipt, BarChart3, TrendingUp, ShieldCheck
- Navigation icons: BookOpen, Download, HelpCircle, LayoutDashboard, ShoppingBag
- UI icons: ArrowRight, ChevronDown, Menu, X, Check, Clock, Sparkles, Info, Mail, MapPin, CheckCircle2, Link2, PackageSearch, ReceiptText, Waypoints, WifiOff
- Platform icons: Monitor, Apple, Terminal

**Assessment:** Lucide is a good choice. Icons are consistently sized (4px/5px/6px), consistently colored (`text-brand-600` or `text-brand-700`), and consistently placed in `bg-lavender-100` containers. The icon usage is disciplined. However, Lucide icons are ubiquitous across SaaS sites — using them exclusively reinforces the "generic template" feel.

### Images

**Current state:** Zero images in the entire marketing site.

- `public/` contains only Next.js/Vercel boilerplate SVGs (`vercel.svg`, `next.svg`, `window.svg`, `file.svg`, `globe.svg`) — none are referenced by any component
- No product screenshots
- No photography
- No illustrations
- No team photos
- No customer photos
- No icon customizations
- The hero visual is a pure-code diagram built from HTML/CSS/SVG

**Assessment:** This is the single most damaging weakness. A business management product with zero visual evidence of its actual interface or real-world use looks unfinished and untrustworthy.

### Missing visual assets (critical list)

1. Product screenshots (desktop POS, inventory, reports, dashboard)
2. Favicon (currently default Next.js icon)
3. Open Graph image for social sharing
4. Logo SVG file with proper variations
5. Photography of real Ugandan businesses using the software
6. Workflow diagrams showing how features connect
7. Download page visuals (app store badges, installation screens)
8. Mobile app concept art (for marketplace)
9. Team/about imagery

### Recommended visual direction

- **Primary:** Real product screenshots with tasteful device mockups (MacBook, desktop monitor, phone)
- **Secondary:** High-quality photography of Ugandan retail environments, marketplaces, and business owners (authentic, not stock)
- **Tertiary:** Simple, functional diagrams showing workflow connections (not decorative illustrations)
- **Avoid:** AI-generated illustrations, abstract 3D renders, generic "business people shaking hands" stock photos, floating UI mockups with no content

---

## 6. Responsive, Accessibility, and Interaction Audit

### Mobile navigation and layout

**Confirmed from code inspection:**

- Mobile nav uses a Radix Dialog component that slides in from the right (`inset-y-0 right-0`, full height, `max-w-sm`). This is a proper mobile drawer.
- Nav links close the dialog via `DialogClose`
- Mobile menu button is visible only below `lg` breakpoint (`lg:hidden`)
- Desktop nav is hidden below `lg` (`hidden lg:flex`)

**Assessment:** The mobile navigation pattern is solid. The slide-in drawer is a better pattern than a full-screen overlay for a business site.

### Breakpoints

Tailwind v4 default breakpoints (no customization found):

- `sm`: 640px
- `md`: 768px (not used)
- `lg`: 1024px
- `xl`: 1280px (not used)
- `2xl`: 1536px (not used)

**Pattern:** The site primarily uses `sm:` and `lg:` breakpoints, with `md:` and `xl:` rarely or never used. This creates a two-tier responsive strategy (mobile → desktop) which is pragmatic.

### Overflow risks

**Confirmed from code inspection:**

- `overflow-hidden` is used on hero section and CTA dark section (intentional for decorative blur blobs)
- The hero dashboard visual uses absolute positioning with `left: 0`, `right: 0`, etc. — could overflow on very narrow screens below `sm`
- `lg:-left-4` and `lg:-right-3` on floating status chips could create horizontal scrollbar on tablet sizes if not properly contained
- The contact form grid `lg:grid-cols-[1fr,1.2fr]` could stress narrow laptops

**Needs browser verification:** Horizontal overflow on screens between 640px-1024px where absolute-positioned hero elements may protrude.

### Readability and tap targets

- Body text uses `text-sm` (14px) and `text-base` (16px) with `leading-relaxed` (1.625) — good readability
- Nav items use `px-4 py-2` rounded-full — approximately 32px height, which is below WCAG's 44px minimum tap target
- Mobile nav items use `px-3 py-3 text-base` — approximately 48px height, which is good
- Buttons use `h-11` (44px) default, `h-12` (48px) large — both pass tap target requirements
- Form inputs use `h-11` (44px) — adequate

### Keyboard navigation

**Confirmed:**

- `:focus-visible` global outline on brand-600 (2px, 2px offset)
- All interactive elements are native buttons or links
- Dropdown menus use Radix primitives which handle keyboard navigation
- Dialog uses Radix which manages focus trapping
- `aria-label` on mobile menu button
- `aria-current="page"` on active nav links

### Color contrast

**Estimated from code:**

- Brand 700 (`#4338b8`) on white: contrast ratio ~4.6:1 (passes AA for normal text)
- Brand 600 (`#5941d9`) on white: contrast ratio ~4.1:1 (marginal for small text)
- Ink 500 (`#656487`) on white: contrast ratio ~5.0:1 (passes AA)
- Ink 400 (`#8988a6`) on white: contrast ratio ~3.5:1 (**fails AA** — used for placeholder text and footnotes)
- White on brand-950 (`#14103a`): contrast ratio ~13:1 (excellent)

**Potential issue:** `text-ink-400` (`#8988a6`) used for placeholder text and footer copyright may fail WCAG AA contrast requirements against white. This needs browser verification with a contrast checker.

### Semantic HTML

- Proper `<header>`, `<main>`, `<footer>`, `<nav>` landmarks
- `<h1>` only on homepage
- `<section>` elements used for page sections
- `<ul>` and `<li>` for lists
- `<dl>`, `<dt>`, `<dd>` used correctly in hero dashboard visual
- `<form>` with proper `<label>` elements linked via `htmlFor`/`id`
- `aria-hidden="true"` on decorative icons consistently
- `role="status"` on ComingSoonNotice

**Assessment:** Semantic HTML is above average for an early-stage site.

### Image alt text

**Not applicable** — there are zero images in the site. The only visual asset is the inline SVG logo, which is wrapped in `aria-hidden="true"`.

### Reduced motion

**Confirmed from `globals.css`:**

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-beduced-motion: auto; }
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-beduced-motion: auto !important;
  }
}
```

The hero dashboard tiles use `motion-safe:animate-float-slow` which correctly disables animation when reduced motion is preferred.

### Form feedback and error states

**Confirmed issues:**

- The `<select>` element in the contact form uses native browser styling, not matching the rest of the form
- `noValidate` is set on the form element, disabling native validation
- No custom validation messages or error states are implemented
- No loading state on form submission
- The success state is a simple client-side `useState` toggle — no server action

---

## 7. SEO, Performance, and Credibility Audit

### Page titles and metadata

**Layout-level (all pages):**

- Title template: `"%s · AkiliBiz"` with default `"AkiliBiz — Run your business with clarity"`
- Description: "AkiliBiz brings sales, inventory, customers, suppliers, VAT, reporting, and business insights into one connected system for growing businesses."

**Page-level titles:**

- Features: "Features"
- Pricing: "Pricing"
- Solutions: "Solutions"
- FAQ: "FAQ"
- Documentation: "Documentation"
- Download: "Download"
- Business: "AkiliBiz Business (Coming Soon)"
- Marketplace: "AkiliBiz Marketplace (Coming Soon)"
- Contact: No page-level title override

**Assessment:** Titles are functional but generic. The homepage title is good. Inner pages use single-word titles which, combined with the template, produce "Features · AkiliBiz" — acceptable but could be more descriptive (e.g., "Sales, Inventory, VAT & Reporting Features").

### Open Graph / Social sharing

**Status: Non-existent.** No `openGraph` metadata in any file. No `opengraph-image.png`. No Twitter card metadata. Sharing the site on WhatsApp, Twitter, Facebook, or LinkedIn will produce a generic unfurled preview with no image.

**This is critical** for a Uganda-focused product where WhatsApp sharing is a primary distribution channel.

### Structured data

**Status: Non-existent.** No JSON-LD, no Schema.org markup. Missing `Organization`, `WebSite`, `Product`, `FAQPage`, and `LocalBusiness` schemas.

### Favicon and web manifest

- `app/favicon.ico` exists (contents unknown — likely default Next.js)
- No `icon.png`, no `apple-touch-icon.png`
- No `manifest.json` or `site.webmanifest`
- No `theme-color` meta tag

### Image optimization

**Not applicable** — no images to optimize. When images are added, Next.js `<Image>` component should be used (it's imported in the environment but not yet used).

### Font loading

**Issue:** The CSS declares `font-family: "Inter"` but **no mechanism loads the Inter font**. There is:

- No `next/font/google` import in `app/layout.tsx`
- No CSS `@import url(...)` for Google Fonts
- No `<link>` tag for font files

The result: the browser falls through to `ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`. The site runs entirely on system fonts. This is actually fine for performance (no FOUT, no FOUT), but the `Inter` declaration is misleading.

### Performance risks

- All 13 pages are statically generated — fast by default
- No heavy client-side JavaScript (only the mobile nav uses `"use client"`)
- Lucide icons are tree-shakeable
- No third-party scripts detected (no analytics, no tracking)
- The Tailwind v4 `@theme inline` approach avoids a separate CSS bundle
- Potential concern: the `blur-3xl` decorative elements may cause compositing overhead on low-end mobile devices

### Credibility elements currently missing

1. **Security positioning** — no mention of data encryption, backup, or security practices
2. **Local relevance** — no Uganda/East Africa mention anywhere
3. **Customer proof** — zero testimonials, logos, case studies, or usage metrics
4. **Product screenshots** — the single biggest credibility gap
5. **Pricing transparency** — no prices, no plan comparison with costs
6. **Demo flow** — "Request a Demo" goes to a non-functional contact form
7. **Privacy terms** — no privacy policy or terms of service
8. **Business contact details** — no phone, email, address, or WhatsApp
9. **Team/About page** — no information about who is behind AkiliBiz
10. **Social presence** — no social media links

---

## 8. Generic-Template Risk Assessment

### Issues that make the site feel like a template

**1. The hero visual is a schematic, not a product screenshot.**
*Why it's a problem:* Every SaaS template has a "dashboard mockup" with floating cards and gradient blobs. Visitors cannot tell if AkiliBiz is a real product or a concept. Real product screenshots are the #1 credibility signal for business software.
*What should replace it:* A screenshot or composite of the actual AkiliBiz Desktop interface — POS screen, inventory list, or dashboard.

**2. Lavender/indigo colour palette is the default "safe startup" palette.**
*Why it's a problem:* This exact palette (purple-600 buttons, purple-100 icon backgrounds, purple-tinted shadows, lavender section alternation) is what you get from shadcn/ui defaults + any purple theme generator. It communicates "we built this quickly" not "this is our brand."
*What should replace it:* A distinctive palette that includes Ugandan/African visual cues — potentially warm earth tones, green (Uganda flag), or a distinctive brand colour that doesn't read as "generic tech."

**3. Every card looks identical.**
*Why it's a problem:* Feature cards, solution cards, doc cards, platform cards — they all use the same `rounded-2xl border border-ink-200 bg-white p-6/7` pattern with `bg-lavender-100 text-brand-700` icon containers. This creates visual monotony.
*What should replace it:* Visual variety through different card treatments (some with photos, some with screenshots, some with illustrations, some with gradient accents).

**4. The copy is honest but impersonal.**
*Why it's a problem:* Phrases like "one connected system," "stay in control," "practical tools for running daily business operations" could belong to any B2B software. There's no voice, no personality, no cultural grounding.
*What should replace it:* Copy that references Ugandan business realities — "Whether you're running a shop in Owino Market or managing stock across two locations in Kampala..."

**5. No images anywhere.**
*Why it's a problem:* A site with zero photographs, zero screenshots, and zero custom illustrations feels like a wireframe or a template that hasn't been customized yet. Text-only pages are fatiguing.
*What should replace it:* A deliberate mix of product screenshots, contextual photography, and functional diagrams.

**6. The "Coming Soon" pattern dominates.**
*Why it's a problem:* 3 out of 10 pages are purely "coming soon" placeholders (Business, Marketplace, Docs). 2 more pages (Download, Contact) have non-functional elements. This means half the site doesn't do anything.
*What should replace it:* Either hide pages that aren't ready, or consolidate "coming soon" content into a single roadmap page.

**7. Default Next.js favicon and boilerplate SVGs in public/.**
*Why it's a problem:* Even `vercel.svg` and `next.svg` are still in the public directory. This screams "just scaffolded."
*What should replace it:* Custom favicon, proper OG image, remove boilerplate files.

---

## 9. Recommended AkiliBiz Brand Direction

### Brand personality keywords

**Credible. Grounded. Connected. Unhurried. Practical. East African.**

Not: Playful. Futuristic. Minimalist-chic. AI-powered. Disruptive.

The brand should feel like **a bank you trust meets a tool you actually use daily** — not a VC-backed startup trying to be the next big thing.

### Colour strategy

**Recommendation: Refine, don't rebuild.**

The current brand-600/700 indigo is distinctive enough to keep as the primary — it's more sophisticated than pure blue. However, the supporting palette needs warmth and specificity:

1. **Keep:** Brand 600 (`#5941d9`) as the primary action colour — it has good contrast and a distinctive purple-indigo tone
2. **Introduce:** A warm accent colour (amber/ochre or terracotta) for secondary actions and warmth — replacing the current generic amber which is only used for "coming soon" badges
3. **Introduce:** A green that references the Ugandan flag or East African context for success/positive states (the current `#1d7a52` is fine but could be more distinctive)
4. **Reduce:** Lavender section alternation — it creates a "soft" feel. Replace with subtle warm grays or keep the lavender only for the hero
5. **Remove:** The brand-blue (`#4f7cf6`) gradient pair — the indigo-to-blue gradient creates visual tension without adding meaning. A single-colour gradient (brand-600 → brand-800) would be cleaner

### Typography direction

1. **Load Inter properly** using `next/font/google` — this is a strong choice for a business tool (clear, professional, good for data-dense interfaces)
2. **Consider a complementary display font** for headlines — something with more personality than Inter's defaults. Source Serif, or a geometric sans like Plus Jakarta Sans, could add distinction
3. **Increase body text size** to 16px base minimum — the current `text-sm` (14px) for descriptions is slightly too small for a business audience that may include older operators
4. **Establish a tighter type scale** with fewer but more deliberate size steps

### UI style direction

1. **Replace schematic hero visual with real product screenshots** — this is the single highest-impact change
2. **Break the card monotony** — introduce varied card layouts: some with images, some with product UI snippets, some with customer quotes
3. **Add more visual "proof" elements** — checkmarks next to specific features, before/after comparisons, workflow diagrams
4. **Use warm surfaces** alongside the cool purple — a warm gray (`#faf8f5`) as an alternative to lavender-25 could add warmth without sacrificing professionalism
5. **Add subtle patterns or textures** — the `.bg-grid-fade` class is defined but unused. A subtle dot grid, line pattern, or Kenyan-kit-inspired geometric element could add identity

### Image/illustration direction

1. **Product screenshots** (highest priority) — actual AkiliBiz Desktop screens in tasteful device mockups. Even beta-quality screenshots are better than no screenshots.
2. **Contextual photography** — real Ugandan retail environments, shopkeepers, market scenes. Authentic, warm lighting. Not stock photography. If real photos aren't available yet, carefully selected stock with East African context.
3. **Functional diagrams** — show how sales → inventory → VAT → reporting connects in the actual product. Not decorative, educational.
4. **Avoid:** Abstract 3D illustrations, AI-generated faces, floating UI elements with no real content, "diverse team" stock photos

### Tone of voice

- **First person plural** ("We built AkiliBiz to...") — shows the team behind the product
- **Specific to Ugandan business reality** — reference actual use cases, local currency, common business types
- **Honest about limitations** — the site already does this well; keep it
- **Confident but not hypey** — "AkiliBiz handles VAT recording so you don't reconstruct it at month-end" rather than "Revolutionary AI-powered tax automation"
- **Accessible language** — avoid jargon that assumes technical literacy. "Stock" not "inventory management." "Money in, money out" alongside "receivables and payables."

### Motion principles

- **Purposeful, not decorative.** Float animations are fine for the hero but shouldn't appear elsewhere
- **Smooth and slow.** 7-9 second animations are right for this audience — fast animations feel chaotic for a business tool
- **Always respect reduced motion.** Already implemented correctly
- **Page transitions:** subtle fade-in for content sections (not needed immediately but good for polish)
- **Hover states:** the current card shadow lift is good; keep it subtle

### Trust-building principles

1. **Show the product** — screenshots beat descriptions
2. **Show real people** — photos of actual users (or realistic stand-ins) beat icons
3. **Show local presence** — Kampala address, Ugandan phone number, Uganda-related context
4. **Show reliability** — uptime commitments, backup features, offline capability prominently
5. **Show financial seriousness** — clear pricing, audit trails, compliance messaging
6. **Show support** — "Talk to a real person" messaging, WhatsApp link, phone number

---

## 10. Proposed Information Architecture

### Primary navigation

```text
Home
Solutions    (who it's for)
Features     (what it does)
Pricing      (what it costs)
Download     (get it now)
Resources ▾
  ├── Documentation
  └── FAQ
```

**Changes from current:**

- Remove "Products" dropdown (Business and Marketplace are not ready — hide them until launch)
- Move "Download" to primary nav (it's the main conversion action today)
- Keep Resources as a dropdown

### Secondary navigation (footer)

```text
Product
  Features · Solutions · Pricing · Download Desktop · Roadmap
Resources
  Documentation · FAQ
Company
  About · Contact · Privacy · Terms
```

**Changes from current:**

- Add "Roadmap" to replace individual Business/Marketplace pages
- Add "About" page
- Add "Privacy" and "Terms" pages (required for credibility)
- Remove Business and Marketplace from footer until they're real

### Core pages

| Page | Status | Priority | Notes |
| --- | --- | --- | --- |
| Home | Exists | Refine | Needs screenshots, social proof, stronger hero |
| Features | Exists | Refine | Needs visuals in each feature section |
| Solutions | Exists | Refine | Needs Ugandan context, could become more story-driven |
| Pricing | Exists | Refine | Needs price indicators or clearer "request pricing" value |
| Download | Exists | Fix | Needs actual download links or clear "how to get it" flow |
| Contact | Exists | Fix | Needs working form, phone/WhatsApp, address |
| FAQ | Exists | Polish | Minor content additions |
| Documentation | Exists | Placeholder | Keep as placeholder, improve later |
| About | **Missing** | Create | Who we are, why AkiliBiz, team |
| Privacy | **Missing** | Create | Privacy policy (required) |
| Terms | **Missing** | Create | Terms of service (required) |
| Roadmap | **New** | Create | Consolidate Business + Marketplace into one page |
| Business | Exists | Consolidate → Roadmap | |
| Marketplace | Exists | Consolidate → Roadmap | |

### Recommended homepage section order

1. **Hero** — product screenshot + "Run your business with clarity" + dual CTA
2. **Social proof strip** — "Trusted by businesses in Kampala" / partner logos / metric
3. **Product visual** — actual AkiliBiz Desktop screenshot or interactive demo teaser
4. **Key capabilities** — the 6-card grid (keep but enhance with screenshots)
5. **How it works** — 3-step workflow (sell → track → report) — NEW section
6. **Offline-first callout** — dedicated section for the key differentiator
7. **Product ecosystem** — Desktop today, Business & Marketplace roadmap
8. **Customer stories / testimonials** — even 1-2 quotes would help
9. **CTA** — "Bring your business operations into one place"

### Content to keep, remove, consolidate, or add

| Content | Action | Rationale |
| --- | --- | --- |
| Hero copy | Keep, refine | Core message is strong |
| Capability chips strip | Keep | Good visual summary |
| 6-card feature grid | Keep, add screenshots | Good coverage, needs visuals |
| Product ecosystem cards | Keep but reduce prominence | Two-thirds are "coming soon" |
| Solutions page | Keep, add Ugandan context | Business-type segmentation is valuable |
| Features page | Keep, add visuals | Content is strong, needs visual proof |
| Pricing page | Keep, add pricing hints | Structure is good, needs more substance |
| Business page | Consolidate → Roadmap | Separate placeholder pages dilute focus |
| Marketplace page | Consolidate → Roadmap | Same as above |
| Docs page | Keep as-is | Acceptable placeholder |
| Contact form | Fix functionality | Currently non-functional |
| **New: How it works section** | Add to homepage | Shows the product in action |
| **New: Social proof section** | Add to homepage | Critical for credibility |
| **New: About page** | Create | Builds trust, shows team |
| **New: Privacy/Terms** | Create | Required for any business product |
| **New: Product screenshots** | Add throughout | Single highest-impact improvement |

---

## 11. Prioritized Improvement Roadmap

### Phase A — Foundations

*Establish the design system, fix infrastructure, and prepare for visual additions.*

| # | Item | Priority | Impact | Effort | Dependencies | Files likely to change |
| --- | --- | --- | --- | --- | --- | --- |
| A1 | Load Inter font properly via `next/font/google` | Critical | High | Small | None | `app/layout.tsx`, `app/globals.css` |
| A2 | Diagnose and fix `text-ink-700` / `style={{ color }}` override issue | Critical | Medium | Small | None | `globals.css`, 7 component/page files |
| A3 | Create proper favicon (SVG + ICO + apple-touch-icon) | Critical | High | Small | Logo design | `app/favicon.ico`, `app/layout.tsx`, `public/` |
| A4 | Add Open Graph metadata + OG image | Critical | High | Medium | Logo design, brand palette | `app/layout.tsx`, `public/` |
| A5 | Create `robots.txt` and `sitemap.ts` | High | Medium | Small | None | New `app/robots.ts`, `app/sitemap.ts` |
| A6 | Create `about` page | High | High | Medium | Content writing | New `app/about/page.tsx` |
| A7 | Create privacy policy and terms pages | High | Medium | Medium | Legal content | New `app/privacy/page.tsx`, `app/terms/page.tsx` |
| A8 | Audit and refine colour palette — add warmth, reduce generic-lavender feel | High | Medium | Medium | Brand direction decision | `app/globals.css` |
| A9 | Establish a proper type scale in Tailwind theme | Medium | Medium | Small | Font loading (A1) | `app/globals.css` |
| A10 | Remove boilerplate public files (vercel.svg, next.svg, etc.) | Low | Low | Small | None | `public/` |

### Phase B — Landing Page Story

*Transform the homepage from a text-heavy template into a credible product story.*

| # | Item | Priority | Impact | Effort | Dependencies | Files likely to change |
| --- | --- | --- | --- | --- | --- | --- |
| B1 | Create or obtain product screenshots of AkiliBiz Desktop | Critical | Very High | Large | Access to running product | New assets in `public/` |
| B2 | Replace hero schematic with real product screenshot + device mockup | Critical | Very High | Medium | B1 | `components/marketing/hero-dashboard-visual.tsx` |
| B3 | Add a "How it works" section to homepage (sell → track → report) | High | High | Medium | B1 (screenshots) | `app/page.tsx`, new component |
| B4 | Add social proof strip (customer count, "Trusted in Kampala", partner logos) | High | High | Medium | Content/proof | `app/page.tsx`, new component |
| B5 | Add testimonials or customer quotes section | High | High | Medium | Real customer quotes | `app/page.tsx`, new component |
| B6 | Add dedicated "Offline-first" callout section to homepage | Medium | High | Small | None | `app/page.tsx` |
| B7 | Update capability cards with screenshots or visual accents | Medium | High | Medium | B1 | `components/marketing/feature-card.tsx` or inline in `app/page.tsx` |
| B8 | Refresh logo mark — make it communicate "business management" or "Akili" | Medium | High | Large | Brand design | `components/marketing/logo.tsx` |

### Phase C — Product and Conversion Pages

*Fix broken conversion flows, consolidate placeholder pages, add substance.*

| # | Item | Priority | Impact | Effort | Dependencies | Files likely to change |
| --- | --- | --- | --- | --- | --- | --- |
| C1 | Connect contact form to a submission service (Formspree, Resend, etc.) | Critical | Very High | Medium | Service choice + API key | `app/contact/page.tsx`, env config |
| C2 | Add phone number + WhatsApp link to contact page and footer | Critical | High | Small | Business decision | `app/contact/page.tsx`, `components/marketing/marketing-footer.tsx` |
| C3 | Add real or estimated pricing to pricing page | High | High | Medium | Pricing strategy | `app/pricing/page.tsx`, `components/marketing/pricing-card.tsx` |
| C4 | Consolidate Business + Marketplace pages into a "Roadmap" page | Medium | Medium | Medium | None | New `app/roadmap/page.tsx`, remove `app/business/`, `app/marketplace/` |
| C5 | Fix download page — add actual download links or clear "request access" flow | High | High | Medium | File hosting | `app/download/page.tsx` |
| C6 | Add Ugandan/East African context to Solutions page | Medium | Medium | Small | Content writing | `app/solutions/page.tsx` |
| C7 | Improve FAQ with more questions (security, support, pricing details) | Low | Low | Small | Content writing | `app/faq/page.tsx` |
| C8 | Add `<select>` custom styling to match form design | Low | Low | Small | None | `app/contact/page.tsx` |

### Phase D — Polish and Validation

*QA, performance, accessibility, analytics, and content refinement.*

| # | Item | Priority | Impact | Effort | Dependencies | Files likely to change |
| --- | --- | --- | --- | --- | --- | --- |
| D1 | Responsive QA across mobile/tablet/desktop — fix overflow issues | High | High | Medium | None | Various |
| D2 | Accessibility audit with automated tools + manual testing | High | Medium | Medium | None | Various |
| D3 | Add analytics (Plausible, PostHog, or similar — privacy-respecting) | High | Medium | Small | Service choice | `app/layout.tsx` |
| D4 | Add structured data (JSON-LD) for Organization, FAQPage, Product | Medium | Medium | Small | None | `app/layout.tsx` |
| D5 | Performance audit — image optimization, font loading, bundle size | Medium | Medium | Medium | Assets added in Phase B | Various |
| D6 | Content copy pass — add Ugandan context, improve CTAs, reduce genericness | Medium | High | Large | Brand voice decision | All page files |
| D7 | Add `error.tsx` and `not-found.tsx` pages | Low | Low | Small | None | New `app/error.tsx`, `app/not-found.tsx` |
| D8 | Add language consideration (English/Luganda/Swahili hints in copy) | Low | Medium | Large | i18n decision | Various |

### Summary table

| Phase | Critical items | High items | Total estimated timeline |
| --- | --- | --- | --- |
| A — Foundations | 4 | 3 | 1-2 weeks |
| B — Landing Page Story | 2 | 3 | 2-3 weeks (longer if screenshots aren't ready) |
| C — Product & Conversion | 2 | 2 | 1-2 weeks |
| D — Polish & Validation | 0 | 3 | 1-2 weeks |

**Total: approximately 4-9 weeks**, heavily dependent on availability of product screenshots and brand decisions.

---

## 12. Questions That Must Be Answered Before Redesign

1. **Can we obtain actual screenshots of AkiliBiz Desktop?** This single answer determines the highest-impact visual improvement. Even beta-quality screenshots are transformative. Without them, any redesign remains text-heavy and abstract.

2. **What is the official brand colour palette?** Are the current indigo/purple values (`#5941d9`, `#4338b8`) approved brand colours, or were they picked from a Tailwind theme generator? If there are approved brand guidelines, we should align with them.

3. **What is the primary conversion action?** Should visitors "Request a Demo," "Get Started" (sign up), "Download Desktop," or "Contact us" (WhatsApp/call)? The site currently sends every CTA to `/contact` — we need to know the actual conversion funnel.

4. **Is pricing intended to be public?** The current pricing page shows no prices and says "Request a quote." Should we add estimated pricing, starting-at prices, or keep it fully custom?

5. **Is the contact form backend decided?** Formspree? Resend? A custom API? WhatsApp as the primary channel? This determines the contact page redesign.

6. **Does AkiliBiz have real customers yet?** Even 1-3 early users who would provide a quote or testimonial would dramatically improve credibility. If not, we should avoid fake social proof.

7. **Are the Business web app and Marketplace genuinely planned with timelines, or are they aspirational?** This determines whether to keep their pages, consolidate them, or hide them.

8. **What is the company's physical presence?** Kampala office address? Phone number? This information is needed for the footer, contact page, and trust-building.

9. **Has a professional logo been designed?** The current inline SVG zigzag is not a professional logo mark. Is there a designed logo that should replace it?

10. **Should the marketplace/customer-facing side be included in the initial marketing site?** Or should the marketing site focus exclusively on selling AkiliBiz Desktop to business owners?

---

## Recommended Next Move

**After reviewing this audit, the first redesign task should be:**

**Obtain or create product screenshots and integrate them into the homepage hero and feature sections.** This is the single change with the highest impact-to-effort ratio. It transforms the site from "text template" to "real product" in one move. Every other improvement (colour refinement, social proof, copy polish) amplifies the effect of having real visuals — but none of them work without them.

Start by capturing screenshots of the 3-4 most impressive AkiliBiz Desktop screens (POS sale, inventory dashboard, VAT report, business insights). Then replace `HeroDashboardVisual` with a composite screenshot in a device mockup, and add inline screenshots to each feature section on the features page.
