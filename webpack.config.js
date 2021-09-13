const path = require("path")

const serverConfig = {
  target: 'node',
  entry: {
    lib: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, "dist/server"),
    filename: "index.js",
    libraryTarget: "commonjs",
    library: "validate",
    globalObject: "this",
    clean: true,
  },
  externals: [ /^(?!\.|\/).+/i, ],
  module: {
    rules: [
      {
        test: /\.node$/,
        exclude: /node_modules/,
        use: "node-loader",
      },
    ],
  },
  mode: "development",
}

const clientConfig = {
  target: 'web',
  output: {
    path: path.resolve(__dirname, "dist/client"),
    filename: "index.js",
    libraryTarget: 'commonjs2',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  mode: "development",
}

module.exports = [serverConfig, clientConfig]
