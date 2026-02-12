"use client";

import { motion } from "motion/react";
import { fadeUp } from "./animations";

export function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.span
        className="inline-block font-mono text-sm font-bold text-muted/50"
        whileHover={{ scale: 1.2, color: "var(--foreground)" }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        {number}
      </motion.span>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </motion.div>
  );
}
