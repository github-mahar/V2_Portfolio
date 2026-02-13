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
