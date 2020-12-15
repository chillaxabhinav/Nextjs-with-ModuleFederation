const { withModuleFederation, MergeRuntime } = require("@module-federation/nextjs-mf");
const path = require("path");
  
const config = {
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;
    const mfConf = {
      name: "home",
      library: { type: config.output.libraryTarget, name: "home" },
      filename: "static/runtime/remoteEntry.js",
      remotes: {},
      exposes: {
        "./nav" : "./components/Nav"
      },
      shared: [],
    };

    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, mfConf);

    config.plugins.push(new MergeRuntime());

    if (!isServer) {
      config.output.publicPath = "http://localhost:3000/_next/";
    }

    return config;
  }
};

module.exports = config;