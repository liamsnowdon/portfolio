import { defineStore } from 'pinia'
import type { ModalComponents } from '~/types/modals'

export interface State {
  isOpen: boolean
  data: ModalComponents[keyof ModalComponents] | null
  component: keyof ModalComponents | null
}

export const useModalStore = defineStore('modal', {
  state: (): State => {
    return {
      isOpen: false,
      data: null,
      component: null,
    }
  },

  actions: {
    openModal<T extends keyof ModalComponents> (component: T, props: ModalComponents[T]) {
      this.isOpen = true
      this.data = props
      this.component = component
    },

    async closeModal () {
      this.isOpen = false

      await new Promise(resolve => setTimeout(resolve, 300))

      this.component = null
      this.data = null
    },
  },
})
