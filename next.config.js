/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  images:{
    domains:['assets.stickpng.com']
    }
}

module.exports = nextConfig

