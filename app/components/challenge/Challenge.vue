<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Challenge } from '../../types'

defineProps({
  challenge: {
    type: Object as PropType<Challenge>,
    required: true,
  },
})
</script>

<template>
  <NuxtLink
    :to="`https://ls-challenges-${challenge.slug}.netlify.app`"
    target="_blank"
    class="group glass-card relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40"
  >
    <div class="relative overflow-hidden">
      <img
        :src="`/images/challenges/${challenge.slug}.jpg`"
        :alt="`${challenge.name} thumbnail`"
        loading="lazy"
        class="w-full transition-transform duration-500 group-hover:scale-105"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-[#08080c]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>

    <div class="flex flex-1 flex-col gap-1 p-4 md:p-5">
      <div class="flex items-start justify-between gap-3">
        <h2 class="truncate font-display font-bold text-white transition-colors group-hover:text-indigo-300">
          {{ challenge.name }}
        </h2>
        <span class="i-carbon-arrow-up-right mt-0.5 flex-none text-lg text-neutral-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-indigo-300" />
      </div>
      <p class="text-sm text-neutral-400">
        {{ challenge.intro }}
      </p>
    </div>
  </NuxtLink>
</template>
