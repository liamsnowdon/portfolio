<script setup lang="ts">
import Project from './Project.vue'
</script>

<template>
  <Project
    project="midnite"
    title="Midnite"
    intro="Building the future of betting"
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
      'Added horse racing to the sportsbook with support for many new features including full-coverage bets, each way bets, start price bets and livestreams.',
      'Implemented the Bet Builder for sports to bet on multiple markets on the same match.',
      'Introduced new in-play visualisation and stats for matches.',
      'Added jackpots and in-game reward progression to casino games.',
    ]"
  >
    <p>Midnite is everything your current betting app isn't, taking Sports & Casino into a new era. For starters they're not your grandad's bookie, they're putting an end to the era of old school betting apps that are crap to use and stuck in a rut.</p>
  </Project>
</template>
