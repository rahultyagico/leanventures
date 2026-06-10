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
  ShieldIcon,
  ZapIcon,
  SparklesIcon,
} from "@/components/icons";
import { SectionHeader } from "@/components/SectionHeader";
import { PricingCard } from "@/components/PricingCard";
import { FAQItem } from "@/components/FAQItem";

const FEATURES = [
  {
    icon: <ShieldIcon />,
    title: "Full Data Sovereignty",
    description:
      "Your data never leaves your servers. No third-party API calls, no SaaS data-sharing agreements — just your models on your infrastructure.",
    items: [
      "On-premise or private cloud",
      "Zero external data exposure",
      "GDPR & HIPAA ready",
      "Air-gapped options available",
    ],
  },
  {
    icon: <ZapIcon />,
    title: "Open-Source AI Stack",
    description:
      "We deploy and tune the best open-source models for your workload — Llama, Mistral, Qwen, and more — optimised for your hardware budget.",
    items: [
      "LLM deployment & fine-tuning",
      "GPU and CPU optimisation",
      "Model quantisation (GGUF, GPTQ)",
      "Local embedding pipelines",
    ],
  },
  {
    icon: <SparklesIcon />,
    title: "Production Infrastructure",
    description:
      "A scalable, observable stack built with tools you own — from load balancing to monitoring dashboards and auto-scaling policies.",
    items: [
      "Docker / Kubernetes deployment",
      "Nginx + SSL termination",
      "Prometheus & Grafana monitoring",
      "Automated backups & failover",
    ],
  },
];

const STACK = [
  {
    category: "LLM Runtime",
    tools: ["Ollama", "vLLM", "llama.cpp", "LM Studio Server"],
  },
  {
    category: "Orchestration",
    tools: ["n8n (self-hosted)", "Flowise", "LangChain", "Custom API"],
  },
  {
    category: "Vector / Knowledge",
    tools: ["Qdrant", "Weaviate", "Chroma", "pgvector"],
  },
  {
    category: "Databases",
    tools: ["PostgreSQL", "MySQL", "Redis", "MinIO (S3-compatible)"],
  },
  {
    category: "Infra & DevOps",
    tools: ["Docker Compose", "Kubernetes", "Traefik", "Cloudflare Tunnel"],
  },
  {
    category: "Monitoring",
    tools: ["Prometheus", "Grafana", "Uptime Kuma", "Loki (logs)"],
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Audit",
    desc: "We review your current setup, data requirements, compliance constraints, and hardware budget before recommending a stack.",
    duration: "1 day",
  },
  {
    step: "02",
    title: "Design",
    desc: "We produce a full infrastructure blueprint — server specs, stack selection, network topology, and a deployment plan.",
    duration: "2–3 days",
  },
  {
    step: "03",
    title: "Deploy",
    desc: "We deploy, configure, and harden your stack — models, APIs, databases, reverse proxy, SSL, and monitoring.",
    duration: "1–2 weeks",
  },
  {
    step: "04",
    title: "Optimise",
    desc: "We benchmark inference speed, tune quantisation, and set auto-scaling rules to get the best performance per dollar.",
    duration: "2–3 days",
  },
  {
    step: "05",
    title: "Handoff",
    desc: "Full documentation, runbooks, and a live walkthrough so your team can operate and extend the stack independently.",
    duration: "Included",
  },
];

const FAQS = [
  {
    question: "What hardware do I need?",
    answer:
      "It depends on the models you want to run. A single NVIDIA RTX 4090 or A100 can serve most business workloads. We help you spec the right hardware for your use case and budget — including cloud GPU instances (AWS, GCP, Hetzner, Lambda Labs) if you don't want bare metal.",
  },
  {
    question: "Can you host it on my existing cloud account?",
    answer:
      "Yes. We deploy to AWS, GCP, Azure, Hetzner, DigitalOcean, or any VPS you already have. We also set up fully on-premise deployments for compliance-heavy environments.",
  },
  {
    question: "How do open-source models compare to GPT-4o?",
    answer:
      "For many business tasks — classification, summarisation, extraction, Q&A — modern models like Llama 3.3 70B or Mistral Small match GPT-4o performance at a fraction of the cost. We evaluate models against your actual workload before committing to a stack.",
  },
  {
    question: "What about updates and maintenance?",
    answer:
      "We offer monthly retainer plans that cover model updates, stack upgrades, security patches, and on-call support. Or we can hand off fully documented infrastructure so your team manages it in-house.",
  },
  {
    question: "Is my data safe during the setup process?",
    answer:
      "We access your servers via encrypted SSH with key-based authentication. We never store your credentials. All sensitive configuration is stored in environment files that remain on your servers only.",
  },
];

