<script setup lang="ts">
interface Props {
  url: string
  delay: number
}

const props = defineProps<Props>()
</script>

<template>
  <a
    v-motion="delay !== 0 ? {
      initial: {
        y: -100,
        opacity: 0,
      },
      visibleOnce: {
        y: 0,
        opacity: 1,
        transition: {
          delay: props.delay,
        },
      },
    } : {}"
    :href="url"
    target="_blank"
    bg="neutral-800 hover:neutral-700/50 focus:neutral-700/50"
    p="6 lg:8"
    rounded="2xl lg:3xl"
    pos="relative"
    overflow="hidden"
    outline="none"
    ring="focus:2 neutral-800 offset-neutral-700 offset-2"
    flex="~ col"
    justify="center"
  >
    <slot />
  </a>
</template>
