<script setup lang="ts">
import Project from './Project.vue'
</script>

<template>
  <Project
    project="midnite"
    title="Midnite"
    intro="Re-imagining esports and sports betting"
    url="https://midnite.com"
    :skills="[
      'Vue.js',
      'Nuxt.js',
      'TypeScript',
      'Windi CSS',
      'Vitest',
      'Cypress',
    ]"
  >
    Midnite is building a world-class esports, sports and game wagering platform for the new generation of fans.
  </Project>
</template>
