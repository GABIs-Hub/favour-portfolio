# Favour Ogabi — Architect Portfolio

A clean, minimal, and fully responsive portfolio website for **Favour Ogabi**, a professional architect based in Lagos, Nigeria. Built with React, TypeScript, Tailwind CSS v4, and Vite.

---

## Preview

> Live at: `http://localhost:5173` after running locally

**Sections:**
- Hero — editorial-scale name entrance with blueprint grid background
- About — personal statement, bio, and key stats on a dark canvas
- Experience — gold-dotted timeline of career history
- Projects — asymmetric card grid with hover overlays
- Skills — pill tags with hover transitions
- Certifications — numbered achievement cards with reveal animations
- Contact — dark section with direct email and LinkedIn
- Footer

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [React](https://react.dev) | 18+ | UI framework |
| [TypeScript](https://www.typescriptlang.org) | 5+ | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | **v4** | Utility-first styling |
| [Vite](https://vitejs.dev) | 6+ | Build tool & dev server |
| [Google Fonts](https://fonts.google.com) | — | Cormorant Garamond + Outfit |

---

## Project Structure

```
src/
├── App.tsx
└── components/
    └── portfolio/
        ├── FavourPortfolio.tsx   # Root component — assembles all sections
        ├── data.ts               # All content data + TypeScript interfaces
        ├── Reveal.tsx            # Scroll-triggered fade-up animation wrapper
        ├── Navbar.tsx            # Sticky nav + hamburger menu (mobile)
        ├── Hero.tsx              # Full-screen hero section
        ├── About.tsx             # Bio, quote, and stat grid
        ├── Experience.tsx        # Career timeline
        ├── Projects.tsx          # Project card grid
        ├── Skills.tsx            # Skills pill list
        ├── Certifications.tsx    # Certification cards
        ├── Contact.tsx           # Contact section
        └── Footer.tsx            # Page footer
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or higher
- npm v9 or higher

### Installation

**1. Clone or download the project:**

```bash
git clone https://github.com/GABIs-Hub/favour-portfolio.git
cd favour-portfolio
```

**2. Install dependencies:**

```bash
npm install
```

**3. Install Tailwind CSS v4 and its Vite plugin:**

```bash
npm install -D tailwindcss @tailwindcss/vite
```

**4. Start the development server:**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Tailwind CSS v4 Setup

> ⚠️ This project uses **Tailwind CSS v4**, which has a different setup from v3. There is no `tailwind.config.js` — configuration is handled via the Vite plugin.

### `vite.config.ts`

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### `src/index.css`

```css
@import "tailwindcss";
```

That's the entire setup. No config file required.

---

## Customisation

### Updating Content

All portfolio content lives in one place — `src/components/portfolio/data.ts`. Edit the exported arrays to update the portfolio without touching any JSX.

```ts
// Add or edit experience entries
export const EXPERIENCE: ExperienceItem[] = [
  {
    date: 'Sep 2020 – Present',
    role: 'Architect',
    company: 'Advanced Engineering Consultants',
    location: 'Lagos, Nigeria',
    current: true,
  },
  // ...
]

// Add skills / tools
export const SKILLS: string[] = [
  'Architectural Design',
  'AutoCAD',       // ← add tools here
  'Revit',
  // ...
]
```

### Updating the Email Address

In `src/components/portfolio/Contact.tsx`, find the comment and replace the placeholder:

```tsx
{/* 👇 Replace with his actual email */}
<a href="mailto:favour@email.com">
  favour@email.com
</a>
```

### Adding Project Images

In `src/components/portfolio/Projects.tsx`, replace `<PlaceholderImage />` with a real image:

```tsx
// Before
<PlaceholderImage />

// After
<img
  src="/images/project-name.jpg"
  alt="Urban Dwelling Series — Lagos"
  className="w-full h-full object-cover"
/>
```

Place images inside the `public/images/` folder at the project root.

### Colour Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#FAFAFA` | Page background, light sections |
| Surface | `#F0EEE9` | Alternating sections |
| Dark | `#1A1A1A` | About and Contact sections |
| Gold | `#C8A96E` | Accent — labels, timeline dots, hover states |
| Gold Light | `#EAD9B8` | "Current" badge background |
| Mid Grey | `#6B6B6B` | Body text on light backgrounds |
| Light Grey | `#AAAAAA` | Body text on dark backgrounds |

---

## Animations

All animations are intentionally subtle to match the architectural aesthetic.

| Animation | Trigger | Description |
|-----------|---------|-------------|
| `fo-a1`, `fo-a2`, `fo-a3` | Page load | Hero elements fade up in staggered sequence |
| `fo-rule` | Page load | Hero divider grows left to right |
| `fo-tick` | Continuous | Scroll indicator pulses |
| `Reveal` component | Scroll into view | Sections fade up on enter |
| Project card hover | Hover | Card lifts + dark overlay fades in |
| Certification card hover | Hover | Gold bar slides in from left |
| Skill pill hover | Hover | Border and text colour transition to gold |
| Hamburger icon | Click | 3 bars animate into ✕ |

The `Reveal` component uses the native `IntersectionObserver` API — no external animation library required.

---

## Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder, ready to deploy to any static host.

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the dist/ folder to app.netlify.com/drop
```

---

## Fonts

Google Fonts are injected at runtime via a `useEffect` in `FavourPortfolio.tsx`. For production, move the `<link>` tag into `index.html` for faster load:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Outfit:wght@300;400;500&display=swap"
  rel="stylesheet"
/>
```

---

## Pre-Launch Checklist

- [ ] Replace placeholder email in `Contact.tsx`
- [ ] Add real project images to `public/images/`
- [ ] Update project names and descriptions in `data.ts`
- [ ] Add design tools (AutoCAD, Revit, SketchUp, etc.) to `SKILLS` in `data.ts`
- [ ] Move Google Fonts `<link>` to `index.html`
- [ ] Verify LinkedIn URL in `Contact.tsx`
- [ ] Update copyright year in `Footer.tsx`

---

## Credits

**Developer** — Gabi ([@GABIs-Hub](https://github.com/GABIs-Hub))

**Subject** — Favour Ogabi, Architect at Advanced Engineering Consultants, Lagos, Nigeria
[linkedin.com/in/favour-ogabi-382500114](https://www.linkedin.com/in/favour-ogabi-382500114/)

---

## License

This project is private and built for personal use. Not licensed for redistribution.
