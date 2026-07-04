"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative mx-auto max-w-6xl px-6 py-24", className)}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="mb-2 font-mono text-sm uppercase tracking-[0.3em] text-brand-cyan">
          {eyebrow}
        </p>
        <h2 className="mb-12 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  );
}

export const revealItem = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};
