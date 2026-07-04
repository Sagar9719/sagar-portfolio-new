"use client";

import { motion } from "framer-motion";
import { Github, NotebookPen, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

/** Testimonials, blog and GitHub-graph placeholders — quiet, honest, ready to fill. */
export function Extras() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            icon: Quote,
            title: "Testimonials",
            text: "Client words land here soon. Working with someone? Your feedback could be first.",
          },
          {
            icon: NotebookPen,
            title: "Writing",
            text: "Deep dives on Android, realtime systems and architecture — coming soon.",
          },
          {
            icon: Github,
            title: "GitHub activity",
            text: "Contribution graph placeholder — live commits, streaks and open source.",
          },
        ].map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <Card className="h-full border-dashed hover:border-brand-indigo/40">
              <c.icon className="mb-3 h-5 w-5 text-brand-cyan" />
              <p className="font-display font-semibold">{c.title}</p>
              <p className="mt-1.5 text-sm text-muted">{c.text}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
