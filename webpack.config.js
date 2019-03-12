const webpack = require('webpack'); // eslint-disable-line no-restricted-modules
const path = require('path'); // eslint-disable-line no-restricted-modules
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line no-restricted-modules
const _ = require('lodash'); // eslint-disable-line no-restricted-modules

function createDefinePlugin(envs) {
  return new webpack.DefinePlugin({
    'process.env': _.fromPairs(_.toPairs(envs).map(([key, defaultValue]) => {
      return [key, JSON.stringify(process.env[key] || defaultValue)];
    }))
  });
}

module.exports = {

  entry: './src/app.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[name].[contenthash].js',
    publicPath: '/'
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /src\/.+\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread'
            ]
          }
        }
      }
    ]
  },

  plugins: [
    createDefinePlugin({
      
    }),
    new HtmlWebpackPlugin({
      template: '!!ejs-compiled-loader!./src/index.html'
    })
  ]
};
