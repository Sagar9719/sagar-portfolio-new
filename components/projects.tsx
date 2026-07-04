"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import { projectVisuals } from "@/components/project-visuals";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <Section id="projects" eyebrow="04 · Projects" title="Selected work">
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => {
          const Viz = projectVisuals[p.title];
          return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 2) * 0.12, duration: 0.55 }}
              className="group glass glow-border overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-indigo/15"
            >
              {/* Themed graphic */}
              <div
                className={cn(
                  "relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br",
                  p.accent
                )}
              >
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="relative transition-transform duration-500 group-hover:scale-105">
                  {Viz ? <Viz /> : null}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-brand-indigo">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
