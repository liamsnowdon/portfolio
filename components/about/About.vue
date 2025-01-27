<script setup lang="ts">
import { getExperience } from '~~/utils'

const experience = getExperience()
</script>

<template>
  <Wrapper id="about">
    <WrapperContent grid="~ cols-1 md:cols-2 gap-8" items="center">
      <div grid="col-span-2" space="y-4">
        <h2 text="3xl white" font="bold">
          Want to know more about me?
        </h2>

        <p text="lg neutral-400">
          I'm a frontend engineer with over {{ experience }} years of commercial experience in web development. My journey started with AngularJS and jQuery, but I quickly fell in love with the simplicity and ease of use of Vue.js and Nuxt.js.
        </p>

        <p text="lg neutral-400">
          I've worked on a wide variety of projects, ranging from small static websites to large-scale enterprise applications. I have a keen eye for detail and am passionate about delivering high-quality and pixel-perfect designs.
        </p>

        <p text="lg neutral-400">
          When I'm not building cool stuff, I'm an avid video game achievement hunter. I love collecting all achievements and 100%-ing as many games as I can. You can check out my <NuxtLink to="https://steamcommunity.com/id/moonlight_strike" target="_blank" class="text-indigo-500 hover:text-indigo-400">
            Steam Profile
          </NuxtLink> here 🎮
        </p>
      </div>
    </WrapperContent>
  </Wrapper>
</template>
