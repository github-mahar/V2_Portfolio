"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";
import { SystemStatus } from "@/components/ui/SectionDivider";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col justify-between pt-32 pb-10 px-6 md:px-10">
            {/* ── Main Content ── */}
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <SystemStatus label="CONTACT_MODULE: READY" className="mb-6 block" />
                </motion.div>

                {/* Large Typographic Statement */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight leading-[0.95] max-w-5xl"
                >
                    Let&apos;s build<br />
                    something<br />
                    <span className="text-[#ff382e]">intentional.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="mt-10 max-w-lg text-base text-white/50 leading-relaxed"
                >
                    I&apos;m currently available for select projects. If you have a vision
                    that demands design conviction and engineering precision — reach out.
                </motion.p>

                {/* Contact Methods */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                    className="mt-12 space-y-6"
                >
                    <div>
                        <span className="text-[0.625rem] uppercase tracking-[0.15em] text-white/30 block mb-2">
                            Email
                        </span>
                        <a
                            href="mailto:hello@stitch.dev"
                            className="text-lg md:text-xl font-medium hover:text-[#ff382e] transition-colors duration-300"
                        >
                            hello@stitch.dev
                        </a>
                    </div>

                    <div className="h-px bg-white/10 max-w-sm" />

                    <div>
                        <span className="text-[0.625rem] uppercase tracking-[0.15em] text-white/30 block mb-3">
                            Elsewhere
                        </span>
                        <div className="flex flex-wrap gap-4">
                            {SOCIAL_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm uppercase tracking-[0.15em] text-white/40 hover:text-[#ff382e] transition-colors duration-300 border border-white/10 hover:border-[#ff382e]/30 px-4 py-2"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ── Bottom Footer ── */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="border-t border-white/10 pt-6 mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
                <span className="text-[0.625rem] uppercase tracking-[0.2em] text-white/20">
                    © {new Date().getFullYear()} STITCH
                </span>
                <span className="text-[0.625rem] uppercase tracking-[0.2em] text-white/20">
                    Built with conviction. Deployed on the edge.
                </span>
                <span className="text-[0.625rem] uppercase tracking-[0.2em] text-[#ff382e]/40">
          // END_TRANSMISSION
                </span>
            </motion.footer>

            {/* ── Background Decorative ── */}
            <div
                className="absolute right-0 bottom-0 text-[25vw] font-bold leading-none text-white/[0.015] pointer-events-none select-none font-serif italic"
                aria-hidden="true"
            >
                fin.
            </div>
        </div>
    );
}
