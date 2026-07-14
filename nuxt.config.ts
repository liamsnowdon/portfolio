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
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap' },
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
        { name: 'msapplication-TileColor', content: '#08080c' },
        { name: 'theme-color', content: '#08080c' },
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
