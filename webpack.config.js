var webpack = require('webpack');
  module.exports = {
      entry: [
        'babel-polyfill',
        'webpack/hot/only-dev-server',
        './src/app.js' // the entry point of our app. All react apps have one parent component. Yours should live here.
      ],
      output: {
          path: __dirname + '/build', // When we run 'npm build', our bundled .js file will be exported here.
          filename: "bundle.js" // Our exported file will be called 'bundle.js'
      },
      module: {
          loaders: [
              {
                test: /\.js$/, // all .js files will be subjected to these loaders
                exclude: /node_modules/, // no files within the node_modules folder will be processed
                loader: 'babel-loader', // all .js files will be ran through babel for transpiling
                query: {
                  plugins: ['transform-runtime'],
                  presets:['es2015', 'react', 'stage-0'] // we are using es2015, plus reacts jsx, plus some experimental javascript
                }
              },
              { test: /\.css$/, loader: "style!css" } // allows us to import css files in our javascript.
          ]
      }
  };