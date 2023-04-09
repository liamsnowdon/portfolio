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
          delay: 200,
        },
      },
    }"
    flex="~"
    items="center"
    bg="neutral-800"
    p="6 md:8"
    rounded="3xl"
    pos="relative"
    overflow="hidden"
  >
    <img src="/images/projects/cashmode.png" alt="Midnite Website" pos="absolute left-1/2 bottom-0" h="full" max-w="none" transform="~ translate-x--1/2" rounded="2xl" class="opacity-10">

    <div pos="relative">
      <h2 text="3xl md:5xl white" font="bold" m="b-4">
        Play Games & Win Cash
      </h2>

      <p text="lg neutral-400" m="b-4">
        CashMode lets you play your favourite games to win cash prizes, by completing in-game challenges.
      </p>

      <Button variant="secondary" href="https://www.midnite.com/cashmode" target="_blank">
        Go to website
      </Button>
    </div>
  </div>
</template>
