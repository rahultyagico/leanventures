"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  heroStagger,
} from "@/components/animations";
import {
  CheckIcon,
  ArrowRightIcon,
  SparklesIcon,
  BotIcon,
  ZapIcon,
  IntegrationIcon,
  ScanIcon,
  ShieldIcon,
} from "@/components/icons";
import { SectionHeader } from "@/components/SectionHeader";
import { PricingCard } from "@/components/PricingCard";
import { FAQItem } from "@/components/FAQItem";

const LAYERS = [
  {
    icon: <BotIcon />,
    title: "Intelligence Layer",
    description:
      "A network of specialised AI agents — each owning a domain of your business: sales, support, ops, finance. They communicate, collaborate, and escalate intelligently.",
    items: [
      "Domain-specific agent design",
      "Multi-agent coordination",
      "Memory and context across sessions",
      "Human escalation pathways",
    ],
  },
  {
    icon: <IntegrationIcon />,
    title: "Integration Layer",
    description:
      "Your AI OS is wired into every tool you use. CRMs, databases, email, Slack, spreadsheets — agents read from and write to your real data sources.",
    items: [
      "CRM, Airtable, Notion, Sheets",
      "Email and calendar access",
      "Slack and communication tools",
      "Custom API connections",
    ],
  },
  {
    icon: <ScanIcon />,
    title: "Knowledge Layer",
    description:
      "A private knowledge base that your agents query in real time — your SOPs, documentation, past decisions, and institutional memory, always available.",
    items: [
      "Vector knowledge base",
      "Document ingestion pipeline",
      "Semantic search across your data",
      "Automatic knowledge updates",
    ],
  },
  {
    icon: <ZapIcon />,
    title: "Automation Layer",
    description:
      "Event-driven workflows that trigger agents based on real-world signals — a new lead, a submitted form, a Slack message, a database change.",
    items: [
      "Trigger-based agent activation",
      "n8n / Make / Zapier integration",
      "Scheduled and event-driven runs",
      "Cross-system workflow chains",
    ],
  },
  {
    icon: <ShieldIcon />,
    title: "Observability Layer",
    description:
      "Complete visibility into what your AI OS is doing — usage dashboards, cost tracking, error alerts, and audit logs for every agent action.",
    items: [
      "Real-time usage dashboards",
      "Cost and token monitoring",
      "Error detection and alerting",
      "Audit log for all agent actions",
    ],
  },
  {
    icon: <SparklesIcon />,
    title: "Command Interface",
    description:
      "A central interface where you and your team interact with the AI OS — ask questions, trigger workflows, review outputs, and manage agents.",
    items: [
      "Natural language commands",
      "Workflow trigger interface",
      "Agent output review queue",
      "Team access and permissions",
    ],
  },
];

const WHAT_IT_REPLACES = [
  { old: "Manual lead research", ai: "Lead research agent — runs on every new contact" },
  { old: "Copy-pasting CRM data", ai: "Auto-sync agent — writes to CRM from every touchpoint" },
  { old: "Writing status update emails", ai: "Update agent — generates and sends on a schedule" },
  { old: "Sorting the inbox", ai: "Inbox agent — classifies, routes, and drafts replies" },
  { old: "Building weekly reports", ai: "Report agent — pulls data, formats, and delivers" },
  { old: "Onboarding new clients manually", ai: "Onboarding agent — runs the full checklist automatically" },
];

const PROCESS = [
  {
    step: "01",
    title: "OS Audit",
    desc: "We map every workflow in your business — what runs daily, who does it, how long it takes, and where the biggest drag on your time lives.",
    duration: "1–2 days",
  },
  {
    step: "02",
    title: "OS Design",
    desc: "We architect the full agent network: which agents you need, what they connect to, how they communicate, and what the command interface looks like.",
    duration: "3–5 days",
  },
  {
    step: "03",
    title: "Build & Wire",
    desc: "We build all agents, set up the knowledge base, wire integrations, and connect the automation layer. You see weekly progress demos.",
    duration: "4–8 weeks",
  },
  {
    step: "04",
    title: "Evaluate",
    desc: "Every agent is tested on real data — edge cases, error modes, and handoff flows — before going live.",
    duration: "1 week",
  },
  {
    step: "05",
    title: "Launch & Evolve",
    desc: "We go live, monitor closely, and evolve the OS based on real usage. New agents, new integrations, new automations added over time.",
    duration: "Ongoing",
  },
];

const DELIVERABLES = [
  "Full agent network deployed to your accounts",
  "Private knowledge base with your documentation",
  "All tool integrations wired and tested",
  "Observability dashboard with cost and usage tracking",
  "Command interface for you and your team",
  "Human escalation and review workflows",
  "Full documentation for every agent",
  "30 days of post-launch monitoring",
  "Monthly agent performance reviews",
  "Zero vendor lock-in — you own everything",
];

