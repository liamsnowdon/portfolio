<script setup lang="ts">
import Project from './Project.vue'
import { useModalStore } from '~/stores/modal'

const modalStore = useModalStore()
</script>

<template>
  <Project
    :delay="400"
    url="https://moonsgameguides.com"
    border="3 purple-500"
    @click="modalStore.openModal('ProjectModal', { project: 'moonsgameguides' })"
  >
    <div pos="relative">
      <h2 text="3xl lg:5xl white" font="bold" m="b-4">
        Achievement guides, news and nonsense
      </h2>

      <p text="lg neutral-400" m="b-4">
        I'm a big achievement hunter so I write achievement guides and otherwise just talk nonsense about video games.
      </p>
    </div>
  </Project>
</template>
