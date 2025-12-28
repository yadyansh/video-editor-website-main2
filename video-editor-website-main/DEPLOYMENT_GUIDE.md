# 🚀 Deployment Guide

This Next.js portfolio website is optimized for deployment on multiple platforms. Choose your preferred hosting service below.

## 📋 Prerequisites

- Node.js 18.17.0 or higher
- npm 9.0.0 or higher

## 🎯 Deployment Options

### 1. Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and provides the best performance.

#### Steps:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy automatically
6. Done! Your site will be live in ~2 minutes

**Custom Domain:** Add your domain in Project Settings → Domains

---

### 2. Netlify

Great alternative with excellent features and easy setup.

#### Steps:
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Netlify will automatically detect settings from `netlify.toml`
6. Click "Deploy site"

**Build Settings (auto-detected):**
- Build command: `npm run build`
- Publish directory: `out`

---

### 3. GitHub Pages

Free hosting directly from your GitHub repository.

#### Steps:
1. Push your code to GitHub
2. Go to your repository Settings
3. Navigate to "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: GitHub Actions
5. The workflow is already configured in `.github/workflows/nextjs.yml`
6. Push to main branch to trigger deployment

**Important for GitHub Pages:**
- Edit `next.config.mjs` and uncomment the `basePath` line
- Update it to match your repository name: `basePath: '/your-repo-name'`
- This ensures assets load correctly

---

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Test production build locally
npm start
```

## 📦 Build Output

The website is configured for static export:
- Output directory: `out/`
- All pages are pre-rendered as static HTML
- Images are unoptimized for static hosting compatibility

## 🌐 Environment Variables

Currently, this project doesn't require environment variables. If you add any:

**Vercel/Netlify:**
- Add them in the dashboard under Project Settings → Environment Variables

**GitHub Pages:**
- Add them as repository secrets in Settings → Secrets and variables → Actions

## ⚡ Performance Optimizations

The website includes:
- ✅ Static export for fast loading
- ✅ Image optimization settings
- ✅ SWC minification
- ✅ Compression enabled
- ✅ Security headers configured
- ✅ Cache control for static assets

## 🔒 Security Headers

Security headers are configured in:
- `vercel.json` for Vercel
- `netlify.toml` for Netlify
- Automatically handled by GitHub Pages

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json .next out
npm install
npm run build
```

### 404 Errors on Deployed Site
- For GitHub Pages: Ensure `basePath` is correctly set in `next.config.mjs`
- For Netlify/Vercel: Check that `output: 'export'` is set in `next.config.mjs`

### Images Not Loading
- The project uses `unoptimized: true` for static export compatibility
- External images from Unsplash should load fine
- Replace placeholder images with your actual content

## 📝 Customization

Before deploying:
1. Update portfolio items in `src/components/Portfolio.tsx`
2. Update testimonials in `src/components/Testimonials.tsx`
3. Update contact info in `src/components/Contact.tsx`
4. Replace placeholder images with your actual work
5. Update metadata in `src/app/layout.tsx`

## 🎨 Custom Domain

### Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify:
1. Go to Site Settings → Domain management
2. Add custom domain
3. Configure DNS

### GitHub Pages:
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS to point to GitHub Pages
3. Enable HTTPS in repository settings

---

## 📞 Support

If you encounter issues:
1. Check the build logs in your deployment platform
2. Ensure all dependencies are installed
3. Verify Node.js version matches requirements
4. Check that the build works locally first

---

**🌟 Your website is now ready to deploy! Choose any platform above and go live in minutes.**
