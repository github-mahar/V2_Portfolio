# Role
You are an expert Creative Technologist and Frontend Developer. You specialize in **Neo-Brutalist design**, **Next.js (App Router)**, and high-performance web applications.

# Task
Your task is to implement the **"Stitch" Portfolio** based on the documentation provided below.
The project is a distinct, multi-page personal portfolio with a raw, architectural aesthetic.

**Critical Constraints:**
1.  **Strict Adherence**: Follow `design.md` for colors (Void, Signal Red), typography (Space Grotesk), and layout (Asymmetry).
2.  **Tech Stack**: Use Next.js App Router, Tailwind CSS, and Framer Motion as specified in `techstack.md`.
3.  **Phase 1 First**: Start by executing the steps in **Phase 1: Foundation & Setup** from `todo.md`.
4.  **No "AI Slop"**: Avoid generic templates. The output must look intentional and designed.

# Project Documentation
The following sections contain the Project Requirements (PRD), Design System, Tech Stack, and Roadmap.

---
# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Project: Distinct Multi-Page Personal Portfolio
## Status: Design Phase
## Owner: [Your Name]

---

# 1. Vision

Create a multi-page personal portfolio that feels authored, intentional, and culturally aware — not templated.

This product must reject “AI slop” aesthetics and startup-template minimalism.  
It should feel like a designed digital space with conviction.

The portfolio must communicate:
- Technical depth
- Creative intelligence
- Professional discipline
- Personal identity
- Confidence without noise

If it looks like a SaaS landing page, it has failed.

---

# 2. Core Design Principles

## 2.1 Anti-Generic Rule
The design must avoid:
- Centered hero + 3-card layout
- Evenly distributed safe color palettes
- Overused font pairings
- Predictable spacing systems
- Symmetrical card grids everywhere
- Dribbble-trend gradients

Every decision must feel deliberate.

---

## 2.2 Typography as Architecture

Typography drives layout — not decoration.

Requirements:
- Distinct headline typeface with personality
- Contrasting secondary body typeface
- Clear hierarchy (Display / H1 / H2 / Body / Caption)
- Strong vertical rhythm
- Intentional letter-spacing
- Generous negative space

Typography must create visual tension and balance.

---

## 2.3 Color Philosophy

- One dominant base tone
- One strong accent
- Optional subtle secondary neutral
- No timid multi-color distribution
- High contrast where necessary
- Cohesive visual identity across pages

Use a disciplined variable system for consistency.

---

## 2.4 Layout System

- Grid-based but not rigid
- Asymmetry allowed with control
- Intentional whitespace
- Section contrast (background shifts, spacing shifts)
- Avoid visual monotony between pages

Pages should belong to the same universe — not look cloned.

---

## 2.5 Motion Philosophy

Motion must be purposeful and limited.

Priorities:
- One orchestrated page-load sequence
- Staggered reveals for typography blocks
- Calm transitions between pages
- Subtle hover states

Avoid:
- Bounce animations
- Excessive parallax
- Constant motion noise

Impact > frequency.

---

# 3. Information Architecture (Multi-Page Structure)

This is not a single scroll website.

---

## 3.1 Home (Statement Page)

Purpose: Establish identity immediately.

Goals:
- Strong typographic opening statement
- Visual dominance within first viewport
- Clear directional navigation
- Controlled atmosphere (background depth)

Content:
- Name
- Positioning statement (not generic)
- One strong primary call-to-action
- One secondary navigation cue

Success Criteria:
User understands tone and personality within 5 seconds.

---

## 3.2 Work (Projects Index)

Purpose: Showcase capability with clarity and character.

Requirements:
- Structured but non-generic layout
- Projects presented in varied composition (not identical cards)
- Strong project titles
- Minimal meta data
- Intentional hover interaction concept

Projects must feel curated — not mass produced.

---

## 3.3 Project Detail Page

Purpose: Deep dive into individual work.

Structure:
- Large project title
- Context / Problem
- Process overview
- Visual highlights
- Key outcomes
- Reflection or takeaway

Design must prioritize readability and narrative clarity.

---

## 3.4 About (Philosophy Page)

Purpose: Show thinking, not resume.

Requirements:
- Editorial layout
- Pull quotes or emphasis blocks
- Structured sections (Mindset / Approach / Values)
- No long dense paragraphs
- Controlled pacing through spacing

