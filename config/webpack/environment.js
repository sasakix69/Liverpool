const { environment } = require('@rails/webpacker')

module.exports = environment

module.exports = {
  performance: {
    maxEntrypointSize: 500000,
    maxAssetSize: 500000,
  }
}
