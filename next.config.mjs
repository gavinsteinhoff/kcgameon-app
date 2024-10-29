import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "www.kcgameon.com" }],
  },
};

export default nextConfig;
