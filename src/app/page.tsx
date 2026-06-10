"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  heroStagger,
} from "@/components/animations";
import {
  N8nIcon,
  AirtableIcon,
  WebhookIcon,
  ZapIcon,
  IntegrationIcon,
  StrategyIcon,
  MigrationIcon,
  SupportIcon,
  UsersIcon,
  ClockIcon,
  ShieldIcon,
  BotIcon,
  SparklesIcon,
  ScanIcon,
} from "@/components/icons";
import { ServiceCard } from "@/components/ServiceCard";
import { StepCard } from "@/components/StepCard";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionHeader } from "@/components/SectionHeader";
import { PricingCard } from "@/components/PricingCard";
import { FAQItem } from "@/components/FAQItem";

const TESTIMONIALS = [
  {
    quote:
      "They don't just know how to build things — they understand why certain approaches are better than others. Every recommendation came with reasoning. They steered me toward proven structures and scalable automation patterns, saving me significant time, rework, and resources. The speed at which I can now design, iterate, and improve has increased dramatically.",
    name: "[Name]",
    role: "[Role]",
  },
  {
    quote:
      "Create Workflow doesn't operate like a team that simply completes tasks for you. They coach. They teach. They challenge your assumptions. When I proposed certain design ideas, they didn't automatically agree — they asked questions, pushed me to clarify requirements, and think in systems rather than isolated features. That shift in mindset has been one of the most valuable outcomes of working together.",
    name: "[Name]",
    role: "[Role]",
  },
  {
    quote:
      "Rather than patching issues, they look at root causes. Rather than adding complexity, they search for simplification. They consistently asked how to design something robust, clean, and future-proof. That perspective helped me move from building tactical solutions to building strategic systems.",
    name: "[Name]",
    role: "[Role]",
  },
  {
    quote:
      "Create Workflow is more than a talented tech team. They have very good business and common sense and are a terrific sounding board on problem solving and offering creative solutions. Very responsive and reliable. I would recommend them highly.",
    name: "[Name]",
    role: "[Role]",
  },
  {
    quote:
      "My problem persisted for 6 months until Create Workflow came and delivered the project in 3 days. They went an extra mile to help me host and run it, which wasn't in their scope. Create Workflow is top tier talent and one of the most professional teams I've seen in tech. Extremely reliable.",
    name: "[Name]",
    role: "[Role]",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const blobY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const blobScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const blobOpacity = useTransform(scrollYProgress, [0, 0.8], [0.3, 0]);

  return (
    <div className="min-h-screen font-sans">
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative isolate flex min-h-screen items-center justify-center overflow-hidden"
      >
        <motion.div
          aria-hidden
          suppressHydrationWarning
          style={{
            y: blobY,
            scale: blobScale,
            opacity: blobOpacity,
            background:
              "radial-gradient(ellipse, var(--gradient-start), var(--gradient-end), transparent 70%)",
          }}
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[480px] w-[640px] -translate-x-1/2 rounded-full blur-[100px]"
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
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Accepting new clients
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl"
          >
            You focus on the vision.
            <br />
            <span className="text-muted">We build the systems.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Technical services for non-technical founders. We design n8n
            automations, Airtable backends, and custom integrations&mdash;so
            your startup runs on autopilot.
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
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-medium text-accent-foreground shadow-sm transition-opacity hover:opacity-80"
            >
              Get a free consultation
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-8 text-sm font-medium text-foreground transition-colors hover:bg-border/40"
            >
              See what we do
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="border-y border-border/60 bg-card"
      >
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6 py-8 text-muted">
          <span className="text-xs font-medium uppercase tracking-widest">
            Built with
          </span>
          {[
            { icon: <N8nIcon />, label: "n8n" },
            { icon: <AirtableIcon />, label: "Airtable" },
            { icon: <WebhookIcon />, label: "REST APIs" },
            { icon: <ZapIcon />, label: "Zapier" },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -2 }}
              className="flex items-center gap-2.5"
            >
              {item.icon}
              <span className="text-sm font-semibold text-foreground">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ─── STATS ─── */}
      <section className="flex min-h-screen items-center justify-center py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            className="grid grid-cols-2 gap-10 sm:grid-cols-4 sm:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {[
              { number: "500+", label: "Workflows Built" },
              { number: "50+", label: "Founders Helped" },
              { number: "12", label: "Countries Served" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
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
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section
        id="services"
        className="flex min-h-screen items-center border-y border-border/60 bg-card py-24 sm:py-32"
      >
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="What we do"
            title="End-to-end workflow engineering"
            description="From quick automations to full operational backends, we handle the technical complexity so you don't have to."
          />
          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            <ServiceCard
              icon={<BotIcon />}
              title="AI Automation"
              description="Autonomous agents and intelligent workflows that handle lead qualification, support tickets, document processing, and operations — 24/7."
              href="/services/ai-automation"
            />
            <ServiceCard
              icon={<AirtableIcon />}
              title="Airtable Systems"
              description="Relational databases, dashboards, and interfaces on Airtable — structured so your entire team can operate without spreadsheets."
              href="/services/airtable"
            />
            <ServiceCard
              icon={<ShieldIcon />}
              title="Self Hosting Infrastructure"
              description="We deploy and manage your self-hosted AI stack — open-source LLMs, private databases, and automation pipelines on your own servers."
              href="/services/self-hosting"
            />
            <ServiceCard
              icon={<SparklesIcon />}
              title="One Hour AI Consultation"
              description="Book one hour with an AI expert. Walk away with a clear strategy, the right tool stack, and a written action plan for your business."
              href="/services/ai-consultation"
            />
            <ServiceCard
              icon={<ScanIcon />}
              title="Build Your AI OS"
              description="A complete AI operating system for your business — connected agents, knowledge bases, and automations that run your operations on autopilot."
              href="/services/ai-os"
            />
            <ServiceCard
              icon={<IntegrationIcon />}
              title="Customized Solutions"
              description="Need something bespoke? We design and build custom workflows, integrations, and AI systems tailored exactly to your business."
              href="/labs"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── WHY LEANWORKFLOWS ─── */}
      <section className="flex min-h-screen items-center py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="Why Create Workflow"
            title="Built for founders, not enterprises"
          />
          <motion.div
            className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              {
                icon: <UsersIcon />,
                title: "Founder-First",
                desc: "We specialize in early-stage startups. No enterprise bloat, no unnecessary complexity.",
              },
              {
                icon: <ClockIcon />,
                title: "Fast Delivery",
                desc: "Most projects go from discovery to launch in 2-3 weeks. We move at startup speed.",
              },
              {
                icon: <ShieldIcon />,
                title: "No Lock-In",
                desc: "You own everything we build. Full documentation, open systems, zero vendor lock-in.",
              },
              {
                icon: <ZapIcon />,
                title: "End-to-End",
                desc: "Strategy, build, launch, and support. One team handles it all so nothing gets lost.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-foreground">
                  {item.icon}
                </div>
                <h3 className="text-[15px] font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="flex min-h-screen items-center border-y border-border/60 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="How it works"
            title="Three steps. Zero headaches."
          />
          <motion.div
            className="mt-14 grid gap-10 sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <StepCard
              number="01"
              title="Discovery call"
              description="We learn your business, map your current tools, and identify the highest-impact automations."
            />
            <StepCard
              number="02"
              title="Build & iterate"
              description="We design, build, and test your workflows in short sprints — you see progress every week."
            />
            <StepCard
              number="03"
              title="Launch & support"
              description="We deploy everything, train your team, and stick around to make sure it all runs smoothly."
            />
          </motion.div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section
        id="pricing"
        className="flex min-h-screen items-center py-24 sm:py-32"
      >
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="Pricing"
            title="Simple, transparent pricing"
            description="No hourly billing surprises. Choose the package that fits your stage."
          />
          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            <PricingCard
              tier="Starter"
              price="$1,500"
              period="project"
              description="Perfect for a single automation or integration."
              features={[
                "1 workflow or integration",
                "Airtable or n8n setup",
                "2 rounds of revisions",
                "Documentation included",
                "1 week delivery",
              ]}
              ctaText="Get started"
              ctaHref="#contact"
            />
            <PricingCard
              tier="Growth"
              price="$3,500"
              period="project"
              description="For founders ready to systematize operations."
              features={[
                "Up to 3 connected workflows",
                "Airtable backend + automations",
                "API integrations included",
                "Priority Slack support",
                "2-3 week delivery",
              ]}
              highlighted
              ctaText="Most popular"
              ctaHref="#contact"
            />
            <PricingCard
              tier="Scale"
              price="Custom"
              period="month"
              description="Ongoing automation partner for your team."
              features={[
                "Unlimited workflow requests",
                "Dedicated automation engineer",
                "Monthly strategy calls",
                "Priority support & SLA",
                "Cancel anytime",
              ]}
              ctaText="Book a call"
              ctaHref="#contact"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section
        id="reviews"
        className="flex min-h-screen items-center border-y border-border/60 bg-card py-24 sm:py-32"
      >
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="Client reviews"
            title="Trusted by founders who ship"
          />
          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {TESTIMONIALS.map((t, i) => (
              <ReviewCard key={i} quote={t.quote} name={t.name} role={t.role} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="flex min-h-screen items-center py-24 sm:py-32">
        <div className="mx-auto w-full max-w-3xl px-6">
          <SectionHeader label="FAQ" title="Common questions" />
          <motion.div
            className="mt-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            <FAQItem
              question="What tools do you work with?"
              answer="We specialize in n8n and Airtable, but also work with Zapier, Make, custom REST APIs, webhooks, and most SaaS tools with an API. If your tools can talk to each other, we can wire them up."
            />
            <FAQItem
              question="How long does a typical project take?"
              answer="Most projects are delivered within 1-3 weeks depending on scope. A single workflow integration might take a few days; a full operational backend with multiple automations typically takes 2-3 weeks."
            />
            <FAQItem
              question="Do I need to be technical?"
              answer="Not at all — that's the whole point. We handle all the technical work. You tell us what you need done, and we build systems that anyone on your team can use without writing a line of code."
            />
            <FAQItem
              question="What if I need changes after launch?"
              answer="We offer retainer plans for ongoing support and new workflow requests. For one-off changes, we're happy to scope a small follow-up project. Either way, you're never locked in."
            />
            <FAQItem
              question="How do we communicate during a project?"
              answer="We keep it simple — Slack or email for async updates, a shared project board for visibility, and a weekly check-in call. We're async-first and work across time zones."
            />
          </motion.div>
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
            Ready to automate?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-4 max-w-md text-base leading-relaxed text-neutral-400"
          >
            Book a free 30-minute call. We&rsquo;ll scope your project, give
            you an honest estimate, and only move forward if it&rsquo;s a fit.
          </motion.p>
          <motion.a
            href="mailto:team@createworkflow.io"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-foreground shadow-sm transition-opacity hover:opacity-90"
          >
            team@createworkflow.io
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
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <span>
              &copy; {new Date().getFullYear()} Create Workflow. All rights
              reserved.
            </span>
          </div>
          <div className="flex gap-6">
            <a
              href="#services"
              className="transition-colors hover:text-foreground"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="transition-colors hover:text-foreground"
            >
              Pricing
            </a>
            <a
              href="#reviews"
              className="transition-colors hover:text-foreground"
            >
              Reviews
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
