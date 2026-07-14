<script setup lang="ts">
import Wrapper from '../wrapper/Wrapper.vue'
import WrapperContent from '../wrapper/WrapperContent.vue'
import ProjectMidnite from './ProjectMidnite.vue'
import ProjectMoonsGameGuides from './ProjectMoonsGameGuides.vue'
import ProjectScreenshottedit from './ProjectScreenshottedit.vue'
import ProjectPrinted from './ProjectPrinted.vue'
import ProjectWidgeter from './ProjectWidgeter.vue'
import Challenges from '~/components/challenges/Challenges.vue'
import SectionHeading from '~/components/section-heading/SectionHeading.vue'
</script>

<template>
  <Wrapper id="projects">
    <WrapperContent>
      <SectionHeading number="01" eyebrow="Selected work">
        Things I've built
        <template #description>
          A snapshot of the products and side projects I've poured pixels into.
        </template>
      </SectionHeading>

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
