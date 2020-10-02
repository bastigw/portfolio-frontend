import tailwindui from '@tailwindcss/ui'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Chris Wray',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Get to know Chris.' },
      { hid: 'og: type', property: 'og:type', content: 'website' },
      { hid: 'og: image', property: 'og:image', content: 'https://chriswray.dev/chris-wray-family.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    //This is for generating a preview. Add ?preview=true to url to see updated content from api.
    'plugins/preview.client.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/markdownit'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.API_ROUTE
  },

  // This is for displaying rich text content in the frontend.
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // TailwindUi Configuration
  tailwindcss: {
    config: {
      plugins: [tailwindui]
    },
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true
    }
  }
}
