const path = require('path');
module.exports = {
mode:"production",
devtool:"source-map",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
    module: {
        rules: [
            {
              test:/\.css$/,
              use:['style-loader', 'css-loader']
            },
            { test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react',],
                  plugins: ['@babel/plugin-transform-runtime'],
                }
              }
            },
            {
              test : /\.(png|jpg|gif)$/i,
              use : [
                {
                  loader : "url-loader",
                  options : {
                    limit: 8192,
                  }
                }
              ]
            },
            {
              test :  /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
              use : [
                {
                  loader : "file-loader",
                }
              ]
            },
            
        ]
    }
};