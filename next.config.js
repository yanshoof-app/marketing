/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    return config
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/blog/timetable-1.0',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
