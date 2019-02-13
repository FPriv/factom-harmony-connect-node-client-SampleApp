const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      { test: /\.js/, loader: 'imports?define=>false'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new Dotenv({
      safe: true,
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
