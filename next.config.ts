import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // CMS media is served from the local Payload app during development.
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/api/media/**",
      },
    ],
  },
};

export default nextConfig;
