<script setup lang="ts">
import Wrapper from '../wrapper/Wrapper.vue'
import WrapperContent from '../wrapper/WrapperContent.vue'
import SectionHeading from '../section-heading/SectionHeading.vue'
import Tool from './Tool.vue'

const items = [
  { name: 'Nuxt.js', url: 'https://nuxtjs.org', icon: 'i-logos-nuxt-icon' },
  { name: 'Vue.js', url: 'https://vuejs.org', icon: 'i-logos-vue' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org', icon: 'i-logos-typescript-icon' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com', icon: 'i-logos-tailwindcss-icon' },
  { name: 'UnoCSS', url: 'https://unocss.dev', icon: 'i-logos-unocss' },
  { name: 'Sass', url: 'https://sass-lang.com', icon: 'i-logos-sass' },
  { name: 'Vitest', url: 'https://vitest.dev/', icon: 'i-logos-vitest' },
  { name: 'Jest', url: 'https://jestjs.io', icon: 'i-logos-jest' },
  { name: 'Cypress', url: 'https://www.cypress.io/', icon: 'i-logos-cypress-icon' },
  { name: 'VSCode', url: 'https://code.visualstudio.com', icon: 'i-logos-visual-studio-code' },
  { name: 'Figma', url: 'https://www.figma.com', icon: 'i-logos-figma' },
  { name: 'Netlify', url: 'https://www.netlify.com', icon: 'i-logos-netlify-icon' },
  { name: 'Github', url: 'https://github.com/liamsnowdon', icon: 'i-carbon-logo-github' },
]

const rowOne = items.slice(0, Math.ceil(items.length / 2))
const rowTwo = items.slice(Math.ceil(items.length / 2))
</script>

<template>
  <Wrapper>
    <WrapperContent>
      <SectionHeading number="03" eyebrow="Toolset" centered>
        My Toolset
        <template #description>
          These are the development tools I use day-to-day.
        </template>
      </SectionHeading>
    </WrapperContent>

    <div class="marquee-mask space-y-4">
      <div class="flex overflow-hidden">
        <div class="marquee-row flex w-max gap-4 pr-4">
          <Tool v-for="(item, index) in [...rowOne, ...rowOne]" :key="`${item.name}-${index}`" :tool="item" />
        </div>
      </div>

      <div class="flex overflow-hidden">
        <div class="marquee-row marquee-row--reverse flex w-max gap-4 pr-4">
          <Tool v-for="(item, index) in [...rowTwo, ...rowTwo]" :key="`${item.name}-${index}`" :tool="item" />
        </div>
      </div>
    </div>
  </Wrapper>
</template>

<style scoped>
.marquee-mask {
  mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
}

.marquee-row {
  animation: marquee 30s linear infinite;
}

.marquee-row--reverse {
  animation-direction: reverse;
}
</style>
