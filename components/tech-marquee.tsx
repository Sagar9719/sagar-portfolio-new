"use client";

import { marqueeStack } from "@/lib/data";

export function TechMarquee() {
  const doubled = [...marqueeStack, ...marqueeStack];
  return (
    <div className="relative overflow-hidden border-y border-[rgb(var(--border))] py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max gap-10 animate-marquee">
        {doubled.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap font-mono text-sm text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-indigo to-brand-cyan" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
