# Sagar Singh — Portfolio

Award-style developer portfolio built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion**.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fully static)
```

## Structure

```
app/
  layout.tsx        # Fonts (Inter, Space Grotesk, JetBrains Mono), SEO metadata, OG, JSON-LD
  page.tsx          # Section composition
  globals.css       # Design tokens, glass, grid, glow-border, cursor, reduced-motion
  sitemap.ts        # /sitemap.xml
  robots.ts         # /robots.txt
components/
  hero.tsx          # Typing roles, blobs, particles, animated stats
  terminal.tsx      # Signature boot-sequence terminal
  navbar.tsx        # Glass navbar, theme toggle, availability badge, mobile menu
  experience.tsx    # Timeline cards
  projects.tsx      # Project cards with screenshot placeholders
  ...               # skills, services, freelance, contact, footer, extras
  ui/               # shadcn-style Button / Card / Badge primitives
lib/
  data.ts           # ⭐ ALL content lives here — edit this one file to update the site
  utils.ts          # cn()
public/
  resume.pdf        # Served by the "Download Resume" button
```

## Customizing

- **Content** (roles, skills, experience, projects, contact links): edit `lib/data.ts`.
- **Domain**: change `site.url` in `lib/data.ts` — metadata, sitemap, robots and JSON-LD all follow it.
- **Resume**: replace `public/resume.pdf`.
- **Project screenshots**: swap the gradient placeholder block in `components/projects.tsx` with `next/image`.
- **Colors**: `tailwind.config.ts` → `brand` palette (#6366F1 / #3B82F6 / #06B6D4 / #8B5CF6).

## Built-in extras

Dark/light theme · scroll progress bar · custom cursor (pointer devices, reduced-motion aware) ·
magnetic buttons · animated counters · tech marquee · section reveal animations ·
loading screen · back-to-top · availability indicator · **Konami code easter egg** (↑↑↓↓←→←→BA).

## Deploy

Push to GitHub → import in Vercel → done. Output is fully static, no env vars required.
