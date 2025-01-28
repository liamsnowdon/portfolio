<script setup lang="ts">
import Project from './Project.vue'
</script>

<template>
  <Project
    project="midnite"
    title="Midnite"
    intro="Re-imagining esports and sports betting"
    url="https://midnite.com"
    :skills="[
      'Vue.js',
      'Nuxt.js',
      'TypeScript',
      'Windi CSS',
      'Vitest',
      'Cypress',
    ]"
  >
    <p>Midnite is building a world-class esports, sports and game wagering platform for the new generation of fans. For sports fans, you can bet on traditional sports like football and tennis with in-play stats and visualisations, and streams for some events like horseracing. For esports, you can watch live esports matches streamed from Twitch and bet alongside the match as you're watching. It also has an ever-growing casino full of slots, roulette, blackjack and more from some of the industry's leading game providers.</p>
    <p>I've worked mainly on the sportsbook, adding functionality across it as well as adding horse racing to the product with support for full-coverage bets, each way bets and livestreams. I built the Bet Builder for sports to bet on multiple markets on the same match as well as in-play visualisation and stats.</p>
  </Project>
</template>
