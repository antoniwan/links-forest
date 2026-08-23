# Make LinksForest forkable

**Status:** active  
**Branch:** `feat/forkable-template`  
**Goal:** A fork should open as a blank template, not as Antonio’s site.

This repo currently does two jobs: it is the public template, and it is the production site for [antoniwan.online](https://antoniwan.online). Those jobs conflict. Forks copy `src/config/user-settings.ts`, so they ship with Antonio’s name, links, socials, and SEO.

## How we get personal info out

Keep the **engine** in the template repo. Keep **your identity** in a second public repo that tracks the template as `upstream`. Same file path, different content. Both committed. Public is fine.

| Layer | What it is | Where |
| --- | --- | --- |
| Engine | Themes, components, loader, docs | both repos (site pulls from template) |
| Template identity | Fictional demo in `user-settings.ts` | `antoniwan/links-forest` `main` |
| Your identity | Antonio in `user-settings.ts` | `antoniwan/antoniwan.online-web` `main` |

You cannot Fork this repo onto the same GitHub account. We `git push` this history into `antoniwan.online-web` and add `upstream`. That *is* fork maintenance: you own both sides. Details: [MIGRATION.md](./MIGRATION.md).

### Recommended model

1. Second public repo `antoniwan/antoniwan.online-web` with `upstream` → this template. Vercel builds that.
2. Template `main` gets a fictional demo in `user-settings.ts` (after Vercel has moved).
3. Site `main` keeps your `user-settings.ts`. Merges from upstream: keep yours when that file conflicts.

### What this is not

- **Not a git-history rewrite (v1).** Old commits still contain personal data. Forks of `main` at HEAD will be clean. Privacy-from-history is a later, destructive step (`git filter-repo`), only if we decide we need it.
- **Not stripping the author from LICENSE / package.json.** MIT copyright and `author` naming the original creator is normal for a template. Homepage and GitHub URLs for this repo can stay.

## Constraints

- `antoniwan.online` must keep deploying without a content regression.
- A fresh `pnpm install && pnpm dev` on a fork must render a complete demo page.
- Identity assets (`profile-picture.avif`, `default-share.jpg`) are already absent from git; the example config should not require them (initials fallback already exists).

## Working files

- [MIGRATION.md](./MIGRATION.md) — cutover: site repo, Vercel, then demo on template `main`
- [WORKFLOW.md](./WORKFLOW.md) — daily git after go-live
- [inventory.md](./inventory.md) — every personal artifact
- [TODO.md](./TODO.md) — implementation checklist
- [decisions.md](./decisions.md) — calls and defaults
