# 📋 Pre-Deployment Checklist

Use this checklist before deploying your website to ensure everything is ready.

## ✅ Content Updates

- [ ] Replace placeholder portfolio items with your actual work
- [ ] Update video URLs in Portfolio component
- [ ] Add your real testimonials
- [ ] Update contact email/phone in Contact component
- [ ] Add your social media links in Footer
- [ ] Update profile image (if you add one)
- [ ] Replace Unsplash placeholder images with your own

## ✅ Configuration

- [ ] Update site metadata in `src/app/layout.tsx`
  - Title
  - Description
  - Keywords
- [ ] Set correct basePath for GitHub Pages (if using)
  - Uncomment and update in `next.config.mjs`
- [ ] Configure analytics (optional)
- [ ] Add custom domain (optional)

## ✅ Testing

- [ ] Test all navigation links
- [ ] Verify contact form works
- [ ] Check responsive design on mobile
- [ ] Test all portfolio filter categories
- [ ] Verify smooth scroll behavior
- [ ] Test all external links
- [ ] Check images load correctly
- [ ] Verify animations work smoothly

## ✅ Performance

- [ ] Run `npm run build` successfully
- [ ] Check build output size
- [ ] Test production build locally
- [ ] Verify no console errors
- [ ] Check page load speed

## ✅ SEO & Social

- [ ] Add robots.txt (optional)
- [ ] Add sitemap.xml (optional)
- [ ] Set up Open Graph images
- [ ] Verify meta descriptions
- [ ] Test social media sharing

## ✅ Deployment Platform Specific

### For Vercel:
- [ ] Connect GitHub repository
- [ ] Set build command: `npm run build`
- [ ] Set output directory: `out`
- [ ] Configure custom domain (if applicable)

### For Netlify:
- [ ] Verify `netlify.toml` is present
- [ ] Connect GitHub repository
- [ ] Configure custom domain (if applicable)

### For GitHub Pages:
- [ ] Enable GitHub Pages in settings
- [ ] Select "GitHub Actions" as source
- [ ] Update basePath in `next.config.mjs`
- [ ] Verify `.github/workflows/nextjs.yml` exists
- [ ] Push to main branch to trigger deployment

## ✅ Post-Deployment

- [ ] Visit deployed URL
- [ ] Test on multiple devices
- [ ] Check SSL certificate (HTTPS)
- [ ] Test contact form submission
- [ ] Verify all links work in production
- [ ] Check analytics setup (if configured)
- [ ] Share with friends for feedback

## 🐛 Common Issues

### Build Fails
```bash
rm -rf node_modules package-lock.json .next out
npm install
npm run build
```

### 404 on GitHub Pages
- Ensure basePath is set correctly in next.config.mjs
- Check that `.nojekyll` file exists in public folder

### Images Not Loading
- Verify `unoptimized: true` in next.config.mjs
- Check image URLs are absolute (start with https://)

### Styles Not Applied
- Clear browser cache
- Verify Tailwind CSS is configured correctly
- Check build completed successfully

---

**Once you've checked all items, you're ready to deploy! 🚀**
