<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'
import Wrapper from '~/components/wrapper/Wrapper.vue'
import WrapperContent from '~/components/wrapper/WrapperContent.vue'
import Challenge from '~/components/challenge/Challenge.vue'
import { challenges } from '~/constants'

useSeoMeta({
  title: 'Challenges - Liam Snowdon',
  ogTitle: 'Challenges - Liam Snowdon',
  twitterTitle: 'Challenges - Liam Snowdon',
  description: 'A library of random coding challenges I\'ve completed.',
  ogDescription: 'A library of random coding challenges I\'ve completed.',
  twitterDescription: 'A library of random coding challenges I\'ve completed.',
})
</script>

<template>
  <Wrapper>
    <WrapperContent>
      <div class="mb-14 text-center md:mb-20">
        <p class="mb-4 flex items-center justify-center gap-3">
          <span class="h-px w-10 bg-gradient-to-r from-transparent to-indigo-400/60" />
          <span class="text-xs uppercase tracking-[0.3em] text-neutral-500">The lab</span>
          <span class="h-px w-10 bg-gradient-to-l from-transparent to-indigo-400/60" />
        </p>

        <h1 class="mb-4 font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
          Challenges<span class="text-shimmer">.</span>
        </h1>

        <p class="mx-auto max-w-xl text-lg text-neutral-400">
          A library of random coding challenges I've completed — small experiments, big attention to detail.
        </p>
      </div>

      <div grid="~ cols-1 md:cols-2 lg:cols-3 gap-4 md:gap-6 lg:gap-8">
        <Challenge
          v-for="(challenge, index) in challenges"
          :key="challenge.name"
          v-motion="{
            initial: {
              y: 40,
              opacity: 0,
            },
            visibleOnce: {
              y: 0,
              opacity: 1,
              transition: {
                delay: (index % 3) * 100,
              },
            },
          }"
          :challenge="challenge"
        />
      </div>
    </WrapperContent>
  </Wrapper>
</template>
