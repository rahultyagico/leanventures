"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  heroStagger,
} from "@/components/animations";
import { ArrowRightIcon } from "@/components/icons";

const CATEGORIES = [
  {
    title: "Tech Stack",
    description:
      "Our recommended tools and software for building, automating, and scaling your startup.",
    href: "/resources/tech-stack",
    available: true,
  },
  {
    title: "Books",
    description:
      "Essential reads for founders on product, growth, operations, and leadership.",
    href: "#",
    available: false,
  },
  {
    title: "Templates",
    description:
      "Plug-and-play templates for workflows, databases, dashboards, and project plans.",
    href: "#",
    available: false,
  },
  {
    title: "Guides",
    description:
      "Step-by-step guides on automation, no-code tools, and founder operations.",
    href: "#",
    available: false,
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen font-sans">
      {/* ─── HERO ─── */}
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[480px] w-[640px] -translate-x-1/2 rounded-full opacity-20 blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse, #fde68a, #fed7aa, transparent 70%)",
          }}
        />

        <motion.div
          className="mx-auto max-w-3xl px-6 text-center"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            Curated by our team
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl"
          >
            Resources
            <br />
            <span className="text-muted">for founders.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Tools, guides, and recommendations we&rsquo;ve battle-tested
            across dozens of founder engagements. No fluff&mdash;just what
            works.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className="flex min-h-screen items-center border-y border-border/60 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={heroStagger}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-widest text-muted"
            >
              Browse by category
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              What are you looking for?
            </motion.h2>
          </motion.div>

          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {CATEGORIES.map((cat) => (
              <motion.div
                key={cat.title}
                variants={scaleIn}
                transition={{ duration: 0.5 }}
                whileHover={cat.available ? { y: -4 } : undefined}
                className={`flex flex-col rounded-2xl border border-card-border bg-background p-8 ${
                  !cat.available ? "opacity-50" : ""
                }`}
              >
                <h3 className="text-xl font-semibold">{cat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {cat.description}
                </p>
                <div className="mt-auto pt-6">
                  {cat.available ? (
                    <Link
                      href={cat.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-opacity hover:opacity-70"
                    >
                      Browse {cat.title.toLowerCase()}
                      <ArrowRightIcon />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-muted">
                      Coming soon
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-border/60 py-10"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <span>
              &copy; {new Date().getFullYear()} LeanVentures. All rights
              reserved.
            </span>
            <a
              href="/"
              className="text-muted/60 transition-colors hover:text-foreground"
            >
              A LeanVentures company
            </a>
          </div>
          <div className="flex gap-6">
            <a
              href="/services"
              className="transition-colors hover:text-foreground"
            >
              Services
            </a>
            <a href="/labs" className="transition-colors hover:text-foreground">
              Labs
            </a>
            <a
              href="/resources/tech-stack"
              className="transition-colors hover:text-foreground"
            >
              Tech Stack
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
