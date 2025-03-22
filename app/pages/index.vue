<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'
import Hero from '~/components/hero/Hero.vue'
import Projects from '~/components/projects/Projects.vue'
import About from '~/components/about/About.vue'
import NeedAWebsite from '~/components/need-a-website/NeedAWebsite.vue'
import Tools from '~/components/tools/Tools.vue'
import Posts from '~/components/posts/Posts.vue'
import { getExperience } from '~/utils'

const experience = getExperience()

useSeoMeta({
  title: 'Liam Snowdon - Frontend Engineer',
  ogTitle: 'Liam Snowdon - Frontend Engineer',
  twitterTitle: 'Liam Snowdon - Frontend Engineer',
  description: `I'm a frontend engineer with over ${experience} years of commercial experience in web development and a keen eye for detail.`,
  ogDescription: `I'm a frontend engineer with over ${experience} years of commercial experience in web development and a keen eye for detail.`,
  twitterDescription: `I'm a frontend engineer with over ${experience} years of commercial experience in web development and a keen eye for detail.`,
})
</script>

<template>
  <div>
    <Hero />
    <Projects />
    <About />
    <NeedAWebsite />
    <Tools />
    <Posts />
  </div>
</template>
