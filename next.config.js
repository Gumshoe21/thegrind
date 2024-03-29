/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['https://www.tailwind.ui.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.recipetineats.com',
      },
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
    ],
  },
}

module.exports = nextConfig
