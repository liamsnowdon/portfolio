<script setup lang="ts">
import H2 from '~/components/typography/H2.vue'
</script>

<template>
  <div grid="~ cols-1 md:cols-12 gap-4 md:gap-8">
    <div grid="col-span-1 md:col-span-9">
      <H2 m="b-2">
        <slot name="title" />
      </H2>

      <p m="b-12">
        <slot name="intro" />
      </p>

      <slot name="default" />
    </div>

    <div grid="col-span-1 md:col-span-3" space="y-4">
      <ul>
        <slot name="skills" />
      </ul>
    </div>
  </div>
</template>
