<template>
  <div class="w-1/2 m-auto">
    <order-item v-for="order in order.getOrdersList" :order="order" :key="order"></order-item>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import OrderItem from '@/components/OrderItem.vue'
import { useOrderStore } from '../stores/order'
const order = useOrderStore()

const props = defineProps(['user'])

onMounted(async () => {
  await order.getOrders(props.user.id)
  console.log(order.getOrdersList)
})
</script>

<style lang="scss" scoped></style>

<!-- const orders = ref([
  {
    id: 1,
    transactions: [
      {
        title: 'iPhone X',
        price: 900,
        brand: 'Apple',
        thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg'
      },
      {
        title: 'S7',
        price: 1900,
        brand: 'Samsung',
        thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg'
      }
    ],
    totalPrice: 2800,
    date: ''
  },
  {
    id: 2,
    transactions: [
      {
        title: 'iPhone X',
        price: 900,
        brand: 'Apple',
        thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg'
      },
      {
        title: 'S7',
        price: 1900,
        brand: 'Samsung',
        thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg'
      },
      {
        title: 'S8',
        price: 600,
        brand: 'Samsung',
        thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg'
      }
    ],
    totalPrice: 3400,
    date: ''
  }
]) -->
