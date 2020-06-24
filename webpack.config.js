const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDebug = !process.argv.includes('--release');
const reStyle = /\.(css|less|styl|scss|sass|sss)$/;

module.exports = {
  mode: isDebug ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
    globalObject: '(typeof self !== \'undefined\' ? self : this)',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      // JSX
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: reStyle,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: isDebug,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './postcss.config.js',
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      'semantic-ui-react': path.resolve(__dirname, './node_modules/semantic-ui-react'),
      'react-json-view': path.resolve(__dirname, './node_modules/react-json-view'),
    },
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'semantic-ui-react': 'semantic-ui-react',
    'react-json-view': 'react-json-view',
  },
};
