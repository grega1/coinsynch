/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}
const withImages = require('next-images')
module.exports = withImages({
  esModule:true
})

module.exports = nextConfig
