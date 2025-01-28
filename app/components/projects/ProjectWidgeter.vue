<script setup lang="ts">
import Project from './Project.vue'
import { useModalStore } from '~/stores/modal'

const modalStore = useModalStore()
</script>

<template>
  <Project :delay="600" url="https://widgeter.dev" @click="modalStore.openModal('ProjectModal', { project: 'widgeter' })">
    <img
      src="/images/projects/widgeter/widgeter.png"
      alt="Widgeter Logo"
      pos="absolute bottom--25 right--25"
      h="75"
      class="opacity-20"
    >

    <div pos="relative">
      <h2 text="3xl lg:5xl white" font="bold" m="b-4">
        Build Tailwind pages with <span text="blue-600">customizable widgets</span>
      </h2>

      <p text="lg neutral-400">
        Widgeter is a WYSIWYG editor which lets you build pages with a selection of prebuilt customizable widgets.
      </p>
    </div>
  </Project>
</template>
