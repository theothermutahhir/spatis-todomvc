const path = require("path");

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
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [...jsDefaultRules]
  },
  resolve: {
    alias: {
      spatis: path.resolve(__dirname, "../spatis/dist", "spatis")
    }
  }
};

const clientTarget = {
  entry: "./app.js",
  mode: "development",
  output: {
    filename: "client.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [...jsDefaultRules]
  },
  resolve: {
    alias: {
      spatis: path.resolve(__dirname, "../spatis/dist", "spatis-client")
    }
  }
};

module.exports = [serverTarget, clientTarget];
