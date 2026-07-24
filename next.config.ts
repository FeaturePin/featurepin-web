import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/alternatives/userguiding/',
        destination: '/featurepin-vs-userguiding/',
        permanent: true,
      },
      {
        source: '/alternatives/beamer/',
        destination: '/featurepin-vs-beamer/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
