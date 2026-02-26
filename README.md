# LinksForest

A minimalist, themed link-sharing platform. Built with Astro, Tailwind CSS, and Framer Motion. You edit one config file to set your profile, links, theme, and socials; the site builds as static HTML.

## Quick Start

1. **Edit Your Profile**
   - Open `src/config/user-settings.ts`
   - Update your name, subtitle, and profile picture in the `profile` section
   - If no profile picture is set, your initials will be shown with a themed background

2. **Choose Your Theme**
   - In `src/config/user-settings.ts`, find the `theme.active` property
   - Set it to one of these archetypal themes:
     - `builder`: 🏗️ - Creation, systems, form
     - `wolf`: 🐺 - Instinct, loyalty, protection
     - `mystic`: 🔮 - Spirituality, vision, cosmic threads
     - `dragon`: 🐉 - Power, force, will
     - `artist`: 🎨 - Expression, creativity, truth
     - `warrior`: ⚔️ - Action, discipline, focus
     - `healer`: 💫 - Regeneration, soothing, connection
     - `alchemist`: 🧪 - Transformation, elements, ritual
     - `strategist`: 🧠 - Mind, planning, clarity
     - `steward`: 🌱 - Legacy, care, generational vision

3. **Configure Site Settings**
   - In `src/config/user-settings.ts`, edit the `site` section
   - Update your base URL, site name, and social media handles
   - Customize SEO settings like description, keywords, and meta tags

4. **Add Your Links**
   - In `src/config/user-settings.ts`, edit the `links` array
   - Each link needs:
     - `title`: The name of your link
     - `url`: The destination URL
     - `description`: A short description
     - `category`: Optional category for grouping (e.g., "book", "work", "lifestyle")

5. **Add Secondary Links**
   - In `src/config/user-settings.ts`, edit the `secondaryLinks` array
   - These links appear in a separate section below your main links
   - Same structure as main links

6. **Add Social Media**
   - In `src/config/user-settings.ts`, edit the `social` array
   - Each social link needs:
     - `platform`: The name of the platform
     - `url`: Your profile URL
     - `icon`: The icon to use (see `src/data/emojis.ts` for available icons)
   - Supported platforms include: Twitter, GitHub, LinkedIn, Instagram, Facebook, YouTube, WhatsApp, Telegram, Discord, Slack, Reddit, TikTok, Last.fm, Spotify, and Threads

7. **Automatic UTM Parameters**
   - UTM parameters are automatically added to all your links for tracking
   - No manual configuration needed - the system handles this automatically

8. **Preview Your Changes**

   ```bash
   pnpm run dev
   ```

   Visit `http://localhost:4321` to see your changes

9. **Deploy**
   ```bash
   pnpm run build
   ```
   Deploy the `dist` folder to your hosting provider

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
