<script setup lang="ts">
interface Props {
  modelValue: string
  id: string
  placeholder?: string
  type?: string
  required?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'text',
})

const emit = defineEmits<{
  'update:modelValue': [string]
}>()

function onInput (event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div flex="~ col" space="y-2">
    <label
      v-if="$slots.label"
      :for="id"
      text="white sm"
      font="medium"
      display="block"
    >
      <slot name="label" />
    </label>

    <input
      :id="id"
      :name="id"
      :type="type"
      class="bg-white/5 transition-colors placeholder:text-neutral-600 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20"
      p="3"
      w="full"
      border="1 rounded-xl white/10 focus:indigo-400/60"
      text="base white"
      outline="none"
      :placeholder="placeholder"
      :required="required"
      :value="modelValue"
      @input="onInput"
    >

    <slot name="helper" />
  </div>
</template>
