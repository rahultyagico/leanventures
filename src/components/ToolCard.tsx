"use client";

import { motion } from "motion/react";
import { scaleIn } from "@/components/animations";
import { ArrowRightIcon } from "@/components/icons";

export function ToolCard({
  name,
  description,
  recommendation,
  href,
  tag,
}: {
  name: string;
  description: string;
  recommendation: string;
  href: string;
  tag?: string;
}) {
  return (
    <motion.div
      variants={scaleIn}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
      className="flex flex-col rounded-2xl border border-card-border bg-background p-6"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        {tag && (
          <span className="flex-shrink-0 rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-medium text-muted">
            {tag}
          </span>
        )}
      </div>
      <p className="mt-1 text-sm text-muted">{description}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        {recommendation}
      </p>
      <div className="mt-auto pt-6">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-opacity hover:opacity-70"
        >
          Try {name}
          <ArrowRightIcon />
        </a>
      </div>
    </motion.div>
  );
}
