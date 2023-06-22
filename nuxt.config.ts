import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,

  // typescripts
  typescript: {
    strict: true,
    typeCheck: false,
  },

  // css
  css: ['~/assets/sass/vendor.scss', '~/assets/sass/app.scss'],

  // plugins
  plugins: ['~/plugins/navbar.ts'],

  // build
  build: {
    transpile: ['@headlessui/vue'],
  },

  // modules
  modules: [
    'unplugin-icons/nuxt',
    // '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-windicss',
    '@vite-pwa/nuxt',
  ],

  // experimental features
  experimental: {
    reactivityTransform: false,
  },

  // auto import components
  components: true,

  // vite plugins
  vite: {
    resolve: {
      dedupe: ['vue-router'],
    },
    plugins: [
      require('@headlessui/tailwindcss'),
      { src: '~/plugins/vue-kinesis.js', mode: 'client' },
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
  },

  // app config
  app: {
    // global transition
    // pageTransition: { name: 'page-fade', mode: 'out-in' },
    // layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  // localization - i18n config
  // @TODO debug generate issues
  // i18n: {
  //   vueI18n: './i18n.config.ts',
  //   // locales: [{ code: 'en', file: 'en.yml' }],
  //   // langDir: 'locales',
  //   // defaultLocale: 'en'
  // },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // windicss
  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      server: {
        port: 4000,
        open: false,
      },
    },
    scan: true,
  },

  // content
  content: {
    documentDriven: false,
    markdown: {
      mdc: true,
    },
    highlight: {
      theme: 'github-dark',
    },
  },
  nitro: {
    prerender: {
      routes: ['/', '/sitemap.xml'],
      ignore: ['/ignore/'],
    },
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'ETHKyiv 2023',
      short_name: 'ETHKyiv',
      description: 'Conference & Hackathon',
      theme_color: '#00b4e3',
      start_url: '/',
      icons: [
        /* icon options */
        {
          src: '/logo/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/logo/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    strategies: 'generateSW',
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css}'],
    },
    client: {
      installPrompt: false,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
})