This page should feel intentional and introspective.

---

## 3.5 Capabilities (Skills Page)

Purpose: Demonstrate structured competence.

Requirements:
- Categorized sections
- Visual hierarchy stronger than icons
- Avoid list-dump feeling
- Clear grouping logic
- Typography-driven layout

Must communicate organization and clarity.

---

## 3.6 Contact (Closing Page)

Purpose: Leave a strong final impression.

Requirements:
- Minimal structure
- Large typographic closing statement
- Clean presentation of contact methods
- Confident tone

This page should feel decisive.

---

# 4. User Experience Goals

Users should feel:

- Curiosity
- Respect for discipline
- Perceived competence
- Memorable visual identity
- Trust

Users should not feel:

- Overstimulated
- Confused
- Distracted
- Like they’ve seen this template before

---

# 5. Constraints

- Multi-page architecture required
- Fully responsive layout system
- Strong visual cohesion across breakpoints
- Accessibility considerations (contrast, readability)
- Clear navigation system

---

# 6. Success Metrics

The design succeeds if:

- It does not resemble common portfolio templates.
- Typography alone creates impact.
- Color system feels confident and disciplined.
- Layout choices feel intentional.
- The experience feels authored.

Failure conditions:

- Looks like a startup landing page.
- Uses safe design defaults.
- Relies on trendy gradients.
- Feels visually predictable.

---

# 7. Final Standard

The portfolio must feel like:

A designed environment.  
Not a layout.  
Not a template.  
Not an algorithmic average.

It should look like someone with taste made decisions.
# Stitch Design System

## 1. Design Philosophy
**"Radical Asymmetry. Raw Precision. Rejection of the Default."**

The design language of Stitch is rooted in **Neo-Brutalism**. It emphasizes raw structural elements, high contrast, and a deliberate rejection of standard "clean" web aesthetics in favor of a bold, architectural look.

### Core Tenets
-   **Function over Frills**: Decoration is minimal unless it serves to disorient or direct attention (e.g., noise overlays, stray grid lines).
-   **High Contrast**: Stark difference between the dark void of the background and the piercing primary red.
-   **Asymmetry**: Layouts eschew perfect centering for dynamic, off-balance compositions that create tension.
-   **Typography as Image**: Text is not just for reading; it is a structural element, often massive, cropped, or rotated.

---

## 2. Color Palette

| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Void (Dark)** | `#0a0a0a` | Primary background. Deep, almost black. |
| **Signal Red** | `#ff382e` | Primary accent. Used for calls to action, highlights, and "system status" indicators. |
| **Canvas (Light)** | `#f8f5f5` | Secondary background, rarely used as a full wash, mostly for contrast text/elements in light mode. |
| **Subtle** | `#23100f` | A deep brownish-red/black for secondary dark backgrounds. |

---

## 3. Typography

### Primary Display
**Font**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
**Usage**: Headings, navigation, data readouts.
**Characteristics**: Geometric, technical, slightly quirky properties suited for the "system" aesthetic.

### Serif Accent
**Font**: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
**Usage**: Large background watermarks, specific emphasis requiring an editorial feel.
**Characteristics**: High contrast, elegant, provides a sharp juxtaposition to the technical sans-serif.

### Iconography
**Set**: Material Symbols Outlined
**Style**: Sharp, thin strokes to match the technical font weights.

---

## 4. UI/UX Patterns

### Layout & Spacing
-   **Grid Lines**: Visible 1px grid lines (often heavily transparent red or white) to expose the underlying structure.
-   **Bleed**: Elements, especially large text, often bleed off the edge of the viewport.
-   **Verticality**: Frequent use of `writing-mode: vertical-rl` for sidebars and metadata, reinforcing the architectural feel.

### Text Treatments
-   **System Status**: Small, uppercase, monospaced-style text (using Space Grotesk) to mimic terminal outputs (e.g., `// SYSTEM_STATUS: ACTIVE`).
-   **Text Outline**: Use of `-webkit-text-stroke` with transparent fill for "ghost" text.
-   **Drop Caps**: Massive drop caps in red for narrative sections.

### Imagery
-   **Filters**: Images are often desaturated (grayscale) until hovered, or treated with a red duotone/overlay.
-   **Noise**: A global SVG noise overlay is used to add texture and reduce the "digital" perfectness.

