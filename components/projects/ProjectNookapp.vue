<script setup lang="ts">
import Project from './Project.vue'

const row1Items = [
  { src: 'koi', name: 'Koi' },
  { src: 'butterfly-fish', name: 'Butterfly Fish' },
  { src: 'clown-fish', name: 'Clown Fish' },
  { src: 'great-white-shark', name: 'Great White Shark' },
  { src: 'yellow-perch', name: 'Yellow Perch' },
  { src: 'bitterling', name: 'Bitterling' },
  { src: 'black-bass', name: 'Black Bass' },
  { src: 'bluegill', name: 'Bluegill' },
  { src: 'killifish', name: 'Killifish' },
  { src: 'ranchu-goldfish', name: 'Ranchu Goldfish' },
  { src: 'tadpole', name: 'Tadpole' },
]

const row2Items = [
  { src: 'common-butterfly', name: 'Common Butterfly' },
  { src: 'honeybee', name: 'Honeybee' },
  { src: 'tiger-butterfly', name: 'Tiger Butterfly' },
  { src: 'yellow-butterfly', name: 'Yellow Butterfly' },
  { src: 'rice-grasshopper', name: 'Rice Grasshopper' },
  { src: 'great-purple-emperor', name: 'Great Purple Emperor' },
  { src: 'ladybug', name: 'Ladybug' },
  { src: 'orchid-mantis', name: 'Orchid Mantis' },
  { src: 'red-dragonfly', name: 'Red Dragonfly' },
  { src: 'rosalia-batesi-beetle', name: 'Rosalia Batesi Beetle' },
  { src: 'tiger-beetle', name: 'Tiger Beetle' },
  { src: 'snail', name: 'Snail' },
]

const row3Items = [
  { src: 'gazami-crab', name: 'Gazami Crab' },
  { src: 'red-king-crab', name: 'Red King Crab' },
  { src: 'starfish', name: 'Starfish' },
  { src: 'seaslug', name: 'Seaslug' },
  { src: 'umbrella-octopus', name: 'Umbrella Octopus' },
  { src: 'gigas-giant-clam', name: 'Gigas Giant Clam' },
  { src: 'octopus', name: 'Octopus' },
  { src: 'scallop', name: 'Scallop' },
  { src: 'sea-anemone', name: 'Sea Anemone' },
  { src: 'sea-cucumber', name: 'Sea Cucumber' },
  { src: 'seaweed', name: 'Seaweed' },
]
</script>

<template>
  <Project
    :delay="500"
    url="https://thenookapp.com"
    p="b-6 x-6 lg:b-8 lg:x-8"
  >
    <div
      v-motion="{
        initial: {
          x: 200,
          opacity: 0,
        },
        visibleOnce: {
          x: 0,
          opacity: 1,
          transition: {
            delay: 600,
            duration: 500,
          },
        },
      }"
      flex="~"
      justify="center"
      space="x-1 lg:x-4"
    >
      <img
        v-for="item in row1Items"
        :key="item.name"
        :src="`/images/projects/nookapp/${item.src}.png`"
        :alt="item.name"
        h="26"
        loading="lazy"
      >
    </div>

    <div
      v-motion="{
        initial: {
          x: -200,
          opacity: 0,
        },
        visibleOnce: {
          x: 0,
          opacity: 1,
          transition: {
            delay: 600,
            duration: 500,
          },
        },
      }"
      flex="~"
      justify="center"
      space="x-1 lg:x-4"
    >
      <img
        v-for="item in row2Items"
        :key="item.name"
        :src="`/images/projects/nookapp/${item.src}.png`"
        :alt="item.name"
        h="26"
        loading="lazy"
      >
    </div>

    <div
      v-motion="{
        initial: {
          x: 200,
          opacity: 0,
        },
        visibleOnce: {
          x: 0,
          opacity: 1,
          transition: {
            delay: 600,
            duration: 500,
          },
        },
      }"
      flex="~"
      justify="center"
      space="x-1 lg:x-4"
      m="b-1 lg:b-4"
    >
      <img
        v-for="item in row3Items"
        :key="item.name"
        :src="`/images/projects/nookapp/${item.src}.png`"
        :alt="item.name"
        h="26"
        loading="lazy"
      >
    </div>

    <div text="center">
      <h2 text="3xl lg:5xl white" font="bold" m="b-4">
        NookApp - an Animal Crossing hub
      </h2>

      <p text="lg neutral-400">
        A hub of interactive apps to use alongside the Animal Crossing: New Horizons game on Nintendo Switch to provide the best playing experience possible.
      </p>
    </div>
  </Project>
</template>
