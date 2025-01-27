<template>
  <div
    border="2 indigo-500 rounded-xl"
    bg="neutral-800"
    flex="~"
    items="center"
    space="x-4"
    p="4"
    m="y-8"
  >
    <div
      bg="indigo-500"
      border="rounded-lg"
      flex="~"
      items="center"
      justify="center"
      p="2"
    >
      <i class="i-carbon-information-filled" text="3xl white" />
    </div>

    <div text="white" font="medium">
      <span>Tip:</span>
      <slot />
    </div>
  </div>
</template>
