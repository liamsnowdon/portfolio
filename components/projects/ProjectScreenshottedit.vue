<template>
  <Project
    :delay="500"
    url="https://screenshottedit.com"
    min-h="64"
    p="x-6 lg:x-8"
  >
    <div pos="absolute inset-0">
      <img
        src="/images/projects/screenshottedit/screenshottedit.webp"
        alt=""
        object="cover"
        h="full"
        w="full"
        op="50"
      >
    </div>

    <div pos="relative" text="center" p="y-12 x-6 lg:x-8">
      <div w="8 lg:10" h="8 lg:10" border="t-6 l-6 lg:t-8 lg:l-8 white" pos="absolute top-0 left-0" />
      <div w="8 lg:10" h="8 lg:10" border="t-6 r-6 lg:t-8 lg:r-8 white" pos="absolute top-0 right-0" />
      <div w="8 lg:10" h="8 lg:10" border="b-6 r-6 lg:b-8 lg:r-8 white" pos="absolute bottom-0 right-0" />
      <div w="8 lg:10" h="8 lg:10" border="b-6 l-6 lg:b-8 lg:l-8 white" pos="absolute bottom-0 left-0" />

      <h2 text="3xl lg:5xl white" font="bold" m="b-2">
        screenshotted<span text="blue-500">it</span>
      </h2>

      <p text="base lg:lg white" font="semibold">
        High quality video game wallpapers
      </p>
    </div>
  </Project>
</template>
