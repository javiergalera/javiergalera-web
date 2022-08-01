/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Next.js internalization
  i18n: {
    locales: ['en-US', 'es-ES'],
    defaultLocale: 'en-US',
  },

  // SASS support
  sassOptions: {
    includePaths: ["src/styles"],
  },
}

module.exports = nextConfig
