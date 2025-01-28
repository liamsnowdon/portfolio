<script setup lang="ts">
import Project from './Project.vue'
import { useModalStore } from '~/stores/modal'

const modalStore = useModalStore()
</script>

<template>
  <Project :delay="500" url="https://www.printed.com" @click="modalStore.openModal('ProjectModal', { project: 'printed' })">
    <div flex="~" items="center" space="x-4 lg:x-6">
      <img
        src="/images/projects/printed/icon.png"
        alt="Printed.com Logo"
        h="22 lg:25 lg:30"
        rounded="2xl"
        m="b-4"
      >

      <h2 text="3xl lg:5xl white" font="bold" m="b-4">
        High Quality Digital & Litho Printing
      </h2>
    </div>

    <div>
      <p text="lg neutral-400">
        With a wide range of products, Printed.com is the largest and fastest growing online print shop in the UK.
      </p>
    </div>
  </Project>
</template>
