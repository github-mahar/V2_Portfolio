"use client";

import { motion } from "framer-motion";
import { SystemStatus, SectionDivider } from "@/components/ui/SectionDivider";

const fadeTransition = {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1] as const,
};

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-10">
            {/* ── Page Header ── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mb-20"
            >
                <SystemStatus label="ABOUT_MODULE: LOADED" className="mb-4 block" />
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
                    Not a
                </h1>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-ghost-red">
                    résumé.
                </h1>
            </motion.div>

            {/* ── Editorial Layout — Two Column Asymmetric ── */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 max-w-6xl">

                {/* Left Column — Primary Content */}
                <div className="md:col-span-7 space-y-20">

                    {/* Mindset */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={fadeTransition}
                    >
                        <SectionDivider label="01 — MINDSET" className="mb-8" />
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                            Design is a position,<br />not a profession.
                        </h2>
                        <p className="text-base text-white/60 leading-relaxed">
                            I don&apos;t believe in design as decoration. Every interface is an argument
                            about how things should work. Every typeface chosen is a stance.
                            Every pixel of whitespace is a decision about what matters.
                        </p>
                        <p className="mt-4 text-base text-white/60 leading-relaxed">
                            I approach each project as a system problem — not a visual one.
                            The surface is the last thing I design. The structure is the first.
                        </p>
                    </motion.section>

                    {/* Approach */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={fadeTransition}
                    >
                        <SectionDivider label="02 — APPROACH" className="mb-8" />
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                            Precision over polish.
                        </h2>
                        <p className="text-base text-white/60 leading-relaxed">
                            My process starts with constraints, not canvases. I define the rules
                            before I break them. Typography scale, color discipline, spacing
                            systems — these come before any visual exploration.
                        </p>
                        <p className="mt-4 text-base text-white/60 leading-relaxed">
                            Then I build. Not prototypes that approximate — functional systems
                            that demonstrate. The gap between &ldquo;design&rdquo; and &ldquo;development&rdquo;
                            is a gap I don&apos;t believe in.
                        </p>
                    </motion.section>

                    {/* Values */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={fadeTransition}
                    >
                        <SectionDivider label="03 — VALUES" className="mb-8" />
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                            Conviction over consensus.
                        </h2>
                        <p className="text-base text-white/60 leading-relaxed">
                            Good work requires opinions. I bring strong perspectives shaped by
                            wide exposure — editorial design, systems thinking, engineering
                            discipline, and cultural awareness. I don&apos;t aim for
                            &ldquo;clean.&rdquo; I aim for intentional.
                        </p>
                    </motion.section>
                </div>

                {/* Right Column — Pull Quotes & Metadata */}
                <div className="md:col-span-4 md:col-start-9 space-y-16 md:pt-32">

                    {/* Pull Quote 1 */}
                    <motion.blockquote
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={fadeTransition}
                        className="border-l-2 border-[#ff382e] pl-6"
                    >
                        <p className="text-xl md:text-2xl font-serif italic text-white/80 leading-snug">
                            &ldquo;The interface is the last line of code I write. The system is the first.&rdquo;
                        </p>
                    </motion.blockquote>

                    {/* Metadata Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={fadeTransition}
                        className="space-y-6"
                    >
                        <div>
                            <span className="text-[0.625rem] uppercase tracking-[0.15em] text-white/30 block mb-1">
                                Location
                            </span>
                            <span className="text-sm">Pakistan</span>
                        </div>
                        <div>
                            <span className="text-[0.625rem] uppercase tracking-[0.15em] text-white/30 block mb-1">
                                Focus
                            </span>
                            <span className="text-sm">Design Systems, Product Design, Creative Development</span>
                        </div>
                        <div>
                            <span className="text-[0.625rem] uppercase tracking-[0.15em] text-white/30 block mb-1">
                                Status
                            </span>
                            <span className="text-sm text-[#ff382e]">Available for Projects</span>
                        </div>
                    </motion.div>

                    {/* Pull Quote 2 */}
                    <motion.blockquote
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={fadeTransition}
                        className="border-l-2 border-white/20 pl-6"
                    >
                        <p className="text-lg font-serif italic text-white/50 leading-snug">
                            &ldquo;Systems work is invisible when done well. The real measure isn&apos;t
                            the component count — it&apos;s the conversations that no longer
                            need to happen.&rdquo;
                        </p>
                    </motion.blockquote>

                    {/* Vertical decorative text */}
                    <div
                        className="hidden md:block text-vertical text-[0.625rem] uppercase tracking-[0.3em] text-white/10 mt-12"
                        aria-hidden="true"
                    >
            // PHILOSOPHY_MODULE
                    </div>
                </div>
            </div>

            {/* ── Large closing statement ── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={fadeTransition}
                className="mt-32 max-w-4xl"
            >
                <div className="h-px bg-white/10 mb-12" />
                <p className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                    I don&apos;t make things look good.
                    <br />
                    <span className="text-[#ff382e]">I make things mean something.</span>
                </p>
            </motion.div>
        </div>
    );
}
