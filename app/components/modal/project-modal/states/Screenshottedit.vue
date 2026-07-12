<script setup lang="ts">
import Project from './Project.vue'
</script>

<template>
  <Project
    project="screenshottedit"
    title="screenshottedit"
    intro="High quality video game wallpapers"
    url="https://screenshottedit.com"
    accent="#3b82f6"
    :skills="[
      'Vue.js',
      'Nuxt.js',
      'TypeScript',
      'UnoCSS',
    ]"
    :highlights="[
      'Optimised and resized images with Nuxt Image and the Netlify Image CDN',
      'Wallpapers resized and cropped for every device, from desktop to mobile',
    ]"
  >
    <p>A library of high-quality video game wallpapers — born from playing a lot of games and spamming the screenshot button a LOT.</p>
  </Project>
</template>
