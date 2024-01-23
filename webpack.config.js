const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "rc-ses";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "self-service-portal-ui-root",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    externals: /^@rc-ses\/.+/,
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],
  });
};
