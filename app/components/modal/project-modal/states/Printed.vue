<script setup lang="ts">
import Project from './Project.vue'
</script>

<template>
  <Project
    project="printed"
    title="printed.com"
    intro="High Quality Digital & Litho Printing"
    url="https://printed.com"
    :skills="[
      'Vue.js',
      'Angular.js',
      'jQuery',
      'Sass',
      'Twig',
    ]"
  >
    With a wide range of products, Printed.com is the largest and fastest growing online print shop in the UK.
  </Project>
</template>
