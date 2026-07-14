<script setup lang="ts">
import Button from '~/components/button/Button.vue'

interface Props {
  project: string
  title: string
  intro: string
  skills: string[]
  url: string
  accent?: string
  highlights?: string[]
}

withDefaults(defineProps<Props>(), {
  accent: '#818cf8',
  highlights: () => [],
})
</script>

<template>
  <div>
    <header class="relative mb-6 overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-5 pr-14 md:p-7">
      <div
        class="pointer-events-none absolute inset-0"
        :style="{ background: `radial-gradient(500px circle at 0% 0%, ${accent}2e, transparent 65%)` }"
      />

      <div class="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
        <img
          :src="`/images/projects/${project}/icon.png`"
          :alt="`${title} logo`"
          class="h-16 w-16 flex-none rounded-2xl bg-white/5 ring-1 ring-white/15"
        >

        <div class="min-w-0">
          <h2 class="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
            {{ title }}
          </h2>
          <p class="text-neutral-300">
            {{ intro }}
          </p>
        </div>
      </div>

      <ul class="relative mt-5 flex flex-wrap gap-2">
        <li
          v-for="skill in skills"
          :key="skill"
          class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300"
        >
          {{ skill }}
        </li>
      </ul>
    </header>

    <div class="space-y-5 text-neutral-400">
      <div class="space-y-3">
        <slot />
      </div>

      <ul v-if="highlights.length" class="space-y-3">
        <li
          v-for="highlight in highlights"
          :key="highlight"
          class="flex items-start gap-3"
        >
          <span
            class="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-lg"
            :style="{ backgroundColor: `${accent}1f` }"
          >
            <span class="i-carbon-checkmark text-sm" :style="{ color: accent }" />
          </span>
          <span class="text-neutral-300">{{ highlight }}</span>
        </li>
      </ul>
    </div>

    <div class="mt-6 md:mt-8">
      <Button :to="url" target="_blank" :full-width="true" icon="i-carbon-arrow-up-right">
        Visit {{ title }}
      </Button>
    </div>
  </div>
</template>
