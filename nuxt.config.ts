// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@vueuse/motion/nuxt',
    'dayjs-nuxt',
    '@nuxthq/studio',
  ],

  components: [{
    path: '~/components',
    pathPrefix: false,
  }],

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
        'twig',
        'json',
        'bash',
      ],
    },

    markdown: {
      remarkPlugins: ['remark-reading-time'],
    },
  },
})
