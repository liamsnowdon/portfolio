<template>
  <Project
    :delay="200"
    url="https://www.midnite.com"
    p="t-8 x-6 md:t-18 md:x-8"
  >
    <div
      pos="absolute inset-0"
      w="full"
      h="full"
      bg="no-repeat center cover"
      class="opacity-40"
      style="background-image: url('/images/projects/midnite/pattern.svg')"
    />

    <div
      flex="~ col"
      items="center"
      justify="center"
      text="center" pos="relative"
    >
      <h2 text="3xl md:5xl white" font="bold" m="b-4">
        Re-imagining esports and sports betting
      </h2>

      <p text="lg neutral-400" m="b-8">
        Midnite is building a world-class esports, sports and game wagering platform for the new generation of fans.
      </p>

      <div flex="~" items="start" justify="center" max-h="132 md:165">
        <img
          v-motion="{
            initial: {
              y: 100,
              opacity: 0,
            },
            visibleOnce: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 300,
              },
            },
          }"
          src="/images/projects/midnite/mobile.png"
          alt="Midnite Logo"
          w="80 md:100"
          rounded="3xl"
          border="4 midnite"
        >
      </div>
    </div>
  </Project>
</template>
