/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Update these if your repo name is different
  basePath: '/JoeBingDDS',
  assetPrefix: '/JoeBingDDS',
};

module.exports = nextConfig; 