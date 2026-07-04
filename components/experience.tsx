"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" eyebrow="03 · Experience" title="The journey so far">
      <div className="relative ml-3 border-l border-[rgb(var(--border))] pl-8 sm:ml-6">
        {experience.map((item, i) => (
          <motion.article
            key={`${item.company}-${item.period}`}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.55 }}
            className="relative pb-12 last:pb-0"
          >
            <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-gradient-to-br from-brand-indigo to-brand-cyan ring-4 ring-[rgb(var(--bg))]" />
            <Card className="hover:border-brand-indigo/40">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold">{item.company}</h3>
                <span className="font-mono text-xs text-brand-cyan">{item.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-brand-indigo">{item.role}</p>
              <ul className="mt-4 space-y-2.5">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
