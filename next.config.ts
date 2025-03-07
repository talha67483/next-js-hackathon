import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */

// };
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Add the Sanity CDN domain here
  },
};

export default nextConfig;
