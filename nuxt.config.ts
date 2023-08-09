// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@vueuse/motion/nuxt',
  ],

  components: [{
    path: '~/components',
    pathPrefix: false,
  }],

  css: [
    '@unocss/reset/tailwind.css',
  ],
})
