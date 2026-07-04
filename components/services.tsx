"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { services } from "@/lib/data";

export function Services() {
  return (
    <Section id="services" eyebrow="05 · Services" title="What I can do for you">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
          >
            <Card className="group h-full hover:-translate-y-1 hover:border-brand-indigo/50">
              <h3 className="mb-4 font-display text-lg font-semibold transition-colors group-hover:text-brand-indigo">
                {s.title}
              </h3>
              <ul className="space-y-2.5">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                    <Check className="h-4 w-4 shrink-0 text-brand-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
