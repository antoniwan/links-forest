# Changelog

Notable changes are listed here. The project uses [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
