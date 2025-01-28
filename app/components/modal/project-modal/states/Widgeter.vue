<script setup lang="ts">
import Project from './Project.vue'
</script>

<template>
  <Project>
    <template #title>
      Build Tailwind pages with customizable widgets
    </template>

    <template #intro>
      Widgeter is a WYSIWYG editor which lets you build pages with a selection of prebuilt customizable widgets.
    </template>

    <template #skills>
      <li>Vue.js</li>
      <li>Nuxt.js</li>
      <li>TypeScript</li>
      <li>Tailwind CSS</li>
      <li>Cypress</li>
    </template>

    <template #default>
      Content.
    </template>
  </Project>
</template>
