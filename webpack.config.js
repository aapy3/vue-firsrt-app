const merge = require('webpack-merge');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

var config = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname + '/dist/'),
    },
    optimization: {
        splitChunks: {
          chunks: 'async',
          minSize: 30000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 6,
          maxInitialRequests: 4,
          automaticNameDelimiter: '~',
          automaticNameMaxLength: 30,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            }
          }
        }
    },
    plugins: [new VueLoaderPlugin()],
    module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            include: __dirname,
            exclude: /node_modules/
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.css$/,
            loader: 'css-loader'
          }
        ]
      }
}

module.exports = [
    merge(config, {
        entry: path.resolve(__dirname + '/src/index.js'),
        output: {
            filename: 'firstappdemo.umd.min.js',
            libraryTarget: 'window',
            library: 'FirstAppDemo',
        }
    }),
    merge(config, {
        entry: path.resolve(__dirname + '/src/index.js'),
        output: {
          filename: 'firstappdemo.umd.js',
          libraryTarget: 'umd',
          library: 'first-app-demo',
          umdNamedDefine: true
        }
      })
]