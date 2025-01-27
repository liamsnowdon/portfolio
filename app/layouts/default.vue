<script setup lang="ts">
import Navbar from '~/components/navbar/Navbar.vue'
import Contact from '~/components/contact/Contact.vue'
import Footer from '~/components/footer/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <slot />
    <Contact />
    <Footer />
  </div>
</template>
