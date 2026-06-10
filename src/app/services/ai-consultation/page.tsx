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
  UsersIcon,
} from "@/components/icons";
import { SectionHeader } from "@/components/SectionHeader";
import { FAQItem } from "@/components/FAQItem";

const WHAT_YOU_GET = [
  "A recorded 60-minute video call (yours to keep)",
  "Pre-call questionnaire so we hit the ground running",
  "AI strategy recommendation tailored to your business",
  "Model and tool stack recommendations",
  "Written action plan delivered within 24 hours",
  "Priority email follow-up for 7 days",
];

const SESSION_TYPES = [
  {
    icon: <BotIcon />,
    title: "AI Strategy Session",
    description:
      "Not sure where AI fits in your business? We map your workflows, identify your highest-ROI automation opportunities, and give you a prioritised roadmap to act on immediately.",
    who: "Best for: founders exploring AI for the first time",
  },
  {
    icon: <ZapIcon />,
    title: "Stack & Tool Review",
    description:
      "Already using AI tools but unsure if you have the right setup? We audit your current stack — models, prompts, workflows — and tell you exactly what to keep, drop, or replace.",
    who: "Best for: teams already using AI who want to go deeper",
  },
  {
    icon: <UsersIcon />,
    title: "Build vs Buy Decision",
    description:
      "Deciding whether to build a custom AI solution or buy an off-the-shelf product? We walk through the tradeoffs, total cost of ownership, and the right criteria for your specific situation.",
    who: "Best for: CTOs and technical founders evaluating options",
  },
  {
    icon: <SparklesIcon />,
    title: "Prompt & Agent Review",
    description:
      "Have agents or prompts that aren't performing as expected? We do a live teardown of your prompts, agent logic, and workflow design — and show you exactly how to fix them.",
    who: "Best for: teams who've already started building",
  },
];

const AGENDA = [
  {
    time: "0–10 min",
    title: "Context & Goals",
    desc: "We review your pre-call questionnaire and align on exactly what you want to walk away with.",
  },
  {
    time: "10–40 min",
    title: "Deep Dive",
    desc: "We go deep on your specific situation — workflows, tools, data, team capacity — and give direct, unfiltered recommendations.",
  },
  {
    time: "40–55 min",
    title: "Action Plan",
    desc: "We build out your next steps live — what to build, what to buy, what to stop doing, and in what order.",
  },
  {
    time: "55–60 min",
    title: "Open Q&A",
    desc: "Any remaining questions answered. Clarity on anything that came up during the session.",
  },
];

const FAQS = [
  {
    question: "Is this really just one hour?",
    answer:
      "Yes. We keep it tightly focused because diffuse conversations produce vague advice. The pre-call questionnaire means we already know your context when we join — so every minute is spent on substance.",
  },
  {
    question: "What should I prepare before the call?",
    answer:
      "We send a short questionnaire when you book — about your business, current tools, and what you want to get out of the session. That's all you need. No slides, no decks, no prep.",
  },
  {
    question: "Can I bring my team?",
    answer:
      "Absolutely. Many clients bring their CTO, operations lead, or product manager. The more context in the room, the better the output.",
  },
  {
    question: "What if I need more than an hour?",
    answer:
      "If the session reveals a larger project scope, we can follow up with a proposal for a full engagement. There's no pressure — the consultation stands alone as a complete, valuable deliverable.",
  },
  {
    question: "Do you record the call?",
    answer:
      "Yes, with your permission. You receive the recording within 24 hours along with the written action plan so you can revisit everything we covered.",
  },
  {
    question: "What if I'm not satisfied?",
    answer:
      "If you don't feel you got genuine clarity and actionable direction, we'll refund you in full — no questions asked. We stand behind the quality of our advice.",
  },
];

