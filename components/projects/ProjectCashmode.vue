<template>
  <Project
    :delay="400"
    url="https://www.midnite.com/cashmode"
    flex="~ col"
    items="center"
  >
    <div m="b-4">
      <h2 text="3xl lg:5xl white" font="bold" m="b-4">
        Play Games & Win Cash
      </h2>

      <p text="lg neutral-400">
        CashMode lets you play your favourite games to win cash prizes, by completing in-game challenges.
      </p>
    </div>

    <div grid="~ cols-4 gap-4">
      <img src="/images/projects/cashmode/csgo.png" alt="Counter-Strike" rounded="xl">
      <img src="/images/projects/cashmode/warzone.png" alt="Warzone" rounded="xl">
      <img src="/images/projects/cashmode/lol.png" alt="League of Legends" rounded="xl">
      <img src="/images/projects/cashmode/valorant.png" alt="League of Legends" rounded="xl">
    </div>
  </Project>
</template>
