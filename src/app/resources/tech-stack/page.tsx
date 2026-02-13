"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  fadeUp,
  staggerContainer,
  heroStagger,
} from "@/components/animations";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolCard } from "@/components/ToolCard";

const TOOL_CATEGORIES = [
  {
    label: "Automation & Workflows",
    title: "Automate the boring stuff",
    description:
      "The tools we use to build workflows, connect apps, and eliminate manual work for founders.",
    tools: [
      {
        name: "n8n",
        description: "Open-source workflow automation platform.",
        recommendation:
          "Our go-to for complex workflows. Self-hostable, extremely flexible, and has a generous free tier. We build 80% of our client automations on n8n.",
        href: "#",
        tag: "Open source",
      },
      {
        name: "Zapier",
        description: "No-code automation for connecting apps.",
        recommendation:
          "Best for simple, quick integrations when you need something running in minutes. Great app library, but gets expensive at scale.",
        href: "#",
        tag: "Free tier",
      },
      {
        name: "Make",
        description: "Visual automation platform for complex scenarios.",
        recommendation:
          "A powerful middle ground between Zapier and n8n. Visual builder is excellent for multi-step workflows. Great pricing for what you get.",
        href: "#",
        tag: "Free tier",
      },
    ],
  },
  {
    label: "Databases & Backends",
    title: "Where your data lives",
    description:
      "Solid foundations for storing, organizing, and querying your startup's data.",
    tools: [
      {
        name: "Airtable",
        description: "Spreadsheet-database hybrid for teams.",
        recommendation:
          "Perfect for non-technical founders who need a database without writing SQL. We use it as the backend for dozens of client projects. Interfaces feature is underrated.",
        href: "#",
        tag: "Free tier",
      },
      {
        name: "Supabase",
        description: "Open-source Firebase alternative with Postgres.",
        recommendation:
          "When you outgrow Airtable or need real-time features. Postgres under the hood means no vendor lock-in. Auth, storage, and edge functions included.",
        href: "#",
        tag: "Free tier",
      },
      {
        name: "Notion",
        description: "All-in-one workspace for docs and lightweight data.",
        recommendation:
          "Great for internal wikis, SOPs, and light project management. Not a true database, but perfect for content and knowledge management.",
        href: "#",
        tag: "Free tier",
      },
    ],
  },
  {
    label: "Hosting & Deployment",
    title: "Ship it live",
    description:
      "Where to deploy your websites, apps, and APIs without DevOps headaches.",
    tools: [
      {
        name: "Vercel",
        description: "Frontend cloud for Next.js and React apps.",
        recommendation:
          "If you're building with Next.js (and you should be), Vercel is the easiest path to production. Push to Git, get a live URL. It just works.",
        href: "#",
        tag: "Free tier",
      },
      {
        name: "Railway",
        description: "Simple cloud platform for deploying anything.",
        recommendation:
          "Best for backends, APIs, and databases. Simpler than AWS, more flexible than Heroku. We use it for all our Python and Node.js services.",
        href: "#",
        tag: "Free tier",
      },
      {
        name: "Cloudflare",
        description: "CDN, DNS, security, and edge computing.",
        recommendation:
          "Every domain we manage runs through Cloudflare. Free SSL, DDoS protection, blazing fast DNS, and their Workers platform is incredible for edge logic.",
        href: "#",
        tag: "Free tier",
      },
    ],
  },
  {
    label: "Design & UI",
    title: "Make it look great",
    description:
      "Design tools that help founders create professional interfaces without a design team.",
    tools: [
      {
        name: "Figma",
        description: "Collaborative interface design tool.",
        recommendation:
          "The industry standard for a reason. Every design we create starts in Figma. Free tier is generous enough for most startups.",
        href: "#",
        tag: "Free tier",
      },
      {
        name: "Framer",
        description: "Design and publish production websites visually.",
        recommendation:
          "When you need a marketing site fast without touching code. The animations and interactions are best-in-class. Great for landing pages.",
        href: "#",
        tag: "Free tier",
      },
      {
        name: "Canva",
        description: "Design platform for social media and marketing.",
        recommendation:
          "Not for UI design, but essential for social posts, pitch decks, and marketing materials. Every founder should have a Canva Pro subscription.",
        href: "#",
        tag: "Free tier",
      },
    ],
  },
  {
    label: "AI & Productivity",
    title: "Work smarter, ship faster",
    description:
      "AI tools that give founders and small teams a 10x productivity advantage.",
    tools: [
      {
        name: "Claude",
        description: "AI assistant for writing, analysis, and coding.",
        recommendation:
          "Our preferred AI for long-form writing, code review, and complex analysis. Handles nuance better than alternatives. The Artifacts feature is perfect for quick prototypes.",
        href: "#",
        tag: "Free tier",
      },
      {
        name: "ChatGPT",
        description: "OpenAI's conversational AI assistant.",
        recommendation:
          "The most versatile AI assistant available. Great for brainstorming, customer research, and quick tasks. Plus plan is worth every penny for founders.",
        href: "#",
        tag: "Free tier",
      },
      {
        name: "Cursor",
        description: "AI-first code editor built on VS Code.",
        recommendation:
          "If you or your team writes code, Cursor is a game-changer. AI autocomplete that actually understands your codebase. We use it for every project.",
        href: "#",
        tag: "Free tier",
      },
    ],
  },
  {
    label: "Payments & Billing",
    title: "Get paid",
    description:
      "Payment infrastructure that scales from first sale to millions in revenue.",
    tools: [
      {
        name: "Stripe",
        description: "Payment infrastructure for the internet.",
        recommendation:
          "The gold standard for SaaS billing. Subscriptions, invoicing, payment links — it does everything. Developer experience is unmatched.",
        href: "#",
        tag: "Pay per use",
      },
      {
        name: "Lemon Squeezy",
        description: "All-in-one payment platform for digital products.",
        recommendation:
          "If you sell digital products or SaaS and don't want to deal with tax compliance, Lemon Squeezy handles it all as your merchant of record.",
        href: "#",
        tag: "Pay per use",
      },
      {
        name: "Razorpay",
        description: "Payment gateway for Indian businesses.",
        recommendation:
          "The best payment solution for India-based startups. UPI, cards, net banking — all in one integration. Great dashboard and developer docs.",
        href: "#",
        tag: "Pay per use",
      },
    ],
  },
];

