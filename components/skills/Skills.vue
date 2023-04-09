<script setup lang="ts">
import { useMotion } from '@vueuse/motion'

const skills = [
  { name: 'Nuxt.js', url: 'https://nuxtjs.org', icon: 'i-logos-nuxt-icon' },
  { name: 'Vue.js', url: 'https://vuejs.org', icon: 'i-logos-vue' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org', icon: 'i-logos-typescript-icon' },
  { name: 'Tailwind', url: 'https://tailwindcss.com', icon: 'i-logos-tailwindcss-icon' },
  { name: 'Sass', url: 'https://sass-lang.com', icon: 'i-logos-sass' },
  { name: 'VSCode', url: 'https://code.visualstudio.com', icon: 'i-logos-visual-studio-code' },
  { name: 'Figma', url: 'https://www.figma.com', icon: 'i-logos-figma' },
  { name: 'Netlify', url: 'https://www.netlify.com', icon: 'i-logos-netlify-icon' },
  { name: 'Github', url: 'https://github.com/liamsnowdon', icon: 'i-logos-github-icon' },
]

const skillRefs = ref<HTMLElement[]>([])

onMounted(() => {
  skillRefs.value.forEach((skill, index) => {
    const { variant } = useMotion(skill, {
      initial: {
        y: 100,
        opacity: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 320,
          damping: 20,
          delay: 100 * index,
          onComplete: () => {
            variant.value = 'levitate'
          },
        },
      },
      levitate: {
        y: 15,
        transition: {
          duration: 1500,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatType: 'mirror',
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
        bg="neutral-800"
        p="6 md:8"
        rounded="3xl"
      >
        <h2 text="5xl white center" font="bold" m="b-8">
          My Stack
        </h2>

        <div pos="relative" grid="~ gap-8 cols-3" justify="items-center">
          <a
            v-for="skill in skills"
            :key="skill.name"
            ref="skillRefs"
            :href="skill.url"
            target="_blank"
            rounded="xl"
            :class="skill.icon"
            text="7xl"
          />
        </div>
      </div>
    </Content>
  </Wrapper>
</template>
