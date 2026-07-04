import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: "#6366F1",
          blue: "#3B82F6",
          cyan: "#06B6D4",
          violet: "#8B5CF6",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        blob: "blob 16s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        blink: "blink 1s step-end infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -60px) scale(1.1)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.92)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulseDot: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(34,197,94,0.55)" },
          "50%": { boxShadow: "0 0 0 8px rgba(34,197,94,0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
