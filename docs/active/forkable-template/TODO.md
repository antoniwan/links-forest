# TODO

Work in order. Check items off in the same PR/session that does them.

## 0. Tracked here

- [x] Branch `feat/forkable-template`
- [x] Project folder + inventory + decisions

## 1. Demo identity for the template (do not merge to main yet)

- [x] Write fictional demo `user-settings.ts` content ready to swap onto template `main` in Phase 3
- [x] README: this repo is the template; live site is a separate repo
- [x] SELF-HOSTING.md: clone template, edit `user-settings.ts`, deploy; do not assume the live site is this repo

## 2. Docs for forkers

- [x] README: clone → `pnpm install` → `pnpm dev` → edit `user-settings.ts`
- [x] Point people at profile / `site.baseUrl` / links first

## 3. Two-repo cutover (see MIGRATION.md)

- [x] Decide D3: public downstream `antoniwan.online-web` (same-account git push + `upstream`, not private, not Fork button)
- [x] Phase 0: demo settings prepared on this branch (do not merge to `main` yet)
- [x] Phase 1: create public `antoniwan/antoniwan.online-web`, push current `main`
- [x] Phase 2: clone it, add `upstream`, switch Vercel Git source, verify antoniwan.online
- [ ] Phase 3: put demo `user-settings.ts` on template `main`
- [ ] Phase 4: first `git merge upstream/main` on the site clone; keep your settings
- [ ] Phase 5: use WORKFLOW.md as the runbook

## 4. Template polish (after the split works)

- [x] Demo links/socials that 404-proof (example.com or project README)
- [x] Confirm initials avatar path (no photo required)
- [x] Footer / homepage URL still make sense for a template
- [x] CHANGELOG + semver when this ships (minor: 3.8.0)

## 5. Out of scope unless we reopen it

- Git history purge
- CMS / env-var identity
- New config format
