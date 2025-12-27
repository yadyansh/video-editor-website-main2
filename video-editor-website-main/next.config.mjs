/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  // Optimize for production
  reactStrictMode: true,
  // Enable SWC minification for better performance
  swcMinify: true,
  // Compress output
  compress: true,
  // Power up with Vercel Analytics
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
