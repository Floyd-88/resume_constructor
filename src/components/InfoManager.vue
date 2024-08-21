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
      <UniversalButton v-if="buttonAction === 'add'"
        :color="
          textContent.length < 3
            ? 'bg-gray-300 hover:bg-gray-300 active:bg-gray-300'
            : 'bg-green-700 hover:bg-green-600 active:bg-green-400'
        "
        :disabled="textContent.length < 3"
        name="add"
        >ДОБАВИТЬ</UniversalButton
      >
      <UniversalButton v-else
        :color="
          textContent.length < 3
            ? 'bg-gray-300 hover:bg-gray-300 active:bg-gray-300'
            : 'bg-green-700 hover:bg-green-600 active:bg-green-400'
        "
        :disabled="textContent.length < 3"
        name="edit"
        >РЕДАКТИРОВАТЬ</UniversalButton
      >
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import UniversalButton from './universalComponent/UniversalButton.vue'
import type { HtmlElementI } from '@/types/types';

const typeSelect = ref<string>('title')
const textContent = ref<string>('')
const buttonAction = ref<'add' | 'edit'>('add')

type Props = {
  addHtmlTextArray: (html: HtmlElementI) => void,
  editHtmlTextArray: (html: HtmlElementI) => void,
  htmlTextEdit: HtmlElementI | null
}

const props = defineProps<Props>()

function addTextContent() {
  // const submitter = (e as SubmitEvent).submitter as HTMLButtonElement | null;
  // const buttonName = submitter ? submitter.name : '';

  const htmlElement: HtmlElementI = {
    id: buttonAction.value === 'edit' && props.htmlTextEdit ? props.htmlTextEdit.id : Date.now().toString(),
    content: {
      type: typeSelect.value as 'title' | 'ava' | 'subTitle' | 'text',
      content: textContent.value
    }
  }

  if (textContent.value.length >= 3) {
    if(buttonAction.value === 'add') { 
      props.addHtmlTextArray(htmlElement)
    } else if(buttonAction.value === 'edit') {
      props.editHtmlTextArray(htmlElement)
    }
    textContent.value = ''
    typeSelect.value = 'title'
    buttonAction.value = 'add'
  }

}

watch(() => props.htmlTextEdit, (newValue) => {
  if(newValue) {
    console.log(newValue)
    textContent.value = newValue.content.content
    typeSelect.value = newValue.content.type
    buttonAction.value = 'edit'
  } else  {
    buttonAction.value = 'add'

  }
})

</script>

<style scoped></style>
