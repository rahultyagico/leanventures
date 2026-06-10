"use client";

import { motion } from "motion/react";
import { fadeUp, heroStagger } from "@/components/animations";
import { SparklesIcon, ArrowRightIcon, MailIcon, ClockIcon, UsersIcon, ZapIcon } from "@/components/icons";

export default function ContactPage() {
  return (
    <div className="min-h-screen font-sans">
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-foreground text-background">
        {/* Dot grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Ambient orb */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-[0.12] blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse, #a855f7, #6366f1, #ec4899, transparent 70%)",
          }}
        />

        <motion.div
          className="mx-auto max-w-2xl px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-1.5 text-xs font-medium text-neutral-400"
          >
            <SparklesIcon />
            Free — no commitment
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            What if your business
            <br />
            ran while you slept?
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-5 max-w-md text-base leading-relaxed text-neutral-400"
          >
            We&rsquo;ll map your 3 highest-impact automation opportunities and give you a clear action plan to act on immediately — before you spend a cent.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <motion.a
              href="https://calendly.com/rahultyagico"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 items-center gap-2 justify-center rounded-full bg-white px-8 text-sm font-medium text-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              Book a free workflow audit
              <ArrowRightIcon />
            </motion.a>
            <motion.a
              href="mailto:team@createworkflow.io"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 items-center gap-2 justify-center rounded-full border border-neutral-700 px-8 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white"
            >
              <MailIcon />
              team@createworkflow.io
            </motion.a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {[
              { icon: <ClockIcon />, label: "Fast turnaround", desc: "Most projects delivered in 1–3 weeks" },
              { icon: <UsersIcon />, label: "Founder-focused", desc: "We work exclusively with early-stage teams" },
              { icon: <ZapIcon />, label: "No lock-in", desc: "You own everything we build" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 rounded-2xl border border-neutral-800 p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <p className="text-xs leading-relaxed text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
