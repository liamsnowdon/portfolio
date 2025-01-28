<script setup lang="ts">
import type { PropType } from 'vue'
import H2 from '~/components/typography/H2.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  intro: {
    type: String,
    required: true,
  },
  skills: {
    type: Array as PropType<string[]>,
    required: true,
  },
})
</script>

<template>
  <div grid="~ cols-1 md:cols-12 gap-4 md:gap-8">
    <div grid="col-span-1 md:col-span-9">
      <H2 m="b-2">
        {{ title }}
      </H2>

      <p m="b-12">
        {{ intro }}
      </p>

      <slot />
    </div>

    <div grid="col-span-1 md:col-span-3" space="y-4">
      <ul>
        <li v-for="skill in skills" :key="skill">
          {{ skill }}
        </li>
      </ul>
    </div>
  </div>
</template>
