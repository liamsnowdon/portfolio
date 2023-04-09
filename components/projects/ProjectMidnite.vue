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
  >
    <img src="/images/projects/midnite-mobile.png" alt="Midnite Website" h="140" rounded="2xl" display="none md:block" m="r-8">

    <div>
      <h2 text="3xl md:5xl white" font="bold" m="b-4">
        Re-imagining esports and sports betting
      </h2>

      <p text="lg neutral-400" m="b-4">
        Midnite is building a world-class esports, sports and game wagering platform for the new generation of fans.
      </p>

      <Button variant="secondary" href="https://www.midnite.com">
        Go to website
      </Button>
    </div>
  </div>
</template>
