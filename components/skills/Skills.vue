<script setup lang="ts">
import { useMotion } from '@vueuse/motion'

const developmentItems = [
  { name: 'Nuxt.js', url: 'https://nuxtjs.org', icon: 'i-logos-nuxt-icon' },
  { name: 'Vue.js', url: 'https://vuejs.org', icon: 'i-logos-vue' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org', icon: 'i-logos-typescript-icon' },
  { name: 'Tailwind', url: 'https://tailwindcss.com', icon: 'i-logos-tailwindcss-icon' },
  { name: 'Sass', url: 'https://sass-lang.com', icon: 'i-logos-sass' },
]

const otherItems = [
  { name: 'VSCode', url: 'https://code.visualstudio.com', icon: 'i-logos-visual-studio-code' },
  { name: 'Figma', url: 'https://www.figma.com', icon: 'i-logos-figma' },
  { name: 'Netlify', url: 'https://www.netlify.com', icon: 'i-logos-netlify-icon' },
]

const skillRefs = ref<HTMLElement[]>([])

onMounted(() => {
  skillRefs.value.forEach((skill, index) => {
    useMotion(skill, {
      initial: {
        y: 100,
        opacity: 0,
      },
      visibleOnce: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 320,
          damping: 20,
          delay: 100 * index,
        },
      },
    })
  })
})
</script>

<template>
  <Wrapper>
    <Content>
      <div
        bg="black/20"
        p="y-6 md:y-12 x-6 md:x-8"
        border="~ indigo-400 rounded-3xl md:rounded-full"
      >
        <h2 text="4xl white center" font="bold" m="b-8">
          My Stack
        </h2>

        <div flex="~ col" items="center" space="y-4">
          <div flex="~ wrap" justify="center" grid="gap-4">
            <Skill
              v-for="skill in developmentItems"
              :key="skill.name"
              ref="skillRefs"
              :skill="skill"
            />
          </div>

          <div flex="~ wrap" justify="center" grid="gap-4">
            <Skill
              v-for="skill in otherItems"
              :key="skill.name"
              ref="skillRefs"
              :skill="skill"
            />
          </div>
        </div>
      </div>
    </Content>
  </Wrapper>
</template>
