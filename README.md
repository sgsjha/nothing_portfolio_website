<div align="center">

# Nothing-Inspired Developer Portfolio

Transparent, minimal, and playful — a portfolio that speaks Nothing.

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge)](https://ui.shadcn.com)
[![Spline](https://img.shields.io/badge/Spline-000000?style=for-the-badge&logo=spline&logoColor=white)](https://spline.design)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

- Live: https://your-domain.vercel.app

## ✨ Features

- 🔲 **Nothing aesthetic:** dotted grid backdrop, glow text, dot-matrix headings.
- 🎥 **Hero with 3D model:** Spline embed of the Nothing Phone.
- 📱 **Fully responsive:** stacked on mobile/tablet, 2-column on wide screens.
- 🧩 **Composable UI:** shadcn/ui + Tailwind utilities.
- 🌗 **Theming:** theme provider wired for future light/dark switching.

## 🖼️ Screenshots

<p align="center">
  <img src="./public/screenshots/hero.png" alt="Hero" width="70%" />
  <img src="./public/screenshots/projects.png" alt="Projects" width="70%" />
  <br/>
  <em>Hero and Projects</em>
</p>

## 🛠 Tech Stack

- **Framework:** Next.js (App Router), React, TypeScript  
- **Styling:** Tailwind CSS, custom glow + dotted background utilities  
- **UI:** shadcn/ui, Lucide Icons  
- **3D:** Spline (`@splinetool/react-spline/next`)  
- **Deploy:** Vercel

## 🚀 Quick Start

```bash
git clone https://github.com/<you>/<repo>.git
cd <repo>
pnpm i # or npm install
pnpm dev # or npm run dev
# open http://localhost:3000
```

## 🧭 Project Structure

```
app/
  fonts.ts            # load Nothing-style dot font(s)
  globals.css         # Tailwind + dotted background + glow utils
  layout.tsx          # Root layout + ThemeProvider
  page.tsx            # Home (Hero + sections)

components/
  about-section.tsx
  applied-jobs-section.tsx
  contact-section.tsx
  experience-section.tsx
  hero-section.tsx    # Spline model + animated headline
  navbar.tsx
  projects-section.tsx
  skills-section.tsx
  theme-provider.tsx  # wrapper for theme + CSS vars

  ui/                 # shadcn/ui primitives (Button, Card, etc.)

hooks/
  use-mobile.ts       # mobile breakpoint helper
  use-toast.ts        # toast hook (shadcn pattern)

lib/
  utils.ts            # cn(), helpers

public/
  # static assets (icons, screenshots, spline preload, etc.)

styles/
  # extra css if any (optional)

# root
global.d.ts
hamburger-dots.svg
next-env.d.ts
next.config.mjs
postcss.config.mjs
tailwind.config.ts
tsconfig.json
```

## 🔤 Fonts

`app/fonts.ts` centralises font loading (Nothing dot font + fallback). Example:

```ts
// app/fonts.ts
import localFont from "next/font/local";

export const nothing = localFont({
  src: [{ path: "./fonts/NothingDot-Bold.woff2", weight: "700" }],
  display: "swap",
  variable: "--font-nothing",
});
```

Use it like:

```tsx
import { nothing } from "@/app/fonts";
<h1 className={`${nothing.className} text-glow`}>SARTHAK JHA</h1>
```

## 🎥 Spline Embed

```tsx
import Spline from "@splinetool/react-spline/next";

export default function Phone3D() {
  return (
    <div className="relative w-full max-w-[28rem] aspect-[9/16] rounded-2xl overflow-hidden">
      <Spline scene="https://prod.spline.design/5hbfuX6XwdvzbH8h/scene.splinecode" />
    </div>
  );
}
```

## 🎨 Utility Classes

Add to `globals.css` (already present in this repo):

```css
/* dotted background */
.dotted-bg {
  background-image: radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px);
  background-size: 24px 24px;
}
/* glow text */
.text-glow {
  text-shadow: 0 0 12px rgba(255,255,255,.45), 0 0 32px rgba(255,255,255,.25);
}
```

## 📦 Scripts

- `dev` – start dev server  
- `build` – production build  
- `start` – run prod server  
- `lint` – lint codebase

## 🗺 Roadmap

- [ ] Project detail pages with case studies  
- [ ] Theme toggle (light/dark)  
- [ ] MDX notes/blog (`/notes`)  
- [ ] Contact form (Resend / Formspree)

## 📬 Contact

- LinkedIn: https://www.linkedin.com/in/sarthak-jhaa/  
- GitHub: https://github.com/sgsjha  
- Instagram: https://instagram.com/sarthak.jhaa

---

Built with **clarity, transparency, and creativity** — inspired by Nothing. ✨
