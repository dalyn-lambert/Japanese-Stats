/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // https://github.com/airbnb/visx/issues/1637#issuecomment-1529059640
    // https://nextjs.org/docs/messages/import-esm-externals
    // added to fix d3 require issue
    esmExternals: 'loose',
  },
};

module.exports = nextConfig;
