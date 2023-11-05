<script setup lang="ts">
useHead({
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
    {
      name: 'description',
      content: 'I\'m a frontend engineer with over 6 years of commercial experience in web development and a keen eye for detail.',
    },
    {
      name: 'og:title',
      content: 'Liam Snowdon - Frontend Engineer',
    },
    {
      name: 'og:description',
      content: 'I\'m a frontend engineer with over 6 years of commercial experience in web development and a keen eye for detail.',
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:image',
      content: 'https://liamsnowdon.uk/portfolio-meta-1200.png',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:title',
      content: 'Liam Snowdon - Frontend Engineer',
    },
    {
      name: 'twitter:description',
      content: 'I\'m a frontend engineer with over 6 years of commercial experience in web development and a keen eye for detail.',
    },
    {
      name: 'twitter:image',
      content: 'https://liamsnowdon.uk/portfolio-meta-1200.png',
    },
    {
      name: 'twitter:image:alt',
      content: 'Liam Snowdon - Frontend Engineer',
    },
    {
      name: 'msapplication-TileColor',
      content: '#171717',
    },
    {
      name: 'theme-color',
      content: '#171717',
    },
  ],
})
</script>

<template>
  <div>
    <Navbar />
    <NuxtPage />
    <Contact />
    <Footer />
  </div>
</template>
