module.exports = {
  devServer: {
    port: 9999,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // before: require('./mock/mock-server.js')
  },
};