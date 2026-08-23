# Personal-info inventory

Anything a fork would copy that identifies Antonio or his businesses.

## Must leave `main`

These become the live overlay, not the template default.

### `src/config/user-settings.ts`

This is almost the entire problem.

- **Profile:** name, handle `antoniwan`, subtitle, `profile-picture.avif`
- **Site:** `https://antoniwan.online`, social handles, SEO copy, OpenGraph, Person JSON-LD (employer, alumni, sameAs, books)
- **Links:** Notes, The Bent One, Mia / the Sun and the Moon, Strong Hands Soft Heart consulting and brand, Builds.Software, personal GitHub, SHSH org GitHub, CodePen, Goodreads, Patreon
- **Socials:** LinkedIn, X, Instagram, email `antonio@builds.software`, Medium, Threads, Bluesky, Facebook, Spotify, Last.fm

### Identity assets (referenced, not currently in git)

- `public/profile-picture.avif`
- `public/default-share.jpg`

SELF-HOSTING.md already tells people to add these. Keep it that way. Do not commit Antonio’s photos to `main`.

## Stays on `main` (template identity, not site identity)

Fine for a public template. Do not treat these as “personal info to extract.”

| File | Why it stays |
| --- | --- |
| `LICENSE.md` | MIT copyright of the original author |
| `package.json` `author`, `repository`, `bugs` | Canonical project metadata |
| `package.json` `homepage` | Can later point at a template demo URL if we add one |
| `src/components/Footer.tsx` GitHub link | Points at the project, not the person page |
| `SELF-HOSTING.md` fork URL | How people find the template |

## Soft / later

- `package.json` `homepage`: `https://antoniwan.online/` currently sells the personal site as the project homepage. After the split, this should be the template demo or the GitHub README.
- Git history of `user-settings.ts`: still personal until a rewrite. Out of scope for v1.
