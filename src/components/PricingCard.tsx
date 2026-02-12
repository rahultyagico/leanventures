"use client";

import { motion } from "motion/react";
import { scaleIn } from "./animations";
import { CheckIcon } from "./icons";

export function PricingCard({
  tier,
  price,
  period,
  description,
  features,
  highlighted,
  ctaText,
  ctaHref,
}: {
  tier: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  ctaHref: string;
}) {
  return (
    <motion.div
      variants={scaleIn}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={`relative flex flex-col rounded-2xl p-8 ${
        highlighted
          ? "border-2 border-accent bg-card shadow-lg"
          : "border border-card-border bg-card"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
          Most popular
        </span>
      )}
      <div className="mb-6">
        <p className="text-sm font-semibold text-muted">{tier}</p>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="text-4xl font-semibold tracking-tight">
            {price}
          </span>
          <span className="text-sm text-muted">/{period}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      </div>
      <ul className="mb-8 flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <span className="mt-0.5 flex-shrink-0 text-emerald-600">
              <CheckIcon />
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <motion.a
        href={ctaHref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`inline-flex h-11 items-center justify-center rounded-full text-sm font-medium transition-opacity hover:opacity-80 ${
          highlighted
            ? "bg-accent text-accent-foreground"
            : "border border-border bg-card text-foreground"
        }`}
      >
        {ctaText}
      </motion.a>
    </motion.div>
  );
}
