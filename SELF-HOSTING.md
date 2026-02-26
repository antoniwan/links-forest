# Self-hosting LinksForest

How to build and deploy LinksForest on Vercel or Netlify.

## Prerequisites

- A GitHub account
- A free [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/) account
- (Optional) A custom domain (e.g. from Namecheap)
- Node.js 18+ (LTS version recommended)

---

## Option 1: Vercel

### 1. Fork the repo

Click "Fork" on [GitHub](https://github.com/antoniwan/links-forest) to create your copy.

### 2. Deploy on Vercel

- Go to [vercel.com/new](https://vercel.com/new)
- Connect your GitHub repo
- Vercel usually detects Astro. Set build command to `pnpm run build` and output directory to `dist`.
- Click Deploy.

### 3. Add a custom domain (optional)

- Go to your project dashboard
- Navigate to Settings → Domains
- Add your custom domain (e.g., `links.yourdomain.com`)
- Follow Vercel's instructions to update your DNS settings

---

## Option 2: Netlify

### 1. Fork the repo

Fork the repo on GitHub (same as for Vercel).

### 2. Deploy on Netlify

- Go to [app.netlify.com/start](https://app.netlify.com/start)
- Connect GitHub and select your LinksForest repo
- Build command: `pnpm run build`. Publish directory: `dist`.
- Click Deploy site.

### 3. Add a custom domain (optional)

- Go to Site Settings → Domain management
- Click "Add custom domain"
- Follow Netlify's instructions to configure your DNS settings

---

## Customize after deploy

### 1. Update configuration

- Open `src/config/user-settings.ts`
- Customize your profile, links, theme, and site settings
- All UTM parameters are automatically added to your links
- Commit and push your changes

### 2. Add assets

- Place your profile picture in `public/` (referenced as `profile-picture.avif`)
- Add a default share image as `public/default-share.jpg`
- Update the favicon at `public/favicon.svg`

### 3. Environment variables (optional)

- Add environment variables in your hosting platform
- Common variables:
  - `DEBUG`: Enable logging (e.g., `links-forest:*`)
  - `ANALYTICS_ID`: Your Vercel Analytics ID

### 4. Test locally

Run `pnpm run dev`, open `http://localhost:4321`, and check the main page and `/signature` before pushing.

## Troubleshooting

### Common Issues

1. **Build fails**
   - Use Node.js 18 or newer (LTS recommended)
   - Run `pnpm install` locally and then `pnpm run build` to reproduce
   - Check the build logs on Vercel or Netlify

2. **Domain not working** — Check DNS and domain settings in the host dashboard. Propagation can take up to 48 hours.

3. **Analytics not working** — Confirm Vercel Analytics is enabled and that ad blockers or privacy settings are not blocking it.

4. **Theme not loading** — Ensure `theme.active` in `user-settings.ts` matches one of the theme names (e.g. `builder`, `wolf`, `mystic`).

5. **Signature page** — Needs at least two links and (optionally) an email in the social links. Clipboard works in secure contexts (HTTPS or localhost).

### Local commands

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm run preview
```

### Logging

```bash
DEBUG=links-forest:* pnpm run dev
# Or specific namespaces:
DEBUG=links-forest:config,links-forest:component pnpm run dev
```

## Project structure

```
links-forest/
├── src/
│   ├── components/        # React and Astro components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Astro pages (including /signature)
│   ├── config/           # Configuration files
│   │   ├── user-settings.ts  # Your main configuration
│   │   ├── theme.config.ts   # Theme definitions
│   │   └── meta.config.ts    # SEO and meta configuration
│   ├── data/             # Type definitions and data
│   └── utils/            # Utility functions
├── public/               # Static assets
├── astro.config.mjs      # Astro configuration
└── tailwind.config.mjs   # Tailwind configuration
```

## Customization

### Themes

Ten themes are available; each has its own colors and typography:

- **Builder**: Stone and amber tones
- **Wolf**: Cool grays and blues
- **Mystic**: Deep purples and indigos
- **Dragon**: Rich reds and oranges
- **Artist**: Pink and rose tones
- **Warrior**: Slate and gray tones
- **Healer**: Emerald and teal tones
- **Alchemist**: Violet and purple tones
- **Strategist**: Blue and cyan tones
- **Steward**: Green and lime tones

### Configuration

All editing is done in `src/config/user-settings.ts`: profile (name, subtitle, image), main and secondary links, social links, site/SEO settings. UTM parameters are added automatically to links.

---

[Back to README](./README.md)
