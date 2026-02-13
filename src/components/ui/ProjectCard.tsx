"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/constants";

interface ProjectCardProps {
    project: Project;
    index: number;
    variant?: "large" | "default";
}

export function ProjectCard({
    project,
    index,
    variant = "default",
}: ProjectCardProps) {
    const isLarge = variant === "large";
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
        >
            <Link
                href={`/work/${project.slug}`}
                className={`group block relative border border-white/10 hover:border-[#ff382e]/30 transition-colors duration-500 ${isLarge ? "p-8 md:p-12" : "p-6 md:p-8"
                    }`}
            >
                {/* Top metadata row */}
                <div className="flex items-center justify-between mb-6">
                    <span className="text-[0.625rem] uppercase tracking-[0.2em] text-white/30">
                        {project.role}
                    </span>
                    <span className="text-[0.625rem] uppercase tracking-[0.2em] text-white/30">
                        {project.year}
                    </span>
                </div>

                {/* Title block */}
                <div className={`${isEven ? "" : "md:text-right"}`}>
                    <h3
                        className={`font-bold tracking-tight leading-none transition-colors duration-300 group-hover:text-[#ff382e] ${isLarge
                                ? "text-4xl md:text-6xl lg:text-7xl"
                                : "text-2xl md:text-4xl"
                            }`}
                    >
                        {project.title}
                    </h3>
                    <p
                        className={`mt-2 text-sm text-white/40 uppercase tracking-[0.1em] ${isLarge ? "text-base" : ""
                            }`}
                    >
                        {project.subtitle}
                    </p>
                </div>

                {/* Tech tags — bottom */}
                <div className="mt-8 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t) => (
                        <span
                            key={t}
                            className="text-[0.625rem] uppercase tracking-[0.15em] text-white/25 border border-white/10 px-2 py-0.5"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Hover arrow */}
                <span className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-white/0 group-hover:text-[#ff382e] transition-all duration-300 material-symbols-outlined text-xl group-hover:translate-x-1">
                    arrow_right_alt
                </span>

                {/* Index number — positioned watermark */}
                <span
                    className={`absolute text-[6rem] md:text-[8rem] font-bold leading-none text-white/[0.02] pointer-events-none select-none ${isEven ? "-right-2 -top-4" : "-left-2 -top-4"
                        }`}
                >
                    {String(index + 1).padStart(2, "0")}
                </span>
            </Link>
        </motion.div>
    );
}
