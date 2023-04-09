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
          delay: 300,
        },
      },
    }"
    bg="neutral-800"
    p="6 md:8"
    rounded="3xl"
  >
    <div>
      <h2 text="3xl md:5xl white" font="bold" m="b-4">
        <span text="yellow-400">Bolt</span> - a bingo generator
      </h2>

      <p text="lg neutral-400" m="b-4">
        Build custom bingo cards then print them out or play online with your friends.
      </p>

      <Button variant="bolt" href="https://bolt-bingo.netlify.app/" target="_blank">
        Start playing
      </Button>
    </div>
  </div>
</template>
