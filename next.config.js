/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'luofujo.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'luofujo.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
