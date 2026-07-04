"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CODE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a",
];

export function Konami() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    let i = 0;
    const onKey = (e: KeyboardEvent) => {
      i = e.key === CODE[i] ? i + 1 : e.key === CODE[0] ? 1 : 0;
      if (i === CODE.length) {
        setUnlocked(true);
        i = 0;
        setTimeout(() => setUnlocked(false), 5000);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {unlocked && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="glass glow-border fixed bottom-24 left-1/2 z-[70] -translate-x-1/2 rounded-2xl px-6 py-4 text-center"
        >
          <p className="font-mono text-sm">
            🎮 <span className="gradient-text font-bold">Achievement unlocked:</span>{" "}
            you found the Konami code. Ship it. 🚀
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