const FAQS = [
  {
    question: "What makes an AI OS different from just having a few automations?",
    answer:
      "Individual automations do one thing and stop. An AI OS is a connected system where agents share context, communicate with each other, and escalate intelligently. It's the difference between a collection of tools and an operating layer for your entire business.",
  },
  {
    question: "How long does it take to build?",
    answer:
      "A focused AI OS for a small business (5–8 core agents) typically takes 4–6 weeks. A more complex system with 10+ agents and deep integrations takes 6–10 weeks. We demo working agents every week so you see real progress throughout.",
  },
  {
    question: "What tools does it connect to?",
    answer:
      "Anything with an API — CRMs (HubSpot, Salesforce), databases (Airtable, Notion, Google Sheets), communication (Slack, Gmail, Intercom), and file storage (Google Drive, Dropbox, S3). We also build custom integrations for tools with non-standard APIs.",
  },
  {
    question: "Do I need technical staff to use or maintain it?",
    answer:
      "No. The command interface is designed for non-technical users. We document everything, set up monitoring, and offer retainer plans for ongoing maintenance. You can also run it fully in-house with the runbooks we provide.",
  },
  {
    question: "Can we start small and expand?",
    answer:
      "Yes — and we recommend it. We often start with the 3–4 highest-impact agents, prove value, then expand the OS over time. Every agent we build is designed to integrate into a larger system when you're ready.",
  },
  {
    question: "What AI models power the OS?",
    answer:
      "We select models based on task requirements — GPT-4o and Claude for reasoning-heavy tasks, smaller and faster models for classification and extraction. For self-hosted requirements, we use open-source models (Llama, Mistral). You're never locked into one provider.",
  },
];

