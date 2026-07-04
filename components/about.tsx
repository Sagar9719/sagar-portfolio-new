"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { site } from "@/lib/data";
import { Code2, Layers, Rocket, Smartphone } from "lucide-react";

const pillars = [
  { icon: Smartphone, label: "Mobile-first", text: "Native Android & iOS, plus KMP/CMP" },
  { icon: Rocket, label: "Realtime", text: "Live streaming, calling & messaging" },
  { icon: Layers, label: "Architecture", text: "Clean, scalable, production-ready" },
  { icon: Code2, label: "Full stack", text: "Backend, web & cloud overview" },
];

export function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="Engineer behind the pixels">
      <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {site.about.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {p}
            </motion.p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <Card className="h-full hover:-translate-y-1 hover:border-brand-indigo/50">
                <p.icon className="mb-3 h-6 w-6 text-brand-indigo" />
                <p className="font-display font-semibold">{p.label}</p>
                <p className="mt-1 text-sm text-muted">{p.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
