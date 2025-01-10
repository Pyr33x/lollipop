import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
      {
        hostname: "**.githubusercontent.com",
      },
      {
        hostname: "r09f0jyudo.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
