"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { Section } from "@/components/section";
import { site } from "@/lib/data";

const channels = [
  { icon: MessageCircle, label: "WhatsApp", href: site.whatsapp, hint: "Fastest reply" },
  { icon: Phone, label: "Call", href: site.tel, hint: site.phone },
  { icon: Mail, label: "Email", href: `mailto:${site.email}`, hint: site.email },
  { icon: Linkedin, label: "LinkedIn", href: site.linkedin, hint: "sagar-singh16" },
  { icon: Github, label: "GitHub", href: site.github, hint: "Sagar9719" },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="06 · Contact" title="Let's talk">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="glow-border glass rounded-3xl p-8 sm:p-12"
      >
        <p className="max-w-2xl text-lg text-muted">
          Have a product to build, a realtime problem to solve, or an app that needs a
          senior pair of hands? Pick a channel — every button opens the app directly.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              title={c.hint}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group flex min-w-0 flex-col items-center gap-2 rounded-2xl glass px-4 py-6 text-center transition-colors hover:border-brand-indigo/60 hover:shadow-lg hover:shadow-brand-indigo/15"
            >
              <c.icon className="h-6 w-6 shrink-0 text-brand-indigo transition-transform group-hover:scale-110" />
              <span className="font-medium">{c.label}</span>
              <span className="w-full truncate text-xs text-muted">{c.hint}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
