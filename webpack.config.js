module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    port: 7777,
    contentBase: __dirname + '/public/'
  },

  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loader: 'standard',
      exclude: /(node_modules|bower_components)/,

      query: {
        fix: true,
        snazzy: false,
        write: true
      }
    }],
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.scss$/,
      loaders: [
      'style',
      // 'css?modules&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]',
      'css?modules&importLoaders=1&localIdentName=[hash:base64:5]',
      'sass'
      ]
      // loaders: ['style', 'css']

      // loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!sass'
      // loader: 'style!css'
    }]
  },

  standard: {
    // config options to be passed through to standard e.g.
    parser: 'babel-eslint'
  }
}
