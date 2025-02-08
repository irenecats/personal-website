import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  output: "export",
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        test: /\.svg$/,
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
      }
    );
    return config;
  },
};

export default nextConfig;
