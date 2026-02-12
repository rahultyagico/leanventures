"use client";

import { motion } from "motion/react";
import { scaleIn } from "./animations";
import { StarIcon } from "./icons";

export function ReviewCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <motion.div
      variants={scaleIn}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-card-border bg-card p-8"
    >
      <motion.div
        className="mb-4 flex gap-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
          },
        }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0, rotate: -30 },
              visible: { opacity: 1, scale: 1, rotate: 0 },
            }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
          >
            <StarIcon />
          </motion.span>
        ))}
      </motion.div>
      <p className="text-[15px] leading-relaxed text-foreground/90">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-200 text-xs font-bold text-foreground">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-muted">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
