<script setup lang="ts">
import Project from './Project.vue'
</script>

<template>
  <Project>
    <template #title>
      The Printed Promise
    </template>

    <template #intro>
      With a wide range of products, Printed.com is the largest and fastest growing online print shop in the UK.
    </template>

    <template #skills>
      <li>Vue.js</li>
      <li>Angular.js</li>
      <li>jQuery</li>
      <li>Sass</li>
      <li>Twig</li>
    </template>

    <template #default>
      Content.
    </template>
  </Project>
</template>
