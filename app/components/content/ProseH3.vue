<script setup lang="ts">
import { useRuntimeConfig } from '#imports'

defineProps<{ id?: string }>()
const heading = 3
const { anchorLinks } = useRuntimeConfig().public.content as any
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>

<template>
  <h3
    :id="id"
    text="2xl white"
    font="bold"
    m="t-4 b-4"
    p="t-4"
  >
    <a v-if="id && generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>
