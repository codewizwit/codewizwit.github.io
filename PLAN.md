# codewizwit.com -- Implementation Plan

## Context

**Who:** Alexandra Kelstrom (codewizwit)
**Role:** Senior Software Engineer, AI Enablement at Vanguard
**Mission:** No Human Left Behind -- building frameworks and teaching skills for AI adoption that lifts everyone. Technology, ethics, and humanity evolving together.

Alexandra grew up in six countries (Taiwan, Latvia, Czech Republic, England, Scotland, Poland), studied Media and Design at DePaul University in Chicago, bartended for years, then pivoted to software engineering through the UPenn LPS Coding Bootcamp during COVID. Received a Vanguard offer on graduation day. Now coaches four teams on AI adoption, mentors junior engineers, and drives culture with a responsible AI lens.

**Handle:** codewizwit
**Location:** Philadelphia, PA
**Dual citizen:** US and Czech Republic

---

## Core Message

**Headline:** No Human Left Behind.
**Subhead:** Technology, ethics, and humanity evolving together.

### Messaging Hierarchy

1. **The Paradox:** More AI. More human.
2. **The Insight:** AI makes work more human, not less. When AI handles the grunt work, people collaborate more, attend to details that matter, and build better things.
3. **The Framework:** The Lift -- AI adoption that lifts everyone. Not just the technical. Not just the early adopters. Everyone.
4. **The Methodology:** Encoding Intent -- Plan first. Prompt second.
5. **The Core Distinction:** Programming is a task. Software engineering is a role. AI can do the task. Our job is still to solve the problems.
6. **The Symbol:** The Hot Dog -- a bridge between memory and technology, past and future.

---

## Decisions

### Stack

| Decision          | Choice                                           |
| :---------------- | :----------------------------------------------- |
| Framework         | Astro 5.x (static-first, content-focused)        |
| Content           | Astro Content Collections with MDX                |
| Styling           | Vanilla CSS with custom properties (no Tailwind)  |
| Typography        | Lora (headings), Inter (body), JetBrains Mono (code) |
| Fonts             | Self-hosted WOFF2 (no Google Fonts CDN)           |
| Images            | Sharp (via @astrojs/image integration)            |
| Syntax highlight  | Shiki with github-dark theme                      |
| Sitemap           | @astrojs/sitemap                                  |
| RSS               | @astrojs/rss                                      |
| TypeScript        | Strict mode                                       |

### Hosting

| Decision          | Choice                                           |
| :---------------- | :----------------------------------------------- |
| Hosting           | Static deploy (Vercel, Netlify, or Cloudflare Pages) |
| Domain            | codewizwit.com                                   |
| SSL               | Automatic via host                                |

### Visual Direction

| Decision          | Choice                                           |
| :---------------- | :----------------------------------------------- |
| Palette           | Cream, near-black, single gold accent             |
| Feel              | Warm, editorial, confident but not corporate      |
| Texture           | Subtle grain overlay at 3% opacity ("A human made this") |
| Color blocking    | Full-bleed section backgrounds (cream, dark, gold) |
| Animation         | Scroll-triggered reveals, hero stagger animations |
| Reduced motion    | Full prefers-reduced-motion support               |
| Dark mode         | Not for V1 (the cream IS the brand)               |

---

## Existing Assets

| Asset                         | Location / Notes                                  |
| :---------------------------- | :------------------------------------------------ |
| Hot dog logo                  | `/public/images/codewizwit-logo.jpg` -- AI-simplified rendering of a hand-carved block print from DePaul capstone |
| Resume PDF                    | `/public/resume/ResumeAlexandraKelstrom2026.pdf`  |
| Fonts (self-hosted)           | `/public/fonts/` -- lora-regular, lora-bold, lora-italic, inter-latin, jetbrains-mono-latin (all WOFF2) |
| Favicon                       | `/public/favicon.svg` and `/public/favicon.ico`   |
| robots.txt                    | `/public/robots.txt`                              |
| Dispatch No13                 | Published article on responsible AI infrastructure |
| Field Note No1                | Published article on Claude Code skill files       |
| Human-in-the-Loop CLI         | npm package: `@human-in-the-loop/cli`             |
| GitHub                        | github.com/codewizwit                             |
| LinkedIn                      | linkedin.com/in/akelstrom                         |
| Medium                        | codewizwit.medium.com                             |
| Email                         | akelstrom@icloud.com                              |

