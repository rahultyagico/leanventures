"use client";

import { motion } from "motion/react";
import { scaleIn } from "./animations";

export function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={scaleIn}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
      className="group rounded-2xl border border-card-border bg-card p-6 transition-colors"
    >
      <motion.div
        className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-foreground"
        whileHover={{ rotate: 6, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-[15px] font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </motion.div>
  );
}
