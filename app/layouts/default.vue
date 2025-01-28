<script setup lang="ts">
import Navbar from '~/components/navbar/Navbar.vue'
import Contact from '~/components/contact/Contact.vue'
import Footer from '~/components/footer/Footer.vue'
import Modal from '~/components/modal/Modal.vue'
import ProjectModal from '~/components/modal/project-modal/ProjectModal.vue'
import { useModalStore } from '~/stores/modal'

const modalStore = useModalStore()
</script>

<template>
  <div>
    <Navbar />
    <slot />
    <Contact />
    <Footer />

    <Modal :is-open="modalStore.isOpen" @close="modalStore.closeModal">
      <template #content>
        <ProjectModal v-if="modalStore.component === 'ProjectModal' && modalStore.data?.project" :project="modalStore.data.project" />
      </template>
    </Modal>
  </div>
</template>
