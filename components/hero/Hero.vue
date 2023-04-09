<script setup lang="ts">

</script>

<template>
  <header
    flex="~ col"
    items="center"
    p="y-6 md:y-12 x-2 md:x-4"
    text="center"
  >
    <div
      v-motion="{
        initial: {
          y: -100,
          opacity: 0,
        },
        enter: {
          y: 0,
          opacity: 1,
        },
      }"
      bg="black/20" overflow="hidden" m="b-4" border="~ indigo-500 rounded-full"
    >
      <img src="/images/memoji.png" alt="Liam Snowdon Profile Picture" h="30 md:60" w="30 md:60">
    </div>

    <h1
      v-motion="{
        initial: {
          y: -100,
          opacity: 0,
        },
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            delay: 100,
          },
        },
      }"
      text="4xl md:6xl white" font="bold" m="b-2"
    >
      Liam Snowdon
    </h1>

    <h2
      v-motion="{
        initial: {
          y: -100,
          opacity: 0,
        },
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            delay: 150,
          },
        },
      }"
      text="xl md:3xl white" font="semibold" m="b-4 md:b-8"
    >
      Frontend Engineer
    </h2>

    <p
      v-motion="{
        initial: {
          y: -100,
          opacity: 0,
        },
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            delay: 200,
          },
        },
      }"
      text="lg md:2xl indigo-500" font="semibold" m="b-8"
    >
      6+ years of experience building cool stuff
    </p>

    <Button
      v-motion="{
        initial: {
          y: -100,
          opacity: 0,
        },
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            delay: 250,
          },
        },
      }"
      href="#projects"
    >
      What cool stuff?
    </Button>
  </header>
</template>
