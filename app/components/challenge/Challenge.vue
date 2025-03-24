<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Challenge } from '../../types'

defineProps({
  challenge: {
    type: Object as PropType<Challenge>,
    required: true,
  },
})
</script>

<template>
  <NuxtLink
    :to="`https://ls-challenges-${challenge.slug}.netlify.app`"
    target="_blank"
    bg="neutral-800"
    rounded="2xl"
    border="~ neutral-900 hover:indigo-500"
    transition="border duration-250"
    overflow="hidden"
    pos="relative"
    flex="~ col"
    h="full"
  >
    <div pos="relative">
      <img
        :src="`/images/challenges/${challenge.slug}.jpg`"
        :alt="`${challenge.name} thumbnail`"
        loading="lazy"
        w="full"
      >
    </div>

    <div p="3 md:4" flex="~ col" space="y-1">
      <h2 text="truncate white" font="bold">
        {{ challenge.name }}
      </h2>
      <p text="sm">
        {{ challenge.intro }}
      </p>
    </div>
  </NuxtLink>
</template>
