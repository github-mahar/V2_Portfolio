// ═══════════════════════════════════════════════════════════
// STITCH PORTFOLIO — CONSTANTS & DATA
// ═══════════════════════════════════════════════════════════

export const SITE = {
    name: "STITCH",
    title: "Stitch — Portfolio",
    description:
        "A design-first portfolio built with radical asymmetry, raw precision, and rejection of the default.",
    url: "https://stitch.dev",
} as const;

export const NAV_LINKS = [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Contact", href: "/contact" },
] as const;

export type Project = {
    slug: string;
    title: string;
    subtitle: string;
    role: string;
    year: string;
    tech: string[];
    description: string;
    challenge: string;
    process: string;
    outcome: string;
    reflection: string;
    featured: boolean;
};

export const PROJECTS: Project[] = [
    {
        slug: "meridian-platform",
        title: "Meridian",
        subtitle: "Design System & Platform",
        role: "Lead Designer & Developer",
        year: "2025",
        tech: ["React", "TypeScript", "Figma", "Storybook"],
        description:
            "A comprehensive design system powering a fintech platform serving 2M+ users across 12 markets.",
        challenge:
            "The existing product UI had grown fragmented across teams. Inconsistent patterns, duplicated components, and no shared language between design and engineering.",
        process:
            "Audited 400+ screens, identified 87 unique patterns, consolidated into 34 core components. Built a token-driven architecture ensuring pixel-level consistency.",
        outcome:
            "60% reduction in design-to-dev handoff time. Component adoption reached 94% within 3 months.",
        reflection:
            "Systems work is invisible when done well. The real measure isn't the component count — it's the conversations that no longer need to happen.",
        featured: true,
    },
    {
        slug: "void-editorial",
        title: "Void",
        subtitle: "Editorial Experience",
        role: "Creative Director",
        year: "2024",
        tech: ["Next.js", "GSAP", "Sanity CMS", "Vercel"],
        description:
            "An immersive editorial platform for a contemporary art magazine, blending long-form narrative with experimental typography.",
        challenge:
            "Traditional editorial layouts felt static and disconnected from the raw energy of the content. The magazine needed a digital identity that matched its print ambition.",
        process:
            "Developed a modular content system with 8 distinct block types. Each article becomes a unique composition through editorial control paired with systematic constraints.",
        outcome:
            "Average time-on-page increased 340%. Featured in Awwwards SOTD. Subscriber conversion improved 28%.",
        reflection:
            "The web doesn't have to be a lesser version of print. When you design for the medium instead of against it, the constraints become the creative space.",
        featured: true,
    },
    {
        slug: "signal-dashboard",
        title: "Signal",
        subtitle: "Analytics Dashboard",
        role: "UI/UX Designer",
        year: "2024",
        tech: ["Vue.js", "D3.js", "PostgreSQL", "Tailwind"],
        description:
            "A real-time analytics dashboard for a SaaS platform, transforming complex data into actionable visual narratives.",
        challenge:
            "Users were drowning in metrics without context. Every dashboard looked the same — dense tables, meaningless pie charts, zero hierarchy.",
        process:
            "Conducted 30+ user interviews. Redesigned the information architecture around decision moments rather than data categories. Built a progressive disclosure system.",
        outcome:
            "Task completion rate improved 45%. Support tickets related to reporting dropped 62%.",
        reflection:
            "Data visualization isn't about showing everything. It's about knowing what to hide until it matters.",
        featured: true,
    },
    {
        slug: "construct-identity",
        title: "Construct",
        subtitle: "Brand Identity System",
        role: "Brand Designer",
        year: "2023",
        tech: ["Figma", "After Effects", "Variable Fonts", "CSS"],
        description:
            "Complete brand identity for an architecture firm, built on principles of structural tension and material honesty.",
        challenge:
            "The firm's work was bold and uncompromising, but their brand felt corporate and forgettable. They needed an identity as intentional as their buildings.",
        process:
            "Studied their portfolio of 20+ built projects. Extracted a visual language from their construction drawings — grid systems, section cuts, material callouts.",
        outcome:
            "Brand recognition in target market increased 180%. RFP win rate improved from 18% to 31%.",
        reflection:
            "The best brand systems don't just look good — they think the way the organization thinks. Identity is philosophy made visible.",
        featured: false,
    },
];

export const CAPABILITIES = [
    {
        category: "Design",
        items: [
            "UI/UX Design",
            "Design Systems",
            "Brand Identity",
            "Typography",
            "Motion Design",
            "Editorial Layout",
        ],
    },
    {
        category: "Development",
        items: [
            "React / Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Node.js",
            "PostgreSQL",
        ],
    },
    {
        category: "Strategy",
        items: [
            "Product Thinking",
            "Information Architecture",
            "User Research",
            "Design Audits",
            "Technical Direction",
            "Team Leadership",
        ],
    },
    {
        category: "Tools",
        items: [
            "Figma",
            "VS Code",
            "Git",
            "Vercel / Cloudflare",
            "Sanity / Contentful",
            "Storybook",
        ],
    },
] as const;

export const SOCIAL_LINKS = [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter / X", href: "https://x.com" },
    { label: "Dribbble", href: "https://dribbble.com" },
] as const;
