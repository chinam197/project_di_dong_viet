/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_API: "http://localhost:3005",
  },
  images: {
    remotePatterns: [
      {
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        hostname: "didongviet.vn",
      },
    ],
  },
};

export default nextConfig;
