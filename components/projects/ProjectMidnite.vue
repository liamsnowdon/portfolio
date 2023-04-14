<template>
  <Project
    :delay="200"
    url="https://www.midnite.com"
    flex="~ col md:row"
  >
    <div order="2 md:1" pos="relative" flex="~ none" items="center" h="120 md:auto" w="full" max-w="86" m="t-8 x-auto md:r-8 md:l-0 md:t-0">
      <img src="/images/projects/midnite/mobile.png" alt="Midnite Homepage" pos="absolute top-0" rounded="2xl">
    </div>

    <div order="1 md:2" p="md:y-48">
      <h2 text="3xl md:5xl white" font="bold" m="b-4">
        Re-imagining esports and sports betting
      </h2>

      <p text="lg neutral-400">
        Midnite is building a world-class esports, sports and game wagering platform for the new generation of fans.
      </p>
    </div>
  </Project>
</template>
