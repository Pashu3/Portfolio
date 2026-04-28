# Pashupathi Mali — Portfolio

Personal site of [Pashupathi Mali](https://www.linkedin.com/in/mali-pashupathi/), a full-stack engineer at [syndie.io](https://syndie.io). Case studies, writing, and the systems-design work I care about.

Live: _add your domain here_

## Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Content:** MDX via `next-mdx-remote` + `gray-matter` frontmatter
- **Fonts:** Geist Sans, Geist Mono, Instrument Serif (`next/font`)
- **Lint:** ESLint 9 (flat config) with `eslint-config-next`

> Note: this repo runs on Next.js 16, which has breaking changes vs. older versions. Read the relevant guide in `node_modules/next/dist/docs/` before changing routing, caching, or data-fetching primitives.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | What it does                  |
| --------------- | ----------------------------- |
| `npm run dev`   | Start the dev server          |
| `npm run build` | Production build              |
| `npm run start` | Run the production server     |
| `npm run lint`  | Lint the project with ESLint  |

## Project structure

```
src/
  app/
    layout.tsx              # Root layout, fonts, Spotlight effect
    page.tsx                # Home (Hero / Marquee / Work / Experience / Writing / Contact)
    work/[slug]/page.tsx    # Case study pages
    writing/[slug]/page.tsx # MDX-rendered posts
    globals.css             # Tailwind + design tokens
  components/               # Hero, Work, Writing, Experience, Marquee, etc.
  lib/
    projects.ts             # Case-study data (PROJECTS)
    posts.ts                # MDX loader for /content/writing
content/
  writing/*.mdx             # Long-form posts
public/                     # Static assets
```

## Adding content

### A new case study

Append a `Project` entry to [src/lib/projects.ts](src/lib/projects.ts). The `slug` becomes `/work/<slug>` automatically.

### A new writing post

Drop an `.mdx` file into [content/writing/](content/writing/) with frontmatter (title, date, summary). It becomes available at `/writing/<filename>`.

## Deployment

This site is built to deploy on [Vercel](https://vercel.com/new). Push to `main` and connect the repo — no extra config needed.

## License

All rights reserved. Code is published for reference; copy is mine. Please don't reuse the case-study writing or design wholesale for your own portfolio.
