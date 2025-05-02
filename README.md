# 🌲 LinkForest

**A sovereign, archetypal digital interface**  
A minimalist, themed link-sharing platform powered by Astro, Tailwind, and Framer Motion.  
Built to express your full self — in all your evolving forms.

## 🚀 Quick Start: Personalize Your Page

1. **Edit Your Profile**

   - Open `src/config/user.config.ts`
   - Update your name, subtitle, and profile picture
   - If no profile picture is set, your initials will be shown with a themed background

2. **Choose Your Theme**

   - In `src/config/user.config.ts`, find the `theme.active` property
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

3. **Add Your Links**

   - In `src/config/user.config.ts`, edit the `links` array
   - Each link needs:
     - `title`: The name of your link
     - `url`: The destination URL
     - `description`: A short description

4. **Add Social Media**

   - In `src/config/user.config.ts`, edit the `social` array
   - Each social link needs:
     - `platform`: The name of the platform
     - `url`: Your profile URL
     - `icon`: The icon to use (see `src/data/emojis.ts` for available icons)

5. **Preview Your Changes**

   ```bash
   npm run dev
   ```

   Visit `http://localhost:4321` to see your changes

6. **Deploy**
   ```bash
   npm run build
   ```
   Deploy the `dist` folder to your hosting provider

## 🔥 The Vision

LinkForest isn't just a tool. It's a **living, personal interface** that shifts with your energy.  
Choose from 10 unique archetypes that reflect different modes of being — from builder to mystic to steward.

Each archetype comes with its own **themed UI**, micro-interactions, and aura.

## ✊ Inclusivity Statement

We believe in building technology that reflects the **whole spectrum of humanity**.

Each archetype in LinkForest is intentionally:

- **Gender-neutral** (these are energies, not identities)
- **Culturally flexible** (symbols, not stereotypes)
- **Accessible to all** (through design, code, and intention)

> LinkForest is a sacred space for authentic expression.  
> Everyone is welcome in this forest.

## 🧠 Archetypes (Themes)

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

## 🚀 Features

- [x] Themed layout engine via config
- [x] Archetype-based Tailwind presets
- [x] Framer Motion link animations
- [x] Responsive link layout (mobile-first)
- [x] Custom branding (logo, colors, bio)
- [x] Easy-to-edit configuration
- [x] Fast static builds with no server cost
- [x] TypeScript support
- [x] Development theme cycling for testing
- [x] Configurable via `theme.config.ts`
- [x] Comprehensive logging system
- [ ] Theme selector UI
- [ ] Optional: live theme switching
- [ ] Optional: embed music, blog posts, videos
- [ ] Optional: dark mode toggle
- [ ] Optional: dynamic link metrics
- [x] Supports self-hosting via Netlify or Vercel (see [Self-Hosting Guide](./SELF-HOSTING.md))

## 🔧 Tech Stack

| Tool             | Purpose                          |
| ---------------- | -------------------------------- |
| Astro            | Static site generator (5.0)      |
| Tailwind CSS     | Utility-first styling            |
| React (optional) | Interactive components (islands) |
| Framer Motion    | Animations + transitions         |
| TypeScript       | Type-safe development            |
| Vercel / Netlify | Fast, free deployment            |
| Namecheap        | DNS routing for custom domains   |

## 🗺️ Project Structure

```txt
/
├── src/
│   ├── components/        # ProfilePicture.astro, LinkCard.tsx, SocialIcons.tsx, ThemeCycler.tsx
│   ├── layouts/           # Layout.astro
│   ├── pages/             # index.astro
│   ├── config/            # theme.config.ts, user.config.ts
│   └── data/              # theme.types.ts, links.ts, types.ts, emojis.ts
├── public/                # Favicon, images, assets
├── astro.config.mjs       # Astro configuration
├── tailwind.config.cjs    # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 🔍 Debugging and Logging

LinkForest includes a comprehensive logging system to help with development and debugging. Logs are automatically enabled in development mode.

### Development Theme Cycling

In development mode, themes automatically cycle every 30 seconds to help with testing and development. You'll see detailed logs in the console showing:

- The current theme name
- The theme's color scheme
- The theme's archetypal characteristics

### Available Log Namespaces

- `links-forest:config` - Configuration loading and changes
- `links-forest:layout` - Layout rendering and updates
- `links-forest:page` - Page loading and rendering
- `links-forest:component` - Component lifecycle events
- `links-forest:data` - Data loading and processing

### Enabling Logs

In development mode, all logs are enabled by default. To enable specific namespaces in production:

```bash
# Enable all logs
DEBUG=links-forest:* npm run dev

# Enable specific namespaces
DEBUG=links-forest:config,links-forest:component npm run dev
```

### Viewing Logs

Logs will appear in your browser's console and terminal when running the development server.

## 📚 Documentation

- [Self-Hosting Guide](./SELF-HOSTING.md) — kill Linktree and go sovereign
- [License](./LICENSE.md) — open-source + open-intent
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

We especially welcome:

- New themes and archetypes
- Accessibility improvements
- Guides and tutorials for non-technical creators

## 📄 License

This project is licensed under the MIT License.  
See [`LICENSE.md`](./LICENSE.md) for more details and our community values.
