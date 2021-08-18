/* eslint-disable no-undef */
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // !!!!!! MAKE SURE TO CHANGE MODE TO PRODUCTION WHEN DOPLOYING FOR PRODUCTION !!!!!!!!!
  mode: "production",
  entry: {
    main: {
      import: path.resolve(__dirname, "./src/scripts/app.js"),
    },
    movie: {
      import: path.resolve(__dirname, "./src/scripts/movie-page.js"),
    },
  },
  // devtool: 'inline-source-map', // ONLY FOR DEVLOPMENT MODE
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "deploy"),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    contentBase: "./deploy",
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|mp4)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":src"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "streaming",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      title: "streaming",
      chunks: ["movie"],
      filename: "movie-page.html",
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
  ],
};
