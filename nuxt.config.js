module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'nuxt-app',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  css: [
    {
      src: '~static/sass/base.sass',
      lang: 'sass?indentedSyntax=true'
    }
  ],
  plugins: [
    { src: '~plugins/flexible.js', ssr: false }
  ],
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#77b6ff' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
};
