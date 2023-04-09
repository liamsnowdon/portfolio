<script setup lang="ts">
interface Props {
  text: string
  inverted?: boolean
}

withDefaults(defineProps<Props>(), {
  inverted: false,
})
</script>

<template>
  <div flex="~" bg="tag-vue" border="rounded-xl" p="x-2" font="medium" divide="x indigo-600" :text="inverted ? 'white sm' : 'black sm'">
    {{ text }}
  </div>
</template>
