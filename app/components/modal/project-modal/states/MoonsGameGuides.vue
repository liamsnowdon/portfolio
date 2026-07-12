<script setup lang="ts">
import Project from './Project.vue'
</script>

<template>
  <Project
    project="moonsgameguides"
    title="Moon's Game Guides"
    intro="Achievement guides, news and nonsense"
    url="https://moonsgameguides.com"
    accent="#a855f7"
    :skills="[
      'Vue.js',
      'Nuxt.js',
      'TypeScript',
      'UnoCSS',
      'Vitest',
    ]"
    :highlights="[
      'Guides written in Markdown with Nuxt Content, using Nuxt Studio as a visual editor',
      'Steam API integration pulling news, achievements and my profile data',
      'Discord bot posting the latest gaming news to my server every day',
    ]"
  >
    <p>My home for the Steam achievement guides I write, outside of Steam — plus gaming news and general nonsense.</p>
  </Project>
</template>
