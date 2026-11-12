# A&M HOME INTERIORS — Architecture & Design System Documentation

An executive design and technical architectural monograph detailing the structural choices, design philosophy, component topology, and performance decisions powering the **A&M HOME INTERIORS** web platform.

---

## 1. Design Philosophy & Aesthetic Identity

The visual language of A&M HOME INTERIORS is engineered around **quiet luxury, architectural permanence, and tactile minimalism**. Rather than behaving like an ephemeral e-commerce store or generic agency template, the platform operates as a digital monograph and atelier showroom.

### Core Visual Principles
1. **Volumetric Restraint**: Generous whitespace, disciplined alignment grids, and purposeful negative space that allows architectural photography to command visual priority.
2. **Editorial Typographic Hierarchy**: 
   - Primary Headings & Serif Accents: Evoking classic architectural monographs and design journals.
   - Body & Technical Metrics: Clean sans-serif typography (`Outfit` / `Plus Jakarta Sans`) engineered for effortless legibility across display scales.
3. **Monochrome + Warm Bronze Palette**:
   - Primary Dark: `#0d0f12` (deep obsidian / architectural ironwork).
   - Primary Light / Canvas: `#ffffff` & `#fafaf9` (warm lime wash & honed limestone).
   - Atelier Accent: `#c59b4e` (patinated bronze / warm brass).
   - Grounding Grays: Zinc tiers (`zinc-400` to `zinc-700`) for balanced metadata contrast.
4. **Authenticity Over Stock**: Complete transition away from placeholder Unsplash imagery to actual high-resolution local photography (`public/photos/`), documenting genuine bespoke joinery, stone craftsmanship, and private residences.

---

## 2. Technical Stack & Foundation

- **Framework**: [Next.js](https://nextjs.org/) 16 (Turbopack Engine) with the App Router architecture.
- **Rendering & Caching Strategy**: Hybrid Static Generation + Instant Navigation Streaming with React Server Components (RSC) and Suspense boundaries.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 with native Turbopack CSS loaders.
- **Typography**: `next/font/google` with preloaded variables and zero runtime layout shifts.
- **Iconography**: Curated SVG micro-system with seamless theme-aware color adaptation.

---

## 3. Site Architecture & Route Topology

```
app/
├── layout.tsx                # Master root shell (Global fonts, Navbar, PreFooterCTA, Footer)
├── page.tsx                  # Homepage (Hero slideshow, Experience, Atelier Summary)
├── about/
│   └── page.tsx              # Studio heritage, founders, 3 pillars, philosophy tabs
├── projects/
│   ├── page.tsx              # Filterable architectural portfolio grid
│   └── [slug]/
│       └── page.tsx          # Dedicated project monograph with gallery study
├── gallery/
│   └── page.tsx              # Curated architectural imagery, category ribbons & lightboxes
├── contact/
│   └── page.tsx              # Consultation dispatch, real atelier coordinates & map integration
├── privacy/
│   └── page.tsx              # Client privacy charter & discretion policy (with sticky TOC)
├── terms/
│   └── page.tsx              # Engagement terms, copyright & procurement conditions (with sticky TOC)
└── icon.svg                  # Next.js App Router dynamic dark/light adaptive SVG favicon
```

---

## 4. Key Architectural Patterns & Decisions

### 4.1 Dedicated Project Monograph Pages (`/projects/[slug]`)
- **Move Away from Modals**: Previously, project details were constrained to inspection modals. To provide an authentic architectural experience, each project now owns a dedicated static URL (e.g. `/projects/obsidian-pavilion`).
- **Deep Exploration**: Each page features a high-impact cover header, technical metrics bar (Scale, Typology, Location, Year), narrative design intent, curated materiality lists, a full project-specific photographic study, and related commission cards.
- **Next.js 16 Streaming Architecture**:
  - Leverages `generateStaticParams()` to pre-render every project route at build time.
  - Implements the Next.js `[Stream]` pattern with `<Suspense fallback={<ProjectDetailSkeleton />}>` around data resolution, eliminating prerendering warnings and ensuring instant shell painting.

### 4.2 Theme-Adaptive Vector Monogram & Favicon
- **Native Color-Scheme Media Queries**: Both `public/favicon.svg` and `app/icon.svg` utilize SVG `<style>` blocks with `@media (prefers-color-scheme: dark)`:
  - White strokes on dark browser chrome / dark mode operating systems.
  - Deep black strokes on light browser chrome.
- **Calibrated ViewBox**: Viewport bounded tightly (`135 110 230 175`) with reinforced stroke weights (`stroke-width="14"`) ensuring the architectural house-and-chair glyph remains crisp and legible at 16×16 and 32×32 pixel tab scales.

### 4.3 Mobile-First UX Ergonomics
- **Horizontal Dual CTAs**: Footer and pre-footer conversion buttons adapt into horizontal `flex-row` side-by-side pairings on mobile viewports rather than vertically stacking, optimizing thumb reach and vertical real estate.
- **Scroll-Aware Header**: The navbar transitions smoothly from transparent over immersive hero photography to a frosted glass (`backdrop-blur-md`) light canvas upon downward scroll.
- **Anti-Spam Client Protection**: The contact consultation form integrates client-side validation paired with a visual cooldown timer to prevent automated duplicate dispatches while providing prompt feedback.

---

## 5. Contact & Atelier Channels

Direct channels configured uniformly across headers, footers, mobile drawers, and inquiry sections:
- **Phone & WhatsApp**: `0997637667` (`+265997637667`)
- **Email**: `alexamanda866@gmail.com`
- **Facebook**: [A&M Facebook Profile](https://www.facebook.com/profile.php?id=100063506246459)
- **Instagram**: [@a_and_m_home_interior](https://www.instagram.com/a_and_m_home_interior)
- **Studio Locations**:
  - Lilongwe Executive Atelier (Area 43 Executive Compound)
  - Blantyre Hillside Studio (Nyambadwe Hillside)

---

## 6. Development & Deployment

```bash
# Install dependencies
npm install

# Start Turbopack development server
npm run dev

# Build production bundle
npm run build

# Start production server
npm run start
```
