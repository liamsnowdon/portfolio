<script setup lang="ts">
import Wrapper from '../wrapper/Wrapper.vue'
import WrapperContent from '../wrapper/WrapperContent.vue'
import SectionHeading from '../section-heading/SectionHeading.vue'
import { getExperience } from '~/utils'

const experience = getExperience()

const highlights = [
  { icon: 'i-carbon-badge', label: `${experience}+ years of commercial experience` },
  { icon: 'i-carbon-view', label: 'Obsessed with pixel-perfect detail' },
  { icon: 'i-carbon-trophy', label: 'Video game achievement hunter' },
]
</script>

<template>
  <Wrapper id="about">
    <WrapperContent>
      <SectionHeading number="02" eyebrow="About me">
        Want to know more about me?
      </SectionHeading>

      <div class="grid grid-cols-1 items-start gap-8 lg:grid-cols-5 lg:gap-12">
        <div class="space-y-4 lg:col-span-3">
          <p text="lg neutral-400">
            I'm a frontend engineer with over {{ experience }} years of commercial experience in web development. My journey started with AngularJS and jQuery, but I quickly fell in love with the simplicity and ease of use of Vue.js and Nuxt.js.
          </p>

          <p text="lg neutral-400">
            I've worked on a wide variety of projects, ranging from small static websites to large-scale enterprise applications. I have a keen eye for detail and am passionate about delivering high-quality and pixel-perfect designs.
          </p>

          <p text="lg neutral-400">
            When I'm not building cool stuff, I'm an avid video game achievement hunter. I love collecting all achievements and 100%-ing as many games as I can. You can check out my <NuxtLink to="https://steamcommunity.com/id/moonlight_strike" target="_blank" class="link-accent underline decoration-indigo-400/40 underline-offset-4">
              Steam Profile
            </NuxtLink> here 🎮
          </p>
        </div>

        <div class="space-y-4 lg:col-span-2">
          <div
            v-for="(highlight, index) in highlights"
            :key="highlight.label"
            v-motion="{
              initial: {
                x: 50,
                opacity: 0,
              },
              visibleOnce: {
                x: 0,
                opacity: 1,
                transition: {
                  delay: index * 100,
                },
              },
            }"
            class="glass-card flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-indigo-400/40"
          >
            <span class="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 text-indigo-300">
              <span :class="highlight.icon" class="text-2xl" />
            </span>
            <span class="font-medium text-white">{{ highlight.label }}</span>
          </div>
        </div>
      </div>
    </WrapperContent>
  </Wrapper>
</template>
