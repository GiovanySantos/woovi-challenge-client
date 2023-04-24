/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    local: "http://localhost:4000",
  },
};

module.exports = nextConfig;

