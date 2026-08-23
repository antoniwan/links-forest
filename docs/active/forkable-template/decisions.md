# Decisions

Update this file when a call is made. Defaults below are what we will implement unless we change them.

## D1. Content vs engine

**Default: yes.** One settings file path, two committed versions (demo on the template, Antonio on the site). Loader unchanged.

Do not introduce JSON, CMS, or env-var identity. Do not gitignore for secrecy: identity is allowed to stay public. The TypeScript settings file is the product.

## D2. Demo person on `main`

**Default: fictional named demo**, so the page looks finished.

Not empty strings. Not `Your Name`. Not Antonio.

Suggested: a clearly fake forest-themed person (e.g. name + handle that cannot be mistaken for the author), 4–6 placeholder links, 3–4 socials, `builder` theme.

## D3. Where production content lives

**Decided: public downstream repo** `antoniwan/antoniwan.online-web`. Privacy is not a goal; identity can stay in git.

You cannot use GitHub’s Fork button onto the same account. Create a second public repo, push current `main`, add `upstream` → `antoniwan/links-forest`. That is fork maintenance: you own upstream and downstream.

Vercel production points at `antoniwan.online-web`. Template `main` is what other people fork.

Rejected: private repo (unnecessary). Rejected: `site` branch on this repo (weaker practice than two remotes).

## D4. How forkers get a working page

**Default: template commits a demo `user-settings.ts`.** Clone, `pnpm install`, `pnpm dev`. Edit the file. No setup copy step required.

An extra `.example.ts` is optional reference, not the live path.

## D5. Git history rewrite

**Default: no, not in this project.** HEAD of `main` is what forks get.

## D6. Homepage URL in package.json

**Default: change after the split**, once a demo URL exists or we are comfortable pointing at GitHub.

Done: `package.json` `homepage` now points at `https://github.com/antoniwan/links-forest`.
