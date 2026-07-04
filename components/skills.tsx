"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" eyebrow="02 · Skills" title="Tools of the trade">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: gi * 0.07, duration: 0.5 }}
          >
            <Card className="h-full hover:-translate-y-1 hover:shadow-brand-indigo/10">
              <h3 className="mb-4 font-display text-lg font-semibold gradient-text">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
