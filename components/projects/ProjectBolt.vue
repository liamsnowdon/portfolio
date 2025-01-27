<script setup lang="ts">
import Project from './Project.vue'
</script>

<template>
  <Project
    :delay="400"
    url="https://bolt-bingo.netlify.app"
    border="3 yellow-400"
  >
    <div>
      <h2 text="3xl lg:5xl white" font="bold" m="b-4">
        <span text="yellow-400">Bolt</span> - a bingo generator
      </h2>

      <p text="lg neutral-400">
        Build custom bingo cards then print them out or play online with your friends.
      </p>
    </div>
  </Project>
</template>
