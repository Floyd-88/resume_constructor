
<template>
  <div class="w-3/4 bg-white rounded-lg p-3">
    <div v-if="htmlTextArray.length === 0">
      <h2 class="text-xl font-semibold text-center">Добавьте первый блок, что бы увидеть результат</h2>
    </div>
    <div v-else>
      <div v-for="(htmlText, index) in htmlTextArray" :key="index" v-html="htmlText"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{htmlTextArray: string[]}>()
</script>

<style scoped></style>
