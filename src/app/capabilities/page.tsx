"use client";

import { motion } from "framer-motion";
import { CAPABILITIES } from "@/lib/constants";
import { SystemStatus, SectionDivider } from "@/components/ui/SectionDivider";

export default function CapabilitiesPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-10">
            {/* ── Page Header ── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mb-20"
            >
                <SystemStatus label="CAPABILITIES_INDEX: LOADED" className="mb-4 block" />
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
                    What I
                </h1>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-ghost-red">
                    bring.
                </h1>
                <p className="mt-6 max-w-md text-sm text-white/40 leading-relaxed">
                    Structured competence across design, engineering, and strategic
                    thinking. Not a list — a system.
                </p>
            </motion.div>

            {/* ── Capabilities Grid ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-white/10">
                {CAPABILITIES.map((group, groupIndex) => (
                    <motion.div
                        key={group.category}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1],
                            delay: groupIndex * 0.1,
                        }}
                        className={`p-8 md:p-12 border-b border-white/10 ${groupIndex % 2 === 0 ? "md:border-r md:border-white/10" : ""
                            }`}
                    >
                        {/* Category Header */}
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                                {group.category}
                            </h2>
                            <span className="text-[0.625rem] uppercase tracking-[0.2em] text-white/20">
                                {String(groupIndex + 1).padStart(2, "0")}
                            </span>
                        </div>

                        {/* Items */}
                        <div className="space-y-4">
                            {group.items.map((item, itemIndex) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: groupIndex * 0.1 + itemIndex * 0.05,
                                        duration: 0.4,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="group flex items-center gap-4"
                                >
                                    <span className="w-2 h-px bg-[#ff382e]/50 group-hover:w-6 group-hover:bg-[#ff382e] transition-all duration-300" />
                                    <span className="text-sm md:text-base text-white/60 group-hover:text-white transition-colors duration-300">
                                        {item}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ── Bottom Statement ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-20 flex items-start gap-8"
            >
                <div
                    className="hidden md:block text-vertical text-[0.625rem] uppercase tracking-[0.3em] text-white/10 h-32"
                    aria-hidden="true"
                >
          // COMPETENCY_MAP
                </div>
                <p className="text-xl md:text-2xl text-white/50 leading-relaxed max-w-lg">
                    Tools change. Frameworks evolve. What remains is the ability to
                    <span className="text-white font-medium"> think systematically</span> and
                    <span className="text-[#ff382e] font-medium"> execute with precision</span>.
                </p>
            </motion.div>
        </div>
    );
}
