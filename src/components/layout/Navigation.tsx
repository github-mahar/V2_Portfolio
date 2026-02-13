"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navigation() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            {/* ── Top Navigation Bar ── */}
            <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference pointer-events-none">
                <div className="flex items-start justify-between px-6 md:px-10 py-6">
                    {/* Top Left — Branding / System Status */}
                    <div className="pointer-events-auto">
                        <Link href="/" className="group flex flex-col gap-1">
                            <span className="text-[0.625rem] uppercase tracking-[0.2em] text-white/50 leading-none">
                // SYSTEM_STATUS: ACTIVE
                            </span>
                            <span className="text-lg font-bold tracking-[0.15em] text-white leading-none">
                                STITCH
                            </span>
                        </Link>
                    </div>

                    {/* Top Right — Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 pointer-events-auto">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "relative text-xs uppercase tracking-[0.2em] transition-colors duration-300",
                                        isActive ? "text-white" : "text-white/40 hover:text-white"
                                    )}
                                >
                                    {link.label}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-indicator"
                                            className="absolute -bottom-1 left-0 right-0 h-px bg-[#ff382e]"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden pointer-events-auto flex flex-col gap-1.5 py-1"
                        aria-label="Toggle navigation menu"
                    >
                        <motion.span
                            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-px bg-white origin-center"
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            animate={mobileOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                            className="block w-6 h-px bg-white"
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-px bg-white origin-center"
                            transition={{ duration: 0.3 }}
                        />
                    </button>
                </div>
            </nav>

            {/* ── Mobile Menu Overlay ── */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-40 bg-void/95 backdrop-blur-sm flex flex-col items-start justify-end p-10 pb-20 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {NAV_LINKS.map((link, i) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -30 }}
                                        transition={{ delay: i * 0.08, duration: 0.4 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className={cn(
                                                "text-3xl font-bold uppercase tracking-[0.1em] transition-colors",
                                                isActive ? "text-[#ff382e]" : "text-canvas/60 hover:text-canvas"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                        <span className="absolute bottom-8 left-10 text-[0.625rem] uppercase tracking-[0.2em] text-white/30">
              // NAV_MODULE: OPEN
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
