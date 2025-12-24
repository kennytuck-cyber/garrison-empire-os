/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Add image domains as needed
  },
  experimental: {
    serverActions: {
      enabled: true,
    },
  },
}

module.exports = nextConfig
