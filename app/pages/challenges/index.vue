<script setup lang="ts">
import Wrapper from '~/components/wrapper/Wrapper.vue'
import WrapperContent from '~/components/wrapper/WrapperContent.vue'
import Challenge from '~/components/challenge/Challenge.vue'
import { challenges } from '~/constants'
</script>

<template>
  <Wrapper>
    <WrapperContent>
      <h1 text="4xl md:6xl white center" font="bold" m="b-4">
        Challenges
      </h1>

      <p text="sm lg:base center" m="b-8">
        This is a library of random coding challenges I've completed.
      </p>

      <div grid="~ cols-1 md:cols-2 lg:cols-3 gap-4 md:gap-6 lg:gap-8">
        <Challenge v-for="challenge in challenges" :key="challenge.name" :challenge="challenge" />
      </div>
    </WrapperContent>
  </Wrapper>
</template>
