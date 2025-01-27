<script setup lang="ts">
import Wrapper from '../wrapper/Wrapper.vue'
import WrapperContent from '../wrapper/WrapperContent.vue'
import ProjectMidnite from './ProjectMidnite.vue'
import ProjectMoonsGameGuides from './ProjectMoonsGameGuides.vue'
import ProjectScreenshottedit from './ProjectScreenshottedit.vue'
import ProjectPrinted from './ProjectPrinted.vue'
import ProjectWidgeter from './ProjectWidgeter.vue'
</script>

<template>
  <Wrapper id="projects">
    <WrapperContent space="y-4 lg:y-8">
      <ProjectMidnite />

      <div grid="~ cols-1 lg:cols-2 gap-4 lg:gap-8">
        <ProjectMoonsGameGuides />
        <ProjectScreenshottedit />

        <ProjectPrinted />
        <ProjectWidgeter />
      </div>
    </WrapperContent>
  </Wrapper>
</template>
