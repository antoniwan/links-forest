# Decisions

Update this file when a call is made. Defaults below are what we will implement unless we change them.

## D1. Content vs engine

**Default: yes.** One real settings file, one committed example, loader unchanged.

Do not introduce JSON, CMS, or env-var identity. The TypeScript settings file is the product.

## D2. Demo person on `main`

**Default: fictional named demo**, so the page looks finished.

Not empty strings. Not `Your Name`. Not Antonio.

Suggested: a clearly fake forest-themed person (e.g. name + handle that cannot be mistaken for the author), 4–6 placeholder links, 3–4 socials, `builder` theme.

## D3. Where production content lives

**Default: private overlay repo/fork**, Vercel production pointed at that.

`main` on `antoniwan/links-forest` becomes the template people fork.

Fallback if we want to stay on one GitHub repo: `site` branch with the real `user-settings.ts`. Know that the file stays public.

## D4. First-run copy

**Default: `pnpm setup` copies example → `user-settings.ts` if missing.** Wire it in README and SELF-HOSTING.md. Optional postinstall is easy to hate; a named script is enough.

## D5. Git history rewrite

**Default: no, not in this project.** HEAD of `main` is what forks get.

## D6. Homepage URL in package.json

**Default: change after the split**, once a demo URL exists or we are comfortable pointing at GitHub.

Until then it can stay. Not a blocker for the settings extract.
