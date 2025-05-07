# 🌐 How to Self-Host LinksForest

Ditch Linktree. Own your links. Here's how to self-host your **LinksForest** page on Vercel or Netlify in 5 minutes.

---

## ⚙️ Prerequisites

- A GitHub account
- A free [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/) account
- (Optional) A custom domain (e.g. from Namecheap)

---

## 🚀 Option 1: Vercel (Recommended)

### 1. Fork the Repo

Click "Fork" on [GitHub](https://github.com/YOUR_REPO) to create your copy.

### 2. Deploy on Vercel

- Go to [vercel.com/new](https://vercel.com/new)
- Connect your GitHub repo
- Follow the prompts (Vercel auto-detects Astro)

### 3. Add Your Domain

- Go to your project dashboard
- Settings → Domains → Add `yourdomain.com`
- Update your DNS provider with Vercel's nameservers

---

## 🌍 Option 2: Netlify

### 1. Fork the Repo

Same as Vercel — fork it on GitHub.

### 2. Deploy on Netlify

- Go to [app.netlify.com/start](https://app.netlify.com/start)
- Connect GitHub and select your LinksForest repo
- Build command: `npm run build`
- Publish directory: `dist`

### 3. Add Custom Domain

- Site Settings → Domain management → Add domain
- Configure DNS on your domain provider (e.g. Namecheap)

---

## ✨ Customize Your Forest

Open `src/data/theme.config.ts` and `src/data/links.json` to personalize:

- Your archetype theme
- Your personal links
- Your visual style (backgrounds, text, icons)

---

## 🤝 Support Sovereignty

This project is intentionally open-source. Please don't hoard it.  
**Teach others. Fork it. Theme it. Share it.**

> Let the forest grow 🌱

---

[← Go back to README](./README.md)
