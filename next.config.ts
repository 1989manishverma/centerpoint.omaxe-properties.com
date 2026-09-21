import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  agentRules: false,
  async headers() {
    return [
      {
        source: "/img/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/investment.html", destination: "/investment", permanent: true },
      { source: "/faqs.html", destination: "/faqs", permanent: true },
      { source: "/get-details.html", destination: "/get-details", permanent: true },
    ];
  },
};

export default nextConfig;
