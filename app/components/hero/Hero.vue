<script setup lang="ts">
import Button from '../button/Button.vue'
import { getExperience } from '~/utils'

const experience = getExperience()
</script>

<template>
  <header
    class="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16 text-center md:px-8"
  >
    <div
      v-motion="{
        initial: {
          scale: 0.8,
          opacity: 0,
        },
        enter: {
          scale: 1,
          opacity: 1,
        },
      }"
      class="relative mb-8"
    >
      <div class="absolute -inset-3 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 opacity-40 blur-2xl" />
      <div class="hero-avatar relative overflow-hidden rounded-full border border-white/15 bg-white/5">
        <img src="/images/memoji.png" alt="Liam Snowdon Profile Picture" class="h-32 w-32 md:h-44 md:w-44">
      </div>
    </div>

    <p
      v-motion="{
        initial: {
          y: 20,
          opacity: 0,
        },
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            delay: 100,
          },
        },
      }"
      class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300"
    >
      <span class="relative flex h-2 w-2">
        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
        <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      Hey, I'm Liam — nice to meet you
    </p>

    <h1
      v-motion="{
        initial: {
          y: 30,
          opacity: 0,
        },
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            delay: 200,
          },
        },
      }"
      class="mb-6 max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-8xl"
    >
      Liam Snowdon<span class="text-shimmer">.</span>
      <span class="mt-2 block text-3xl font-semibold text-neutral-300 md:text-5xl">
        Crafting <span class="text-shimmer">pixel-perfect</span> experiences for the web
      </span>
    </h1>

    <p
      v-motion="{
        initial: {
          y: 30,
          opacity: 0,
        },
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            delay: 300,
          },
        },
      }"
      class="mb-10 max-w-2xl text-lg text-neutral-400 md:text-xl"
    >
      Frontend engineer with {{ experience }}+ years of experience building cool stuff with Vue, Nuxt and a keen eye for detail.
    </p>

    <div
      v-motion="{
        initial: {
          y: 30,
          opacity: 0,
        },
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            delay: 400,
          },
        },
      }"
      class="flex flex-col items-center gap-4 sm:flex-row"
    >
      <Button href="#projects" size="large">
        See the cool stuff
      </Button>

      <Button href="#contact" variant="ghost" size="large">
        Get in touch
      </Button>
    </div>

    <a
      v-motion="{
        initial: {
          opacity: 0,
        },
        enter: {
          opacity: 1,
          transition: {
            delay: 800,
          },
        },
      }"
      href="#projects"
      class="absolute bottom-8 hidden flex-col items-center gap-2 text-neutral-500 transition hover:text-white md:flex"
      aria-label="Scroll to projects"
    >
      <span class="text-xs uppercase tracking-[0.3em]">Scroll</span>
      <span class="i-carbon-chevron-down hero-scroll-cue text-xl" />
    </a>
  </header>
</template>

<style scoped>
.hero-avatar img {
  animation: float-y 6s ease-in-out infinite;
}

.hero-scroll-cue {
  animation: float-y 2s ease-in-out infinite;
}
</style>
