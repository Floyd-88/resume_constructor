<template>
  <main class="m-auto p-4 w-[900px]">
    <div class="flex gap-2">
      <InfoManager  :addHtmlTextArray="addHtmlTextArray" :editHtmlTextArray="editHtmlTextArray" :htmlTextEdit="htmlTextEdit"/>
      <ContentBlock :htmlTextArray="htmlTextArray" @clickDeleteText="clickDeleteText" @clickEditText="clickEditText"/>
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
import type { HtmlElementI } from './types/types';

const htmlTextArray = ref<HtmlElementI[]>([])
const htmlTextEdit = ref<HtmlElementI | null>(null)

function addHtmlTextArray(html: HtmlElementI) {
  htmlTextArray.value.push(html)
  console.log(html)
}

function editHtmlTextArray(html: HtmlElementI) {
  const htmlText = htmlTextArray.value.find((elem) => elem.id === html.id)
  if(htmlText) {
    htmlText.content = html.content
    htmlTextEdit.value = null
  }

}

function clickDeleteText(id: string) {
  htmlTextArray.value = htmlTextArray.value.filter((element) => element.id !== id)
}

function clickEditText(htmlText: HtmlElementI) {
  htmlTextEdit.value = htmlText
}

</script>

<style scoped></style>
