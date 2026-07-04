"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { site } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { Counter } from "@/components/counter";
import { Terminal } from "@/components/terminal";

function useTypedRoles(roles: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[i % roles.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = full.slice(0, text.length + 1);
          setText(next);
          if (next === full) setTimeout(() => setDeleting(true), 1600);
        } else {
          const next = full.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setI((v) => v + 1);
          }
        }
      },
      deleting ? 34 : 68
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, i, roles]);

  return text;
}

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 53) % 100}%`,
  top: `${(i * 31) % 100}%`,
  delay: (i % 6) * 0.8,
  duration: 6 + (i % 5) * 2,
}));

export function Hero() {
  const typed = useTypedRoles(site.roles);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-brand-indigo/25 blur-3xl animate-blob" aria-hidden />
      <div className="absolute right-0 top-48 h-96 w-96 rounded-full bg-brand-cyan/20 blur-3xl animate-blob [animation-delay:4s]" aria-hidden />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-brand-violet/20 blur-3xl animate-blob [animation-delay:8s]" aria-hidden />
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute h-1 w-1 rounded-full bg-brand-indigo/50"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [-14, 14, -14], opacity: [0.15, 0.7, 0.15] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pb-20 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-muted"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-cyan" />
            Based in {site.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Sagar Singh</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-4 h-8 font-mono text-lg text-brand-indigo sm:text-xl"
            aria-live="polite"
          >
            {typed}
            <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-1 bg-brand-cyan animate-blink" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            className="mt-5 max-w-xl text-lg text-muted"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.85, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a href="#contact">
                <Button size="lg">
                  Hire Me <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </Magnetic>
            <Magnetic>
              <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume.pdf`} download="Sagar_Singh_Resume.pdf">
                <Button size="lg" variant="outline">
                  <Download className="h-4 w-4" /> Download Resume
                </Button>
              </a>
            </Magnetic>
            <a
              href="#projects"
              className="text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-brand-indigo hover:underline"
            >
              View Projects →
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6"
          >
            {site.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold gradient-text">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                </dd>
                <dd className="mt-1 text-xs text-muted">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
