const withImages = require("next-images");

/** @type {import('next').NextConfig} */
module.exports = withImages({
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
          // for webpack 5 use
          // { and: [/\.(js|ts)x?$/] }
        },

        use: ["@svgr/webpack"],
      });

      return config;
    },
  },
});
