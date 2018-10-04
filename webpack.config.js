const path = require('path');

module.exports = {
  entry: './public/js/index.js',
  resolve: {
    extensions: ['.ts']
  },
  output: {
    path: path.resolve(__dirname, 'public/js/'),
    filename: 'bundle.js'
  }
};