---

## 5. Components

### Buttons
-   **Primary**: Solid Signal Red background, White text. Sharp corners (`rounded-sm`).
-   **Hover Effect**: Inverts to White background with Red text.
-   **Structure**: Often accompanied by an arrow icon (`arrow_right_alt`).

### Navigation
-   **Fragmented**: Navigation is rarely a single cohesive bar. It is often split:
    -   Top Left: Branding / System Status.
    -   Top Right: Section Links.
    -   Side / Bottom: Contextual controls.
-   **Sticky**: Nav elements often stick or naturally flow with the document.

### Cards & Sections
-   **Borders**: Thin, 1px borders (White/10% opacity) separate sections.
-   **Metadata**: Content is heavily tagged with metadata (Role, Year, Tech) often placed in corners or rotated.

---

## 6. Technical Implementation
-   **Framework**: Tailwind CSS.
-   **Configuration**:
    ```javascript
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "primary": "#ff382e",
            "background-light": "#f8f5f5",
            "background-dark": "#0a0a0a",
          },
          fontFamily: {
            "display": ["Space Grotesk", "sans-serif"],
            "serif-heavy": ["Playfair Display", "serif"]
          },
          borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
        },
      },
    }
    ```
# TECH STACK DOCUMENT
## Project: Distinct Multi-Page Personal Portfolio
## Deployment Target: Cloudflare Pages
## Status: Architecture Definition

---

# 1. Philosophy

The stack must:

- Support strong visual identity
- Enable multi-page routing
- Deliver fast global performance
- Maintain design control
- Avoid unnecessary complexity

Technology must serve design — not dominate it.

---

# 2. Core Framework

## Application Framework
Next.js (App Router, Static Export Compatible)

Reason:
- Multi-page routing
- Layout-based architecture
- SEO-friendly structure
- Component isolation
- Compatibility with Cloudflare Pages

Rendering Strategy:
- Static Site Generation (SSG) by default
- Edge-compatible configuration
- No unnecessary server-side complexity

---

# 3. Deployment Platform

## Cloudflare Pages

Benefits:
- Global edge distribution
- Extremely low latency
- Free SSL
- Git-based deployments
- Preview environments
- High performance by default

Build Output:
- Static optimized output
- Edge-compatible routing
- Clean asset bundling

---

# 4. Styling System

## Styling Approach
- Tailwind CSS (custom-configured)
- CSS Variables for theme tokens

Rules:
- No default Tailwind palette
- Custom color tokens defined
- Custom spacing scale
- Custom typography scale
- No utility clutter in markup

Theme System:
- :root variables for:
  - Background
  - Surface
  - Accent
  - Text-primary
  - Text-muted

This ensures cohesion across pages.

---

# 5. Typography Implementation

- Locally hosted custom fonts
- Variable fonts preferred
- Defined typographic scale in theme config

Hierarchy:
- Display
- H1
- H2
- H3
- Body
- Caption
- Micro

Typography must drive layout — not follow it.

---

# 6. Motion & Transitions

## Animation Strategy

- Framer Motion for:
  - Page transitions
  - Orchestrated hero reveals
  - Staggered entrances

- CSS animations for:
  - Hover states
  - Subtle UI feedback

Rules:
- One strong entrance animation per page
- Staggered sequences (not scattered effects)
- Subtle and intentional transitions

Avoid animation overload.

---

# 7. Routing Structure

/app
  /page.tsx              → Home
  /about/page.tsx        → About
  /work/page.tsx         → Projects Index
  /work/[slug]/page.tsx  → Project Detail
  /capabilities/page.tsx → Skills
  /contact/page.tsx      → Contact

Layout System:
- Root layout
- Shared navigation layout
- Page-level transition wrapper

---

# 8. Performance Optimization

Cloudflare Pages prioritizes edge speed.

Optimization strategy:
- Static generation
- Image optimization (Next Image)
- Self-hosted fonts
- Minimal external scripts
- Route-based code splitting
- Lazy load non-critical assets

Performance Target:
- Lighthouse 90+ across metrics
- First Contentful Paint < 1.5s
- Minimal layout shift

---

# 9. Accessibility

- Semantic HTML
- Structured heading hierarchy
- Keyboard navigation support
- Proper aria labels where needed
- Accessible color contrast

