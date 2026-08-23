# Steady-state workflow

After [MIGRATION.md](./MIGRATION.md). Two clones. This is the habit.

## Which folder?

| Changing | Folder | Push to |
| --- | --- | --- |
| Engine (UI, themes, docs, **demo** settings) | `links-forest` | `antoniwan/links-forest` |
| Identity (your settings, photos) | `antoniwan.online-web` | `antoniwan/antoniwan.online-web` |

`pwd` and `git remote -v` before `git push` until that is muscle memory.

## Template (`links-forest`)

Only remote: `origin` → template.

```bash
git checkout -b feat/whatever
# work
git push -u origin HEAD
# PR into main
```

`user-settings.ts` here is the **demo person**. Do not paste your live profile back into this repo.

## Site (`antoniwan.online-web`)

- `origin` → your site (Vercel)
- `upstream` → the template

### Change your page

```bash
# edit src/config/user-settings.ts
git add src/config/user-settings.ts
git commit -m "Update Notes description."
git push origin main
```

### Take template updates

This is the part you have not practiced as the owner of both repos.

```bash
git fetch upstream
git merge upstream/main
pnpm install
pnpm dev
# still you?
git push origin main
```

Use **merge**, not rebase. The merge commit means “I took template main today.”

If `user-settings.ts` conflicts: keep **ours** (your file). Engine files: take **upstream**, unless you are about to send that engine fix back to `links-forest`.

Do not grow a second engine on the site clone. Fix UI in the template, merge upstream afterward.

### Never

```bash
git push upstream              # publishes your identity into the template
git remote set-url origin ...  # mixing the two remotes
```

## If antoniwan.online looks like the demo

1. Vercel Git source must be `antoniwan.online-web`.
2. On the site clone, `user-settings.ts` still has your name.
3. If a merge overwrote it: `git checkout ORIG_HEAD -- src/config/user-settings.ts`, commit, push.
