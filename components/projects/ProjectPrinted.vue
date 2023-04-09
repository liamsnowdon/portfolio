<template>
  <div
    v-motion="{
      initial: {
        y: -100,
        opacity: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          delay: 300,
        },
      },
    }"
    items="center"
    bg="neutral-800" p="6 md:8"
    rounded="3xl"
  >
    <img src="/images/projects/printed.png" alt="Printed.com Logo" h="40" rounded="2xl" m="b-8">

    <div>
      <h2 text="5xl white" font="bold" m="b-4">
        The Printed Promise
      </h2>

      <p text="lg neutral-400" m="b-4">
        With a wide range of products, Printed.com is the largest and fastest growing online print shop in the UK.
      </p>

      <Button variant="printed" href="https://www.printed.com">
        Go to website
      </Button>
    </div>
  </div>
</template>
