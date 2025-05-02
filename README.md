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
   - Set it to one of these themes:
     - `wolf`: Cool grays and blues
     - `fox`: Warm oranges and browns
     - `owl`: Deep purples and dark blues
     - `raven`: Dark blacks and grays
     - `deer`: Earthy browns and greens
     - `bear`: Rich browns and golds
     - `eagle`: Majestic golds and browns
     - `salmon`: Vibrant pinks and oranges
     - `otter`: Playful blues and teals
     - `lynx`: Mysterious grays and silvers

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

| Archetype      | Energetic Mode | Description                     |
| -------------- | -------------- | ------------------------------- |
| The Builder    | Creation       | Manifestation, systems, form    |
| The Wolf       | Instinct       | Loyalty, protection, raw truth  |
| The Mystic     | Spirituality   | Vision, silence, cosmic threads |
| The Dragon     | Power          | Force, will, heat               |
| The Artist     | Expression     | Creativity, chaos, truth        |
| The Warrior    | Action         | Discipline, focus, grit         |
| The Healer     | Regeneration   | Soothing, tending, connection   |
| The Alchemist  | Transformation | Change, elements, ritual        |
| The Strategist | Mind           | Planning, clarity, framing      |
| The Steward    | Legacy         | Care, love, generational vision |

## 🚀 Features

- [x] Themed layout engine via config
- [x] Archetype-based Tailwind presets
- [x] Framer Motion link animations
- [x] Responsive link layout (mobile-first)
- [x] Custom branding (logo, colors, bio)
- [x] Easy-to-edit configuration
- [x] Fast static builds with no server cost
- [x] TypeScript support
- [ ] Theme selector UI
- [ ] Optional: live theme switching
- [ ] Configurable via `theme.config.ts`
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
│   ├── components/        # LinkCard.tsx, SocialIcons.astro
│   ├── layouts/           # Layout.astro
│   ├── pages/             # index.astro
│   └── data/              # theme.config.ts, links.json
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
