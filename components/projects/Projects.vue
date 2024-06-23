<script setup lang="ts">

</script>

<template>
  <Wrapper id="projects">
    <WrapperContent space="y-4 md:y-8">
      <ProjectMidnite />

      <div grid="~ cols-1 md:cols-2 md:rows-2 gap-4 md:gap-8">
        <ProjectMoonsGameGuides grid="md:row-span-2" />

        <ProjectPrinted />
        <ProjectWidgeter />
      </div>

      <ProjectNookapp grid="col-span-12" />
    </WrapperContent>
  </Wrapper>
</template>
