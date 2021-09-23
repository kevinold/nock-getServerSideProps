//const { cypressMockMiddleware } = require('@cypress/mock-ssr')

module.exports = {
  reactStrictMode: true,
  /*
  webpack: (config, options) => {
    //if (config.name === "server") {
      config.devServer = {
        onBeforeSetupMiddleware: (devServer) => {
          //devServer.app.use(cypressMockMiddleware())
          devServer.app.get('/kevin', function (req, res) {
            res.json({ custom: 'response' });
          });
        }
      }
      //console.log(config)
    //}
    return config;
  },
  */
}