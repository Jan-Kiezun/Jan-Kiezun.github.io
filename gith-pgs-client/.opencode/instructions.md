# Session Instructions

## Always Reference
- Always read `.opencode/context.md` at the start of a session
- The git repo root is at `/home/japop/dev/projekty/Jan-Kiezun.github.io/`
- Working directory is `gith-pgs-client/` inside the repo

## Environment
- Node.js v21.7.3 — Astro 5 installed locally, NOT Astro 6
- Run `./node_modules/.bin/astro` or `npm run <script>` for Astro commands
- `npx astro` pulls Astro 6 which is incompatible — avoid it

## Deployment
- Primary: `git publish-blog <message>` (alias)
- Manual: `bash ../deploy.sh` from gith-pgs-client
- gh-pages branch must have files at ROOT level (not inside gith-pgs-client/)
- Always rebuild (`npm run build`) before checking live content — CDN cache may lag

## Content
- New posts go in `src/content/blog/` as `.md` files with frontmatter (title, description, date, tags)
- Frontmatter schema: title (string), description (string), date (date), tags (string[]), draft (boolean)
- Set `draft: true` to hide from listing without deleting
