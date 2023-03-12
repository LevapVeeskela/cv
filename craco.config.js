const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./",
        tsConfigPath: "./tsconfig.paths.json"
      }
    }
  ],
  // webpack: {
  //   configure: (webpackConfig, { env, paths }) => {
  //     console.log('env: ', env);
  //     // webpackConfig.entry = './path/to/my/entry/file.js';
  //     return webpackConfig;
  //   },
  // },
};