Accessibility is mandatory.

---

# 10. Version Control & CI/CD

- Git-based workflow
- Automatic deployments on push
- Preview deployments for branches
- Production branch protected

---

# 11. Future Scalability

Architecture prepared for:

- Blog addition
- Case study expansion
- Headless CMS integration
- Analytics integration
- Theme toggling system
- Edge functions if needed

Stack must not restrict evolution.

---

# 12. Non-Goals

- No visual builder platforms
- No template UI kits
- No bloated dependency trees
- No unnecessary backend layer

This is a design-first project with controlled architecture.

---

# 13. Final Standard

The deployment must feel:

- Instant
- Smooth
- Globally fast
- Professionally stable

Cloudflare’s edge must amplify the experience — not just host it.
# Project Roadmap: Stitch Portfolio

## Phase 1: Foundation & Setup
- [ ] Initialize Next.js project (App Router, TypeScript)
- [ ] Install dependencies: `framer-motion`, `clsx`, `tailwind-merge`, `lucide-react` (or material symbols if preferred)
- [ ] Configure Tailwind CSS
    - [ ] Define custom color palette (Void, Signal Red, Canvas, Subtle)
    - [ ] Configure screen breakpoints
    - [ ] Remove default Tailwind colors to enforce design system
- [ ] Setup Custom Fonts
    - [ ] Download and configure Space Grotesk (Display)
    - [ ] Download and configure Playfair Display (Serif)
    - [ ] Configure `next/font`
- [ ] Setup Directory Structure
    - [ ] `/components` (ui, layout, sections)
    - [ ] `/lib` (utils, constants)
    - [ ] `/styles` (globals.css)
    - [ ] `/public` (assets, fonts)

## Phase 2: Design System Implementation
- [ ] Create Global Styles (`globals.css`)
    - [ ] Implement CSS variables for theme tokens
    - [ ] Add noise overlay utility
    - [ ] Add custom utilities (grid lines, bleed, vertical text)
- [ ] Build Design Review Page (Internal)
    - [ ] Verify typography scale
    - [ ] Verify color contrast and palette
    - [ ] Test button states and hover effects

## Phase 3: Core Components
- [ ] **Navigation**
    - [ ] Fragmented Nav Layout (Top-Left, Top-Right, Bottom/Side)
    - [ ] Mobile Menu Overlay
- [ ] **UI Elements**
    - [ ] Neo-Brutalist Button Components
    - [ ] Project Card Component
    - [ ] Section Divider / Grid Line Component
    - [ ] "System Status" Indicators
- [ ] **Layout Wrappers**
    - [ ] `PageTransition` wrapper (Framer Motion)
    - [ ] `SmoothScroll` handling (if needed, or native)
    - [ ] `Container` and `Section` standard wrappers

## Phase 4: Page Construction
- [ ] **Home (Statement Page)**
    - [ ] Hero Section with massive typography
    - [ ] Opening statement & CTA
    - [ ] Background depth effects
- [ ] **Work (Index)**
    - [ ] Project Gallery Grid (Asymmetric)
    - [ ] Project Filter/Category logic (if applicable)
- [ ] **Project Detail [slug]**
    - [ ] Dynamic routing setup
    - [ ] Hero banner & Project info
    - [ ] Content blocks (Text, Full Image, Grid, Video)
    - [ ] Next/Prev Project navigation
- [ ] **About (Philosophy)**
    - [ ] Editorial layout styling
    - [ ] Pull quotes & "Manifesto" typography
- [ ] **Capabilities (Skills)**
    - [ ] Structured skills grid
    - [ ] Visual hierarchy implementation
- [ ] **Contact**
    - [ ] Minimalist contact layout
    - [ ] Social links grid

## Phase 5: Motion & Polish
- [ ] Implement Page Load Orchestration (Staggered reveals)
- [ ] Add Micro-interactions (Hover states, magnetic buttons)
- [ ] Optimize Images (Next/Image configuration)
- [ ] Accessibility Pass
    - [ ] Semantic HTML check
    - [ ] Keyboard navigation verification
    - [ ] Aria labels
- [ ] SEO Configuration (Metadata, OpenGraph)

## Phase 6: Deployment
- [ ] Configure Cloudflare Pages
- [ ] Final Build & Lint Check
- [ ] Production Deployment
