<template>
  <div
    v-motion="{
      initial: {
        y: -100,
        opacity: 0,
      },
      visibleOnce: {
        y: 0,
        opacity: 1,
        transition: {
          delay: 500,
        },
      },
    }"
    bg="neutral-800"
    p="6 md:8"
    rounded="3xl"
  >
    <div flex="~ col" items="center" text="center">
      <h2 text="3xl md:5xl white" font="bold" m="b-4">
        Nookapp - An Animal Crossing hub
      </h2>

      <p text="lg neutral-400" m="b-4">
        A hub of interactive apps to use alongside the Animal Crossing: New Horizons game on Nintendo Switch to provide the best playing experience possible.
      </p>

      <Button variant="nookapp" href="https://thenookapp.com" target="_blank">
        Start playing
      </Button>
    </div>
  </div>
</template>
