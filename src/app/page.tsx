"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SystemStatus } from "@/components/ui/SectionDivider";

const heroVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const lineVariant: Variants = {
  hidden: { opacity: 0, y: 40, skewY: 2 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden grid-lines">
      {/* ── Hero Section ── */}
      <section className="flex-1 flex items-center px-6 md:px-10 pt-32 pb-20">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[90rem]"
        >
          {/* System Status */}
          <motion.div variants={fadeUp} className="mb-8">
            <SystemStatus label="PORTFOLIO_V2.0 — INITIALIZED" />
          </motion.div>

          {/* Main Statement */}
          <div className="space-y-1">
            <motion.h1
              variants={lineVariant}
              className="text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-tight"
            >
              I design
            </motion.h1>
            <motion.h1
              variants={lineVariant}
              className="text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-tight text-ghost-red"
            >
              systems
            </motion.h1>
            <motion.h1
              variants={lineVariant}
              className="text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-tight"
            >
              that speak.
            </motion.h1>
          </div>

          {/* Sub-statement */}
          <motion.p
            variants={fadeUp}
            className="mt-10 max-w-lg text-base md:text-lg text-white/50 leading-relaxed"
          >
            Creative technologist crafting intentional digital spaces
            where design conviction meets engineering precision.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-6">
            <Button href="/work">View Work</Button>
            <Button href="/about" variant="ghost">
              About Me
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Bottom Bar ── */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="border-t border-white/10 px-6 md:px-10 py-4 flex items-center justify-between"
      >
        <span className="text-[0.625rem] uppercase tracking-[0.2em] text-white/25">
          Based in Pakistan
        </span>
        <span className="text-[0.625rem] uppercase tracking-[0.2em] text-white/25">
          Available for Projects
        </span>
        <span className="text-[0.625rem] uppercase tracking-[0.2em] text-[#ff382e]/50">
          Scroll ↓
        </span>
      </motion.footer>

      {/* ── Background Depth Elements ── */}
      {/* Large ghost text watermark */}
      <div
        className="absolute -right-10 top-1/2 -translate-y-1/2 text-[20vw] font-bold leading-none text-white/[0.015] pointer-events-none select-none font-serif italic"
        aria-hidden="true"
      >
        Stitch
      </div>

      {/* Accent corner line */}
      <div
        className="absolute top-0 right-0 w-px h-40 bg-gradient-to-b from-[#ff382e]/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 h-px w-40 bg-gradient-to-l from-[#ff382e]/40 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
