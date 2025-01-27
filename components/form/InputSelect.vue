<script setup lang="ts">
defineProps<{
  modelValue: string
  id: string
  options: { label: string, value: string }[]
}>()

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

    <div pos="relative">
      <select
        :id="id"
        :name="id"
        :value="modelValue"
        bg="neutral-800 focus:neutral-700"
        p="3 r-9"
        w="full"
        border="1 rounded-xl neutral-800 focus:indigo-500"
        text="base white"
        outline="none"
        appearance="none"
        @input="$emit('update:modelValue', $event.target.value)"
      >
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>

      <span
        pos="absolute top-1/2 right-3"
        transform="~ translate-y--1/2"
        class="i-carbon-chevron-down"
        aria-hidden="true"
      />
    </div>
  </div>
</template>
