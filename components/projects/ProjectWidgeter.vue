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
          delay: 200,
        },
      },
    }"
    bg="neutral-800"
    p="6 md:8"
    rounded="3xl"
  >
    <div>
      <h2 text="5xl white" font="bold" m="b-4">
        Build Tailwind pages with <span text="blue-600">customizable widgets</span>
      </h2>

      <p text="lg neutral-400" m="b-4">
        Widgeter is a WYSIWYG editor which lets you build pages with a selection of prebuilt customizable widgets.
      </p>

      <Button variant="widgeter" href="https://widgeter.dev">
        Start building
      </Button>
    </div>
  </div>
</template>
