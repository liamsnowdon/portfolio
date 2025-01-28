<script setup lang="ts">
import Project from './Project.vue'
</script>

<template>
  <Project
    title="The Printed Promise"
    intro="With a wide range of products, Printed.com is the largest and fastest growing online print shop in the UK."
    url="https://printed.com"
    :skills="[
      'Vue.js',
      'Angular.js',
      'jQuery',
      'Sass',
      'Twig',
    ]"
  >
    Content.
  </Project>
</template>
