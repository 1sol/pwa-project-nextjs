const withAntdLess = require("next-plugin-antd-less");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withImages = require("next-images");

module.exports = withPlugins([
  [optimizedImages],
  [
    withPWA,
    {
      pwa: {
        dest: "public",
        register: true,
        runtimeCaching,
      },
    },
  ],
  [
    withAntdLess,
    {
      lessVarsFilePath: "./src/styles/antd.less",
    },
  ],
  [withImages],
]);
