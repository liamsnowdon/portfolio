<script setup lang="ts">

</script>

<template>
  <Wrapper id="projects">
    <Content grid="~ cols-12 gap-4 md:gap-8">
      <ProjectMidnite grid="col-span-12" />

      <ProjectCashmode grid="col-span-12 md:col-span-6 lg:col-span-8" />
      <ProjectPrinted grid="col-span-12 md:col-span-6 lg:col-span-4" />

      <ProjectWidgeter grid="col-span-12 md:col-span-6" />
      <ProjectBolt grid="col-span-12 md:col-span-6" />
    </Content>
  </Wrapper>
</template>
