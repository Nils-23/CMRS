import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Ensure proper static file handling
  images: {
    unoptimized: false,
  },
  // Clean up build output
  distDir: '.next',
  // Ensure proper TypeScript handling
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
