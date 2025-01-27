<script setup lang="ts">

</script>

<template>
  <Wrapper id="need-a-website">
    <WrapperContent max-w="screen-lg">
      <div pos="relative" p="x-4 y-6 md:x-8 md:y-14" bg="gradient-to-tr gradient-from-indigo-600 gradient-to-indigo-300" rounded="3xl">
        <div space="x-4">
          <div>
            <h2 text="3xl md:5xl white" font="bold" m="b-4">
              Need a website?
            </h2>
            <p text="lg neutral-100" m="b-4">
              Got a new business and ready to get out there? <br> Or maybe you've been around a while and want to extend your reach?
            </p>
            <p text="lg neutral-100" m="b-4">
              Let's build your website together!
            </p>

            <div>
              <Button href="#contact" variant="secondary" w="<md:full">
                Get in touch
              </Button>
            </div>
          </div>

          <img
            class="hidden lg:block"
            pos="absolute bottom--2 right-0"
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
