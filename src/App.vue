<template>
  <main class="m-auto p-4 w-[900px]">
    <div class="flex gap-2">
      <InfoManager  :addHtmlTextArray="addHtmlTextArray"/>
      <ContentBlock :htmlTextArray="htmlTextArray"/>
    </div>
    <div class="mt-4 mb-4">
      <ReviewsBlock/>
    </div>
  </main>
</template>

<script setup lang="ts">
import InfoManager from './components/InfoManager.vue'
import ContentBlock from './components/ContentBlock.vue'
import ReviewsBlock from './components/ReviewsBlock.vue'

import { ref } from 'vue'

const htmlTextArray = ref<string[]>([])

function addHtmlTextArray(html: string) {
  htmlTextArray.value.push(html)
}

</script>

<style scoped></style>
