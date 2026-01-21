// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static optimization
    reactStrictMode: true,
    images: {
      domains: ["www.facebook.com","firebasestorage.googleapis.com"],
    },
    // Configure paths
    webpack(config) {
      return config;
    },
  };
  
  export default nextConfig;