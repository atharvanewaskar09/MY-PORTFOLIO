# Atharva Newaskar — Portfolio

A single-page developer portfolio built around an interactive mascot hero, using content
pulled from Atharva's resume (education, experience, projects, skills, achievements).

## Stack
- **Vite + React + TypeScript**
- **Tailwind CSS** (v3, with a shadcn-style CSS variable theme)
- **shadcn project structure** — `components.json`, `src/components/ui/`, `src/lib/utils.ts` (`cn` helper),
  path alias `@/*` → `src/*`. The mascot hero component was dropped straight into `src/components/ui/`,
  which is shadcn's default location for UI components.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  components/ui/mascot-portfolio-hero.tsx   # the interactive hero (as given)
  lib/utils.ts                              # cn() helper (clsx + tailwind-merge)
  App.tsx                                   # hero + About/Experience/Projects/Skills/Education/Contact
  index.css                                 # Tailwind + shadcn CSS variables (paper/ink/green theme)
```

## Customizing

All of the hero's copy (name, tagline, services, greetings, colors) is passed as props to
`<MascotPortfolioHero />` in `App.tsx` — edit the props there rather than the component file.
The rest of the page content (projects, skills, achievements, contact links) lives in the
arrays at the top of `App.tsx`.

## Adding more shadcn components

Because this environment can't reach `ui.shadcn.com` to run the shadcn CLI, `components.json`
and the folder layout were set up by hand. Once you have internet access to the shadcn registry,
`npx shadcn@latest add <component>` will work normally and drop new components into
`src/components/ui/` alongside this one.
