# LinksForest

A minimalist, themed link-sharing page. Built with Astro, Tailwind CSS, and Framer Motion. You edit one config file to set your profile, links, theme, and socials; the site builds as static HTML.

**This repo is the template.** Forks get a finished demo page for a fictional person (Rowan Hollow), not a live personal site. [antoniwan.online](https://antoniwan.online) is a separate repo that tracks this one as `upstream`.

## Try the demo

**[links-forest-phi.vercel.app](https://links-forest-phi.vercel.app)** — walk through Rowan Hollow’s page before you fork.

When you’re ready: fork → edit `src/config/user-settings.ts` → deploy. Step-by-step in the **[self-hosting guide](./SELF-HOSTING.md)** (Vercel, Netlify, custom domain).

## Quick start

```bash
git clone https://github.com/antoniwan/links-forest.git
cd links-forest
pnpm install
pnpm dev
```

Open `http://localhost:4321`. Then edit `src/config/user-settings.ts`, in this order:

1. **`profile`** — name, handle, subtitle. Leave `image` unset to use initials.
2. **`site.baseUrl`** — your real URL (SEO, canonical, share cards).
3. **`links` and `social`** — your destinations.

Pick a theme with `theme.active` (`builder`, `wolf`, `mystic`, and the rest listed in that file). Deploy with the [self-hosting guide](./SELF-HOSTING.md).

## Themes

| Archetype      | Energetic Mode | Description                    | Colors & Characteristics |
| -------------- | -------------- | ------------------------------ | ------------------------ |
| The Builder    | Creation       | Systems, form, structure       | Stone and amber tones    |
| The Wolf       | Instinct       | Loyalty, protection, raw truth | Cool grays and blues     |
| The Mystic     | Spirituality   | Vision, cosmic threads         | Deep purples and indigos |
| The Dragon     | Power          | Force, will, transformation    | Rich reds and oranges    |
| The Artist     | Expression     | Creativity, truth, beauty      | Pink and rose tones      |
| The Warrior    | Action         | Discipline, focus, strength    | Slate and gray tones     |
| The Healer     | Regeneration   | Soothing, connection, care     | Emerald and teal tones   |
| The Alchemist  | Transformation | Elements, ritual, change       | Violet and purple tones  |
| The Strategist | Mind           | Planning, clarity, vision      | Blue and cyan tones      |
| The Steward    | Legacy         | Care, generational vision      | Green and lime tones     |

## Features

- [x] Themed layout engine via config
- [x] Archetype-based Tailwind presets
- [x] Framer Motion link animations
- [x] Responsive link layout (mobile-first)
- [x] Custom branding (logo, colors, bio)
- [x] Easy-to-edit configuration
- [x] Fast static builds with no server cost
- [x] TypeScript support
- [x] Configurable via `theme.config.ts`
- [x] Comprehensive logging system
- [x] Vercel Analytics integration
- [x] Comprehensive SEO meta tags
- [x] OpenGraph and Twitter Card support
- [x] Structured data for better SEO
- [x] Mobile and app-specific meta tags
- [x] Secondary links section
- [x] Link categorization
- [x] Smooth page transitions
- [x] Reduced motion support
- [x] UTM parameter support for link tracking
- [ ] Theme selector UI
- [ ] Optional: live theme switching
- [ ] Optional: embed music, blog posts, videos
- [ ] Optional: dark mode toggle
- [ ] Optional: dynamic link metrics
- [x] Supports self-hosting via Netlify or Vercel (see [Self-Hosting Guide](./SELF-HOSTING.md))

## Tech Stack

Astro, React, Tailwind CSS, Framer Motion, and TypeScript. Vercel Analytics for tracking; deploy to Vercel or Netlify. See `package.json` for current versions.

## Project Structure

```txt
/
├── src/
│   ├── components/        # React and Astro components
│   │   ├── ProfilePicture.astro
│   │   ├── LinkCard.tsx
│   │   ├── SocialIcons.tsx
│   │   └── ThemeCycler.tsx
│   ├── layouts/          # Page layouts
│   │   └── Layout.astro  # Main layout with meta tags
│   ├── pages/            # Astro pages
│   │   └── index.astro   # Main page
│   ├── config/           # Configuration files
│   │   ├── theme.config.ts
│   │   ├── user-settings.ts
│   │   └── meta.config.ts
│   ├── data/             # Type definitions and data
│   │   ├── theme.types.ts
│   │   ├── types.ts
│   │   └── emojis.ts
│   └── utils/            # Utility functions
│       └── logger.ts
├── public/               # Static assets
│   ├── favicon.svg
│   └── sw.js             # Service worker (registered by default)
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `pnpm install`      | Installs dependencies                            |
| `pnpm run dev`      | Starts local dev server at `localhost:4321`      |
| `pnpm run build`    | Build your production site to `./dist/`          |
| `pnpm run preview`  | Preview your build locally, before deploying     |
| `pnpm run lint`     | Run ESLint on source files                       |
| `pnpm run lint:fix` | Run ESLint and try to fix problems automatically |
| `pnpm run format`   | Format files with Prettier                       |

## Service worker

- The file `public/sw.js` is a simple service worker and is **registered by default** from the main layout.
- It caches the favicon and the pages you visit while you are online.
- When you are offline, it can serve cached pages and assets from the browser cache.
- It only handles `GET` requests on the same origin.

## Debugging and logging

A logging system is included for development. Logs are on in dev by default.

Log namespaces: `links-forest:config`, `links-forest:layout`, `links-forest:page`, `links-forest:component`, `links-forest:data`.

To turn on logs (e.g. in production):

In development mode, all logs are enabled by default. To enable specific namespaces in production:

```bash
# Enable all logs
DEBUG=links-forest:* pnpm run dev

# Enable specific namespaces
DEBUG=links-forest:config,links-forest:component pnpm run dev
```

Logs show in the browser console and in the terminal when the dev server is running.

## Documentation

- [Self-Hosting Guide](./SELF-HOSTING.md) — deploy on Vercel or Netlify
- [License](./LICENSE.md) — MIT license and project intent
- [Astro](https://docs.astro.build) · [Tailwind CSS](https://tailwindcss.com/docs) · [TypeScript](https://www.typescriptlang.org/docs/)

## Contributing

Issues and pull requests are welcome. Useful contributions include new themes, accessibility fixes, and clearer docs.

## License

MIT. See [LICENSE.md](./LICENSE.md) for the full text and project intent.
