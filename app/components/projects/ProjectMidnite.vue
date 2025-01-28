<script setup lang="ts">
import Project from './Project.vue'
import { useModalStore } from '~/stores/modal'

const modalStore = useModalStore()
</script>

<template>
  <Project
    :delay="0"
    url="https://www.midnite.com"
    p="t-8 x-6 lg:t-18 lg:x-8"
    @click="modalStore.openModal('ProjectModal', { project: 'midnite' })"
  >
    <div
      pos="absolute inset-0"
      w="full"
      h="full"
      bg="no-repeat center cover"
      class="opacity-40"
      style="background-image: url('/images/projects/midnite/pattern.svg')"
    />

    <div
      flex="~ col"
      items="center"
      justify="center"
      text="center"
      pos="relative"
    >
      <h2 text="3xl lg:5xl white" font="bold" m="b-4">
        Re-imagining esports and sports betting
      </h2>

      <p text="lg neutral-400" m="b-8">
        Midnite is building a world-class esports, sports and game wagering platform for the new generation of fans.
      </p>

      <div flex="~" items="start" justify="center" max-h="132 lg:165">
        <img
          v-motion="{
            initial: {
              y: 100,
              opacity: 0,
            },
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 500,
              },
            },
          }"
          src="/images/projects/midnite/mobile-2.png"
          alt="Midnite Logo"
          w="80 lg:100"
          rounded="3xl"
          border="4 midnite"
        >
      </div>
    </div>
  </Project>
</template>
