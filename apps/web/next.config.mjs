/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@rankly/shared'],
  experimental: {
    optimizePackageImports: ['@rankly/shared'],
  },
  async rewrites() {
    return [];
  },
};

export default nextConfig;
