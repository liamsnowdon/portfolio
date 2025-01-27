<template>
  <Project
    :delay="500"
    url="https://screenshottedit.com"
    min-h="64"
  >
    <div pos="absolute inset-0">
      <img src="/images/projects/screenshottedit/screenshottedit.webp" alt="" object="cover" h="full" w="full" op="50">
    </div>

    <div pos="relative" text="center">
      <h2 text="3xl lg:5xl white" font="bold" m="b-2">
        screenshotted<span text="blue-500">it</span>
      </h2>

      <p text="base lg:lg white" font="semibold">
        High quality video game wallpapers
      </p>
    </div>
  </Project>
</template>
