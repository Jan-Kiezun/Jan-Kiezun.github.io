# Session Instructions

## Always Reference
- Always read `.opencode/context.md` at the start of a session
- The git repo root is at `/home/japop/dev/projekty/Jan-Kiezun.github.io/`
- Working directory is `gith-pgs-client/` inside the repo

## Environment
- Node.js v21.7.3 — Astro 5 installed locally, NOT Astro 6
- `npx astro` pulls Astro 6 which is incompatible — avoid it
- **`node_modules` does not persist between tool calls** — always run `npm install` first

## Deployment — CRITICAL
- **Do NOT use `git publish-blog`** — the alias has a path bug (`../deploy.sh` from repo root is wrong) and runs `git add -A` which picks up unintended files outside `gith-pgs-client/`
- **Always use `bash ../deploy.sh` from `gith-pgs-client/`**
- The deploy script requires a **clean working tree** — commit changes before deploying, or it fails on `git checkout gh-pages`
- After deploy, the script does `git checkout main` which **restores files from git** — local deletions may reappear. If you deleted a file locally but didn't commit, it will come back
- gh-pages branch must have files at ROOT level (not inside gith-pgs-client/)
- Always rebuild (`npm run build`) before checking live content — CDN cache may lag

## Content
- New posts go in `src/content/blog/` as `.md` files with frontmatter (title, description, date, tags)
- Frontmatter schema: title (string), description (string), date (date), tags (string[]), draft (boolean)
- Set `draft: true` to hide from listing without deleting

## Images / Static assets
- Place images in `public/` so they're served at `/filename.ext`
- The blog logo is at `public/blog-logo.png` and is used as the favicon, tab icon, and in the navbar

## Layout
- `src/layouts/BlogLayout.astro` controls the base HTML shell: `<title>`, favicon, nav, footer
- Nav has "Jan Kiezun" link on the left, logo on the right
- To edit the navbar logo or its position, edit the `<nav>` in `BlogLayout.astro`
