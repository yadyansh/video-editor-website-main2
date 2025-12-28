# 🎬 Video Editor Portfolio Website

A modern, cinematic portfolio website for video editors built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 **Cinematic Design** - Dark theme with smooth animations and gradient accents
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Static Export** - Ready for deployment on any hosting platform
- 🎭 **Smooth Animations** - Powered by Framer Motion and GSAP
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- 🔒 **Security Headers** - Pre-configured security headers for production
- 🚀 **Performance Optimized** - Fast loading and smooth scrolling

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, GSAP
- **Icons:** Lucide React
- **Deployment:** Vercel, Netlify, GitHub Pages

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

## 📦 Deployment

This website is configured for easy deployment on multiple platforms:

### Vercel (Recommended)
1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy automatically ✨

### Netlify
1. Push to GitHub
2. Import project on [netlify.com](https://netlify.com)
3. Deploy with pre-configured `netlify.toml`

### GitHub Pages
1. Enable GitHub Actions in repository settings
2. Push to main branch
3. Workflow deploys automatically from `.github/workflows/nextjs.yml`

**📖 For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)**

## 🎨 Customization

1. **Portfolio Items** - Update in `src/components/Portfolio.tsx`
2. **Services** - Modify in `src/components/Services.tsx`
3. **Testimonials** - Edit in `src/components/Testimonials.tsx`
4. **Contact Info** - Change in `src/components/Contact.tsx`
5. **Colors** - Customize in `tailwind.config.ts`
6. **Metadata** - Update in `src/app/layout.tsx`

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout & metadata
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Services.tsx      # Services section
│   ├── Portfolio.tsx     # Portfolio gallery
│   ├── Testimonials.tsx  # Client testimonials
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
└── lib/
    ├── animations.ts     # Animation utilities
    └── utils.ts          # Helper functions
```

## 🎯 Key Sections

- **Hero** - Attention-grabbing header with CTAs
- **About** - Introduction and expertise highlights
- **Services** - Tiered pricing packages
- **Portfolio** - Filterable project showcase
- **Testimonials** - Client reviews carousel
- **Contact** - Interactive contact form
- **Footer** - Social links and info

## 🔧 Configuration Files

- `next.config.mjs` - Next.js configuration with static export
- `tailwind.config.ts` - Tailwind CSS customization
- `vercel.json` - Vercel deployment settings
- `netlify.toml` - Netlify deployment settings
- `.github/workflows/nextjs.yml` - GitHub Pages deployment

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

For issues or questions, please open an issue on GitHub.

---

**Built with ❤️ for video editors who want to showcase their work beautifully**
