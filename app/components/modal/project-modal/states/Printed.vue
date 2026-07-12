<script setup lang="ts">
import Project from './Project.vue'
</script>

<template>
  <Project
    project="printed"
    title="printed.com"
    intro="High Quality Digital & Litho Printing"
    url="https://printed.com"
    accent="#ed2092"
    :skills="[
      'Vue.js',
      'Angular.js',
      'jQuery',
      'Sass',
      'Twig',
    ]"
    :highlights="[
      'Created many of the widgets for the custom-built AngularJS CMS',
      'Powered product, collection, category and editorial pages across the shop',
    ]"
  >
    <p>With a wide range of products, Printed.com is the largest and fastest growing online print shop in the UK.</p>
  </Project>
</template>
