# 🌐 How to Self-Host LinksForest

Ditch Linktree. Own your links. Here's how to self-host your **LinksForest** page on Vercel or Netlify in 5 minutes.

---

## ⚙️ Prerequisites

- A GitHub account
- A free [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/) account
- (Optional) A custom domain (e.g. from Namecheap)
- Node.js 18+ (LTS version recommended)

---

## 🚀 Option 1: Vercel (Recommended)

### 1. Fork the Repo

Click "Fork" on [GitHub](https://github.com/antoniwan/links-forest) to create your copy.

### 2. Deploy on Vercel

- Go to [vercel.com/new](https://vercel.com/new)
- Connect your GitHub repo
- Vercel will automatically detect Astro and configure the build settings:
  - **Framework Preset**: Astro
  - **Build Command**: `npm run build`
  - **Output Directory**: `dist`
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
  - **Build command**: `npm run build`
  - **Publish directory**: `dist`
- Click "Deploy site"

### 3. Add Custom Domain

- Go to Site Settings → Domain management
- Click "Add custom domain"
- Follow Netlify's instructions to configure your DNS settings

---

## ✨ Customize Your Forest

### 1. **Update Configuration**

- Open `src/config/user-settings.ts`
- Customize your profile, links, theme, and site settings
- All UTM parameters are automatically added to your links
- Commit and push your changes

### 2. **Add Your Assets**

- Place your profile picture in `public/` (referenced as `profile-picture.avif`)
- Add a default share image as `public/default-share.jpg`
- Update the favicon at `public/favicon.svg`

### 3. **Configure Environment (Optional)**

- Add environment variables in your hosting platform
- Common variables:
  - `DEBUG`: Enable logging (e.g., `links-forest:*`)
  - `ANALYTICS_ID`: Your Vercel Analytics ID

### 4. **Test Your Changes**

- Run `npm run dev` locally
- Visit `http://localhost:4321`
- Test the email signature generator at `http://localhost:4321/signature`
- Verify all features work as expected

---

## 🌟 Features Included

### **Core Features**

- ✅ 10 archetypal themes (Builder, Wolf, Mystic, Dragon, Artist, Warrior, Healer, Alchemist, Strategist, Steward)
- ✅ Responsive design with mobile-first approach
- ✅ Framer Motion animations and transitions
- ✅ Automatic UTM parameter tracking
- ✅ Comprehensive SEO meta tags
- ✅ OpenGraph and Twitter Card support
- ✅ Vercel Analytics integration

### **Advanced Features**

- ✅ Email signature generator (`/signature`)
- ✅ Secondary links section
- ✅ Social media icons with hover effects
- ✅ Link categorization
- ✅ Reduced motion support
- ✅ Comprehensive logging system
- ✅ TypeScript support

### **SEO & Performance**

- ✅ Structured data for better search results
- ✅ Mobile and app-specific meta tags
- ✅ Fast static builds with no server cost
- ✅ Optimized images and assets
- ✅ Accessibility features

---

## 🔧 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version (use 18+ LTS version)
   - Run `npm install` locally to verify dependencies
   - Check build logs in your hosting platform
   - Ensure all TypeScript types are correct

2. **Domain Not Working**
   - Verify DNS settings
   - Wait for DNS propagation (can take up to 48 hours)
   - Check SSL certificate status
   - Ensure domain is properly configured in hosting platform

3. **Analytics Not Working**
   - Verify Vercel Analytics integration
   - Check for ad blockers
   - Ensure proper environment variables
   - Check browser console for errors

4. **Theme Not Loading**
   - Verify theme name in `user-settings.ts` matches available themes
   - Check browser console for JavaScript errors
   - Ensure all theme assets are properly referenced

5. **Email Signature Generator Issues**
   - Verify you have at least 2 links configured
   - Check that email is properly configured in social links
   - Ensure clipboard API is supported in your browser

### **Local Development**

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### **Debugging**

Enable detailed logging for troubleshooting:

```bash
# Enable all logs
DEBUG=links-forest:* npm run dev

# Enable specific namespaces
DEBUG=links-forest:config,links-forest:component npm run dev
```

---

## 📁 Project Structure

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

---

## 🎨 Customization Options

### **Themes**

Choose from 10 archetypal themes, each with unique colors and characteristics:

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

### **Configuration**

- Profile information (name, subtitle, image)
- Main and secondary links with categories
- Social media links with icons
- Site settings (SEO, meta tags, social handles)
- Automatic UTM parameter handling

---

## 🤝 Support Sovereignty

This project is intentionally open-source. Please don't hoard it.  
**Teach others. Fork it. Theme it. Share it.**

> Let the forest grow 🌱

---

[← Go back to README](./README.md)
