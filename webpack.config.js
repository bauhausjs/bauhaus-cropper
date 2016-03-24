var webpack = require('webpack')
var fs = require('fs')

var config = [{
  name: 'bauhaus-cropper',
  context: __dirname + '/',
  entry: './test.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/'
  },
  externals: [{
    'fs': 'true',
    './lib/resize_webgl': 'true'
  }]
}]

module.exports = config