export default function SelfHostingPage() {
  return (
    <div className="min-h-screen font-sans">
      {/* ─── 1. HERO ─── */}
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[560px] w-[780px] -translate-x-1/2 rounded-full opacity-[0.15] blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse, #22d3ee, #0ea5e9, #6366f1, transparent 70%)",
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
            <span className="text-foreground">Self Hosting Infrastructure</span>
          </motion.nav>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-medium text-cyan-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            Your data. Your servers. Your control.
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl"
          >
            AI infrastructure
            <br />
            <span className="text-muted">you actually own.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            We deploy, configure, and optimise self-hosted AI stacks — open-source
            LLMs, private databases, automation pipelines — on your own servers.
            No SaaS subscriptions. No data exposure. No vendor lock-in.
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
              Get a free infrastructure review
              <ArrowRightIcon />
            </motion.a>
            <motion.a
              href="#stack"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-8 text-sm font-medium text-foreground transition-colors hover:bg-border/40"
            >
              See the stack
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── 2. FEATURES ─── */}
      <section className="flex min-h-screen items-center border-y border-border/60 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="Why self-host"
            title="Own your AI stack, own your future"
            description="SaaS AI tools are convenient — until you have a compliance audit, a pricing change, or a data breach. Self-hosted infrastructure gives you control that no subscription ever will."
          />
          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {FEATURES.map((f) => (
              <motion.div
                key={f.title}
                variants={scaleIn}
                transition={{ duration: 0.45, ease: "easeOut" }}
                whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
                className="flex flex-col rounded-2xl border border-card-border bg-background p-8"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.description}</p>
                <ul className="mt-6 flex flex-col gap-2">
                  {f.items.map((item) => (
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

      {/* ─── 3. STACK ─── */}
      <section id="stack" className="flex min-h-[70vh] items-center py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="The stack"
            title="Battle-tested open-source tools"
            description="We select and configure the best open-source tools for each layer of your infrastructure — no bloat, no black boxes."
          />
          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {STACK.map((s) => (
              <motion.div
                key={s.category}
                variants={fadeUp}
                transition={{ duration: 0.45 }}
                className="rounded-2xl border border-card-border bg-card p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted/60 mb-3">
                  {s.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md border border-border/60 bg-background px-2.5 py-1 text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 4. PROCESS ─── */}
      <section className="flex min-h-screen items-center border-y border-border/60 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="How we work"
            title="From blank server to production stack"
            description="A clear process with no surprises — you see what's being built at every step."
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
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-xs font-bold text-cyan-700">
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

      {/* ─── 5. PRICING ─── */}
      <section id="pricing" className="flex min-h-screen items-center py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="Pricing"
            title="Infrastructure packages"
            description="Fixed-price deployments. You own everything from day one — no ongoing licence fees to us."
          />
          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            <PricingCard
              tier="Starter Stack"
              price="$1,500"
              period="one-time"
              description="A single self-hosted LLM with a basic API endpoint — perfect for testing and internal tools."
              features={[
                "1 open-source LLM deployed",
                "Docker Compose setup",
                "REST API endpoint",
                "SSL & reverse proxy",
                "Basic monitoring",
                "Setup documentation",
              ]}
              ctaText="Get started"
              ctaHref="#contact"
            />
            <PricingCard
              tier="Full AI Stack"
              price="$4,000"
              period="one-time"
              description="Complete self-hosted infrastructure — LLMs, vector database, automation engine, and monitoring."
              features={[
                "Up to 3 LLMs deployed",
                "Vector database (Qdrant / pgvector)",
                "n8n or Flowise automation",
                "Kubernetes or Docker Compose",
                "Prometheus + Grafana monitoring",
                "Full documentation & runbooks",
                "1-week delivery",
              ]}
              highlighted
              ctaText="Most popular"
              ctaHref="#contact"
            />
            <PricingCard
              tier="Managed Infra"
              price="Custom"
              period="month"
              description="Ongoing infrastructure partner — updates, scaling, security patches, and on-call support."
              features={[
                "All Full AI Stack features",
                "Monthly stack updates",
                "Security hardening",
                "On-call support",
                "Performance reviews",
                "Cancel anytime",
              ]}
              ctaText="Book a call"
              ctaHref="#contact"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── 6. FAQ ─── */}
      <section className="flex min-h-[60vh] items-center border-y border-border/60 bg-card py-24 sm:py-32">
        <div className="mx-auto w-full max-w-3xl px-6">
          <SectionHeader label="FAQ" title="Self-hosting questions, answered" />
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

      {/* ─── 7. CTA ─── */}
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
          style={{ background: "radial-gradient(ellipse, #22d3ee, #0ea5e9, transparent 70%)" }}
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
            Free infrastructure review
          </motion.div>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Ready to own your stack?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-4 max-w-md text-base leading-relaxed text-neutral-400"
          >
            Book a free 30-minute review. We&rsquo;ll assess your current setup,
            identify the right stack for your workload, and give you a clear
            deployment plan — before you spend anything.
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

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border/60 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            <Link href="#stack" className="transition-colors hover:text-foreground">
              The Stack
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
            <Link href="/services/ai-os" className="transition-colors hover:text-foreground">
              Build Your AI OS
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
