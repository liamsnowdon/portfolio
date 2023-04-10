<script setup lang="ts">
useHead({
  title: 'Liam Snowdon - Frontend Engineer',
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
  meta: [
    {
      name: 'description',
      content: 'I\'m a frontend engineer with over 6 years of commercial experience in web development. I have a keen eye for detail and am passionate about delivering high-quality and pixel-perfect designs.',
    },
    {
      name: 'og:title',
      content: 'Liam Snowdon - Frontend Engineer',
    },
    {
      name: 'og:description',
      content: 'I\'m a frontend engineer with over 6 years of commercial experience in web development. I have a keen eye for detail and am passionate about delivering high-quality and pixel-perfect designs.',
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:image',
      content: '',
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
      content: 'I\'m a frontend engineer with over 6 years of commercial experience in web development. I have a keen eye for detail and am passionate about delivering high-quality and pixel-perfect designs.',
    },
    {
      name: 'twitter:image',
      content: '',
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
  <div bg="neutral-900">
    <Navbar />
    <Hero />
    <Projects />
    <About />
    <Tools />
    <Contact />
    <Footer />
  </div>
</template>
