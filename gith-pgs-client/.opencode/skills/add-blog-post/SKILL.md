---
name: add-blog-post
description: Copy a provided .md file into src/content/blog/ and deploy it
compatibility: opencode
---

## Critical prerequisites

- Working directory MUST be `gith-pgs-client/`
- node_modules is ephemeral — always run `npm install` first
- User MUST provide a path to an existing `.md` file (do NOT create content)
- Always commit before deploying (deploy script needs a clean tree)

## Step-by-step

### 1. Validate the provided file
- Read the provided `.md` path
- Verify frontmatter: `title`, `description`, `date`, `tags`, optional `draft`
- If invalid, report the issue and stop

### 2. Copy into content
- Slug from title: `"My Post"` → `src/content/blog/my-post.md`
- Overwrite if slug exists (user's intent)

### 3. Build
- Run `npm run build` — if it fails, fix frontmatter and retry

### 4. Commit
- `git add -A && git commit -m "Add <slug> post"`
- Must commit so the deploy script can switch branches cleanly

### 5. Deploy
- Run `bash ../deploy.sh` from `gith-pgs-client/`
- Do NOT use `git publish-blog` (broken alias)

### 6. Push main
- After deploy, run `git push origin main` to sync the commit

### 7. Confirm
- URL: `https://jan-kiezun.github.io/blog/<slug>/`
- Warn about CDN cache delay
