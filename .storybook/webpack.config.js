const nextConfig = require('../next.config')

module.exports = (storybookBaseConfig, configType) =>
  nextConfig.webpack(storybookBaseConfig, {
    dir: '.',
    dev: configType === 'DEVELOPMENT',
    isServer: false,
    buildId: 'storybook-build-id',
    config: storybookBaseConfig,
    defaultLoaders: {},
    totalPages: 1,
    isStorybook: true,
  })