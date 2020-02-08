const path = require("path");
const webpack = require("webpack");
const { DuplicatesPlugin } = require("inspectpack/plugin");

const jsDefaultRules = [
  {
    test: /\.m?jsx?$/,
    exclude: /(node_modules)/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react"]
      }
    }
  }
];

const serverTarget = {
  entry: "./app.js",
  mode: "development",
  target: "node",
  devtool: "eval-source-map",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [...jsDefaultRules]
  },
  resolve: {
    alias: {
      spatis: path.resolve(__dirname, "node_modules/spatis/dist", "server")
    },
    symlinks: false
  },
  plugins: [
    new DuplicatesPlugin({
      // Emit compilation warning or error? (Default: `false`)
      emitErrors: false,
      // Display full duplicates information? (Default: `false`)
      verbose: false
    })
  ]
};

const clientTarget = {
  entry: "./app.js",
  mode: "development",
  devtool: "eval-source-map",
  output: {
    filename: "client.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [...jsDefaultRules]
  },
  resolve: {
    alias: {
      spatis: path.resolve(__dirname, "node_modules/spatis/dist", "client")
    },
    symlinks: false
  },
  plugins: [
    new DuplicatesPlugin({
      // Emit compilation warning or error? (Default: `false`)
      emitErrors: false,
      // Display full duplicates information? (Default: `false`)
      verbose: false
    })
  ]
};

module.exports = [serverTarget, clientTarget];
