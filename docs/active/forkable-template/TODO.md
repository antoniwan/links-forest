# TODO

Work in order. Check items off in the same PR/session that does them.

## 0. Tracked here

- [x] Branch `feat/forkable-template`
- [x] Project folder + inventory + decisions

## 1. Split the settings file

- [ ] Add `src/config/user-settings.example.ts` with fictional demo content (typed, builds, looks complete)
- [ ] Gitignore `src/config/user-settings.ts`
- [ ] Add `pnpm setup` (copy example → settings if missing)
- [ ] Point `settings.loader.ts` at `user-settings.ts` only; fail with a clear message if it is missing
- [ ] Keep a local `user-settings.ts` on this machine so `antoniwan.online` still works in dev

## 2. Docs for forkers

- [ ] README: clone → `pnpm setup` → edit `user-settings.ts` → `pnpm dev`
- [ ] SELF-HOSTING.md: same bootstrap; say the committed file is the example, not the live site
- [ ] Example file header: what to change first (profile, `site.baseUrl`, links)

## 3. Production overlay

- [ ] Decide D3 for real: private fork vs `site` branch
- [ ] Move the current `user-settings.ts` into that overlay
- [ ] Point Vercel production at the overlay
- [ ] Confirm `antoniwan.online` still renders the real profile after `main` is template-only

## 4. Template polish (after the split works)

- [ ] Demo links/socials that 404-proof (example.com or project README)
- [ ] Confirm initials avatar path (no photo required)
- [ ] Footer / homepage URL still make sense for a template
- [ ] CHANGELOG + semver when this ships (minor: 3.8.0)

## 5. Out of scope unless we reopen it

- Git history purge
- CMS / env-var identity
- New config format
