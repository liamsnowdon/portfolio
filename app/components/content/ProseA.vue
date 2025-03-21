<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    default: '',
  },
})

const target = props.href.startsWith('http') ? '_blank' : null
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
