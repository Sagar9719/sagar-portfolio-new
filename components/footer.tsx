"use client";

import { motion } from "framer-motion";
import { Github, Heart, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[rgb(var(--border))]">
      <div className="absolute inset-x-0 -top-24 mx-auto h-48 w-2/3 rounded-full bg-brand-indigo/10 blur-3xl" aria-hidden />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between"
      >
        <div>
          <p className="font-display text-xl font-bold">
            Sagar<span className="gradient-text">.</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            {site.role} · {site.location}
          </p>
        </div>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: site.github, label: "GitHub" },
            { icon: Linkedin, href: site.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass rounded-full p-2.5 transition-all hover:-translate-y-1 hover:text-brand-indigo"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="flex items-center gap-1.5 text-xs text-muted">
          Built with <Heart className="h-3 w-3 text-brand-violet" /> Next.js · ©{" "}
          {new Date().getFullYear()} {site.name}
        </p>
      </motion.div>
    </footer>
  );
}
