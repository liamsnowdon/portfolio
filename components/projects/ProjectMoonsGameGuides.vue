<template>
  <Project
    :delay="400"
    url="https://moonsgameguides.com"
    p="t-6 md:t-8 x-6 md:x-8"
  >
    <div pos="relative">
      <h2 text="3xl md:5xl white" font="bold" m="b-4">
        Achievement guides, reviews and nonsense
      </h2>

      <p text="lg neutral-400" m="b-4">
        I'm a big achievement hunter so I write achievement guides and otherwise just talk nonsense about video games.
      </p>

      <div flex="~" items="start" justify="center" max-h="100 md:100">
        <img
          v-motion="{
            initial: {
              y: 100,
              opacity: 0,
            },
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 500,
              },
            },
          }"
          src="/images/projects/mgg/mgg.jpeg"
          alt="Moon's Game Guides website"
          w="md:100"
          max-w="full"
          rounded="t-lg"
        >
      </div>
    </div>
  </Project>
</template>
