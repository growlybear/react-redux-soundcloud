const path = require('path')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',  // enable websocket connection (needs url and port)
    'webpack/hot/only-dev-server',                      // to perform HMR in the browser
    './src/index.js'                                    // app entry point
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [ 'react-hot-loader', 'babel-loader' ],
        include: path.join(__dirname, 'src')
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true                                           // enable HMR in webpack-dev-server and in libs running in the browser
  }
}
