import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms-imgp.jw-cdn.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cfp2.jw-cdn.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "b.jw-cdn.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assetsnffrgf-a.akamaihd.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
