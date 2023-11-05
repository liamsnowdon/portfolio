<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
})
</script>

<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="text-indigo-500 hover:text-indigo-400 text-lg"
  >
    <slot />
  </NuxtLink>
</template>
