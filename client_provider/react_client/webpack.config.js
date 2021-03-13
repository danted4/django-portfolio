const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const port = process.env.PORT || 3000;

module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [
              {
                loader: MiniCssExtractPlugin.loader
              },
              'css-loader',
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({ // plugin for controlling how compiled css will be outputted and named
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ],
    devServer: {
      host: 'localhost',
      port: port,
      historyApiFallback: true,
      contentBase: __dirname+ "/static/frontend",
      open: true
    }
  };