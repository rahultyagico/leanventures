"use client";

import { motion } from "motion/react";
import { fadeUp, heroStagger } from "./animations";

export function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
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
        {label}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-muted"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
