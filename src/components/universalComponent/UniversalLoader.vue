<template>
  <div class="relative left-1/2 w-20 h-20 border-4 border-transparent rounded-full">
    <div
      class="absolute inset-0 border-8 border-t-8 border-transparent border-t-green-500 shadow-lg rounded-full animate-spin"
    ></div>
  </div>
</template>

<script setup lang="ts">
// Здесь можно добавить логику или импорты, если требуется
</script>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
