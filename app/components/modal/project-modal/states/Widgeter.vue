<script setup lang="ts">
import Project from './Project.vue'
</script>

<template>
  <Project
    project="widgeter"
    title="Widgeter"
    intro="Build Tailwind pages with customizable widgets"
    url="https://widgeter.dev"
    accent="#0ea5e9"
    :skills="[
      'Vue.js',
      'Nuxt.js',
      'TypeScript',
      'Tailwind CSS',
      'Cypress',
    ]"
    :highlights="[
      'Add, move and edit widgets on the page, or start from prebuilt page templates',
      'Download the generated Tailwind HTML — a single widget or the entire page',
    ]"
  >
    <p>Widgeter is a proof-of-concept WYSIWYG editor for building pages from prebuilt, customizable widgets and dropping the HTML straight into Tailwind projects.</p>
  </Project>
</template>
