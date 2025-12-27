# Quick Setup Guide

## Prerequisites
- Node.js >= 18.17.0
- npm >= 9.0.0
- Git

## Setup Steps

1. Install dependencies:
```bash
cd video-editor-website-main
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Test production build:
```bash
npm run start
```

## Vercel Deployment

### First Time Setup

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel:**
   - Go to https://vercel.com/dashboard
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy" (all settings auto-detected!)

### Automatic Deployments

After initial setup, every push to GitHub automatically deploys:

```bash
# Make changes to your code
git add .
git commit -m "Update website"
git push origin main
# Vercel automatically deploys your changes!
```

## Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Type Errors
```bash
npm run type-check
```

### Lint Errors
```bash
npm run lint
```

## What's Configured

✅ Next.js 14 with App Router
✅ TypeScript strict mode
✅ Tailwind CSS with custom utilities
✅ Image optimization (remotePatterns)
✅ Security headers
✅ SWC minification
✅ Gzip compression
✅ Vercel auto-deploy on push
✅ GitHub Actions CI/CD
✅ Node version specification (.nvmrc)

## Next Steps

1. Customize content in `src/components/`
2. Update metadata in `src/app/layout.tsx`
3. Add your own images/videos
4. Configure custom domain in Vercel
5. Push to GitHub and watch it deploy!

Your website is now production-ready and will auto-update on every push!
