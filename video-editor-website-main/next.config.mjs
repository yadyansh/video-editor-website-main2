/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' - now using Node.js server mode
  images: {
    // Re-enabled image optimization with Node.js server
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
};

export default nextConfig;
