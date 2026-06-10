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
  BotIcon,
  SparklesIcon,
  ScanIcon,
  MailIcon,
  SearchIcon,
  ZapIcon,
  CheckIcon,
  ArrowRightIcon,
  UsersIcon,
  IntegrationIcon,
  SupportIcon,
} from "@/components/icons";
import { SectionHeader } from "@/components/SectionHeader";
import { FAQItem } from "@/components/FAQItem";

/* ── Local components ── */

function CapabilityCard({
  icon,
  title,
  description,
  items,
}: {
  icon: React.ReactNode;
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
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      <ul className="mt-6 flex flex-col gap-2">
        {items.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm">
            <span className="text-emerald-600">
              <CheckIcon />
            </span>
            {f}
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

const CAPABILITIES = [
  {
    icon: <BotIcon />,
    title: "Autonomous AI Agents",
    description:
      "Multi-step agents that research, decide, and act without human intervention — handling complex tasks across your tools, APIs, and databases around the clock.",
    items: [
      "Multi-agent orchestration",
      "Tool & API calling",
      "Memory and context retention",
      "Human-in-the-loop escalation",
    ],
  },
  {
    icon: <ScanIcon />,
    title: "Intelligent Document Processing",
    description:
      "Extract, classify, and route information from PDFs, emails, forms, and invoices automatically. Structured data out, manual work eliminated.",
    items: [
      "OCR + AI extraction",
      "Contract & invoice parsing",
      "Automatic categorisation",
      "Database routing & storage",
    ],
  },
  {
    icon: <SearchIcon />,
    title: "Lead Qualification & Outreach",
    description:
      "AI that scores inbound leads, researches prospects, personalises outreach, and books meetings — so your sales team only talks to people ready to buy.",
    items: [
      "Lead scoring & ranking",
      "Automated prospect research",
      "Personalised email sequences",
      "CRM sync & handoff",
    ],
  },
  {
    icon: <SupportIcon />,
    title: "Customer Support Automation",
    description:
      "Handle 80% of support tickets automatically. Answers FAQs, looks up orders, processes refunds, and escalates edge cases to a human with full context.",
    items: [
      "FAQ & knowledge base answering",
      "Order status & refund handling",
      "Ticket triage & routing",
      "Seamless human handoff",
    ],
  },
  {
    icon: <MailIcon />,
    title: "Email & Inbox Intelligence",
    description:
      "An AI layer on top of your inbox that reads, categorises, drafts replies, and flags what needs your attention — so you spend time on decisions, not messages.",
    items: [
      "Intent detection & classification",
      "Auto-draft responses",
      "Priority flagging",
      "CRM & task creation",
    ],
  },
  {
    icon: <ZapIcon />,
    title: "Workflow Intelligence Layer",
    description:
      "Inject AI decision-making into your existing n8n, Zapier, or Make workflows. Add smart routing, summarisation, sentiment analysis, and dynamic content generation.",
    items: [
      "AI nodes in existing workflows",
      "Sentiment & intent analysis",
      "Dynamic content generation",
      "Conditional AI routing",
    ],
  },
];

const DEEP_DIVE = [
  {
    title: "Agent Architecture & Design",
    description: "We engineer the system, not just the prompt.",
    items: [
      "Single vs. multi-agent system design",
      "Tool and function call mapping",
      "Memory strategy (short vs. long-term)",
      "Fallback and retry logic",
      "Cost and token optimisation",
      "Observability and tracing setup",
    ],
  },
  {
    title: "Model Selection & Prompting",
    description: "The right model for every task in your pipeline.",
    items: [
      "GPT-4o, Claude 3.5, Gemini Pro evaluation",
      "Task-specific model routing",
      "System prompt architecture",
      "Few-shot and chain-of-thought prompting",
      "Output format enforcement",
      "Structured JSON / function output",
    ],
  },
  {
    title: "Integrations & Data Access",
    description: "Agents that actually connect to your world.",
    items: [
      "CRM, Airtable, Notion, Google Sheets",
      "REST API and webhook connections",
      "Vector database for knowledge retrieval",
      "File and email inbox access",
      "Slack, Gmail, HubSpot, Intercom",
      "Custom tool development",
    ],
  },
  {
    title: "Safety, QA & Monitoring",
    description: "Production-grade AI you can trust.",
    items: [
      "Guardrails and content filtering",
      "Human-in-the-loop for edge cases",
      "Evaluation suite for regressions",
      "Cost and usage monitoring",
      "Alert thresholds and fallback modes",
      "Weekly performance reviews",
    ],
  },
];

const USE_CASES = [
  {
    icon: <UsersIcon />,
    title: "Agencies & Studios",
    description:
      "Automate client briefing intake, generate first-draft proposals, summarise meeting notes, and send automated project updates without lifting a finger.",
    example: "Brief intake agent · Proposal drafter · Status reporter",
  },
  {
    icon: <IntegrationIcon />,
    title: "SaaS & Tech Startups",
    description:
      "Onboard new users automatically, detect churn signals in product usage, and deflect 70%+ of support tickets before they reach your team.",
    example: "Onboarding agent · Churn detector · Support deflection",
  },
  {
    icon: <SearchIcon />,
    title: "B2B Sales Teams",
    description:
      "Research every inbound lead, score them against your ICP, personalise outreach at scale, and auto-log every touchpoint to your CRM.",
    example: "Lead researcher · Outreach personaliser · CRM logger",
  },
  {
    icon: <ScanIcon />,
    title: "Finance & Operations",
    description:
      "Process invoices and receipts automatically, flag anomalies, route approvals, and generate weekly financial summaries without opening a spreadsheet.",
    example: "Invoice processor · Approval router · Report generator",
  },
  {
    icon: <BotIcon />,
    title: "E-commerce Brands",
    description:
      "Handle returns, answer order queries, generate product descriptions at scale, and identify high-value customers for re-engagement campaigns.",
    example: "Returns agent · Description generator · VIP detector",
  },
  {
    icon: <MailIcon />,
    title: "Professional Services",
    description:
      "Automate client intake forms, draft engagement letters, track billable milestones, and send proactive status updates — without admin overhead.",
    example: "Intake agent · Engagement drafter · Milestone tracker",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    desc: "We map your highest-volume, most repetitive workflows and identify where AI can eliminate the most work fastest.",
    duration: "1–2 days",
  },
  {
    step: "02",
    title: "Architect",
    desc: "We design the agent structure, select models, define tool access, and produce a technical spec for your sign-off.",
    duration: "2–3 days",
  },
  {
    step: "03",
    title: "Build & Prompt",
    desc: "We build the agents, engineer the prompts, wire up integrations, and run edge-case testing until reliability is proven.",
    duration: "1–4 weeks",
  },
  {
    step: "04",
    title: "Evaluate",
    desc: "Every agent goes through a structured eval suite before it touches production. You see real output on real data before we go live.",
    duration: "2–3 days",
  },
  {
    step: "05",
    title: "Deploy & Monitor",
    desc: "We deploy with full observability, set cost alerts, configure human escalation, and monitor the first weeks of live operation.",
    duration: "Ongoing",
  },
];

const DELIVERABLES = [
  "Fully deployed AI agents (to your accounts)",
  "Prompt library with documented system prompts",
  "Integration with your existing tools & databases",
  "Monitoring dashboard with cost & usage tracking",
  "Human escalation & handoff workflows",
  "Evaluation suite for ongoing quality testing",
  "Runbooks and documentation",
  "30 days of post-launch support",
  "Model performance review at 30 days",
  "Zero vendor lock-in — you own everything",
];

const FAQS = [
  {
    question: "What AI models do you use?",
    answer:
      "We select the best model for each task — typically GPT-4o, Claude 3.5 Sonnet, or Gemini Pro for reasoning-heavy tasks, and smaller models (GPT-4o mini, Claude Haiku) for high-volume classification or extraction work. We evaluate cost vs. capability for every step in your pipeline.",
  },
  {
    question: "How do you prevent AI from making mistakes?",
    answer:
      "Every agent we build includes guardrails, output validation, and human-in-the-loop escalation for edge cases. We run evaluation suites on real data before production launch. For high-stakes workflows, we always route exceptions to a human rather than letting the AI guess.",
  },
  {
    question: "Can you connect AI to my existing tools?",
    answer:
      "Yes — that's core to what we do. We connect agents to CRMs (HubSpot, Salesforce), databases (Airtable, Notion, Google Sheets), email (Gmail, Outlook), support platforms (Intercom, Zendesk), and any tool with a REST API. If it has an API, we can wire the AI into it.",
  },
  {
    question: "How is this different from just using ChatGPT?",
    answer:
      "ChatGPT is a chat interface — it requires a human to type a question and act on the answer. We build autonomous agents that run on triggers (an email arrives, a form is submitted, a record is created) and complete multi-step tasks without any human involvement. No prompt, no paste, no copy — just results.",
  },
  {
    question: "What about data privacy and security?",
    answer:
      "We can work with any model that meets your data requirements, including enterprise-tier API agreements with OpenAI and Anthropic (which have no training-use provisions), self-hosted open-source models (Llama, Mistral), or Azure OpenAI for full data residency. We advise on the right setup for your compliance needs.",
  },
  {
    question: "Do I need technical staff to maintain AI agents after launch?",
    answer:
      "No. We document everything, set up monitoring dashboards, and configure alerts so your team knows immediately if something behaves unexpectedly. Most maintenance is handled by our retainer plans. For teams that want to self-manage, we run a handoff session and leave comprehensive runbooks.",
  },
  {
    question: "How long does a typical AI automation project take?",
    answer:
      "A single focused agent (e.g. lead qualifier, support deflection bot) typically ships in 2–3 weeks. A multi-agent system with complex integrations usually takes 4–6 weeks. We build in weekly demos so you see real progress — nothing is a black box.",
  },
];

const STATS = [
  { number: "24/7", label: "Always running" },
  { number: "80%", label: "Support tickets deflected" },
  { number: "10×", label: "Faster than manual" },
  { number: "2–4 wks", label: "Time to deploy" },
];


/* ── Page ── */

export default function AIAutomationServices() {
  return (
    <div className="min-h-screen font-sans">
      {/* ─── 1. HERO ─── */}
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
        {/* Gradient orb */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[560px] w-[780px] -translate-x-1/2 rounded-full opacity-[0.18] blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse, #a855f7, #6366f1, #ec4899, transparent 70%)",
          }}
        />
        {/* Subtle grid */}
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
          {/* Breadcrumb */}
          <motion.nav
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center justify-center gap-2 text-xs text-muted"
          >
            <Link href="/services" className="transition-colors hover:text-foreground">
              Services
            </Link>
            <span>/</span>
            <span className="text-foreground">AI Automation</span>
          </motion.nav>

          {/* Badge */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-xs font-medium text-violet-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
            </span>
            Stop doing $10/hr work as a $10k/hr founder.
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl"
          >
            Your most repetitive work,
            <br />
            <span className="text-muted">done by AI.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Your competitors have AI working overnight. We build the autonomous
            agents and intelligent workflows that handle lead qualification,
            support tickets, document processing, and operations — 24/7, without hiring.
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
              Book a free AI audit
              <ArrowRightIcon />
            </motion.a>
            <motion.a
              href="#capabilities"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-8 text-sm font-medium text-foreground transition-colors hover:bg-border/40"
            >
              See what we build
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── 2. STATS ─── */}
      <section className="flex min-h-[50vh] items-center justify-center border-y border-border/60 bg-card py-24 sm:py-32">
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
              transition={{ duration: 0.5 }}
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

      {/* ─── 3. CAPABILITIES ─── */}
      <section
        id="capabilities"
        className="flex min-h-screen items-center py-24 sm:py-32"
      >
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="What we build"
            title="AI that works while you sleep"
            description="From autonomous agents to intelligent document processing — we build AI systems that take real work off your plate, not just answer questions."
          />
          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {CAPABILITIES.map((cap) => (
              <CapabilityCard key={cap.title} {...cap} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 4. DEEP DIVE ─── */}
      <section className="flex min-h-screen items-center border-y border-border/60 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="Under the hood"
            title="Engineering that goes deeper than a prompt"
            description="Anyone can call an API. We architect production-grade AI systems — with proper memory, tool use, evaluation, and safety built in from the start."
          />
          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {DEEP_DIVE.map((card) => (
              <motion.div
                key={card.title}
                variants={scaleIn}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
                className="flex flex-col rounded-2xl border border-card-border bg-background p-8"
              >
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-muted">{card.description}</p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm">
                      <span className="flex-shrink-0 text-violet-500">
                        <CheckIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 5. USE CASES ─── */}
      <section className="flex min-h-screen items-center py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="Who this is for"
            title="AI automation for every kind of founder"
            description="We've deployed AI agents across dozens of industries. Here's how it transforms operations in the businesses we work with most."
          />
          <motion.div
            className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {USE_CASES.map((uc) => (
              <UseCaseCard key={uc.title} {...uc} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 6. PROCESS ─── */}
      <section className="flex min-h-screen items-center border-y border-border/60 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="Our process"
            title="From workflow audit to live agent in weeks"
            description="A structured process that eliminates surprises — you know exactly what's being built, why, and when it goes live."
          />
          <motion.div
            className="mt-14 grid gap-0 border-t border-border/60 sm:grid-cols-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {PROCESS_STEPS.map((s) => (
              <motion.div
                key={s.step}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="border-b border-border/60 py-8 pr-6 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">
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

      {/* ─── 7. DELIVERABLES ─── */}
      <section className="flex min-h-[60vh] items-center py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader
            label="What you get"
            title="Every project includes"
            description="Production-ready AI with everything you need to run it confidently — no black boxes."
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

      {/* ─── 10. FAQ ─── */}
      <section className="flex min-h-screen items-center py-24 sm:py-32">
        <div className="mx-auto w-full max-w-3xl px-6">
          <SectionHeader label="FAQ" title="AI automation questions, answered" />
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

      {/* ─── 11. CTA ─── */}
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
          style={{ background: "radial-gradient(ellipse, #a855f7, #6366f1, transparent 70%)" }}
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
            Free AI opportunity audit
          </motion.div>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Let&rsquo;s find your first AI win.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-4 max-w-md text-base leading-relaxed text-neutral-400"
          >
            Book a free 30-minute workflow audit. We&rsquo;ll identify your
            highest-value automation opportunity and show you exactly how an AI
            agent would handle it — before you spend a cent.
          </motion.p>
          <motion.a
            href="mailto:team@createworkflow.io"
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

      {/* ─── 12. FOOTER ─── */}
      <footer className="border-t border-border/60 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            <Link href="#capabilities" className="transition-colors hover:text-foreground">
              Capabilities
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </Link>
            <Link href="/services/airtable" className="transition-colors hover:text-foreground">
              Airtable Services
            </Link>
            <Link href="/labs" className="transition-colors hover:text-foreground">
              Customized Solutions
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
