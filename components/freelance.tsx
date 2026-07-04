"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { freelanceBadges } from "@/lib/data";

export function Freelance() {
  return (
    <section id="freelance" className="relative mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="glow-border relative overflow-hidden rounded-3xl glass px-8 py-16 text-center sm:px-16"
      >
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-indigo/25 blur-3xl animate-blob" aria-hidden />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-brand-cyan/25 blur-3xl animate-blob [animation-delay:5s]" aria-hidden />

        <div className="relative">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium text-green-500">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse-dot" />
            Open to new projects
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Available for <span className="gradient-text">Freelance</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Let&apos;s build something amazing together.
          </p>

          <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2.5">
            {freelanceBadges.map((b, i) => (
              <motion.span
                key={b}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
              >
                <Badge>✓ {b}</Badge>
              </motion.span>
            ))}
          </div>

          <Magnetic>
            <a href="#contact" className="mt-10 inline-block">
              <Button size="lg">
                Hire Me <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  );
}
