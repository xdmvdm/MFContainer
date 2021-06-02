const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;
//Domain name will be used from here

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        products: `products@${domain}/products/remoteEntry.js`,
        cards: `cards@${domain}/manufacturer/remoteEntry.js`,
        //manufacturers: `manufacturers@${domain}/manufacturer/remoteEntry.js`,
        //Assumption serverside we have a products and manufacturer folders
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);