export default function TechStack() {
  return (
    <div className="min-h-screen font-sans">
      {/* ─── HERO ─── */}
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[480px] w-[640px] -translate-x-1/2 rounded-full opacity-20 blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse, #bbf7d0, #a7f3d0, transparent 70%)",
          }}
        />

        <motion.div
          className="mx-auto max-w-3xl px-6 text-center"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Breadcrumb */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 flex items-center justify-center gap-2 text-sm text-muted"
          >
            <Link
              href="/resources"
              className="transition-colors hover:text-foreground"
            >
              Resources
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Tech Stack</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl"
          >
            Our recommended
            <br />
            <span className="text-muted">tech stack.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Every tool on this page is something we actively use with our
            clients. No paid placements&mdash;just honest recommendations from
            building dozens of founder projects.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── TOOL CATEGORY SECTIONS ─── */}
      {TOOL_CATEGORIES.map((category, i) => (
        <section
          key={category.label}
          className={`flex min-h-screen items-center py-24 sm:py-32 ${
            i % 2 === 0
              ? "border-y border-border/60 bg-card"
              : ""
          }`}
        >
          <div className="mx-auto max-w-5xl px-6">
            <SectionHeader
              label={category.label}
              title={category.title}
              description={category.description}
            />

            <motion.div
              className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
            >
              {category.tools.map((tool) => (
                <ToolCard key={tool.name} {...tool} />
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* ─── DISCLAIMER ─── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="border-t border-border/60 py-8"
      >
        <p className="mx-auto max-w-3xl px-6 text-center text-xs leading-relaxed text-muted/60">
          Some links on this page are affiliate links. This means we may earn a
          small commission if you sign up through our link&mdash;at no extra cost
          to you. We only recommend tools we genuinely use and trust.
        </p>
      </motion.div>

      {/* ─── CTA ─── */}
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-foreground text-background">
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
            Need help choosing the right stack?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-4 max-w-md text-base leading-relaxed text-neutral-400"
          >
            Every startup is different. We can help you pick the tools that
            match your stage, budget, and technical needs.
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="/services"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              Explore our services
            </motion.a>
            <motion.a
              href="/labs"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-700 px-8 text-sm font-medium text-background transition-colors hover:border-neutral-500"
            >
              Custom builds with Labs
            </motion.a>
          </motion.div>
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
            <Link
              href="/resources"
              className="transition-colors hover:text-foreground"
            >
              All Resources
            </Link>
            <a
              href="/services"
              className="transition-colors hover:text-foreground"
            >
              Services
            </a>
            <a href="/labs" className="transition-colors hover:text-foreground">
              Labs
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
