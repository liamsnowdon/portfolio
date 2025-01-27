<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const props = withDefaults(defineProps<{
  code?: string
  language?: string | null
  filename?: string | null
  highlights?: number[]
  meta?: string | null
}>(), {
  code: '',
  language: null,
  filename: null,
  highlights: () => [],
})

const { copied, copy, isSupported } = useClipboard()

const languageIconsMap: Record<string, string> = {
  scss: 'i-logos-sass',
  css: 'i-logos-css-3',
  html: 'i-logos-html-5',
  twig: 'i-logos-html-5',
  bash: 'i-logos-bash-icon',
  js: 'i-logos-javascript',
  ts: 'i-logos-typescript-icon',
  json: 'i-logos-json',
}

function copyToClipboard () {
  copy(props.code)
}
</script>

<template>
  <div m="y-7" rounded="2xl" overflow="hidden">
    <div
      v-if="filename || isSupported"
      flex="~"
      justify="between"
      p="4"
      bg="black/40"
    >
      <span flex="inline" items="center" space="x-2" text="sm white">
        <span v-if="filename && language" :class="languageIconsMap[language]" text="xl" />
        <span v-if="filename">{{ filename }}</span>
      </span>

      <div v-if="isSupported" flex="~" items="center" space="x-2">
        <template v-if="copied">
          <span text="sm indigo-500">
            Copied
          </span>
          <span text="xl indigo-500" class="i-carbon-checkmark" />
        </template>

        <button
          v-else
          flex="inline"
          type="button"
          @click="copyToClipboard"
        >
          <span class="i-carbon-copy" text="xl neutral-400 hover:white" />
        </button>
      </div>
    </div>

    <div bg="black/20" p="8">
      <slot />
    </div>
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
