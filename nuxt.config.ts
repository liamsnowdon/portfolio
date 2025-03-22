// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxt/content',
    '@unocss/nuxt',
    '@vueuse/motion/nuxt',
    'dayjs-nuxt',
    '@nuxthq/studio',
  ],

  components: {
    dirs: [],
  },

  imports: {
    autoImport: false,
  },

  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { property: 'og:image', content: 'https://liamsnowdon.uk/portfolio-meta-1200.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '600' },
        { property: 'og:image:alt', content: 'Liam Snowdon - Frontend Engineer' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
        { property: 'twitter:image', content: 'https://liamsnowdon.uk/portfolio-meta-1200.png' },
        { property: 'twitter:image:width', content: '1200' },
        { property: 'twitter:image:height', content: '600' },
        { property: 'twitter:image:alt', content: 'Liam Snowdon - Frontend Engineer' },
        { property: 'twitter:type', content: 'website' },
        { name: 'msapplication-TileColor', content: '#171717' },
        { name: 'theme-color', content: '#171717' },
      ],
    },
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  content: {
    highlight: {
      theme: 'dracula-soft',
      langs: [
        'html',
        'css',
        'scss',
        'js',
        'ts',
        'twig',
        'json',
        'bash',
        'vue',
        'toml',
      ],
    },

    markdown: {
      remarkPlugins: ['remark-reading-time'],
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-01-27',

  typescript: {
    typeCheck: true,
    strict: true,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
