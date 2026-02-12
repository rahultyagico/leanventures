"use client";

import { motion } from "motion/react";
import {
  fadeUp,
  fadeIn,
  scaleIn,
  staggerContainer,
  heroStagger,
} from "@/components/animations";
import {
  ToolsIcon,
  BoxIcon,
  FlaskIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@/components/icons";

export default function LeanVentures() {
  return (
    <div className="min-h-screen font-sans">
      {/* ─── HERO ─── */}
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[480px] w-[640px] -translate-x-1/2 rounded-full opacity-25 blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse, #dbeafe, #e0e7ff, transparent 70%)",
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
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            Services + Products for founders
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl"
          >
            Building tools and services
            <br />
            <span className="text-muted">
              for the next generation of founders.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            LeanVentures is a studio that helps early-stage founders move
            faster&mdash;through hands-on automation services and purpose-built
            products.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="/services"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-medium text-accent-foreground shadow-sm transition-opacity hover:opacity-80"
            >
              Explore our services
            </motion.a>
            <motion.a
              href="#products"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-8 text-sm font-medium text-foreground transition-colors hover:bg-border/40"
            >
              See our products
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── TWO ARMS ─── */}
      <section
        id="arms"
        className="flex min-h-screen items-center border-y border-border/60 bg-card py-24 sm:py-32"
      >
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
              What we do
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Three ways we help founders
            </motion.h2>
          </motion.div>

          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Services Arm */}
            <motion.div
              variants={scaleIn}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-2xl border border-card-border bg-background p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-foreground">
                <ToolsIcon />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                Services
              </p>
              <h3 className="mt-2 text-xl font-semibold">LeanWorkflows.ai</h3>
              <p className="mt-1 text-sm text-muted">
                Done-for-you automation
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                We design and build the workflows, databases, and integrations
                that power your operations&mdash;so you can focus on growth.
              </p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {[
                  "n8n workflow design",
                  "Airtable backends",
                  "Custom API integrations",
                  "Ongoing support plans",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-foreground"
                  >
                    <span className="text-emerald-600">
                      <CheckIcon />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <motion.a
                  href="/services"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-opacity hover:opacity-70"
                >
                  Visit LeanWorkflows.ai
                  <ArrowRightIcon />
                </motion.a>
              </div>
            </motion.div>

            {/* Products Arm */}
            <motion.div
              variants={scaleIn}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-2xl border border-card-border bg-background p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-foreground">
                <BoxIcon />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                Products
              </p>
              <h3 className="mt-2 text-xl font-semibold">LeanProducts</h3>
              <p className="mt-1 text-sm text-muted">
                Tools built for founders
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                We build focused, opinionated SaaS tools that solve real
                problems for early-stage startups. No bloat, just what you need.
              </p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {[
                  "LeanPlanner.app (coming soon)",
                  "More products in development",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-foreground"
                  >
                    <span className="text-emerald-600">
                      <CheckIcon />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <motion.a
                  href="#products"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-opacity hover:opacity-70"
                >
                  See LeanPlanner below
                  <ArrowRightIcon />
                </motion.a>
              </div>
            </motion.div>

            {/* Labs Arm */}
            <motion.div
              variants={scaleIn}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-2xl border border-card-border bg-background p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-foreground">
                <FlaskIcon />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                Labs
              </p>
              <h3 className="mt-2 text-xl font-semibold">LeanVentures Labs</h3>
              <p className="mt-1 text-sm text-muted">
                Custom development
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                When off-the-shelf tools aren&rsquo;t enough, our Labs team
                builds custom software&mdash;AI agents, internal tools, data
                pipelines, and full SaaS products.
              </p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {[
                  "AI agents & automation",
                  "Internal tools & dashboards",
                  "Data pipelines",
                  "Custom SaaS products",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-foreground"
                  >
                    <span className="text-emerald-600">
                      <CheckIcon />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <motion.a
                  href="/labs"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-opacity hover:opacity-70"
                >
                  Visit LeanVentures Labs
                  <ArrowRightIcon />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── LEANPLANNER SHOWCASE ─── */}
      <section
        id="products"
        className="flex min-h-screen items-center py-24 sm:py-32"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={heroStagger}
            >
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-medium text-amber-700"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
                </span>
                Coming Soon
              </motion.div>

              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                LeanPlanner.app
              </motion.h2>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="mt-2 text-lg text-muted"
              >
                The planning tool built for how founders actually work.
              </motion.p>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="mt-4 text-sm leading-relaxed text-muted"
              >
                Lightweight roadmap, planning, and task management for solo
                founders and small teams. Opinionated defaults, zero setup, and
                just the features you actually use&mdash;nothing more.
              </motion.p>

              <motion.ul
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="mt-8 flex flex-col gap-3"
              >
                {[
                  "Roadmap-first planning",
                  "Built for solo founders and small teams",
                  "Opinionated defaults, zero setup",
                  "Integrates with your existing stack",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-foreground"
                  >
                    <span className="text-emerald-600">
                      <CheckIcon />
                    </span>
                    {f}
                  </li>
                ))}
              </motion.ul>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="mt-10"
              >
                <motion.a
                  href="mailto:hello@leanventures.com?subject=LeanPlanner Waitlist"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-medium text-accent-foreground shadow-sm transition-opacity hover:opacity-80"
                >
                  Join the waitlist
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right: Mockup */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl border border-card-border bg-card p-6 shadow-lg">
                {/* Mock title bar */}
                <div className="mb-6 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-300" />
                  <div className="h-3 w-3 rounded-full bg-amber-300" />
                  <div className="h-3 w-3 rounded-full bg-emerald-300" />
                  <span className="ml-3 text-xs text-muted">
                    LeanPlanner.app
                  </span>
                </div>

                {/* Mock sidebar + content */}
                <div className="flex gap-4">
                  {/* Sidebar */}
                  <div className="hidden w-36 flex-shrink-0 space-y-3 sm:block">
                    <div className="h-4 w-20 rounded bg-neutral-200" />
                    <div className="h-3 w-28 rounded bg-neutral-100" />
                    <div className="h-3 w-24 rounded bg-neutral-100" />
                    <div className="h-3 w-32 rounded bg-neutral-100" />
                    <div className="mt-4 h-4 w-16 rounded bg-neutral-200" />
                    <div className="h-3 w-28 rounded bg-neutral-100" />
                    <div className="h-3 w-20 rounded bg-neutral-100" />
                  </div>

                  {/* Main content */}
                  <div className="flex-1 space-y-4">
                    <div className="h-5 w-40 rounded bg-neutral-200" />
                    <div className="space-y-2">
                      {[
                        { w: "w-full", color: "bg-blue-100" },
                        { w: "w-4/5", color: "bg-emerald-100" },
                        { w: "w-3/5", color: "bg-amber-100" },
                        { w: "w-11/12", color: "bg-purple-100" },
                      ].map((bar, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 rounded-lg border border-card-border p-3"
                        >
                          <div
                            className={`h-2 w-2 rounded-full ${bar.color.replace("100", "400")}`}
                          />
                          <div
                            className={`h-3 ${bar.w} rounded ${bar.color}`}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2">
                      <div className="h-8 flex-1 rounded-lg bg-neutral-100" />
                      <div className="h-8 flex-1 rounded-lg bg-neutral-100" />
                      <div className="h-8 flex-1 rounded-lg bg-neutral-100" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-8 -right-8 -z-10 h-40 w-40 rounded-full opacity-20 blur-3xl"
                style={{ background: "var(--gradient-start)" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        id="contact"
        className="relative isolate flex min-h-screen items-center justify-center overflow-hidden border-t border-border/60 bg-foreground text-background"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <motion.div
          className="mx-auto max-w-2xl px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={heroStagger}
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Let&rsquo;s build something together
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-4 max-w-md text-base leading-relaxed text-neutral-400"
          >
            Whether you need automation services or want early access to our
            tools&mdash;we&rsquo;d love to hear from you.
          </motion.p>
          <motion.a
            href="mailto:hello@leanventures.com"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-foreground shadow-sm transition-opacity hover:opacity-90"
          >
            hello@leanventures.com
          </motion.a>
        </motion.div>
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
          <span>
            &copy; {new Date().getFullYear()} LeanVentures. All rights
            reserved.
          </span>
          <div className="flex gap-6">
            <a href="/services" className="transition-colors hover:text-foreground">
              LeanWorkflows.ai
            </a>
            <a
              href="/labs"
              className="transition-colors hover:text-foreground"
            >
              Labs
            </a>
            <a
              href="#products"
              className="transition-colors hover:text-foreground"
            >
              LeanPlanner.app
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
