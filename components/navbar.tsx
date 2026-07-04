"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="glass rounded-full p-2.5 transition-transform hover:scale-110 hover:text-brand-indigo"
    >
      {mounted && resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
      className={cn(
        "fixed left-1/2 top-4 z-50 w-[min(64rem,92vw)] -translate-x-1/2 rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5",
        scrolled || open ? "glass shadow-lg shadow-black/10" : "bg-transparent"
      )}
    >
      <nav className="flex items-center justify-between gap-3">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">Sagar<span className="gradient-text">.</span></a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className="text-sm text-muted transition-colors hover:text-brand-indigo">{l.label}</a></li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <span className="hidden items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-green-500 sm:inline-flex">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse-dot" />
            Available
          </span>
          <ThemeToggle />
          <button
            className="glass flex items-center justify-center rounded-full p-2.5 text-brand-indigo md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
          >
            {links.map((l) => (
              <li key={l.href} className="border-t border-[rgb(var(--border))] first:mt-3"><a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-muted transition-colors hover:text-brand-indigo">{l.label}</a></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}