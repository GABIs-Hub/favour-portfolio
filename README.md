# Favour Ogabi — Architect Portfolio
 
A clean, minimal, and fully responsive portfolio website for **Favour Ogabi**, a professional Architect based in Lagos, Nigeria. Built with React, TypeScript, Tailwind CSS v4, and Vite.
 
---
 
## Live Preview
 
> Run locally at `http://localhost:5173` after setup
 
---
 
## Tech Stack
 
| Tool | Version | Purpose |
|------|---------|---------|
| [React](https://react.dev) | 18+ | UI framework |
| [TypeScript](https://www.typescriptlang.org) | 5+ | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | **v4** | Utility-first styling |
| [Vite](https://vitejs.dev) | 6+ | Build tool & dev server |
| [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) | — | Editorial serif — headings & quotes |
| [Outfit](https://fonts.google.com/specimen/Outfit) | — | Clean sans-serif — body text |
 
---
 
## Design Language
 
This portfolio is intentionally restrained and editorial — fitting for an architect's personal brand. One accent colour against a warm off-white base, with a classic serif typeface doing the heavy lifting.
 
| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#FAFAFA` | Page base, light sections |
| Surface | `#F0EEE9` | Alternating sections |
| Dark | `#1A1A1A` | Experience & Certifications sections |
| Gold | `#C8A96E` | Primary accent — labels, dots, hover states |
| Gold Light | `#EAD9B8` | "Current" badge background |
| Dark Text | `#0D0D0D` | Headings on light backgrounds |
| Mid Grey | `#6B6B6B` | Body text on light backgrounds |
| Light Grey | `#AAAAAA` | Body text on dark backgrounds |
| Border | `#E0DDD6` | Subtle dividers |
 
---
 
## Project Structure
 
```
favour-portfolio/
├── public/
│   └── images/               # Drop real project photos here
├── src/
│   ├── components/
│   │   └── portfolio/
│   │       ├── FavourPortfolio.tsx   # Root — assembles all sections
│   │       ├── data.ts               # All content data + TypeScript interfaces
│   │       ├── Reveal.tsx            # Scroll-triggered fade-up animation wrapper
│   │       ├── Navbar.tsx            # Sticky nav + hamburger menu (mobile)
│   │       ├── Hero.tsx              # Full-screen hero section
│   │       ├── About.tsx             # Bio, quote, and stat grid
│   │       ├── Experience.tsx        # Career timeline
│   │       ├── Projects.tsx          # Project card grid
│   │       ├── Skills.tsx            # Software rings + soft skill pills
│   │       ├── Certifications.tsx    # Certification cards
│   │       ├── Contact.tsx           # Contact section
│   │       └── Footer.tsx            # Page footer
│   ├── App.tsx                       # Entry — renders FavourPortfolio
│   ├── index.css                     # Tailwind import + base styles
│   └── main.tsx                      # React entry point
├── index.html
├── vite.config.ts
├── tsconfig.json
├── LICENSE
└── package.json
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
 
> ⚠️ This project uses **Tailwind CSS v4** — the setup differs from v3.
> There is **no** `tailwind.config.js` and no PostCSS plugin required.
 
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
 
html,
body,
#root {
  background-color: #FAFAFA;
  width: 100%;
  min-height: 100vh;
}
```
 
---
 
## Features
 
### Animations
 
| Animation | Trigger | Description |
|-----------|---------|-------------|
| `io-a1` → `io-a3` | Page load | Hero elements fade up in staggered sequence |
| `fo-rule` | Page load | Hero divider grows left to right |
| `fo-tick` | Continuous | Scroll indicator pulses up and down |
| `Reveal` component | Scroll into view | Every section fades up on enter |
| SVG ring draw | Scroll into view | Software skill rings animate from 0% to target |
| Project card hover | Hover | Card lifts + dark overlay fades in |
| Certification card hover | Hover | Gold bar slides in from left at bottom |
| Skill pill hover | Hover | Border and text colour transition to gold |
| Hamburger icon | Click | 3 bars animate into ✕ |
 
All scroll-triggered animations use the native `IntersectionObserver` API — no external animation library needed.
 
### Software Skill Rings
 
Each software tool (AutoCAD, Revit, Lumion, etc.) is displayed in a square card surrounded by a circular SVG progress ring. The ring draws itself from 0% to the target percentage when scrolled into view, with a 1.2s cubic-bezier easing. The percentage number appears inside the card when the animation begins.
 
### Responsive Design
 
| Breakpoint | Behaviour |
|------------|-----------|
| Mobile (`< md`) | Single column, hamburger nav, stacked hero |
| Tablet (`md`) | 2-column grids, full nav links visible |
| Desktop (`lg+`) | Full 3-column project grid, asymmetric layouts |
 
---
 
## Sections
 
### Hero
Full-screen section with a blueprint grid texture background, editorial-scale name in Cormorant Garamond, a thin divider that grows on load, and a pulsing scroll indicator.
 
### About
Dark section with Favour's personal quote on the left and bio text + 4-stat grid on the right. Stats cover years of practice, firms contributed to, certifications, and his singular vision.
 
### Experience
Gold-dotted vertical timeline listing all 5 career entries — from student internships starting 2015 to his current role at Advanced Engineering Consultants. Current role is marked with a gold badge.
 
### Skills
Two-part section:
- **Software Proficiency** — animated SVG ring cards for AutoCAD, Revit, Lumion, Fusion 360, SketchUp, and ArchiCAD
- **Core Competencies** — pill tags for soft and professional skills
### Projects
Asymmetric 3-column grid. The featured project spans 2 columns. Cards have hover lift and a gradient overlay. Placeholders are ready to receive real project images.
 
### Certifications
Numbered glass-border cards for NYSC, Fusion Design Competition, and Young Architects Day — each with a gold underline that slides in on hover.
 
### Contact
Dark centered section with a direct email link, LinkedIn, and location details.
 
---
 
## Customisation
 
### Updating Content
 
All portfolio content is defined in `src/components/portfolio/data.ts`. Edit the exported arrays to update anything without touching JSX.
 
```ts
// Add or update software skills
export const SOFTWARE_SKILLS: SoftwareSkill[] = [
  { name: 'AutoCAD',    percentage: 95 },
  { name: 'Revit',      percentage: 90 },
  // add more here...
]
 
// Add or update soft skills
export const SKILLS: string[] = [
  'Architectural Design',
  'Space Planning',
  // add more here...
]
```
 
### Updating the Email Address
 
In `src/components/portfolio/Contact.tsx`:
 
```tsx
{/* 👇 Replace with actual email */}
<a href="mailto:favour@email.com">
  favour@email.com
</a>
```
 
### Adding Real Project Images
 
In `src/components/portfolio/Projects.tsx`, replace `<PlaceholderImage />`:
 
```tsx
<img
  src="/images/project-name.jpg"
  alt="Urban Dwelling Series — Lagos"
  className="w-full h-full object-cover"
/>
```
 
Place all images inside `public/images/`.
 
### Adding More Projects
 
In `data.ts`, add to the `PROJECTS` array:
 
```ts
export const PROJECTS: Project[] = [
  { tag: 'Residential · Featured', name: 'Urban Dwelling Series', location: 'Lagos, Nigeria', featured: true },
  { tag: 'Commercial', name: 'Corporate Hub Design', location: 'Lagos, Nigeria' },
  // add more here...
]
```
 
---
 
## Build for Production
 
```bash
npm run build
```
 
Output goes to `dist/` — ready to deploy.
 
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
 
### Fonts in Production
 
Google Fonts are injected at runtime inside `FavourPortfolio.tsx`. For better performance in production, move the `<link>` tag to `index.html` instead:
 
```html
<link
  href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Outfit:wght@300;400;500&display=swap"
  rel="stylesheet"
/>
```
 
---
 
## Pre-Launch Checklist
 
- [ ] Replace placeholder email in `Contact.tsx`
- [ ] Add real project photos to `public/images/`
- [ ] Update project names and descriptions in `data.ts`
- [ ] Verify LinkedIn URL in `Contact.tsx`
- [ ] Move Google Fonts `<link>` to `index.html`
- [ ] Update copyright year in `Footer.tsx`
- [ ] Run `npm run build` and verify `dist/` before deploying
---
 
## Credits
 
**Developer** — Gabi ([@GABIs-Hub](https://github.com/GABIs-Hub))
 
**Subject** — Favour Ogabi, Architect at Advanced Engineering Consultants, Lagos, Nigeria
[linkedin.com/in/favour-ogabi-382500114](https://www.linkedin.com/in/favour-ogabi-382500114/)
 
---
 
## License
 
This project is licensed under the [MIT License](./LICENSE).
 
© 2025 Favour Ogabi. Built by Gabi ([@GABIs-Hub](https://github.com/GABIs-Hub)).
