<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  url: string
  delay: number
}

const props = defineProps<Props>()

defineEmits<{
  click: []
}>()

const spotlightX = ref(0)
const spotlightY = ref(0)
const isHovering = ref(false)

function onMouseMove (event: MouseEvent) {
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  spotlightX.value = event.clientX - rect.left
  spotlightY.value = event.clientY - rect.top
}
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
    class="group border border-white/10 bg-white/5 backdrop-blur-sm transition-colors duration-300 hover:border-indigo-400/40 focus:border-indigo-400/40"
    p="6 lg:8"
    rounded="2xl lg:3xl"
    pos="relative"
    overflow="hidden"
    outline="none"
    ring="focus:2 indigo-500/50 offset-transparent"
    text="left"
    w="full"
    @click="$emit('click')"
    @mousemove="onMouseMove"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <div
      class="pointer-events-none absolute inset-0 transition-opacity duration-300"
      :class="isHovering ? 'opacity-100' : 'opacity-0'"
      :style="{
        background: `radial-gradient(600px circle at ${spotlightX}px ${spotlightY}px, rgba(129, 140, 248, 0.12), transparent 45%)`,
      }"
    />

    <slot />
  </button>
</template>
