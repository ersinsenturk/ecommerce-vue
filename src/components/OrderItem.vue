<template>
  <div class="border shadow-md rounded-lg mb-4 p-4 text-left">
    <div class="flex items-center mb-4 justify-between">
      <div class="text-lg text-gray-600">
        Total Cost: <span class="font-bold">${{ props.order.totalPrice }}</span>
      </div>
      <div>
        Order Date:
        <span class="font-bold">{{ formattedDate() }}</span>
      </div>
    </div>
    <div v-for="transaction in transactions" :key="transaction" class="flex items-center mb-2">
      <figure class="w-16 aspect-square mr-4 flex items-center justify-center basis-1/6">
        <img class="inline-block" :src="transaction.thumbnail" :alt="transaction.title" />
      </figure>
      <div class="text-base basis-1/2">
        <div>{{ transaction.title }}</div>
        <div>{{ transaction.brand }}</div>
      </div>
      <div class="text-lg basis-1/3 text-right">${{ transaction.price }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import dateFormat from 'dateformat'

const props = defineProps(['order'])
const transactions = ref(JSON.parse(props.order.transactions))

const formattedDate = () => {
  return dateFormat(new Date(props.order.timestamp.toDate()), 'mmmm dS, yyyy, hh:MM:ss TT')
}
</script>

<style lang="scss" scoped></style>
