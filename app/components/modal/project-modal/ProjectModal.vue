<script setup lang="ts">
import type { PropType } from 'vue'
import Screenshottedit from './states/Screenshottedit.vue'
import Midnite from './states/Midnite.vue'
import MoonsGameGuides from './states/MoonsGameGuides.vue'
import Printed from './states/Printed.vue'
import Widgeter from './states/Widgeter.vue'
import type { Project } from '~/types'

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
})
</script>

<template>
  <Screenshottedit v-if="project === 'screenshottedit'" />
  <Midnite v-else-if="project === 'midnite'" />
  <MoonsGameGuides v-else-if="project === 'moonsgameguides'" />
  <Printed v-else-if="project === 'printed'" />
  <Widgeter v-else-if="project === 'widgeter'" />
</template>
