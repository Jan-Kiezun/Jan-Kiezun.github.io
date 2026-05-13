# Jan Kieżun — Personal Blog

Personal blog built with [Astro](https://astro.build) and deployed to [GitHub Pages](https://jan-kiezun.github.io).

## Quick start

```sh
npm install        # dependencies (ephemeral — re-run if missing)
npm run dev        # local dev server at localhost:4321
npm run build      # production build to dist/
bash ../deploy.sh  # build + deploy to gh-pages
```

## Adding a blog post

1. Create a `.md` file in `src/content/blog/` with frontmatter:
   ```yaml
   ---
   title: Your Title
   description: Short summary
   date: YYYY-MM-DD
   tags: [tag1, tag2]
   draft: false
   ---
   ```
2. Set `draft: true` to hide from the listing while working.
3. Run `npm run build` to verify.
4. Commit, then `bash ../deploy.sh` to publish.

Or use the `add-blog-post` skill in OpenCode by providing a path to a `.md` file.

## Project structure

```
gith-pgs-client/
├── public/                  # static assets (favicon, logo)
├── src/
│   ├── content/blog/        # blog posts as .md files
│   ├── layouts/             # base HTML shell (nav, footer, SEO)
│   ├── pages/               # routes (index, blog/[slug])
│   └── styles/              # global CSS
├── astro.config.mjs
├── package.json
└── deploy.sh                # (in repo root)
```

## Deploy

The deploy script (`../deploy.sh` from `gith-pgs-client/`):
1. Builds the site
2. Switches to the `gh-pages` branch
3. Replaces all files with the built output
4. Commits and pushes to `origin/gh-pages`
5. Switches back to `main`

---

*Powered by [Astro](https://astro.build).*
