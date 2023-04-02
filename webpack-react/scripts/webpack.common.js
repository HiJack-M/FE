const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const pkgJSON = require('../package.json')

console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)

module.exports = {
  // 入口配置
  entry: path.resolve(__dirname, '../src/index.tsx'),
  // 输出配置
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    clean: true,
  },
  resolve: {
    // 支持扩展名
    extensions: ['.ts', '.tsx', '.js'],
    // 支持路径别名
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  // 模块
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env", // 预制配置
                  {
                    corejs: {
                      version: 3,
                    },
                    useBuiltIns: "usage", // 按需引入 pollyfill
                  },
                ],
                "@babel/preset-react", // React 环境
              ],
              plugins: ["@babel/plugin-transform-runtime"],
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 25 * 1024, // 25kb
          },
        },
        generator: {
          filename: 'assets/imgs/[name].[hash:8][ext]',
        },
      },
    ],
  },
  // 插件
  plugins: [
    new webpack.DefinePlugin({
      // 定义在代码中可以替换的一些常量
      __DEV__: process.env.NODE_ENV === 'development',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      title: pkgJSON.name,
      meta: {
        description: {
          type: 'description',
          content: pkgJSON.description,
        },
      },
      minify: 'auto',
    }),
    new ProgressBarPlugin({
      format: `  :msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`,
    }),
  ],
}

...
rules: [
  {
    test: /\.tsx?$/,
    use: [
      {
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env", // 预制配置
              {
                corejs: {
                  version: 3,
                },
                useBuiltIns: "usage", // 按需引入 pollyfill
              },
            ],
            "@babel/preset-react", // React 环境
          ],
          plugins: ["@babel/plugin-transform-runtime"],
        },
      },
      "ts-loader",
    ],
    exclude: /node_modules/,
  },
  ...
 ],
 ...
