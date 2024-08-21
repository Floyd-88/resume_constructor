<template>
  <button
    :class="buttonClass"
  >
  <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ color: string | undefined }>()

const buttonClass = computed(() => {
  return `py-2 px-3 cursor-pointer shadow-xl border-1 rounded-2xl text-sm text-white font-bold ${props.color}`
})
</script>

<style scoped></style>
