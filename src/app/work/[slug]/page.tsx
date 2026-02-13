"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { SystemStatus, SectionDivider } from "@/components/ui/SectionDivider";
import { Button } from "@/components/ui/Button";

const fadeUp: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    }),
};

export default function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) notFound();

    const currentIndex = PROJECTS.indexOf(project);
    const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
    const prevProject =
        PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-10 max-w-5xl mx-auto">
            {/* ── Header ── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="flex items-center gap-4 mb-8">
                    <Link
                        href="/work"
                        className="text-[0.625rem] uppercase tracking-[0.2em] text-white/40 hover:text-[#ff382e] transition-colors flex items-center gap-1"
                    >
                        <span className="material-symbols-outlined text-sm">
                            arrow_back
                        </span>
                        All Projects
                    </Link>
                </div>

                <SystemStatus label={`PROJECT: ${project.title.toUpperCase()}`} className="mb-6 block" />

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
                    {project.title}
                </h1>
                <p className="mt-3 text-lg md:text-xl text-white/40 uppercase tracking-[0.05em]">
                    {project.subtitle}
                </p>
            </motion.div>

            {/* ── Metadata Row ── */}
            <motion.div
                custom={1}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-b border-white/10 py-6"
            >
                <div>
                    <span className="text-[0.625rem] uppercase tracking-[0.15em] text-white/30 block mb-1">
                        Role
                    </span>
                    <span className="text-sm">{project.role}</span>
                </div>
                <div>
                    <span className="text-[0.625rem] uppercase tracking-[0.15em] text-white/30 block mb-1">
                        Year
                    </span>
                    <span className="text-sm">{project.year}</span>
                </div>
                <div>
                    <span className="text-[0.625rem] uppercase tracking-[0.15em] text-white/30 block mb-1">
                        Technology
                    </span>
                    <span className="text-sm">{project.tech.join(", ")}</span>
                </div>
            </motion.div>

            {/* ── Description ── */}
            <motion.div
                custom={2}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                className="mt-16"
            >
                <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl drop-cap">
                    {project.description}
                </p>
            </motion.div>

            {/* ── Challenge ── */}
            <motion.section
                custom={3}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                className="mt-20"
            >
                <SectionDivider label="CHALLENGE" className="mb-8" />
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    The Problem
                </h2>
                <p className="text-base text-white/60 leading-relaxed max-w-3xl">
                    {project.challenge}
                </p>
            </motion.section>

            {/* ── Process ── */}
            <motion.section
                custom={4}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                className="mt-20"
            >
                <SectionDivider label="PROCESS" className="mb-8" />
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    The Approach
                </h2>
                <p className="text-base text-white/60 leading-relaxed max-w-3xl">
                    {project.process}
                </p>
            </motion.section>

            {/* ── Outcome ── */}
            <motion.section
                custom={5}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                className="mt-20"
            >
                <SectionDivider label="OUTCOME" className="mb-8" />
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    The Result
                </h2>
                <p className="text-base text-white/60 leading-relaxed max-w-3xl">
                    {project.outcome}
                </p>
            </motion.section>

            {/* ── Reflection — Pull Quote Style ── */}
            <motion.section
                custom={6}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                className="mt-20 border-l-2 border-[#ff382e] pl-8 md:pl-12 py-4"
            >
                <p className="text-xl md:text-2xl font-serif italic text-white/80 leading-relaxed">
                    &ldquo;{project.reflection}&rdquo;
                </p>
            </motion.section>

            {/* ── Prev / Next Navigation ── */}
            <div className="mt-32 border-t border-white/10 pt-8 grid grid-cols-2 gap-4">
                <Link
                    href={`/work/${prevProject.slug}`}
                    className="group text-left"
                >
                    <span className="text-[0.625rem] uppercase tracking-[0.15em] text-white/30 block mb-2">
                        ← Previous
                    </span>
                    <span className="text-lg font-bold group-hover:text-[#ff382e] transition-colors">
                        {prevProject.title}
                    </span>
                </Link>
                <Link
                    href={`/work/${nextProject.slug}`}
                    className="group text-right"
                >
                    <span className="text-[0.625rem] uppercase tracking-[0.15em] text-white/30 block mb-2">
                        Next →
                    </span>
                    <span className="text-lg font-bold group-hover:text-[#ff382e] transition-colors">
                        {nextProject.title}
                    </span>
                </Link>
            </div>
        </div>
    );
}
