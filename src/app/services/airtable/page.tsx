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
  AirtableIcon,
  ZapIcon,
  IntegrationIcon,
  StrategyIcon,
  MigrationIcon,
  SupportIcon,
  UsersIcon,
  BoxIcon,
  ShieldIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@/components/icons";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { PricingCard } from "@/components/PricingCard";
import { FAQItem } from "@/components/FAQItem";

/* ── Local components ── */

function DetailCard({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <motion.div
      variants={scaleIn}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
      className="flex flex-col rounded-2xl border border-card-border bg-card p-8"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      <ul className="mt-6 flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm">
            <span className="flex-shrink-0 text-emerald-600">
              <CheckIcon />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function UseCaseCard({
  icon,
  title,
  description,
  example,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  example: string;
}) {
  return (
    <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-foreground">
        {icon}
      </div>
      <h3 className="text-[15px] font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      <p className="mt-3 font-mono text-xs text-muted/60">{example}</p>
    </motion.div>
  );
}

/* ── Data ── */

const SERVICES = [
  {
    icon: <AirtableIcon />,
    title: "Relational Database Design",
    description:
      "Schema architecture with properly linked records, rollup fields, lookup fields, and formula calculations. We design normalized structures that eliminate data duplication and scale with your business.",
  },
  {
    icon: <StrategyIcon />,
    title: "Custom Interfaces & Dashboards",
    description:
      "Filtered views, Kanban boards, Gantt timelines, gallery views, and custom Airtable Interfaces. We build the views your team actually needs — not just the defaults.",
  },
  {
    icon: <IntegrationIcon />,
    title: "Forms & Data Collection",
    description:
      "Airtable forms with conditional logic, pre-filled fields, and third-party integrations. Connected to your database with validation rules so data comes in clean every time.",
  },
  {
    icon: <ZapIcon />,
    title: "Automations & Triggers",
    description:
      "Native Airtable automations plus n8n-powered workflows for complex logic. Record-triggered emails, Slack notifications, status updates, and multi-step business processes — all running without manual intervention.",
  },
  {
    icon: <SupportIcon />,
    title: "Reporting & Analytics",
    description:
      "Summary blocks, pivot tables, charts, and calculated dashboards. We build reporting layers that give you real-time visibility into your operations without exporting to spreadsheets.",
  },
  {
    icon: <MigrationIcon />,
    title: "Migration & Data Cleanup",
    description:
      "Moving from Google Sheets, Excel, legacy systems, or messy databases. We handle data deduplication, normalization, field mapping, and validation — zero data loss, zero downtime.",
  },
];

const DETAIL_CARDS = [
  {
    title: "Database Architecture",
    description:
      "We don't just create tables — we engineer a complete data architecture.",
    items: [
      "Entity-relationship mapping",
      "Table schema design with field types",
      "Linked record relationships (one-to-many, many-to-many)",
      "Rollup and lookup field configuration",
      "Formula fields for computed data",
      "Primary field strategy for record identification",
    ],
  },
  {
    title: "Interface Design",
    description:
      "Beautiful, functional interfaces your team will actually use.",
    items: [
      "Custom Airtable Interface pages",
      "Filtered and grouped views per role",
      "Kanban boards for pipeline management",
      "Calendar views for scheduling",
      "Gallery views for visual content",
      "Form views for data entry",
    ],
  },
  {
    title: "Automation Setup",
    description: "Eliminate repetitive work with intelligent automations.",
    items: [
      "Record-triggered automations",
      "Scheduled automations (daily/weekly reports)",
      "Conditional logic and branching",
      "Email and Slack notifications",
      "Cross-table data sync",
      "n8n integration for complex workflows",
    ],
  },
  {
    title: "Reporting Layer",
    description: "Get real-time insights without leaving Airtable.",
    items: [
      "Dashboard Interface with summary blocks",
      "Chart visualizations (bar, line, pie)",
      "Pivot table configurations",
      "Filtered summary views",
      "KPI tracking dashboards",
      "Export-ready report views",
    ],
  },
];

const USE_CASES = [
  {
    icon: <UsersIcon />,
    title: "Agencies & Studios",
    description:
      "Client management, project tracking, resource allocation, and deliverable pipelines. Replace scattered tools with one unified operations hub.",
    example: "Client portal · Project pipeline · Time tracking",
  },
  {
    icon: <BoxIcon />,
    title: "E-commerce Brands",
    description:
      "Inventory management, order tracking, supplier databases, and product catalogs. Real-time stock levels and automated reorder alerts.",
    example: "Product catalog · Inventory tracker · Order pipeline",
  },
  {
    icon: <ShieldIcon />,
    title: "Real Estate",
    description:
      "Property management, tenant databases, maintenance tracking, and CRM for buyers/sellers. Lease tracking with automated renewal reminders.",
    example: "Property database · Tenant CRM · Maintenance log",
  },
  {
    icon: <ZapIcon />,
    title: "Startups & SaaS",
    description:
      "Product roadmaps, hiring pipelines, investor CRM, and sprint management. The lightweight alternative to enterprise PM tools.",
    example: "Hiring pipeline · Product roadmap · Investor tracker",
  },
  {
    icon: <IntegrationIcon />,
    title: "Consultants & Freelancers",
    description:
      "Client portals, invoicing trackers, proposal management, and time logging. Everything you need to run a solo or small practice.",
    example: "Client CRM · Invoice tracker · Proposal pipeline",
  },
  {
    icon: <SupportIcon />,
    title: "Non-Profits & NGOs",
    description:
      "Donor management, event tracking, volunteer coordination, and grant applications. Purpose-built databases for mission-driven organizations.",
    example: "Donor database · Volunteer scheduler · Grant tracker",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Audit",
    description:
      "We review your current tools, data flows, and pain points. If you have existing spreadsheets or databases, we audit them to understand your data model.",
    duration: "1-2 days",
  },
  {
    step: "02",
    title: "Schema Design",
    description:
      "We design your complete database architecture — tables, fields, relationships, and views. You approve the blueprint before we build anything.",
    duration: "2-3 days",
  },
  {
    step: "03",
    title: "Build & Configure",
    description:
      "We build your database, configure interfaces, set up automations, and connect integrations. You get a demo walkthrough mid-build.",
    duration: "3-7 days",
  },
  {
    step: "04",
    title: "Test & Refine",
    description:
      "We load real data, test every automation, and refine views based on your feedback. Two rounds of revisions included in every project.",
    duration: "2-3 days",
  },
  {
    step: "05",
    title: "Launch & Train",
    description:
      "We deploy everything, record training videos, deliver documentation, and do a live walkthrough with your team. You're fully self-sufficient from day one.",
    duration: "1-2 days",
  },
];

const DELIVERABLES = [
  "Fully configured Airtable base(s)",
  "Documented schema with field descriptions",
  "Custom interfaces for each team role",
  "Automation workflows (tested & documented)",
  "Standard operating procedures (SOPs)",
  "Video training walkthroughs",
  "Data migration (if applicable)",
  "30 days of post-launch support",
  "Permission & access configuration",
  "Backup & recovery procedures",
];

const FAQS = [
  {
    question: "Why Airtable instead of a traditional database?",
    answer:
      "Airtable gives you the power of a relational database with the usability of a spreadsheet. Your team can view, edit, and manage data without writing SQL or needing a developer. It's the fastest way for non-technical founders to build a structured backend.",
  },
  {
    question: "Can you migrate my existing spreadsheets into Airtable?",
    answer:
      "Absolutely. We handle migrations from Google Sheets, Excel, CSV files, and other databases. We clean, deduplicate, and restructure your data during the migration — so you start with a pristine database, not a copy of your old mess.",
  },
  {
    question: "Will my team need training to use the system?",
    answer:
      "Every project includes video walkthroughs, written SOPs, and a live training session. We build interfaces that are intuitive enough for anyone on your team to use without technical knowledge.",
  },
  {
    question: "What Airtable plan do I need?",
    answer:
      "Most projects work on Airtable's Pro plan ($20/user/month). If you need advanced features like sync between bases or higher API limits, you may need the Business plan. We'll recommend the right plan during our discovery call.",
  },
  {
    question: "Can Airtable connect to my other tools?",
    answer:
      "Yes. Airtable has native integrations with Slack, Gmail, Google Calendar, and more. For complex integrations (Stripe, Shopify, custom APIs), we use n8n to build reliable data pipelines between Airtable and your other tools.",
  },
  {
    question: "How many records can Airtable handle?",
    answer:
      "Airtable Pro supports 50,000 records per table and Business supports 100,000. For most small-to-medium businesses, this is more than enough. If you're approaching these limits, we can design multi-base architectures or hybrid solutions.",
  },
  {
    question: "Do I own the Airtable base after the project?",
    answer:
      "100%. Everything is built in your Airtable account. You own the base, the data, the automations — all of it. We provide documentation so you're fully self-sufficient. Zero vendor lock-in.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "Every project includes 30 days of post-launch support for tweaks and questions. Beyond that, we offer retainer plans for ongoing optimization, new views, additional automations, and evolving your system as your business grows.",
  },
  {
    question:
      "How is this different from hiring an Airtable consultant on Upwork?",
    answer:
      "We don't just configure tables — we engineer complete operational systems. That means proper schema design, automation architecture, n8n integration for complex workflows, documented SOPs, and training. We think about how your system scales, not just how it looks today.",
  },
  {
    question:
      "Can you build automations that connect Airtable to external services?",
    answer:
      "That's one of our specialties. We combine Airtable's native automations with n8n for complex multi-step workflows. Think: new Airtable record triggers an email sequence, updates your CRM, posts to Slack, and creates an invoice — all automatically.",
  },
];

const STATS = [
  { number: "120+", label: "Databases Built" },
  { number: "500K+", label: "Records Managed" },
  { number: "40+", label: "Industries Served" },
  { number: "99%", label: "Uptime Reliability" },
];

/* ── Page ── */

export default function AirtableServices() {
  return (
    <div className="min-h-screen font-sans">
      {/* ─── 1. HERO ─── */}
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[520px] w-[700px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse, #bbf7d0, #a5f3fc, transparent 70%)",
          }}
        />

        <motion.div
          className="mx-auto max-w-3xl px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >
          {/* Breadcrumb */}
          <motion.nav
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center justify-center gap-2 text-xs text-muted"
          >
            <Link
              href="/services"
              className="transition-colors hover:text-foreground"
            >
              Services
            </Link>
            <span>/</span>
            <span className="text-foreground">Airtable</span>
          </motion.nav>

          {/* Badge */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-medium text-emerald-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Airtable Specialist
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Your business deserves
            <br />
            <span className="text-muted">more than a spreadsheet.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            We design, build, and optimize Airtable databases for non-technical
            founders. From simple CRMs to complex multi-base architectures —
            structured so your entire team can operate without spreadsheets or
            code.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <motion.a
              href="https://calendly.com/rahultyagico"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-80"
            >
              Book a free consultation
              <ArrowRightIcon />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-7 text-sm font-medium transition-colors hover:bg-neutral-50"
            >
              See what we build
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── 2. STATS ─── */}
      <section className="flex min-h-[50vh] items-center justify-center py-24 sm:py-32">
        <motion.div
          className="mx-auto grid max-w-4xl grid-cols-2 gap-10 px-6 sm:grid-cols-4 sm:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {stat.number}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── 3. WHAT WE BUILD ─── */}
      <section
        id="services"
        className="border-y border-border/60 bg-card py-24 sm:py-32"
      >
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="What we build"
            title="Complete Airtable solutions, end to end"
            description="From database architecture to automated workflows, we handle every layer of your Airtable system."
          />
          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 4. DEEP DIVE ─── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="Deep dive"
            title="What each service includes"
            description="We go beyond basic configuration. Here's exactly what you get with each service area."
          />
          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {DETAIL_CARDS.map((card) => (
              <DetailCard key={card.title} {...card} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 5. USE CASES ─── */}
      <section className="border-y border-border/60 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="Who this is for"
            title="Airtable solutions for every industry"
            description="We've built databases for dozens of industries. Here's how Airtable transforms operations across different business types."
          />
          <motion.div
            className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {USE_CASES.map((useCase) => (
              <UseCaseCard key={useCase.title} {...useCase} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 6. PROCESS ─── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="How we work"
            title="Your Airtable project, step by step"
            description="A clear, predictable process from first call to launch day."
          />
          <motion.div
            className="mt-14 grid gap-0 border-t border-border/60 sm:grid-cols-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {PROCESS_STEPS.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="border-b border-border/60 py-8 pr-6 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  {step.step}
                </div>
                <h3 className="text-[15px] font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
                <p className="mt-4 font-mono text-xs text-muted/60">
                  {step.duration}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 7. DELIVERABLES ─── */}
      <section className="border-y border-border/60 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader
            label="What you get"
            title="Every project includes"
            description="Comprehensive deliverables so you can operate independently from day one."
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
                transition={{ duration: 0.4, ease: "easeOut" }}
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

      {/* ─── 8. PRICING ─── */}
      <section id="pricing" className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="Pricing"
            title="Airtable packages for every stage"
            description="Transparent, project-based pricing. No hourly billing surprises."
          />
          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <PricingCard
              tier="Quick Setup"
              price="$500"
              period="project"
              description="Perfect for a simple database or single workflow."
              features={[
                "Up to 3 tables",
                "Basic views & filters",
                "1 automation workflow",
                "Simple interface setup",
                "Documentation included",
                "1-week delivery",
              ]}
              ctaText="Get started"
              ctaHref="/contact"
            />
            <PricingCard
              tier="Full Build"
              price="$1,500"
              period="project"
              description="For founders ready to replace spreadsheets with a real system."
              features={[
                "Unlimited tables & relationships",
                "Custom interfaces & dashboards",
                "Multiple automation workflows",
                "Forms with conditional logic",
                "Reporting & analytics layer",
                "Team training & SOPs",
                "2-3 week delivery",
              ]}
              highlighted
              ctaText="Most popular"
              ctaHref="/contact"
            />
            <PricingCard
              tier="Enterprise"
              price="$3,000+"
              period="project"
              description="Multi-base architecture with advanced integrations."
              features={[
                "Multi-base architecture",
                "Advanced n8n integrations",
                "Custom API connections",
                "Data migration & cleanup",
                "Priority ongoing support",
                "Dedicated project channel",
                "Custom timeline",
              ]}
              ctaText="Book a call"
              ctaHref="/contact"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── 9. FAQ ─── */}
      <section id="faq" className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader
            label="FAQ"
            title="Airtable questions, answered"
          />
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

      {/* ─── 10. CTA ─── */}
      <section
        id="contact"
        className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden bg-foreground text-background"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
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
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Ready to upgrade from spreadsheets?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-5 max-w-md text-base leading-relaxed text-background/60"
          >
            Book a free 30-minute Airtable consultation. We&apos;ll review your
            current setup, identify quick wins, and scope your project — no
            obligation.
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <motion.a
              href="mailto:team@createworkflow.io"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-background px-8 text-sm font-medium text-foreground transition-opacity hover:opacity-80"
            >
              team@createworkflow.io
              <ArrowRightIcon />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── 11. FOOTER ─── */}
      <footer className="border-t border-border/60 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            <Link
              href="/services"
              className="transition-colors hover:text-foreground"
            >
              All Services
            </Link>
            <Link
              href="#pricing"
              className="transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-foreground"
            >
              Contact
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
