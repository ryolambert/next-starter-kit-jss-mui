// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack')
const _ = require('lodash')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const withCSS = require('@zeit/next-css')
const TerserPlugin = require('terser-webpack-plugin')

const ANALYZE = process.env.ANALYZE === 'true'

const nextConfig = {
  analyzeServer: ANALYZE,
  analyzeBrowser: ANALYZE,
  bundleAnalyzerConfig: {
    browser: {
      openAnalyzer: false,
      analyzerHost: '0.0.0.0',
      analyzerPort: 9004,
    },
    server: {
      openAnalyzer: false,
      analyzerHost: '0.0.0.0',
      analyzerPort: 9005,
    },
  },

  webpack: (config, { dev, isStorybook }) => ({
    ...config,

    // Configure production source maps manually since
    // @zeit/next-source-maps@0.0.3 is broken. It assumes that Next.js is using
    // UglifyJS, but that is not the case anymore since version 7 - it is now
    // using Terser (an up-to-date fork of UglifyJS) instead.
    optimization: {
      ...config.optimization,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          sourceMap: true,
          cache: true,
        }),
      ],
    },

    devtool: dev ? config.devtool : 'source-map',

    plugins: [
      ...config.plugins,

      new webpack.DefinePlugin({
        DEBUG: JSON.stringify(dev),
      }),

      // lodash-webpack-plugin breaks Storybook.
      !isStorybook &&
        new LodashModuleReplacementPlugin({
          shorthands: true,
          collections: true,
        }),
    ].filter(Boolean),
  }),
}

module.exports = withBundleAnalyzer(nextCssStorybookCompat(withCSS(nextConfig)))

function nextCssStorybookCompat(innerConfig = {}) {
  return {
    ...innerConfig,
    webpack: (config, options) =>
      innerConfig.webpack(
        _.merge(
          {
            // `withCSS` expects this structure to exist, but it doesn’t in Storybook.
            optimization: { splitChunks: { cacheGroups: {} } },
          },
          config,
        ),
        options,
      ),
  }
}
