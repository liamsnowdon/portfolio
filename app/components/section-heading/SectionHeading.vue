<script setup lang="ts">
interface Props {
  number?: string
  eyebrow: string
  centered?: boolean
}

withDefaults(defineProps<Props>(), {
  centered: false,
})
</script>

<template>
  <div :class="centered ? 'text-center' : 'text-left'" m="b-10 md:b-14">
    <p
      class="flex items-center gap-3"
      :class="centered ? 'justify-center' : ''"
      m="b-4"
    >
      <template v-if="number">
        <span class="font-mono text-sm text-indigo-400">{{ number }}</span>
        <span class="h-px w-10 bg-gradient-to-r from-indigo-400/60 to-transparent" />
      </template>
      <span class="text-xs uppercase tracking-[0.3em] text-neutral-500">{{ eyebrow }}</span>
    </p>

    <h2 class="font-display text-3xl md:text-5xl font-bold text-white tracking-tight" m="b-4">
      <slot />
    </h2>

    <p v-if="$slots.description" class="text-lg text-neutral-400 max-w-xl" :class="centered ? 'mx-auto' : ''">
      <slot name="description" />
    </p>
  </div>
</template>
