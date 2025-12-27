# Video Editor Portfolio Website

A stunning, cinematic portfolio website for video editors built with Next.js 14, TypeScript, and Tailwind CSS. Fully optimized for Vercel deployment with automatic GitHub integration.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, React 18, TypeScript
- **Smooth Animations**: Framer Motion & GSAP
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Image optimization, code splitting, SWC minification
- **Production Ready**: Configured for Vercel deployment
- **Auto-Deploy**: Automatic deployment on GitHub push

## 📦 Quick Start

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
