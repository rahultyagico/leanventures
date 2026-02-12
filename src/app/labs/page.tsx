"use client";

import { motion } from "motion/react";
import {
  fadeUp,
  fadeIn,
  scaleIn,
  staggerContainer,
  heroStagger,
} from "@/components/animations";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";
import { SectionHeader } from "@/components/SectionHeader";
import { FAQItem } from "@/components/FAQItem";

export default function Labs() {
  return (
    <div className="min-h-screen font-sans">
      {/* ─── HERO ─── */}
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[520px] w-[700px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse, #c4b5fd, #93c5fd, transparent 70%)",
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
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
            </span>
            Custom development studio
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl"
          >
            When off-the-shelf
            <br />
            <span className="text-muted">isn&rsquo;t enough.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            LeanVentures Labs is our custom development arm. We build bespoke
            tools, AI agents, internal platforms, and complex integrations for
            founders who need something that doesn&rsquo;t exist yet.
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
              Tell us what you need
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

      {/* ─── POSITIONING ─── */}
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
              The philosophy
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Your startup has unique problems.
              <br />
              <span className="text-muted">You deserve unique solutions.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted"
            >
              Productized services work for most founders. But some problems
              don&rsquo;t fit a template. Maybe you need a custom internal tool
              your team uses every day. Maybe you need an AI agent that handles
              customer inquiries while you sleep. Maybe you need a full data
              pipeline that no SaaS product can replicate.
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-muted"
            >
              That&rsquo;s what Labs is for. We take your hardest operational
              problems and engineer solutions from scratch&mdash;designed
              specifically for how your business works.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {[
              { number: "10x", label: "Not 1% better" },
              { number: "4-8", label: "Week delivery" },
              { number: "100%", label: "Code ownership" },
              { number: "0", label: "Vendor lock-in" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {stat.number}
                </p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CAPABILITIES ─── */}
      <section
        id="capabilities"
        className="flex min-h-screen items-center py-24 sm:py-32"
      >
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="What we build"
            title="Full-stack custom development"
            description="From AI-powered tools to complex data systems — we build what your startup needs to operate at the next level."
          />

          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            <CapabilityCard
              number="01"
              title="AI Agents & Automations"
              description="Autonomous systems that handle customer support, data processing, lead qualification, and ops tasks 24/7. Multi-agent orchestration, tool integration, and human-in-the-loop workflows."
              features={[
                "Custom GPT-powered agents",
                "Multi-agent orchestration",
                "Tool & API integration",
                "Human-in-the-loop workflows",
              ]}
              tier="$$$"
            />
            <CapabilityCard
              number="02"
              title="Internal Tools & Dashboards"
              description="Bespoke web apps your team uses every day — admin panels, operational dashboards, approval workflows, and reporting tools. Built exactly for how your team works."
              features={[
                "Custom admin panels",
                "Real-time dashboards",
                "Role-based access control",
                "Mobile-responsive design",
              ]}
              tier="$$-$$$"
            />
            <CapabilityCard
              number="03"
              title="Data Pipelines & Infrastructure"
              description="End-to-end data systems that collect, transform, and deliver your data where it needs to go. From raw inputs to actionable insights — reliably, at scale."
              features={[
                "ETL pipeline design",
                "Real-time data sync",
                "Warehouse setup & modeling",
                "Automated reporting",
              ]}
              tier="$$-$$$$"
            />
            <CapabilityCard
              number="04"
              title="Custom SaaS & MVPs"
              description="Full-stack product development for founders who want to ship fast. We design, build, and deploy your MVP — from database to UI — so you can start validating with users."
              features={[
                "Full-stack web apps",
                "Authentication & billing",
                "API design & documentation",
                "Launch-ready deployment",
              ]}
              tier="$$$-$$$$"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="flex min-h-screen items-center border-y border-border/60 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="Our process"
            title="From zero to deployed in weeks, not months"
          />

          <motion.div
            className="mt-14 grid gap-0 sm:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              {
                step: "01",
                title: "Scope",
                desc: "We map the problem, define success criteria, and scope exactly what needs to be built. You get a fixed quote — no surprises.",
                duration: "1-2 days",
              },
              {
                step: "02",
                title: "Architect",
                desc: "We design the system architecture, choose the right stack, and share a technical spec for your approval before writing a line of code.",
                duration: "2-3 days",
              },
              {
                step: "03",
                title: "Build",
                desc: "We build in weekly sprints with demos. You see progress every week and can steer the direction as we go.",
                duration: "2-6 weeks",
              },
              {
                step: "04",
                title: "Ship",
                desc: "We deploy, document, train your team, and hand over everything. You own 100% of the code and infrastructure.",
                duration: "2-3 days",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="relative border-l border-border/60 py-2 pl-8 sm:border-l-0 sm:border-t sm:pl-0 sm:pt-8 sm:pr-6"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 sm:translate-x-0">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
                <p className="mt-3 font-mono text-xs text-muted/60">
                  {item.duration}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="flex min-h-screen items-center py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="Tech stack"
            title="Modern tools. Battle-tested patterns."
            description="We pick the right tool for each job — no dogma, no unnecessary complexity."
          />

          <motion.div
            className="mt-14 grid gap-8 sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              {
                category: "Frontend",
                tools: [
                  "Next.js / React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                ],
              },
              {
                category: "Backend",
                tools: [
                  "Node.js / Python",
                  "PostgreSQL / Supabase",
                  "Redis",
                  "REST & GraphQL APIs",
                ],
              },
              {
                category: "AI & Data",
                tools: [
                  "OpenAI / Anthropic APIs",
                  "LangChain / LangGraph",
                  "n8n / Custom pipelines",
                  "Vector databases",
                ],
              },
              {
                category: "Infrastructure",
                tools: [
                  "Vercel / AWS",
                  "Docker",
                  "GitHub Actions CI/CD",
                  "Cloudflare",
                ],
              },
              {
                category: "Integrations",
                tools: [
                  "Stripe / Razorpay",
                  "Airtable / Notion",
                  "Slack / Discord bots",
                  "Any REST API",
                ],
              },
              {
                category: "Design",
                tools: [
                  "Figma",
                  "Component libraries",
                  "Responsive-first",
                  "Accessibility (a11y)",
                ],
              },
            ].map((stack) => (
              <motion.div
                key={stack.category}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-card-border bg-card p-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                  {stack.category}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {stack.tools.map((tool) => (
                    <li
                      key={tool}
                      className="flex items-center gap-2.5 text-sm"
                    >
                      <span className="h-1 w-1 rounded-full bg-foreground/30" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PRICING APPROACH ─── */}
      <section className="flex min-h-screen items-center border-y border-border/60 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader
            label="Pricing"
            title="Transparent, project-based pricing"
            description="No hourly billing. No scope creep. Every project gets a fixed quote after our scoping call."
          />

          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {[
              {
                range: "$$",
                label: "Focused builds",
                desc: "Single-purpose tools, automations, or integrations. Clear scope, fast delivery.",
                examples: "Internal dashboards, API integrations, AI chatbots",
                timeline: "1-2 weeks",
              },
              {
                range: "$$$",
                label: "Complex systems",
                desc: "Multi-component projects with data pipelines, AI agents, or full internal tools.",
                examples: "Custom CRMs, multi-agent systems, data platforms",
                timeline: "3-5 weeks",
              },
              {
                range: "$$$$",
                label: "Full products",
                desc: "End-to-end SaaS builds or platform development from zero to launch.",
                examples: "MVP builds, SaaS platforms, marketplace apps",
                timeline: "6-10 weeks",
              },
            ].map((tier) => (
              <motion.div
                key={tier.range}
                variants={scaleIn}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -4 }}
                className="flex flex-col rounded-2xl border border-card-border bg-background p-8"
              >
                <p className="font-mono text-2xl font-bold tracking-wider">
                  {tier.range}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{tier.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {tier.desc}
                </p>
                <div className="mt-auto pt-6">
                  <p className="text-xs text-muted/60">Examples</p>
                  <p className="mt-1 text-sm text-muted">{tier.examples}</p>
                  <p className="mt-3 font-mono text-xs text-muted/60">
                    Typical timeline: {tier.timeline}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center text-sm text-muted"
          >
            Every project starts with a free scoping call. You get a fixed quote
            before we write a single line of code.
          </motion.p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="flex min-h-screen items-center py-24 sm:py-32">
        <div className="mx-auto w-full max-w-3xl px-6">
          <SectionHeader label="FAQ" title="Common questions about Labs" />
          <motion.div
            className="mt-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            <FAQItem
              question="How is Labs different from LeanWorkflows?"
              answer="LeanWorkflows offers productized automation services — fixed packages for n8n workflows, Airtable systems, and integrations. Labs is for projects that don't fit a package. Custom internal tools, AI agents, full-stack MVPs, data pipelines — anything that needs to be built from scratch."
            />
            <FAQItem
              question="What's the typical budget range?"
              answer="Projects range from a few thousand dollars for focused builds (dashboards, integrations) to five figures for full product development. Every project gets a fixed quote after our scoping call — no hourly surprises."
            />
            <FAQItem
              question="How long does a project take?"
              answer="Most Labs projects ship in 2-8 weeks depending on complexity. A focused internal tool might take 1-2 weeks. A full MVP or multi-component system typically takes 4-8 weeks. We build in weekly sprints so you see progress every week."
            />
            <FAQItem
              question="Do I own the code?"
              answer="100%. You own everything we build — code, infrastructure, documentation, all of it. We deploy to your accounts, push to your repos, and hand over complete ownership. Zero lock-in."
            />
            <FAQItem
              question="What if I'm not sure what I need?"
              answer="That's exactly what the scoping call is for. You tell us the problem, and we'll figure out the right solution together. We'll give you an honest recommendation — even if it means pointing you to an existing tool instead of a custom build."
            />
            <FAQItem
              question="Can you work with my existing team?"
              answer="Absolutely. We can embed alongside your engineers, work async with your product team, or operate fully independently. We adapt to however your team works best."
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
            Got a problem that doesn&rsquo;t fit a template?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-4 max-w-md text-base leading-relaxed text-neutral-400"
          >
            Book a free scoping call. We&rsquo;ll map the problem, explore
            solutions, and give you an honest quote&mdash;no obligation.
          </motion.p>
          <motion.a
            href="mailto:labs@leanventures.com"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-foreground shadow-sm transition-opacity hover:opacity-90"
          >
            labs@leanventures.com
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
              &copy; {new Date().getFullYear()} LeanVentures Labs. All rights
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
              LeanWorkflows.ai
            </a>
            <a
              href="/"
              className="transition-colors hover:text-foreground"
            >
              LeanVentures
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

/* ─── COMPONENT: Capability Card ─── */
function CapabilityCard({
  number,
  title,
  description,
  features,
  tier,
}: {
  number: string;
  title: string;
  description: string;
  features: string[];
  tier: string;
}) {
  return (
    <motion.div
      variants={scaleIn}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
      className="flex flex-col rounded-2xl border border-card-border bg-card p-8"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs font-bold text-muted/40">
          {number}
        </span>
        <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-muted">
          {tier}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      <ul className="mt-6 flex flex-col gap-2">
        {features.map((f) => (
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
