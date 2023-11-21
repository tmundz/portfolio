/** @type {import('next').NextConfig} */
const repo = "https://tmundz.github.io/portfolio/";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;
const nextConfig = {
  trailingSlash: true,

  output: "export",
  basePath: basePath,
  assetPrefix: assetPrefix,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig

