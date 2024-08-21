<template>
  <div class="w-1/4 bg-white rounded-lg p-3">
    <form class="" @submit.prevent="addTextContent">
      <h3 class="text-lg font-semibold mb-1">Тип блока</h3>
      <select v-model="typeSelect" class="w-full pl-4 border-2 border-gray-400">
        <option value="title">Заголовок</option>
        <option value="ava">Аватарка</option>
        <option value="subTitle">Подзаголовок</option>
        <option value="text">Текст</option>
      </select>
      <textarea
        v-model.trim="textContent"
        @keyup.enter="addTextContent"
        class="w-full mt-4 mb-2 h-28 border-2 border-gray-400 focus:outline-none focus:border-green-800"
      ></textarea>
      <UniversalButton
        :color="textContent.length < 3 ? 'bg-gray-300 hover:bg-gray-300 active:bg-gray-300' : 'bg-green-700 hover:bg-green-600 active:bg-green-400'"
        :disabled="textContent.length < 3"
      >ДОБАВИТЬ</UniversalButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UniversalButton from './universalComponent/UniversalButton.vue'
const typeSelect = ref<string>('title')
const textContent = ref<string>('')
const htmlText = ref<string>('')

type Props = {
  addHtmlTextArray: (html: string) => void
}

const props = defineProps<Props>()

function addTextContent() {
  switch (typeSelect.value) {
    case 'title':
      htmlText.value = `<h2 class="text-2xl font-semibold mb-3">${textContent.value}</h2>`
      break
    case 'ava':
      htmlText.value = `<div class="flex justify-center">
        <img
          class="w-32 rounded-full"
          src="${textContent.value}"
          alt="ava"
        />
      </div>`
      break
    case 'subTitle':
      htmlText.value = `<div class="my-4">
          <h3 class="text-xl font-medium mb-1">${textContent.value}</h3>
          <hr />
        </div>`
      break
    case 'text':
      htmlText.value = `<div>
          <p>${textContent.value}</p>
        </div>`
      break

    default:
      break
  }

  if (textContent.value) {
    props.addHtmlTextArray(htmlText.value)
    textContent.value = ''
    typeSelect.value = 'title'
  }
}
</script>

<style scoped></style>
