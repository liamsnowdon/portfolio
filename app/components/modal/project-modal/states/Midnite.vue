<script setup lang="ts">
import Project from './Project.vue'
</script>

<template>
  <Project
    project="midnite"
    title="Midnite"
    intro="Re-imagining esports and sports betting"
    url="https://midnite.com"
    accent="#48f359"
    :skills="[
      'Vue.js',
      'Nuxt.js',
      'TypeScript',
      'Windi CSS',
      'Vitest',
      'Cypress',
    ]"
    :highlights="[
      'Built the Bet Builder, combining multiple markets on the same match into a single bet',
      'Launched horse racing with full-coverage bets, each way bets and livestreams',
      'Added in-play stats and visualisations across the sportsbook',
    ]"
  >
    <p>Midnite is building a world-class esports, sports and casino wagering platform for the new generation of fans — with live Twitch streams, in-play stats and an ever-growing casino. I work mainly on the sportsbook:</p>
  </Project>
</template>