export default function AIOperatingSystemPage() {
  return (
    <div className="min-h-screen font-sans">
      {/* ─── 1. HERO ─── */}
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[560px] w-[780px] -translate-x-1/2 rounded-full opacity-[0.15] blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse, #10b981, #0ea5e9, #6366f1, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <motion.div
          className="mx-auto max-w-3xl px-6 text-center"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.nav
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center justify-center gap-2 text-xs text-muted"
          >
            <Link href="/services" className="transition-colors hover:text-foreground">
              Services
            </Link>
            <span>/</span>
            <span className="text-foreground">Build Your AI OS</span>
          </motion.nav>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-medium text-emerald-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            AI that runs your entire operation
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl"
          >
            Replace your ops team
            <br />
            <span className="text-muted">with an AI OS.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            We design and deploy a complete AI operating system for your business —
            a connected network of agents, automations, and knowledge systems that
            handles sales, support, ops, and reporting on autopilot.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 items-center gap-2 justify-center rounded-full bg-accent px-8 text-sm font-medium text-accent-foreground shadow-sm transition-opacity hover:opacity-80"
            >
              Book a free OS audit
              <ArrowRightIcon />
            </motion.a>
            <motion.a
              href="#layers"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-8 text-sm font-medium text-foreground transition-colors hover:bg-border/40"
            >
              See how it works
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── 2. WHAT IT REPLACES ─── */}
      <section className="flex min-h-[60vh] items-center border-y border-border/60 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader
            label="What changes"
            title="Your team stops doing these things"
            description="Your AI OS takes over the repetitive, high-volume work — so your team focuses on decisions, relationships, and growth."
          />
          <motion.div
            className="mt-14 flex flex-col divide-y divide-border/60"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {WHAT_IT_REPLACES.map((item) => (
              <motion.div
                key={item.old}
                variants={fadeUp}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 gap-4 py-4"
              >
                <div className="flex items-center gap-2.5 text-sm text-muted line-through opacity-50">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted/40 flex-shrink-0" />
                  {item.old}
                </div>
                <div className="flex items-center gap-2.5 text-sm">
                  <span className="flex-shrink-0 text-emerald-600"><CheckIcon /></span>
                  {item.ai}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 3. LAYERS ─── */}
      <section id="layers" className="flex min-h-screen items-center py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="Architecture"
            title="Six layers. One operating system."
            description="Your AI OS is a stack of connected layers — each doing a specific job, all working together as a coherent system."
          />
          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {LAYERS.map((layer) => (
              <motion.div
                key={layer.title}
                variants={scaleIn}
                transition={{ duration: 0.45, ease: "easeOut" }}
                whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
                className="flex flex-col rounded-2xl border border-card-border bg-card p-8"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  {layer.icon}
                </div>
                <h3 className="text-lg font-semibold">{layer.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{layer.description}</p>
                <ul className="mt-6 flex flex-col gap-2">
                  {layer.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm">
                      <span className="text-emerald-600"><CheckIcon /></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 4. PROCESS ─── */}
      <section className="flex min-h-screen items-center border-y border-border/60 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="Our process"
            title="From workflow audit to full AI OS"
            description="A structured build process with weekly demos — you see every agent working before the full system goes live."
          />
          <motion.div
            className="mt-14 grid gap-0 border-t border-border/60 sm:grid-cols-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {PROCESS.map((s) => (
              <motion.div
                key={s.step}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="border-b border-border/60 py-8 pr-6 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                  {s.step}
                </div>
                <h3 className="text-[15px] font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                <p className="mt-4 font-mono text-xs text-muted/60">{s.duration}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 5. DELIVERABLES ─── */}
      <section className="flex min-h-[60vh] items-center py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader
            label="What you get"
            title="Everything in your AI OS"
            description="A complete, production-ready system — deployed to your accounts, fully documented, and yours to own."
          />
          <motion.div
            className="mt-14 grid gap-4 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {DELIVERABLES.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <span className="flex-shrink-0 text-emerald-600">
                  <CheckIcon />
                </span>
                <span className="text-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 6. PRICING ─── */}
      <section
        id="pricing"
        className="flex min-h-screen items-center border-y border-border/60 bg-card py-24 sm:py-32"
      >
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="Pricing"
            title="AI OS packages"
            description="Fixed-price builds. No hourly billing. A clear quote before we start — and you own everything we build."
          />
          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            <PricingCard
              tier="Starter OS"
              price="$5,000"
              period="project"
              description="A focused AI OS for one core function — sales, support, or operations."
              features={[
                "3–4 connected agents",
                "1 knowledge base",
                "Up to 5 tool integrations",
                "Basic observability dashboard",
                "Documentation & runbooks",
                "3–4 week delivery",
              ]}
              ctaText="Get started"
              ctaHref="#contact"
            />
            <PricingCard
              tier="Full Business OS"
              price="$12,000"
              period="project"
              description="A complete AI operating system across all core business functions."
              features={[
                "8–12 connected agents",
                "Full knowledge base pipeline",
                "Unlimited tool integrations",
                "Command interface",
                "Full observability stack",
                "30 days post-launch support",
                "6–8 week delivery",
              ]}
              highlighted
              ctaText="Most popular"
              ctaHref="#contact"
            />
            <PricingCard
              tier="AI OS Partner"
              price="Custom"
              period="month"
              description="Ongoing AI OS evolution — new agents, integrations, and improvements every month."
              features={[
                "All Full Business OS features",
                "New agents each month",
                "Monthly strategy sessions",
                "Performance reviews",
                "Priority SLA & support",
                "Cancel anytime",
              ]}
              ctaText="Book a call"
              ctaHref="#contact"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── 7. FAQ ─── */}
      <section className="flex min-h-[60vh] items-center py-24 sm:py-32">
        <div className="mx-auto w-full max-w-3xl px-6">
          <SectionHeader label="FAQ" title="AI OS questions, answered" />
          <motion.div
            className="mt-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {FAQS.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 8. CTA ─── */}
      <section
        id="contact"
        className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden bg-foreground text-background"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[100px]"
          style={{ background: "radial-gradient(ellipse, #10b981, #0ea5e9, transparent 70%)" }}
        />
        <motion.div
          className="mx-auto max-w-2xl px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={heroStagger}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-1.5 text-xs font-medium text-neutral-400"
          >
            <SparklesIcon />
            Free AI OS audit
          </motion.div>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Let&rsquo;s design your AI OS.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-4 max-w-md text-base leading-relaxed text-neutral-400"
          >
            Book a free 45-minute AI OS audit. We&rsquo;ll map your business workflows,
            identify which agents you need first, and design the architecture for
            your full operating system — before you spend a cent.
          </motion.p>
          <motion.a
            href="mailto:team@createworkflow.io?subject=Build My AI OS"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex h-12 items-center gap-2 justify-center rounded-full bg-white px-8 text-sm font-medium text-foreground shadow-sm transition-opacity hover:opacity-90"
          >
            team@createworkflow.io
            <ArrowRightIcon />
          </motion.a>
        </motion.div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border/60 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            <Link href="#layers" className="transition-colors hover:text-foreground">
              Architecture
            </Link>
            <Link href="#pricing" className="transition-colors hover:text-foreground">
              Pricing
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </Link>
            <Link href="/services/ai-automation" className="transition-colors hover:text-foreground">
              AI Automation
            </Link>
            <Link href="/services/self-hosting" className="transition-colors hover:text-foreground">
              Self Hosting
            </Link>
          </div>
          <p className="text-xs text-muted/60">
            &copy; {new Date().getFullYear()} Create Workflow
          </p>
        </div>
      </footer>
    </div>
  );
}
