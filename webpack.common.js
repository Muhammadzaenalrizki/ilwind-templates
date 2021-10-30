const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'app.js'
    },
      plugins: [

      new HtmlWebpackPlugin({
          title:'Webpack Tailwind Template',
          filename:'index.html',
          template:'public/index.html'
      }),
      new HtmlWebpackPlugin({
          title:'Webpack Tailwind Template',
          filename:'dashboard.html',
          template:'public/dashboard.html'
      }),
  require('tailwindcss'),
    require('autoprefixer'),
      ],
        module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },


                     {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            }
          },
                ],

            },

        ]
    }
}