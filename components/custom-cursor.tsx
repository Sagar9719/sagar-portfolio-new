"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let raf = 0;
    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      const t = e.target as HTMLElement;
      const hovering = !!t.closest("a, button, [role='button']");
      ringRef.current?.classList.toggle("is-hovering", hovering);
    };

    const loop = () => {
      ring.x += (mouse.x - ring.x) * 0.16;
      ring.y += (mouse.y - ring.y) * 0.16;
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  );
}
