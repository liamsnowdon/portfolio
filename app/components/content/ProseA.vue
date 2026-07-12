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
    class="link-accent text-lg underline decoration-indigo-400/40 underline-offset-4 hover:decoration-indigo-300"
  >
    <slot />
  </NuxtLink>
</template>
