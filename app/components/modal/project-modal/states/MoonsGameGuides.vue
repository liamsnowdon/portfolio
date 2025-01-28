<script setup lang="ts">
import Project from './Project.vue'
</script>

<template>
  <Project>
    <template #title>
      Achievement guides, news and nonsense
    </template>

    <template #intro>
      I'm a big achievement hunter so I write achievement guides and otherwise just talk nonsense about video games.
    </template>

    <template #skills>
      <li>Vue.js</li>
      <li>Nuxt.js</li>
      <li>TypeScript</li>
      <li>UnoCSS</li>
      <li>Vitest</li>
    </template>

    <template #default>
      Content.
    </template>
  </Project>
</template>
