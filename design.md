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