export default function AIConsultationPage() {
  return (
    <div className="min-h-screen font-sans">
      {/* ─── 1. HERO ─── */}
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[560px] w-[780px] -translate-x-1/2 rounded-full opacity-[0.15] blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse, #f59e0b, #f97316, #ec4899, transparent 70%)",
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
            <span className="text-foreground">One Hour AI Consultation</span>
          </motion.nav>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-medium text-amber-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            60 minutes. Real answers. Written action plan.
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl"
          >
            AI clarity
            <br />
            <span className="text-muted">in one hour.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Stop reading blog posts and watching demos. Book one hour with an AI
            expert, walk away with a clear strategy, the right tools, and a
            written action plan tailored to your business.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="#book"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 items-center gap-2 justify-center rounded-full bg-accent px-8 text-sm font-medium text-accent-foreground shadow-sm transition-opacity hover:opacity-80"
            >
              Book your session — $299
              <ArrowRightIcon />
            </motion.a>
            <motion.a
              href="#session-types"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-8 text-sm font-medium text-foreground transition-colors hover:bg-border/40"
            >
              See session types
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── 2. WHAT YOU GET ─── */}
      <section className="flex min-h-[60vh] items-center border-y border-border/60 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader
            label="What's included"
            title="Everything you need. Nothing you don't."
            description="A focused, high-value session designed to give you real clarity — not a sales pitch dressed up as advice."
          />
          <motion.div
            className="mt-14 grid gap-4 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {WHAT_YOU_GET.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                transition={{ duration: 0.4 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex-shrink-0 text-emerald-600">
                  <CheckIcon />
                </span>
                <span className="text-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 3. SESSION TYPES ─── */}
      <section id="session-types" className="flex min-h-screen items-center py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="Session types"
            title="Pick the conversation you need"
            description="Tell us which session type fits best when you book — we'll tailor the entire hour to that focus."
          />
          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {SESSION_TYPES.map((s) => (
              <motion.div
                key={s.title}
                variants={scaleIn}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
                className="flex flex-col rounded-2xl border border-card-border bg-card p-8"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.description}</p>
                <p className="mt-4 text-xs font-medium text-amber-600">{s.who}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 4. AGENDA ─── */}
      <section className="flex min-h-[70vh] items-center border-y border-border/60 bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="Session agenda"
            title="How we spend 60 minutes"
            description="Every minute is structured. No meandering, no fluff — just focused work that moves the needle."
          />
          <motion.div
            className="mt-14 grid gap-0 border-t border-border/60 sm:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {AGENDA.map((a) => (
              <motion.div
                key={a.time}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="border-b border-border/60 py-8 pr-6 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <p className="font-mono text-xs text-amber-600 mb-3">{a.time}</p>
                <h3 className="text-[15px] font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 5. FAQ ─── */}
      <section className="flex min-h-[60vh] items-center py-24 sm:py-32">
        <div className="mx-auto w-full max-w-3xl px-6">
          <SectionHeader label="FAQ" title="Questions about the consultation" />
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

      {/* ─── 6. CTA ─── */}
      <section
        id="book"
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
          style={{ background: "radial-gradient(ellipse, #f59e0b, #f97316, transparent 70%)" }}
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
            Satisfaction guaranteed or full refund
          </motion.div>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Book your hour.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-4 max-w-md text-base leading-relaxed text-neutral-400"
          >
            One hour. A written action plan. 7 days of email follow-up.
            If you don&rsquo;t walk away with genuine clarity, you get a full refund.
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="mailto:team@createworkflow.io?subject=One Hour AI Consultation"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 items-center gap-2 justify-center rounded-full bg-white px-8 text-sm font-medium text-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              Book now — $299
              <ArrowRightIcon />
            </motion.a>
          </motion.div>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-4 text-xs text-neutral-500"
          >
            Or email us at team@createworkflow.io to discuss your needs first.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border/60 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            <Link href="#session-types" className="transition-colors hover:text-foreground">
              Session Types
            </Link>
            <Link href="#book" className="transition-colors hover:text-foreground">
              Book Now
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
