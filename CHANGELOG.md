# Changelog

Notable changes are listed here. The project uses [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.8.0] - 2026-08-23

- This repo is now a forkable template with a fictional demo identity (Rowan Hollow) in `user-settings.ts`. A fresh clone renders a complete page without a photo.
- README and SELF-HOSTING lead with clone → `pnpm install` → `pnpm dev` → edit profile, `site.baseUrl`, and links. The live antoniwan.online site lives in a separate downstream repo.

## [3.7.0] - 2026-08-23

- Each of the 13 themes now owns calling-card chrome: radius, icon wells, featured borders, hover hints, atmosphere, and section/handle voice.
- Social tooltips pick up the active theme’s color and spring, so switching archetypes changes the whole page, not just the typeface.
- Fixed the dev theme picker: it sat under the page stacking layer, so clicks never reached the list. It now lives in the same root, above the Astro toolbar.

## [3.6.0] - 2026-08-23

- Redesigned the page as a compact calling card: smaller portrait, handle, and primary socials sit with the identity so the first links show without scrolling.
- Added optional `handle` on the profile, `featured` on links, and `primary` on socials. Notes is featured; LinkedIn, X, Instagram, and email lead; remaining socials move to the footer.
- Editorial section headers, icon wells on cards, tighter type and spacing, and zinc tray surfaces so the layout scans as a brand page instead of a link list.

## [3.5.0] - 2026-08-23

- Reorganized links into visitor-intent sections: Writing, Work, and Elsewhere.
- Replaced react-icons with emoji for all link and social icons; removed the react-icons dependency.
- Updated profile links: Notes leads Writing, removed obsolete projects, Medium and BlueSky moved to social icons.

## [3.4.0] - 2026-08-22

- Added categorized link sections: links group by `category` into labeled sections (Children's Books, Writing & Reading, Work & Consulting, Code & Projects, Brand, Connect & Support).
- Added The Bent One children's book link and reorganized all profile links into the new section layout.
- Person JSON-LD `workExample` now lists both children's books.

## [2.7.0] - 2026-02-26

- ESLint: removed `.eslintignore` (ESLint 9 uses `ignores` in config only). Switched to static imports for parser and plugins so lint runs correctly. Version bump for consistency.

## [2.6.0] - 2026-02-26

- Added ESLint and Prettier (Astro, TypeScript, React). Added `public/sw.js` service worker; it caches the favicon and pages for offline use and is registered by default from the layout. Docs updated to pnpm and simplified.

## [2.5.0] - 2026-02-26

- Upgraded Astro to 5.18.0. Hero component now supports HTML in the profile subtitle (e.g. simple tags for emphasis).

## [2.4.1] - 2026-02-26

- Package author field updated for clarity.

## [2.3.1] - 2026-02-14

- SEO: improved meta tags and OpenGraph support for sharing.

## [2.3.0] - 2026-02-14

- Version bump and related updates.

## [2.2.0] - 2026-02-14

- Sitemap support in Astro config. Meta configuration extended with profile and OpenGraph details. Dependency updates.

## [2.1.0] - 2025-07-29

- Theme typography: each theme has its own font (e.g. Roboto Mono for builder, Bebas Neue for warrior), weights, and letter spacing. LinkCard and other components now inherit theme fonts correctly instead of overriding them. Theme list: builder, wolf, mystic, dragon, artist, warrior, healer, alchemist, strategist, steward.

## [2.0.0] - 2025-07-29

- Config refactor: `user-settings.ts` replaces `user.config.ts`. Site and UTM handling moved into a settings loader; UTM parameters are applied automatically. Layout and footer spacing improved; signature page layout and spacing updated.

## [1.2.0] - 2025-05-17

- README updated with supported platforms list. Version bump.

## [1.1.0] - 2025-05-08

- README and tech stack details updated. Changelog file removed then re-added in later work. Spotify and Last.fm support added to config and icons. Threads support and other social config updates.

## [1.0.1] - 2025-05-07

- Changelog, README, and package files updated for patch release.

## [1.0.0] - 2025-05-07

- Initial release. Link-sharing page with configurable profile, links, and socials. Theme system (multiple themes), responsive layout, SEO meta and OpenGraph, UTM parameters, Vercel Analytics. Email signature page at `/signature`. Secondary links, Footer, Hero. Renamed from LinkForest to LinksForest.
