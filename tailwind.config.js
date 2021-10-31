module.exports = {
  // purge: ['./public/**/*.html',
  //   './src/**/*.js'],
   purge: {
    enabled: true,
    content: ['./public/**/*.html','./src/**/*.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {width: {
         '1/12': '12%',
        
         
       }},
  },
  variants: {
    extend: {
       
    },
  },
  plugins: [],
}
