<script setup lang="ts">
import { useMotion } from '@vueuse/motion'

const fish1Ref = ref()
const fish2Ref = ref()
const fish3Ref = ref()
const fish4Ref = ref()
const fish5Ref = ref()

const bug1Ref = ref()
const bug2Ref = ref()
const bug3Ref = ref()
const bug4Ref = ref()
const bug5Ref = ref()

const fishRefs = computed(() => [fish1Ref, fish2Ref, fish3Ref, fish4Ref, fish5Ref])
const bugRefs = computed(() => [bug1Ref, bug2Ref, bug3Ref, bug4Ref, bug5Ref])

onMounted(() => {
  fishRefs.value.forEach((fish, index) => {
    useMotion(fish, {
      initial: {
        y: 100,
        opacity: 0,
      },
      visibleOnce: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 320,
          damping: 20,
          delay: 600 + (100 * index),
        },
      },
    })
  })

  bugRefs.value.forEach((bug, index) => {
    useMotion(bug, {
      initial: {
        y: 100,
        opacity: 0,
      },
      visibleOnce: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 320,
          damping: 20,
          delay: 600 + (100 * index),
        },
      },
    })
  })
})
</script>

<template>
  <Project :delay="500" url="https://thenookapp.com">
    <div grid="~ cols-1 xl:cols-3" m="b-12">
      <div grid="col-span-1" pos="relative" display="none xl:block">
        <img
          ref="fish1Ref"
          src="/images/projects/nookapp/koi.png"
          alt="Koi"
          h="28"
          pos="absolute top-0 left-0"
        >

        <img
          ref="fish2Ref"
          src="/images/projects/nookapp/yellow-perch.png"
          alt="Yellow Perch"
          h="28"
          pos="absolute top-30 left-24"
        >

        <img
          ref="fish3Ref"
          src="/images/projects/nookapp/clown-fish.png"
          alt="Clown Fish"
          h="28"
          pos="absolute top-12 left-48"
        >

        <img
          ref="fish4Ref"
          src="/images/projects/nookapp/butterfly-fish.png"
          alt="Butterfly Fish"
          h="28"
          pos="absolute top-54 left-4"
        >

        <img
          ref="fish5Ref"
          src="/images/projects/nookapp/great-white-shark.png"
          alt="Great White Shark"
          h="28"
          pos="absolute top-62 left-50"
        >
      </div>

      <div grid="col-span-1">
        <img
          v-motion="{
            initial: {
              y: -100,
              scale: 0,
              rotate: -90,
              opacity: 0,
            },
            visibleOnce: {
              y: 0,
              scale: 1,
              rotate: 0,
              opacity: 1,
              transition: {
                delay: 800,
              },
            },
          }"
          src="/images/projects/nookapp/blathers.png"
          alt="Blathers"
          w="125"
          m="x-auto"
        >
      </div>

      <div grid="col-span-1" pos="relative" display="none xl:block">
        <img
          ref="bug1Ref"
          src="/images/projects/nookapp/great-purple-emperor.png"
          alt="Great Purple Emperor"
          h="28"
          pos="absolute top-0 right-0"
        >

        <img
          ref="bug2Ref"
          src="/images/projects/nookapp/orchid-mantis.png"
          alt="Orchid Mantis"
          h="28"
          pos="absolute top-30 right-24"
        >

        <img
          ref="bug3Ref"
          src="/images/projects/nookapp/ladybug.png"
          alt="Ladybug"
          h="28"
          pos="absolute top-12 right-48"
        >

        <img
          ref="bug4Ref"
          src="/images/projects/nookapp/red-dragonfly.png"
          alt="Red Dragonfly"
          h="28"
          pos="absolute top-54 right-4"
        >

        <img
          ref="bug5Ref"
          src="/images/projects/nookapp/rosalia-batesi-beetle.png"
          alt="Rosalia Batesi Beetle"
          h="28"
          pos="absolute top-62 right-50"
        >
      </div>
    </div>
    <div flex="~ col" items="center" text="center">
      <h2 text="3xl md:5xl white" font="bold" m="b-4">
        NookApp - an Animal Crossing hub
      </h2>

      <p text="lg neutral-400">
        A hub of interactive apps to use alongside the Animal Crossing: New Horizons game on Nintendo Switch to provide the best playing experience possible.
      </p>
    </div>
  </Project>
</template>
