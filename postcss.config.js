const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    autoprefixer({
      add: true,
      grid: true
    }),
    purgecss({
      content: [
        {
          raw: '<html><body><div class="app"></div></body></html>',
          extension: 'html'
        },
        './src/**/*.html',
        './src/**/*.vue'
      ]
    })
  ]
}
