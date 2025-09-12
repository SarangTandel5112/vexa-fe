import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://vexa-backend.greybatter.com/api/:path*',
      },
    ];
  },
};

export default nextConfig;
