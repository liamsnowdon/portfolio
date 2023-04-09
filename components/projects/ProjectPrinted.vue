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
    items="center"
    bg="neutral-800" p="6 md:8"
    rounded="3xl"
  >
    <img src="/images/projects/printed.png" alt="Printed.com Logo" h="30" rounded="2xl" m="b-4 b-8" display="none md:block">

    <div>
      <h2 text="3xl md:5xl white" font="bold" m="b-4">
        The Printed Promise
      </h2>

      <p text="lg neutral-400" m="b-4">
        With a wide range of products, Printed.com is the largest and fastest growing online print shop in the UK.
      </p>

      <Button variant="printed" href="https://www.printed.com" target="_blank">
        Go to website
      </Button>
    </div>
  </div>
</template>
