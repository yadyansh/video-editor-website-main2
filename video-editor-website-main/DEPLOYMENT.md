# Vercel Deployment Guide

This Next.js project is fully optimized for Vercel deployment with automatic GitHub integration.

## 🚀 Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO)

## 📋 Prerequisites

- Node.js >= 18.17.0
- npm >= 9.0.0
- GitHub account
- Vercel account (free tier works great!)

## 🔄 Automatic GitHub Deployment Setup

### Step 1: Connect GitHub Repository

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Vercel will automatically detect Next.js configuration

### Step 2: Configure Build Settings

Vercel will auto-detect these settings (already configured in `vercel.json`):

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node Version**: 18.17.0

### Step 3: Deploy

Click **"Deploy"** - Your site will be live in ~2 minutes!

## 🔁 Automatic Deployments

Once connected, Vercel will **automatically deploy**:

- ✅ **Production**: Every push to `main` branch
- ✅ **Preview**: Every pull request
- ✅ **Instant**: Changes go live in under 30 seconds

### How It Works

1. Push code to GitHub:

   ```bash
   git add .
   git commit -m "Update site"
   git push origin main
   ```

2. Vercel automatically:
   - Detects the push
   - Runs build process
   - Deploys to production
   - Updates your live URL

## 🌐 Domain Setup

### Custom Domain

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. HTTPS automatically configured

## 🔐 Environment Variables

Add environment variables in Vercel Dashboard → Settings → Environment Variables:

```bash
# Example variables (if needed)
NEXT_PUBLIC_API_URL=your_api_url
EMAIL_SERVICE_KEY=your_key
```

## ⚡ Performance Optimizations

Already configured:

- ✅ Image optimization with Next.js Image
- ✅ Automatic code splitting
- ✅ SWC minification
- ✅ Gzip compression
- ✅ Security headers
- ✅ Edge caching

## 🧪 Testing Before Push

Run these commands locally:

```bash
# Install dependencies
npm install

# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build

# Test production build
npm run start
```

## 📊 Monitoring

After deployment:

- View deployment logs in Vercel Dashboard
- Monitor analytics (built-in)
- Check build times and errors
- Review deployment history

## 🔧 Troubleshooting

### Build Fails

- Check Node version matches `.nvmrc` (18.17.0)
- Run `npm install` to update dependencies
- Check build logs in Vercel Dashboard

### Environment Variables

- Ensure all required env vars are set in Vercel
- Use `NEXT_PUBLIC_` prefix for client-side variables

### Images Not Loading

- Verify image domains in `next.config.mjs`
- Check `remotePatterns` configuration

## 📝 Deployment Checklist

- [ ] GitHub repository created and pushed
- [ ] Vercel account connected to GitHub
- [ ] Project imported to Vercel
- [ ] Build settings configured (auto-detected)
- [ ] Environment variables added (if needed)
- [ ] Custom domain configured (optional)
- [ ] Test deployment successful
- [ ] Auto-deployment verified with a test push

## 🎉 You're All Set

Every time you push to GitHub, your site automatically updates on Vercel. No manual deployment needed!
