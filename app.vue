<script setup lang="ts">
import { useSeoMeta, useHead } from '@unhead/vue'
import { getExperience } from '~/utils'

const experience = getExperience()

useSeoMeta({
  title: 'Liam Snowdon - Frontend Engineer',
  description: `I'm a frontend engineer with over ${experience} years of commercial experience in web development and a keen eye for detail.`,
  ogTitle: 'Liam Snowdon - Frontend Engineer',
  ogDescription: `I'm a frontend engineer with over ${experience} years of commercial experience in web development and a keen eye for detail.`,
  ogType: 'website',
  ogImage: {
    url: 'https://liamsnowdon.uk/portfolio-meta-1200.png',
    width: 1200,
    height: 600,
    alt: 'Liam Snowdon - Frontend Engineer',
  },
  twitterCard: 'summary',
  twitterTitle: 'Liam Snowdon - Frontend Engineer',
  twitterDescription: `I'm a frontend engineer with over ${experience} years of commercial experience in web development and a keen eye for detail.`,
  twitterImage: {
    url: 'https://liamsnowdon.uk/portfolio-meta-1200.png',
    width: 1200,
    height: 600,
    alt: 'Liam Snowdon - Frontend Engineer',
  },
  msapplicationTileColor: '#171717',
  themeColor: '#171717',
})

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
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
