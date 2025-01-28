<script setup lang="ts">
import type { PropType } from 'vue'
import H2 from '~/components/typography/H2.vue'
import Button from '~/components/button/Button.vue'
import DotSpacer from '~/components/dot-spacer/DotSpacer.vue'

defineProps({
  project: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  intro: {
    type: String,
    required: true,
  },
  skills: {
    type: Array as PropType<string[]>,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div grid="col-span-1 md:col-span-9">
    <div flex="~" items="center" space="x-4" m="b-6">
      <div w="18" h="18">
        <img :src="`/images/projects/${project}/icon.png`">
      </div>

      <div flex="~ col" space="y-1">
        <H2>
          {{ title }}
        </H2>

        <p text="lg" font="medium">
          {{ intro }}
        </p>
      </div>
    </div>

    <DotSpacer m="b-8">
      <li v-for="skill in skills" :key="skill" text="sm">
        {{ skill }}
      </li>
    </DotSpacer>

    <div space="y-6">
      <div space="y-3">
        <slot />
      </div>

      <Button :to="url" target="_blank" :full-width="true">
        View project
      </Button>
    </div>
  </div>
</template>
