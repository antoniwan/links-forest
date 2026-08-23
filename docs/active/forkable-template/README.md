# Make LinksForest forkable

**Status:** active  
**Branch:** `feat/forkable-template`  
**Goal:** A fork should open as a blank template, not as Antonio’s site.

This repo currently does two jobs: it is the public template, and it is the production site for [antoniwan.online](https://antoniwan.online). Those jobs conflict. Forks copy `src/config/user-settings.ts`, so they ship with Antonio’s name, links, socials, and SEO.

## How we get personal info out

Keep the **engine** in git. Keep **identity** in a content pack that the template does not commit.

| Layer | What it is | Lives in git on `main`? |
| --- | --- | --- |
| Engine | Themes, components, loader, docs | Yes |
| Template content | Fictional demo profile, placeholder links | Yes (`user-settings.example.ts`) |
| Personal content | Antonio’s profile, links, SEO, photos | No (overlay used only for the live deploy) |

`user-settings.ts` already is the content pack. The loader (`src/config/settings.loader.ts`) stays the engine. We do not scatter identity into new files; we stop committing the real one.

### Recommended model

1. Commit `src/config/user-settings.example.ts` with a clearly fake demo person (not `YOUR_NAME`, not Antonio).
2. Gitignore `src/config/user-settings.ts`. First-run copies the example (`pnpm setup` or a postinstall that only copies if missing).
3. Point Vercel production at a **private overlay**, not at the public `main` content:
   - **Preferred:** private repo or private fork that contains the real `user-settings.ts` + `public/` photos, and pulls this template as upstream.
   - **Fallback:** a `site` branch on this repo. Forks still default to `main`, but the personal file remains public on that branch.

Vercel builds from git. A gitignored file on `main` will not appear in production unless we overlay it. That is the whole point of the private fork / `site` branch.

### What this is not

- **Not a git-history rewrite (v1).** Old commits still contain personal data. Forks of `main` at HEAD will be clean. Privacy-from-history is a later, destructive step (`git filter-repo`), only if we decide we need it.
- **Not stripping the author from LICENSE / package.json.** MIT copyright and `author` naming the original creator is normal for a template. Homepage and GitHub URLs for this repo can stay.

## Constraints

- `antoniwan.online` must keep deploying without a content regression.
- A fresh `pnpm install && pnpm dev` on a fork must render a complete demo page.
- Identity assets (`profile-picture.avif`, `default-share.jpg`) are already absent from git; the example config should not require them (initials fallback already exists).

## Working files

- [inventory.md](./inventory.md) — every personal artifact
- [TODO.md](./TODO.md) — implementation checklist
- [decisions.md](./decisions.md) — open calls and defaults
