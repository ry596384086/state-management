const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

// 生产环境才抽离css文件，避免开发环境下修改css后热更新不加载问题
getStyleLoader = () => {
  return process.env.NODE_ENV === "development"
    ? "style-loader"
    : MiniCssExtractPlugin.loader;
};

module.exports = {
  mode: process.env.NODE_ENV,

  entry: "./src/index.tsx",

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new SimpleProgressWebpackPlugin(),
    // new BundleAnalyzerPlugin({analyzerPort: 8080, generateStatsFile: false  })
    new MiniCssExtractPlugin({
      filename: "css/[name]-[contenthash].css",
    }),
  ],

  devtool: "inline-source-map",

  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },

  devServer: {
    hot: true,
    open: true,
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".ts", ".tsx", ".js", "config.js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        enforce: "pre",
        use: [
          "babel-loader",
          "ts-loader",
        ],
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/i,
        use: [
          getStyleLoader(),
          {
            loader: "css-loader",
            // options: {
            //   modules: {
            //     localIdentName: '[name]__[local]-[hash:base64:5]'
            //   },
            // }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins:  ['postcss-preset-env'],
              }
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 8 * 1024 //小于8kb使用dataUri
        //   }
        // }
      },
    ],
  },

  // resolveLoader: {
  //   modules: ['node_modules', path.resolve(__dirname, 'config')]
  // }

  optimization: {
    // //多入口工程配置此项，避免多入个bundle.js重复引用模块
    // runtimeChunk: 'single',
    // 自动拆分 chunks
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
