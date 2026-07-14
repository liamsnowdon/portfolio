<script setup lang="ts">
import Wrapper from '../wrapper/Wrapper.vue'
import WrapperContent from '../wrapper/WrapperContent.vue'
import Button from '../button/Button.vue'
</script>

<template>
  <Wrapper id="need-a-website">
    <WrapperContent max-w="screen-lg">
      <div class="rounded-3xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 p-px shadow-2xl shadow-indigo-500/20">
        <div class="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-[#0b0b13] px-4 py-8 md:px-10 md:py-14">
          <div class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl" />
          <div class="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-3xl" />

          <div class="relative">
            <h2 class="mb-4 font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
              Need a <span class="text-shimmer">website</span>?
            </h2>

            <p class="mb-4 max-w-xl text-lg text-neutral-300">
              Got a new business and ready to get out there? Or maybe you've been around a while and want to extend your reach?
            </p>

            <p class="mb-8 max-w-xl text-lg text-neutral-300">
              Let's build your website together!
            </p>

            <div>
              <Button href="#contact" size="large" w="<md:full">
                Get in touch
              </Button>
            </div>
          </div>

          <img
            class="pointer-events-none hidden lg:block"
            pos="absolute bottom--2 right-4"
            src="/images/memoji-phone.png"
            alt="Liam Snowdon Profile Picture"
            h="74"
            w="74"
          >
        </div>
      </div>
    </WrapperContent>
  </Wrapper>
</template>
