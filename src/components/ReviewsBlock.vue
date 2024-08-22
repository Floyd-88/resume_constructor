<template>
  <div v-if="!reviews">
    <UniversalButton
      @click="loadReviews"
      color="bg-green-700 hover:bg-green-600 active:bg-green-400"
      >ЗАГРУЗИТЬ КОММЕНТАРИИ</UniversalButton
    >
  </div>

  <div v-else class="w-full bg-white rounded-lg p-3">
    <h2 class="text-xl font-medium mb-1">Комментарии</h2>
    <hr />

    <div class="mt-6">
      <ul>
        <li class="mb-4" v-for="review in reviews" :key="review.id">
          <p class="font-semibold mb-2">{{ review.email }}</p>
          <p>
            {{ review.body }}
          </p>
        </li>
      </ul>
    </div>
  </div>
  <UniversalLoader v-if="isLoader"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UniversalButton from './universalComponent/UniversalButton.vue'
import type { ReviewsI } from '@/types/types'
import UniversalLoader from './universalComponent/UniversalLoader.vue';
const reviews = ref<ReviewsI[]>()
const isLoader = ref<boolean>(false)

async function loadReviews() {
  try {
    isLoader.value = true
    const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (res.ok) {
      const data = await res.json()
      reviews.value = data
    } else {
      throw new Error(`Ошибка: ${res.statusText}`)
    }
  } catch (err) {
    console.log(err)
    return []
  } finally {
    isLoader.value = false
  }
}
</script>

<style scoped></style>
