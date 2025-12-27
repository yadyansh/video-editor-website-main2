# Vercel Deployment Configuration

This project is optimized for deployment on Vercel.

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Environment Variables

If you're using a backend API or email service, add environment variables in Vercel:

```
NEXT_PUBLIC_API_URL=your_api_url
EMAIL_SERVICE_KEY=your_key
```

## Build Settings

- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

The project will automatically be optimized and deployed.
