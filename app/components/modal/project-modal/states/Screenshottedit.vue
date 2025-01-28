<script setup lang="ts">
import Project from './Project.vue'
</script>

<template>
  <Project
    title="screenshottedit"
    intro="High quality video game wallpapers"
    :skills="[
      'Vue.js',
      'Nuxt.js',
      'TypeScript',
      'UnoCSS',
    ]"
  >
    <div space="y-3">
      <p>I play a lot of games... and it turns out I spam the screenshot button a LOT. I collect a lot of screenshots from all the games I play so I wanted someplace to showcase them. I like to download gaming wallpapers for my PC (I'm rocking a Master Chief from Halo wallpaper right now) so making a website was perfect for all my screenshots.</p>
      <p>I'd been wanting to play with the Nuxt Image module and an image transformer to resize and crop images, which would be perfect for making different sized wallpapers; for desktop, mobile, etc.</p>
    </div>
  </Project>
</template>
