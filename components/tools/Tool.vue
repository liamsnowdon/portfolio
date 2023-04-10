<script setup lang="ts">
interface Props {
  tool: {
    name: string
    url: string
    icon: string
  }
}

defineProps<Props>()
</script>

<template>
  <a
    :href="tool.url"
    target="_blank"
    flex="~ col"
    items="center"
    justify="center"
    rounded="xl"
    bg="neutral-800 hover:neutral-700/50"
    aspect="1/1"
    space="y-4"
  >
    <span :class="tool.icon" text="6xl white" />
    <span text="white lg" font="bold">{{ tool.name }}</span>
  </a>
</template>
