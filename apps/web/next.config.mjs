/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@voteverse/shared'],
  experimental: {
    optimizePackageImports: ['@voteverse/shared'],
  },
  async rewrites() {
    return [];
  },
};

export default nextConfig;
