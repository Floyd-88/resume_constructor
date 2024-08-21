<template>
  <div class="w-3/4 bg-white rounded-lg p-3">
    <div v-if="htmlTextArray.length === 0">
      <h2 class="text-xl font-semibold text-center">
        Добавьте первый блок, что бы увидеть результат
      </h2>
    </div>
    <div v-else>
      <div
        v-for="(htmlText, index) in htmlTextArray"
        :key="index"
        @mouseover="handleMouseOver (index)"
        @mouseleave="handleMouseOut(index)">
      <div v-if="hoveredIndex === index" class="flex gap-4">
        <div class="text-sm font-semibold cursor-pointer text-indigo-500 hover:text-indigo-700" @click='editText(htmlText)'>Редактировать</div>
        <div class="text-sm font-semibold cursor-pointer text-red-500 hover:text-red-700" @click='deleteText(htmlText.id)'>Удалить</div>
      </div>
        <HtmlElement :htmlText=htmlText.content />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HtmlElementI } from '@/types/types';
import { ref } from 'vue'
import HtmlElement from './HtmlElement.vue';

type EmitEvents = {
  (event: 'clickDeleteText', payload: string): void;
  (event: 'clickEditText', payload: HtmlElementI ): void;
};

defineProps<{ htmlTextArray: HtmlElementI[] }>()

const emit = defineEmits<EmitEvents>()

const hoveredIndex = ref<number | null>(null)

const handleMouseOver = (index:number) => {
  hoveredIndex.value = index
}

const handleMouseOut = (index: number) => {
  if(hoveredIndex.value === index) {
    hoveredIndex.value = null
  }
}

function deleteText(id: string) {
  emit('clickDeleteText', id)
}

function editText(htmlText: HtmlElementI) {
  emit('clickEditText', htmlText)
}
</script>

<style scoped></style>
