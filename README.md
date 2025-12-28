# 🎬 Video Editor Portfolio Website

A stunning, cinematic portfolio website for video editors built with Next.js 14, TypeScript, and Tailwind CSS. Optimized for GitHub Pages, Vercel, and Netlify deployment.

> **📁 Project Location:** The actual project files are in the `video-editor-website-main` directory.

## 🚀 Deploy to GitHub Pages (Current Setup)

Your site is configured for GitHub Pages deployment! Follow these steps:

### Step 1: Enable GitHub Pages
1. Go to **Settings** → **Pages** in your repository
2. Under **Source**, select **"GitHub Actions"**
3. Save and you're done!

### Step 2: Push and Deploy
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

The workflow will automatically build and deploy. Check the **Actions** tab for progress.

**Your site will be live at:** `https://yadyansh.github.io/video-editor-website-main2/`

---

## 🌐 Alternative Deployment Options

### Vercel (Easiest - Recommended for Production)
1. Go to [vercel.com](https://vercel.com) and import this repository
2. Set **Root Directory** to: `video-editor-website-main`
3. Deploy automatically
4. **Important:** Comment out `basePath` in `next.config.mjs` for Vercel

### Netlify
1. Import on [netlify.com](https://netlify.com)
2. Set **Base directory**: `video-editor-website-main`
3. **Build command**: `npm run build`
4. **Publish directory**: `video-editor-website-main/out`
5. **Important:** Comment out `basePath` in `next.config.mjs` for Netlify

---

## 📦 Quick Start (Local Development)

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
   cd video-editor-website-main2/video-editor-website-main
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to `http://localhost:3000`

## 🔨 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌐 Deploy to Vercel

See [DEPLOYMENT.md](video-editor-website-main/DEPLOYMENT.md) for complete deployment instructions.

**Quick Deploy:**

1. Push code to GitHub
2. Import project in Vercel
3. Deploy (auto-detected configuration)

Every push to main branch automatically deploys to production!

## 📁 Project Structure

```text
video-editor-website-main/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── lib/
│       ├── animations.ts
│       └── utils.ts
├── .github/
│   └── workflows/
│       └── deploy.yml
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## 🛠️ Technologies

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📝 Configuration Files

- `vercel.json` - Vercel deployment configuration
- `.nvmrc` / `.node-version` - Node.js version specification
- `next.config.mjs` - Next.js configuration with image optimization
- `tsconfig.json` - TypeScript configuration
- `.github/workflows/deploy.yml` - GitHub Actions CI/CD workflow

## ✅ All Errors Fixed

- ✅ TypeScript configuration optimized
- ✅ Inline styles moved to CSS utilities
- ✅ Markdown formatting corrected
- ✅ Image domains updated to remotePatterns
- ✅ Production build optimizations added
- ✅ Security headers configured

## 📊 Performance Features

- Image optimization with Next.js Image
- Automatic code splitting
- SWC minification for faster builds
- Gzip compression
- Edge caching
- Security headers (XSS, CSP, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

For issues and questions:

- Check [DEPLOYMENT.md](video-editor-website-main/DEPLOYMENT.md)
- Open an issue on GitHub
- Review Vercel deployment logs

---

Made with ❤️ for Video Editors
