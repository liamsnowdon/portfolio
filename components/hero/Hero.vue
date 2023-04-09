<script setup lang="ts">

</script>

<template>
  <header
    v-motion
    :initial="{
      y: -100,
      opacity: 0,
    }"
    :enter="{
      y: 0,
      opacity: 1,
    }"
    flex="~ col"
    items="center"
    p="y-6 md:y-12 x-2 md:x-4"
    text="center"
    style="opacity: 0;"
  >
    <div bg="black/20" overflow="hidden" m="b-4" border="~ indigo-400 rounded-full">
      <img src="/images/memoji.png" alt="Liam Snowdon Profile Picture" h="30 md:60" w="30 md:60">
    </div>

    <h1 text="4xl md:6xl white" font="bold" m="b-2">
      Liam Snowdon
    </h1>

    <h2 text="xl md:3xl white" font="semibold" m="b-4 md:b-8">
      Frontend Engineer
    </h2>

    <p text="lg md:2xl indigo-400" font="semibold" m="b-8">
      6+ years of experience building cool stuff
    </p>

    <Button href="#projects">
      What cool stuff?
    </Button>
  </header>
</template>
