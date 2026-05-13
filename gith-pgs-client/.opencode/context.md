# Project Context

## Stack
- Astro 5 (static site generator)
- Typography: Lora (serif body), Inter (sans headings)
- CSS: single global.css, no framework
- Site: https://jan-kiezun.github.io/
- Repo: git@github.com:Jan-Kiezun/Jan-Kiezun.github.io.git
- Source in: `gith-pgs-client/` subdirectory

## Commands (use in order)
- `npm install` — always needed first (node_modules is ephemeral)
- `npm run build` — builds dist/
- `bash ../deploy.sh` — builds + deploys to gh-pages (preferred)
- `npm run dev` — local dev server

## DO NOT USE
- `git publish-blog` — broken alias (wrong path, commits unintended files)
- `npx astro` — pulls Astro 6 which is incompatible

## Structure
- `src/content/blog/` — add a `.md` file for a new post
- `src/pages/index.astro` — homepage (intro + posts listing)
- `src/pages/blog/[...slug].astro` — dynamic blog post route
- `src/layouts/BlogLayout.astro` — base layout (nav, footer, SEO head)
- `src/styles/global.css` — all styles
- `public/` — static assets served at root (e.g. `/blog-logo.png`)

## Layout details
- Nav in layout: "Jan Kieżun" link, no logo in navbar
- Favicon points to `/blog-logo.png`
- Tab title logic: `title === "Home"` → "Jan Kieżun Blog", otherwise `"{title} — Jan Kieżun"`

## Author
- Jan Kieżun · Data Engineer · Poland
- Chips: Python, SQL, PySpark, Airflow, Data Engineering, ML, Signal Processing, GCP
- Links: GitHub, LinkedIn (in intro section on index.astro)

## Deploy script behavior
- Located at repo root: `deploy.sh`
- Builds from `gith-pgs-client/`, copies dist/, switches to gh-pages branch, replaces files, commits, pushes, switches back to main
- Requires **clean working tree** before switching branches — commit first
- `git checkout main` at the end restores files from git — uncommitted deletions are undone
