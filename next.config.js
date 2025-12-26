/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  experimental: {
    serverActions: {
      enabled: true,
    },
  },
}

module.exports = nextConfig
