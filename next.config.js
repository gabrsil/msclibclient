/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        port: '',
        hostname: 'i.discogs.com',
        pathname: 'i.discogs.com'
      }
    ]
  }
}

module.exports = nextConfig
