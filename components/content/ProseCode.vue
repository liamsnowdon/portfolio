<script>
import { defineComponent } from '#imports'

export default defineComponent({
  props: {
    code: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: null,
    },
    filename: {
      type: String,
      default: null,
    },
    highlights: {
      type: Array,
      default: () => [],
    },
    meta: {
      type: String,
      default: null,
    },
  },
})
</script>

<template>
  <div bg="black/20" p="8" rounded="2xl" m="y-7">
    <slot />
  </div>
</template>

<style>
pre {
  overflow: auto;
}

pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
