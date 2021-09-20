const path = require("path")
const config = require('./config')

const serverConfig = {
  target: 'node',
  entry: {
    lib: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, `${config.build.server.dir}/`),
    filename: `${config.build.server.file}`,
    libraryTarget: "commonjs",
    library: "validate",
    globalObject: "this",
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
    path: path.resolve(__dirname, `${config.build.client.dir}/`),
    filename: `${config.build.client.file}`,
    libraryTarget: 'commonjs2',
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
