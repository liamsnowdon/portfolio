// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
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
