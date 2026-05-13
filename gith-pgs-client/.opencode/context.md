# Project Context

## Stack
- Astro 5 (static site generator)
- Typography: Lora (serif body), Inter (sans headings)
- CSS: single global.css, no framework
- Site: https://jan-kiezun.github.io/
- Repo: git@github.com:Jan-Kiezun/Jan-Kiezun.github.io.git
- Source in: `gith-pgs-client/` subdirectory

## Commands
- `git publish-blog <message>` — stage all, commit, push, deploy
- `npm run dev` — local dev server
- `npm run build` — build only
- `bash ../deploy.sh` — manual deploy (fallback)

## Structure
- `src/content/blog/` — add a `.md` file for a new post
- `src/pages/index.astro` — homepage (intro + posts listing)
- `src/pages/blog/[...slug].astro` — dynamic blog post route
- `src/layouts/BlogLayout.astro` — base layout
- `src/styles/global.css` — all styles

## Author
- Jan Kieżun · Data Engineer · Poland
- Chips: Python, SQL, PySpark, Airflow, Data Engineering, ML, Signal Processing, GCP
- Links: GitHub, LinkedIn (in intro section)

## Alias
- Registered globally: `git config --global alias.publish-blog`
- Defined in `~/.gitconfig`
- Repo root deploy script: `../deploy.sh`
