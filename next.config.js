/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ],
  },
}

module.exports = nextConfig
