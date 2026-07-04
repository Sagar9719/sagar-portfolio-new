"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Line = { prompt?: boolean; text: string; color?: string };

const SCRIPT: Line[] = [
  { prompt: true, text: "sagar --init" },
  { text: "▸ loading profile …", color: "text-slate-400" },
  { text: "✔ role        Android · iOS · Full Stack", color: "text-green-400" },
  { text: "✔ realtime    WebRTC · LiveKit · MediaSoup", color: "text-green-400" },
  { text: "✔ mobile      Kotlin · Compose · Swift · KMP", color: "text-green-400" },
  { text: "✔ status      available for freelance", color: "text-brand-cyan" },
  { prompt: true, text: "ship --production 🚀" },
];

export function Terminal() {
  const [lines, setLines] = useState<{ line: Line; chars: number }[]>([]);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    let li = 0;
    let ci = 0;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      const current = SCRIPT[li];
      if (!current) return;
      ci++;
      setLines((prev) => {
        const next = prev.slice(0, li);
        next[li] = { line: current, chars: ci };
        return next;
      });
      if (ci >= current.text.length) {
        li++;
        ci = 0;
        if (li < SCRIPT.length) setTimeout(tick, current.prompt ? 350 : 140);
      } else {
        setTimeout(tick, current.prompt ? 55 : 12);
      }
    };

    const start = setTimeout(tick, 1800);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 1.5, ease: "easeOut" }}
      className="glow-border glass w-full max-w-lg rounded-2xl shadow-2xl shadow-brand-indigo/20"
    >
      <div className="flex items-center gap-2 border-b border-[rgb(var(--border))] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-green-400/80" />
        <span className="ml-3 font-mono text-xs text-muted">sagar@dev — zsh</span>
      </div>
      <div className="min-h-[220px] p-4 font-mono text-[13px] leading-7">
        {lines.map(({ line, chars }, i) => (
          <p key={i} className={line.color ?? ""}>
            {line.prompt && <span className="text-brand-indigo">❯ </span>}
            {line.text.slice(0, chars)}
            {i === lines.length - 1 && (
              <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-brand-cyan animate-blink" />
            )}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
