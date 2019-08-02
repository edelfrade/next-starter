/* eslint-disable no-param-reassign */
require('dotenv').config();
const withCSS = require('@zeit/next-css');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // console.log('in development');
  }
  return withCSS({
    distDir: 'build',
    assetPrefix: process.env.IMAGE_PREFIX,
    cssLoaderOptions: {
      url: false,
    },
    onDemandEntries: {
      // period (in ms) where the server will keep pages in the buffer
      maxInactiveAge: 25 * 1000,
      // number of pages that should be kept simultaneously without being disposed
      pagesBufferLength: 2,
    },
    webpack: (config) => {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        if (entries['main.js'] && !entries['main.js'].includes('./polyfills/polyfills.js')) {
          entries['main.js'].unshift('./polyfills/polyfills.js');
        }
        return entries;
      };

      return config;
    },
    env: {
      IMAGE_PREFIX: process.env.IMAGE_PREFIX,
      HOST_URL: process.env.HOST_URL,
      BASIC_USER: process.env.BASIC_USER,
      BASIC_PW: process.env.BASIC_PW,
    },
  });
};
