/* eslint-disable no-undef */
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // !!!!!! MAKE SURE TO CHANGE MODE TO PRODUCTION WHEN DOPLOYING FOR PRODUCTION !!!!!!!!!
  mode: "development",
  entry: {
    main: {
      import: path.resolve(__dirname, "./src/scripts/app.js"),
    },
    movie: {
      import: path.resolve(__dirname, "./src/scripts/movie-page.js"),
    },
    watch: {
      import: path.resolve(__dirname, "./src/scripts/watch-movie.js"),
    },
    signup: {
      import: path.resolve(__dirname, "./src/scripts/sign-up.js"),
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
      favicon: "./src/images/logo.ico",
    }),
    new HtmlWebpackPlugin({
      title: "streaming",
      chunks: ["movie"],
      filename: "movie-page.html",
      favicon: "./src/images/logo.ico",
    }),
    new HtmlWebpackPlugin({
      title: "streaming",
      chunks: ["watch"],
      filename: "watch-movie.html",
      favicon: "./src/images/logo.ico",
    }),
    new HtmlWebpackPlugin({
      title: "streaming",
      chunks: ["signup"],
      filename: "sign-up.html",
      favicon: "./src/images/logo.ico",
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
  ],
};