---

## Writing Rules

**CRITICAL: NO EM DASHES.** Never use `--` rendered as an em dash character. Use periods, commas, colons, semicolons, or restructure the sentence. This is a non-negotiable stylistic constraint across all content.

Additional writing rules:
- Short sentences. Punchy. Direct.
- Active voice always.
- No corporate jargon. No buzzword bingo.
- Contractions are fine (it's, don't, we're).
- "AI" not "A.I." -- no periods.
- Use "No" symbol (No) for numbering articles: "Dispatch No13", "Field Note No1".
- Every article ends with: "No Human Left Behind." + signature block.
- Tagline on footer: "Build with care. Ship with purpose."

---

## Site Structure

```
/                     Home (single-page narrative scroll)
/about                About Alexandra (3-act story)
/the-lift             The Lift framework (full page)
/writing              Writing index (filterable by type)
/writing/[slug]       Individual articles (MDX)
/the-hot-dog          The Hot Dog origin story
/connect              Contact, links, resume download
/speaking             Speaking engagements (V2 candidate)
/projects             Projects showcase (V2 candidate)
/rss.xml              RSS feed
/robots.txt           Search engine directives
```

### Navigation

**Main nav (header):** About | The Lift | Writing | Connect

**Footer nav:**
- Explore: About, The Lift, Writing, The Hot Dog
- Connect: GitHub, LinkedIn, Medium, RSS

---

## Design System

### Colors

```css
/* Core Palette */
--color-cream:       #F5F3EE;    /* Primary background */
--color-black:       #1A1A1A;    /* Primary text, dark sections */
--color-gold:        #C8973E;    /* THE accent -- used sparingly */
--color-gold-dark:   #9A7230;    /* WCAG AA on cream for text */
--color-gold-hover:  #B5862F;    /* Interactive hover state */
--color-gray:        #6B6B6B;    /* Secondary text */
--color-gray-light:  #A3A3A3;    /* Muted text */
--color-gray-border: #D4D2CD;    /* Borders, dividers */
--color-white:       #FFFFFF;    /* Card hovers, occasional use */
```

**Gold discipline:** Gold is the only color pop on the entire site. It appears in:
- Labels (`.label-gold`)
- Hover underlines on navigation links
- The single full-bleed Gold Moment section on the homepage
- Article type badges
- Blockquote borders
- Selection highlight background
- Focus rings

### Typography

| Role      | Family           | Fallback Stack                                   | Weights  |
| :-------- | :--------------- | :----------------------------------------------- | :------- |
| Headings  | Lora             | Georgia, Times New Roman, serif                   | 400, 700 |
| Body      | Inter            | -apple-system, BlinkMacSystemFont, Segoe UI, sans | 100-900  |
| Code      | JetBrains Mono   | Fira Code, Cascadia Code, monospace               | 100-800  |

**Type Scale (fluid clamp):**

```css
--text-xs:    clamp(0.75rem,  0.7rem  + 0.25vw, 0.8125rem);
--text-sm:    clamp(0.8125rem, 0.75rem + 0.3vw,  0.9375rem);
--text-base:  clamp(1rem,     0.95rem + 0.25vw, 1.125rem);
--text-lg:    clamp(1.125rem, 1rem    + 0.5vw,  1.3125rem);
--text-xl:    clamp(1.25rem,  1.1rem  + 0.75vw, 1.5rem);
--text-2xl:   clamp(1.5rem,   1.2rem  + 1.5vw,  2rem);
--text-3xl:   clamp(1.875rem, 1.4rem  + 2.4vw,  2.75rem);
--text-4xl:   clamp(2.25rem,  1.5rem  + 3.75vw, 3.75rem);
--text-5xl:   clamp(2.75rem,  1.8rem  + 4.75vw, 5rem);
--text-hero:  clamp(3rem,     2rem    + 5vw,    6rem);
```

### Texture

- **Grain overlay:** Fixed-position SVG noise filter at 3% opacity. Covers entire viewport. Pointer-events disabled. z-index above everything. "Felt, not seen. A human made this."
- Implemented as inline SVG data URI using `feTurbulence` (fractalNoise, baseFrequency 0.85, 4 octaves, stitchTiles).

### Section Color Blocking

Three section backgrounds that alternate to create visual rhythm:

| Class             | Background         | Text Color          |
| :---------------- | :----------------- | :------------------ |
| `.section-cream`  | `--color-cream`    | `--color-text`      |
| `.section-dark`   | `--color-black`    | `--color-cream`     |
| `.section-gold`   | `--color-gold`     | `--color-black`     |

The homepage alternates: cream > dark > cream > cream > cream > gold > cream > dark (footer).

### Key Design Moments

1. **Hero:** Full viewport, centered. Rotated hot dog mark (rotate -12deg, animates from -30deg). "No Human Left Behind." in Lora hero size. Staggered entrance animation (mark > heading > subtitle > CTA).

2. **Paradox:** Near-black section. "More AI. More human." in 5xl Lora. Minimal. Scroll-reveal.

3. **The Thesis:** "AI makes work more human, not less." Two paragraph expansion of the core insight.

4. **The Lift Teaser:** Old/New World comparison table + 4 role cards (Enablers, Builders, Advocates, Facilitators). Gold accent on the "With The Lift" column.

5. **Writing Teaser:** Latest 2 articles as bordered cards with hover lift effect.

6. **The Gold Moment:** THE one full-bleed mustard gold section on the entire homepage. Black text on gold. "The future of work isn't AI replacing humans. It's humans and AI building together." Arrow CTA to Connect page.

7. **Proof:** Two-column grid of Speaking + Projects. Clean typeset lists, not cards.

8. **Sticky Header:** Cream background, becomes frosted glass (backdrop-filter blur) on scroll with subtle bottom border.

9. **Article Signature:** Hot dog mark (rotated -12deg) + name + "No Human Left Behind." at the bottom of every article.

---

## Project Structure

```
codewizwit.com/
  public/
    favicon.ico
    favicon.svg
    robots.txt
    fonts/
      inter-latin.woff2
      jetbrains-mono-latin.woff2
      lora-regular.woff2
      lora-bold.woff2
      lora-italic.woff2
    images/
      codewizwit-logo.jpg
    resume/
      ResumeAlexandraKelstrom2026.pdf
  src/
    components/
      global/
        Header.astro          # Sticky nav, mobile hamburger, scroll detection
        Footer.astro          # Two-column footer, brand + nav
        GrainOverlay.astro    # SVG noise texture overlay
        SEO.astro             # Meta tags, OG, Twitter cards, RSS link
      home/
        Hero.astro            # Full viewport hero with staggered animation
        Paradox.astro         # "More AI. More human." dark section
        Thesis.astro          # The core insight explained
        LiftTeaser.astro      # Shift table + role cards preview
        WritingTeaser.astro   # Latest articles preview
        GoldMoment.astro      # Full-bleed gold statement section
        Proof.astro           # Speaking + Projects grid
      ui/
        Button.astro          # Reusable button (primary, secondary, ghost)
        Card.astro            # Reusable card component
        SectionHeader.astro   # Reusable section header (label + heading)
        TypeMoment.astro      # Full-width standalone statement
    content/
      writing/
        dispatch-13-ai-mandate.mdx
        field-note-1-skill-files.mdx
    data/
      navigation.ts           # Main nav items array
    layouts/
      BaseLayout.astro        # HTML shell, font preloads, skip link, grain
      PageLayout.astro        # Base + Header + Footer wrapper
      ArticleLayout.astro     # Article header, body, signature, tags
    pages/
      index.astro             # Homepage (narrative scroll)
      about.astro             # About page (3-act story)
      the-lift.astro          # The Lift framework page
      the-hot-dog.astro       # Hot Dog origin story
      connect.astro           # Contact + links + resume
      speaking.astro          # Speaking engagements
      projects.astro          # Projects showcase
      rss.xml.ts              # RSS feed generator
      writing/
        index.astro           # Writing index with filters
        [...slug].astro       # Dynamic article routes
    styles/
      global.css              # Design tokens, CSS reset, skip link, focus styles
      typography.css          # Font faces, type scale, prose styles, links
      utilities.css           # Container, sections, grid, spacing, reveal animation
    content.config.ts         # Content collection schema definition
  astro.config.mjs
  tsconfig.json
  package.json
```

---

## Content Collection Schema

```typescript
// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['dispatch', 'field-note', 'side-piece', 'case-study', 'think-piece']),
    number: z.number(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    canonicalUrl: z.string().url().optional(),
  }),
});

export const collections = { writing };
```

### Article Types

| Type          | Label           | Description                                      |
| :------------ | :-------------- | :----------------------------------------------- |
| `dispatch`    | Dispatch        | Long-form essays on responsible AI and developer culture |
| `field-note`  | Field Note      | Practical how-to guides and tool-specific writing |
| `side-piece`  | Side Piece      | Short reflections, opinion, cultural commentary   |
| `case-study`  | Case Study      | Detailed project walkthroughs and outcomes        |
| `think-piece` | Think Piece     | Philosophical or forward-looking essays           |

### Frontmatter Example

```yaml
---
title: "AI Is the Hot Dog, Infrastructure Is the Bun"
description: "Everyone wants the hot dog. Nobody thought about the bun."
type: dispatch
number: 13
publishDate: 2025-01-15
tags: ["responsible-ai", "infrastructure", "developer-culture", "ai-ethics"]
draft: false
---
```

---

## Build Order

### Weekend 1: Foundation

- [x] Astro project scaffolding (minimal template)
- [x] Install dependencies: @astrojs/mdx, @astrojs/rss, @astrojs/sitemap, sharp
- [x] Configure astro.config.mjs (site URL, MDX, sitemap, Shiki theme)
- [x] TypeScript strict mode
- [x] Design tokens in global.css (colors, typography, spacing, shadows, transitions, z-index)
- [x] CSS reset (modern, minimal)
- [x] Font face declarations (self-hosted WOFF2)
- [x] Font preloads in BaseLayout
- [x] Typography system (heading hierarchy, labels, links, prose styles)
- [x] Utility classes (container, sections, grid, spacing, reveal animation)
- [x] GrainOverlay component
- [x] Skip link and focus-visible styles
- [x] Selection styles (gold background)
- [x] SEO component (meta, OG, Twitter, RSS)
- [x] BaseLayout (HTML shell)
- [x] PageLayout (Base + Header + Footer)
- [x] Navigation data file

### Weekend 2: Homepage + Global Components

- [x] Header component (sticky, scroll detection, mobile hamburger, active states)
- [x] Footer component (brand, nav columns, copyright)
- [x] Hero section (staggered animation, rotated mark, CTA)
- [x] Paradox section (dark background, large type)
- [x] Thesis section (insight expansion)
- [x] LiftTeaser section (shift table + role cards)
- [x] WritingTeaser section (article cards)
- [x] GoldMoment section (full-bleed gold statement)
- [x] Proof section (speaking + projects grid)
- [x] Homepage assembly (index.astro)
- [x] Scroll-triggered reveal observer
- [x] Reduced motion handling throughout
- [x] Button component (primary, secondary, ghost variants)
- [x] TypeMoment component
- [x] SectionHeader component
- [x] Card component

### Weekend 3: Content Pages

- [x] About page (3-act story: The Story, The Philosophy, Beyond the Code)
- [x] The Lift page (full framework: Shift table, 7 Phases stepper, 4 Roles cards, Encoding Intent, gold CTA)
- [x] The Hot Dog page (hero with logo, story, meta-proof, closing)
- [x] Connect page (email, external links, resume download)
- [x] Content collection setup (content.config.ts)
- [x] ArticleLayout (header, body, signature, tags, navigation)
- [x] Writing index page (filterable by type, client-side JS)
- [x] Dynamic article route ([...slug].astro)
- [x] Migrate Dispatch No13 to MDX
- [x] Migrate Field Note No1 to MDX
- [x] RSS feed (rss.xml.ts)

### Weekend 4: Polish + Ship

- [ ] OG image (default social sharing image)
- [ ] Performance audit (Lighthouse 90+ on all metrics)
- [ ] Accessibility audit (axe-core, keyboard nav, screen reader)
- [ ] Cross-browser testing (Safari, Chrome, Firefox, mobile)
- [ ] Final content review (NO EM DASHES check)
- [ ] Favicon check (SVG + ICO fallback)
- [ ] robots.txt review
- [ ] Sitemap verification
- [ ] RSS feed validation
- [ ] 404 page
- [ ] Deploy to production
- [ ] DNS + SSL verification
- [ ] Social sharing preview test (Twitter, LinkedIn, Slack)

---

## Accessibility Requirements

These are non-negotiable. Every page must meet WCAG 2.1 AA.

- **Skip link:** `<a href="#main-content" class="skip-link">Skip to content</a>` on every page, visible on focus.
- **Focus indicators:** `:focus-visible` with 2px solid gold outline, 3px offset. Never `outline: none`.
- **Landmarks:** `<header role="banner">`, `<main id="main-content">`, `<footer role="contentinfo">`, `<nav aria-label="...">`.
- **Heading hierarchy:** Single `<h1>` per page. Logical h2/h3 nesting.
- **Color contrast:** Gold-dark (#9A7230) meets WCAG AA on cream. Cream meets AA on near-black.
- **Images:** Decorative images get `alt=""`. Meaningful images get descriptive alt text.
- **Reduced motion:** Full `prefers-reduced-motion: reduce` support. All animations disabled. Reveals show immediately. Scroll behavior set to auto.
- **Mobile nav:** `aria-expanded`, `aria-controls`, `aria-label` on hamburger toggle. Escape key closes menu. Focus management.
- **Tables:** `role="table"`, `<th scope="col">` on all data tables.
- **Links:** External links get `target="_blank"` with `rel="noopener noreferrer"`.
- **Semantic HTML:** Sections with `aria-labelledby` pointing to their heading IDs.
- **Article filters:** `aria-pressed` on filter buttons.

---

## V1 vs V2 Scope

### V1 (Ship Now)

- Homepage with full narrative scroll
- About page (3-act story)
- The Lift framework page
- The Hot Dog origin story
- Connect page (email, links, resume)
- Writing index with type filters
- 2 articles: Dispatch No13, Field Note No1
- RSS feed
- Sitemap
- Full accessibility compliance
- Self-hosted fonts
- Grain texture overlay
- Responsive design (mobile-first)
- SEO meta tags + OG
- Static deploy

### V2 (Future)

- Dark mode toggle (cream IS the brand for V1)
- Speaking page (dedicated, not just a Proof section)
- Projects page (dedicated showcase)
- Newsletter / email signup
- Search functionality
- Reading time estimates on articles
- Article series navigation (prev/next)
- Table of contents for long articles
- Comments or reactions
- Analytics integration
- Contact form (instead of mailto)
- More article types: Case Studies, Think Pieces
- Image optimization pipeline (responsive images, AVIF/WebP)
- View transitions (Astro Client Router)
- Tag-based article filtering/pages
- Pagination for writing index
- Open Graph images per article (auto-generated)

---

## Verification Steps

Before shipping, verify each of these:

1. **Lighthouse scores:** Performance 90+, Accessibility 100, Best Practices 90+, SEO 100
2. **axe-core:** Zero violations on every page
3. **Keyboard navigation:** Tab through entire site. All interactive elements reachable. Focus visible. Skip link works.
4. **Screen reader:** VoiceOver (macOS) walkthrough of homepage and one article
5. **Mobile:** Test on real device (iPhone Safari, Android Chrome). Nav toggle works. No horizontal scroll.
6. **Fonts:** All 5 WOFF2 files loading. No FOUT (flash of unstyled text) due to font-display: swap + preload.
7. **Grain overlay:** Visible at 3% opacity on all section backgrounds. Not blocking interactions.
8. **Gold Moment:** Full-bleed mustard gold section renders correctly. No layout shift.
9. **RSS:** Valid RSS 2.0 at /rss.xml. Includes all non-draft articles.
10. **Sitemap:** Valid XML at /sitemap-index.xml. All pages included.
11. **OG tags:** Test with Twitter Card Validator, LinkedIn Post Inspector, and Slack URL unfurling.
12. **Content audit:** Read every page. Check for em dashes (there should be ZERO). Check for typos.
13. **404:** Navigating to a non-existent URL shows a reasonable error.
14. **Resume download:** PDF downloads correctly from Connect page.
15. **External links:** All open in new tab with noopener noreferrer.
16. **Article rendering:** Both MDX articles render correctly with prose styles, code blocks, horizontal rules.
17. **Filters:** Writing index filters work. Empty state shows when no articles match.
18. **Animations:** Scroll reveals trigger correctly. Hero stagger animation plays on load. Everything disabled with prefers-reduced-motion.
19. **Header:** Sticky behavior works. Frosted glass effect on scroll. Active link highlighting. Mobile menu open/close/escape.
20. **Build:** `npm run build` completes with zero errors and zero warnings.
