<script setup lang="ts">
interface Props {
  skill: {
    name: string
    url: string
    icon: string
  }
}

defineProps<Props>()
</script>

<template>
  <a
    :href="skill.url"
    target="_blank"
    flex="~"
    items="center"
    rounded="full"
    p="x-4 y-2"
    space="x-2"
    bg="neutral-800 hover:neutral-700"
  >
    <span :class="skill.icon" text="3xl" />
    <span text="white lg" font="bold">{{ skill.name }}</span>
  </a>
</template>
