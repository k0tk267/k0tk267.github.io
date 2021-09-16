const environment = process.env.NODE_ENV || 'local'
const env = require(`./env/${environment}.ts`)
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  mode: 'universal',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  router: {
    base: env.BASE_URL  
  },
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    title: 'kmly.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'kmlyの活動ログ' },
      {property : 'og:url', content : 'https://km1y.com'},{
        property : 'og:image',
        content :
            'https://km1y.com/profile.png'
      },
      {property : 'og:image:alt', content : 'OGP image'},
      {property : 'og:title', content : 'kmly.com'},
      {property : 'og:type', content : 'website'},
      { hid: 'og:description', property: 'og:description', content: 'km1yのlog' },
      {property : 'og:site_name', content : 'kmly.com'},
      {property : 'og:locale', content : 'ja_JP'},
      {name : 'twitter:card', content : 'summary'},
      {name : 'twitter:site', content : '@kmly267'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '${env.BASE_URL}favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css'
      },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      remarkPlugins: [
        'remark-math'
      ],
      rehypePlugins: [
        'rehype-katex'
      ]
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
