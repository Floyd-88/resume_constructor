<template>
<div v-html="createHtmlText"></div>
</template>
  
  <script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{htmlText: {type:'title' | 'ava' | 'subTitle' | 'text', content: string}}>()

  const createHtmlText = computed(() => {
    switch (props.htmlText.type) {
      case 'title':
        return `<h2 class="text-2xl font-semibold mb-3">${props.htmlText.content}</h2>`
  
      case 'ava':
        return `<div class="flex justify-center">
      
          <img
            class="w-32 rounded-full"
            src="${props.htmlText.content}"
            alt="ava"
          />
        </div>`
  
      case 'subTitle':
        return `<div class="mb-4">
            <h3 class="text-xl font-medium mb-1">${props.htmlText.content}</h3>
            <hr/>
          </div>`
  
      case 'text':
        return `<div class="mb-2">
            <p>${props.htmlText.content}</p>
          </div>`
  
      default:
        return ''
    }
  })

  
  </script>
  
  <style scoped></style>
  