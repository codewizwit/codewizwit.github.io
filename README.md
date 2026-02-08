# codewizwit.com

Personal site and platform for Alexandra Kelstrom. Human-centered AI adoption, responsible AI frameworks, and the mission behind "No Human Left Behind."

**Live:** [codewizwit.github.io](https://codewizwit.github.io)

## What this is

- **The Mission** — AI adoption that keeps humans at the center
- **The Lift** — A framework built on trust, collaboration, and Encoding Intent
- **The Four Lenses** — A responsible AI assessment for evaluating tools through the eyes of the people who use them
- **Writing** — Dispatches on responsible AI and reflections on building technology that serves people

## Stack

- [Astro](https://astro.build) — static site generator, zero JS by default
- MDX — content collections for articles
- Self-hosted fonts — Lora, Inter, JetBrains Mono (WOFF2)
- GitHub Pages — deployed via GitHub Actions on push to `main`

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321`

## Build

```bash
npm run build
npm run preview
```

Static output goes to `dist/`.

## Project structure

```
src/
├── components/
│   ├── global/       # Header, Footer, SEO, GrainOverlay
│   └── home/         # Hero, Thesis, Paradox, LiftTeaser, WritingTeaser, GoldMoment, Proof
├── content/
│   └── writing/      # MDX articles (Dispatches, Side Pieces)
├── layouts/          # BaseLayout, PageLayout, ArticleLayout
├── pages/
│   ├── frameworks/   # The Lift, The Four Lenses
│   ├── writing/      # Article index and dynamic routes
│   └── *.astro       # Home, About, Connect, The Hot Dog, Projects, Speaking
├── styles/           # Global CSS, typography, utilities
└── data/             # Navigation, projects, speaking data
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages automatically.

## License

All content and design are original work by Alexandra Kelstrom. All rights reserved.
