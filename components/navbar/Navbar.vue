<script setup lang="ts">

</script>

<template>
  <nav flex="~" items="center" justify="between" p="4">
    <NuxtLink to="/" flex="~" items="center" space="x-2">
      <img src="/images/memoji.png" alt="Liam Snowdon Profile Picture" h="12" w="12">
      <span bg="gradient-to-r gradient-from-indigo-300 gradient-to-indigo-500 clip-text" text="xl transparent" font="medium" m="t-3">Liam Snowdon</span>
    </NuxtLink>

    <div flex="~" justify="end">
      <Button href="#contact">
        Get in touch
      </Button>
    </div>
  </nav>
</template>
