<script setup lang="ts">
import WrapperContent from '../wrapper/WrapperContent.vue'

const year = new Date().getFullYear()

const socials = [
  { name: 'Linkedin', icon: 'i-carbon-logo-linkedin', url: 'https://www.linkedin.com/in/liam-snowdon' },
  { name: 'Github', icon: 'i-carbon-logo-github', url: 'https://github.com/liamsnowdon' },
]
</script>

<template>
  <footer class="border-t border-white/5" p="y-8 x-4 md:x-8">
    <WrapperContent class="flex flex-col items-center justify-between gap-4 md:flex-row">
      <span class="font-display text-sm font-semibold tracking-tight text-white">
        liam<span class="text-gradient">snowdon</span>
      </span>

      <span class="text-sm text-neutral-500">&copy; 2021 - {{ year }} Liam Snowdon. Built with Nuxt & UnoCSS.</span>

      <div class="flex gap-2">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.url"
          target="_blank"
          :aria-label="social.name"
          class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition hover:border-indigo-400/40 hover:text-white"
        >
          <span :class="social.icon" class="text-lg" />
        </a>
      </div>
    </WrapperContent>
  </footer>
</template>
