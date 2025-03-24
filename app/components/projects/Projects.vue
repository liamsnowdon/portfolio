<script setup lang="ts">
import Wrapper from '../wrapper/Wrapper.vue'
import WrapperContent from '../wrapper/WrapperContent.vue'
import ProjectMidnite from './ProjectMidnite.vue'
import ProjectMoonsGameGuides from './ProjectMoonsGameGuides.vue'
import ProjectScreenshottedit from './ProjectScreenshottedit.vue'
import ProjectPrinted from './ProjectPrinted.vue'
import ProjectWidgeter from './ProjectWidgeter.vue'
import Challenges from '~/components/challenges/Challenges.vue'
</script>

<template>
  <Wrapper id="projects">
    <WrapperContent>
      <ProjectMidnite m="b-4 lg:b-8" />

      <div grid="~ cols-1 lg:cols-2 gap-4 lg:gap-8" m="b-8">
        <ProjectMoonsGameGuides />
        <ProjectScreenshottedit />

        <ProjectPrinted />
        <ProjectWidgeter />
      </div>

      <Challenges />
    </WrapperContent>
  </Wrapper>
</template>
