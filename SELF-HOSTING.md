# 🌐 How to Self-Host LinksForest

Ditch Linktree. Own your links. Here's how to self-host your **LinksForest** page on Vercel or Netlify in 5 minutes.

---

## ⚙️ Prerequisites

- A GitHub account
- A free [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/) account
- (Optional) A custom domain (e.g. from Namecheap)
- Node.js (LTS version recommended)

---

## 🚀 Option 1: Vercel (Recommended)

### 1. Fork the Repo

Click "Fork" on [GitHub](https://github.com/YOUR_REPO) to create your copy.

### 2. Deploy on Vercel

- Go to [vercel.com/new](https://vercel.com/new)
- Connect your GitHub repo
- Vercel will automatically detect Astro and configure the build settings
- Click "Deploy"

### 3. Add Your Domain

- Go to your project dashboard
- Navigate to Settings → Domains
- Add your custom domain (e.g., `links.yourdomain.com`)
- Follow Vercel's instructions to update your DNS settings

---

## 🌍 Option 2: Netlify

### 1. Fork the Repo

Same as Vercel — fork it on GitHub.

### 2. Deploy on Netlify

- Go to [app.netlify.com/start](https://app.netlify.com/start)
- Connect your GitHub account and select your LinksForest repo
- Configure build settings:
  - Build command: `npm run build`
  - Publish directory: `dist`
- Click "Deploy site"

### 3. Add Custom Domain

- Go to Site Settings → Domain management
- Click "Add custom domain"
- Follow Netlify's instructions to configure your DNS settings

---

## ✨ Customize Your Forest

1. **Update Configuration**

   - Open `src/config/user.config.ts`
   - Customize your profile, links, and theme
   - Commit and push your changes

2. **Configure Environment (Optional)**

   - Add environment variables in your hosting platform
   - Common variables:
     - `DEBUG`: Enable logging (e.g., `links-forest:*`)
     - `ANALYTICS_ID`: Your Vercel Analytics ID

3. **Test Your Changes**
   - Run `npm run dev` locally
   - Visit `http://localhost:4321`
   - Verify all features work as expected

---

## 🔧 Troubleshooting

### Common Issues

1. **Build Fails**

   - Check Node.js version (use LTS version)
   - Run `npm install` locally to verify dependencies
   - Check build logs in your hosting platform

2. **Domain Not Working**

   - Verify DNS settings
   - Wait for DNS propagation (can take up to 48 hours)
   - Check SSL certificate status

3. **Analytics Not Working**
   - Verify Vercel Analytics integration
   - Check for ad blockers
   - Ensure proper environment variables

---

## 🤝 Support Sovereignty

This project is intentionally open-source. Please don't hoard it.  
**Teach others. Fork it. Theme it. Share it.**

> Let the forest grow 🌱

---

[← Go back to README](./README.md)
