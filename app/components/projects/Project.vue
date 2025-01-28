<script setup lang="ts">
interface Props {
  url: string
  delay: number
}

const props = defineProps<Props>()

defineEmits<{
  click: []
}>()
</script>

<template>
  <button
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
    type="button"
    bg="neutral-800 hover:neutral-700/50 focus:neutral-700/50"
    p="6 lg:8"
    rounded="2xl lg:3xl"
    pos="relative"
    overflow="hidden"
    outline="none"
    ring="focus:2 neutral-800 offset-neutral-700 offset-2"
    text="left"
    w="full"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>
