<script setup lang="ts">
import Project from './Project.vue'
</script>

<template>
  <Project
    project="widgeter"
    title="Widgeter"
    intro="Build Tailwind pages with customizable widgets"
    url="https://widgeter.dev"
    :skills="[
      'Vue.js',
      'Nuxt.js',
      'TypeScript',
      'Tailwind CSS',
      'Cypress',
    ]"
  >
    <p>Widgeter is a proof of concept of a WYSIWYG editor which lets you build pages with a selection of prebuilt customizable widgets. The editor allows you to add, delete and move widgets around the page and edit the content inside them. It even has templates, whole prebuilt pages, made up of widgets so you can create product pages, contact pages, FAQ pages, etc.</p>
    <p>The app's purpose is to download the HTML, built with Tailwind CSS, and drop them into Tailwind projects. Each individual widget can be downloaded, or the entire page.</p>
  </Project>
</template>
