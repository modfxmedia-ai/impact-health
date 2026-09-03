import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Live site (WordPress) serves every URL with a trailing slash, and all
  // page `canonical` metadata is authored to match that — without this,
  // Next's default routing 308-redirects the trailing-slash URL away from
  // itself, so every self-referencing canonical pointed at a redirecting URL.
  trailingSlash: true,
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
    ],
  },
  // Keep cron under the 250MB serverless limit — never trace public/ into
  // api/cron/publish-posts. Covers live in Vercel Blob, not fs.readFile.
  outputFileTracingExcludes: {
    "*": ["./public/images/**", "./public/**/*.mp4", "./public/**/*.webm"],
  },
};

export default nextConfig;
