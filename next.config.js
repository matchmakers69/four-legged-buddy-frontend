const nextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */
module.exports = {
  ...nextTranslate(),
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};
