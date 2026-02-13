"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SystemStatus, SectionDivider } from "@/components/ui/SectionDivider";

export default function WorkPage() {
    const featured = PROJECTS.filter((p) => p.featured);
    const others = PROJECTS.filter((p) => !p.featured);

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-10">
            {/* ── Page Header ── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mb-16"
            >
                <SystemStatus label="WORK_INDEX: LOADED" className="mb-4 block" />
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
                    Selected
                </h1>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-ghost-red">
                    Work
                </h1>
                <p className="mt-6 max-w-md text-sm text-white/40 leading-relaxed">
                    Curated projects spanning design systems, editorial platforms,
                    and product interfaces. Each one intentional.
                </p>
            </motion.div>

            <SectionDivider label="FEATURED" className="mb-12" />

            {/* ── Featured Projects — Asymmetric Grid ── */}
            <div className="space-y-4">
                {featured.map((project, i) => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                        index={i}
                        variant={i === 0 ? "large" : "default"}
                    />
                ))}
            </div>

            {/* ── Other Projects ── */}
            {others.length > 0 && (
                <>
                    <SectionDivider label="ARCHIVE" className="mt-20 mb-12" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {others.map((project, i) => (
                            <ProjectCard
                                key={project.slug}
                                project={project}
                                index={i + featured.length}
                            />
                        ))}
                    </div>
                </>
            )}

            {/* ── Bottom spacer with decorative element ── */}
            <div className="mt-32 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-[0.625rem] uppercase tracking-[0.2em] text-white/20">
          // END_OF_INDEX
                </span>
                <div className="h-px flex-1 bg-white/10" />
            </div>
        </div>
    );
}
