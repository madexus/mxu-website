# MXU Website Build Brief

## Overview
Build a Next.js website for Made X Us (madeXus), a culture-first creative agency repositioning around women's sports, culture, and fandoms. This is a complete redesign — NOT an iteration of the current dark-themed site.

## Design Direction
- **Reference site: callherdaddy.com** — ultra-simple, bold, one strong hero image, minimal nav, clean layout
- **NOT dark mode** — the current site is too dark. This should be lighter, using the brand guidelines
- **Simple, bold, editorial feel** — think fashion/culture brand, not corporate agency
- **The "X" visual element** from the brand guidelines is a key design motif

## Brand Colors (from brand guidelines PDF)
### Primary
- **Black:** #000000
- **Bright Green (Neon):** #CAFF4A

### Secondary  
- **Deep Teal:** #006D6D
- **Light Teal:** #87F9F9
- **Light Gray:** #EDECE9
- **Dark Teal:** #274248

### Complementary
- **Hot Pink:** #FE6FF8
- **Red:** #E13946
- **Green Mint:** #5DF48B
- **Purple:** #604FFF
- **Plum Wine:** #530B39 ← THIS IS THE NEW HIGHLIGHT COLOR per brand direction

### Accent
- **Bright Yellow:** (referenced in guidelines)

## Typography
- **Primary/Display:** Special Gothic Expanded (Google Fonts) — bold, modern, high visibility
- **Secondary/Body:** Helvetica Light — clean, readable body text
- **Fallback:** Inter, system fonts

## Site Structure (single-page landing + gated sub-pages)

### Navigation
- Logo (madeXus wordmark)
- Links: About, Services, Work, Contact
- CTA button

### Section 1: Hero
- One powerful hero image (full-width or near-full)
- Headline: "Culture. Women's Sports." (or similar — manifesto style, periods not commas)
- Brief subtext about the agency superpower
- CTA button
- The hero image should use the "X" visual element overlay technique from brand guidelines page 46

### Section 2: About / Positioning
- "We live inside women's culture — and we help brands show up there authentically."
- Brief agency description
- Core values or key differentiators

### Section 3: What We Do (5 Offerings)
- Five service cards in a row:
  1. Media
  2. Fandom Marketing Consultation & Campaign
  3. Creators & Proprietary Creator Ad Network
  4. Women Raise the Game
  5. Women | Sport | Culture Brief & RFP
- Each card clicks through to a GATED page (email capture before accessing detail)
- The gated pages will be built separately — for now, create the card layout with placeholder links

### Section 4: Living Proof (WRTG)
- Women Raise the Game as the proof point / case study
- "Our laboratory — where cultural intelligence becomes cultural impact"

### Section 5: Selected Work
- Grid of 3-4 case study cards (placeholder images/content for now)
- Client logos from existing work: AT&T, Boldyn, Kindli, Mielle, LA County, UCLA Health, Invisalign, WRTG

### Section 6: Brand Partners
- Logo strip/grid of partner brands
- Use the logos already pulled (in ../assets-pulled/)

### Section 7: About Us
- "Independent. Nimble. Inside the culture."
- Team section or agency story

### Section 8: CTA / Contact
- "Ready to show up in the culture?"
- Contact form or email capture
- Email leads go to Yvette (yvette@madexus.com)

### Footer
- madeXus logo
- Social links
- Copyright

## Technical Requirements
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (GitHub integration)
- **Responsive:** Mobile-first, works on all devices
- **SEO:** Proper meta tags, Open Graph, semantic HTML
- **Performance:** Optimized images (WebP), lazy loading, fast Core Web Vitals
- **Animations:** Subtle scroll animations (intersection observer), smooth transitions — nothing heavy
- **Email gate:** Simple modal/overlay that collects email before showing service detail pages
- **Font loading:** Google Fonts for Special Gothic Expanded, system fallbacks

## Assets Available
- Logo SVG: ../assets-pulled/mxu-logo.svg (white fill — needs dark version too)
- Favicon SVG: ../assets-pulled/favicon.svg
- Client logos: ../assets-pulled/ (att.webp, boldyn.webp, coca-cola.svg, etc.)
- Hero image: TBD (use a placeholder for now — dark gradient or editorial photo placeholder)
- Fonts: Archivo Black + Space Grotesk already pulled, but brand guidelines say Special Gothic Expanded + Helvetica Light

## What NOT to Do
- No black backgrounds (Tam was explicit about this)
- No dark mode as default
- Don't make it look like a sports marketing agency — it's culture + women + fandom, sports is one lane
- Don't over-design — Call Her Daddy simplicity is the bar
- Don't use the old color scheme (lime green on black)

## Wireframe Reference
The file ../wireframe-reference.html contains the full HTML wireframe with all sections laid out. Use it for content structure and section ordering, but the visual design should follow the brand guidelines + CHD simplicity, not the wireframe's styling.
