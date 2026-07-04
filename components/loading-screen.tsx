"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgb(3,7,18)]"
        >
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl font-bold text-white"
            >
              Sagar<span className="gradient-text">.</span>
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="mx-auto mt-4 h-[2px] w-40 origin-left bg-gradient-to-r from-brand-indigo via-brand-blue to-brand-cyan"
            />
            <p className="mt-3 font-mono text-xs text-slate-400">
              initializing portfolio…
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
