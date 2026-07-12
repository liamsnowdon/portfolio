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
    class="glass-card flex items-center gap-3 whitespace-nowrap rounded-2xl px-6 py-4 transition-colors hover:border-indigo-400/40 hover:bg-white/10"
  >
    <span :class="tool.icon" class="text-3xl text-white" />
    <span class="text-sm font-semibold text-white">{{ tool.name }}</span>
  </a>
</template>
