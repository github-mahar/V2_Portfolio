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
