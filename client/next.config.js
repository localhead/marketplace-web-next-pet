/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["data.halalguide.me"],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      type: "asset",
      resourceQuery: /url/, // *.svg?url
    });
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
      resourceQuery: { not: [/url/] },
    });

    return config;
  },

  trailingSlash: true,
};

module.exports = nextConfig;
