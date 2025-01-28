<script setup lang="ts">
import Project from './Project.vue'
</script>

<template>
  <Project
    project="moonsgameguides"
    title="Moon's Game Guides"
    intro="Achievement guides, news and nonsense"
    url="https://moonsgameguides.com"
    :skills="[
      'Vue.js',
      'Nuxt.js',
      'TypeScript',
      'UnoCSS',
      'Vitest',
    ]"
  >
    <p>I started writing achievement game guides on Steam for games I play. It was a great opportunity to create a site to host them outside of Steam, and use Nuxt Studio + Nuxt Content to write them. Nuxt Content allows content to be written in Markdown, with Nuxt Studio being a visual editor to help write it.</p>
    <p>As I continued working on it, I integrated the Steam API to start fetching all sorts of data, like news, achievements and my profile. It allowed me to read from popular news providers and official community announcements, and build a discord bot to post news to my server every day.</p>
  </Project>
</template>
