/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true
  },
  images: { 
    remotePatterns: [
      {hostname: "localhost:3001"}
    ]
  }
}

module.exports = nextConfig
