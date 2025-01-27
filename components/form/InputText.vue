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

defineEmits(['update:modelValue'])
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
      bg="neutral-800 focus:neutral-700"
      p="3"
      w="full"
      border="1 rounded-xl neutral-800 focus:indigo-500"
      text="base white"
      outline="none"
      :placeholder="placeholder"
      :required="required"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >

    <slot name="helper" />
  </div>
</template>
