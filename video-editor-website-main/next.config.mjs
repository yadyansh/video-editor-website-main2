/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
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
  // Base path for GitHub Pages (comment out for other platforms)
  // basePath: '/video-editor-website-main2',
  // Trailing slash for static export
  trailingSlash: true,
};

export default nextConfig;
