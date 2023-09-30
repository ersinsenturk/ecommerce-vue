<template>
  <div class="lg:w-1/2 m-auto">
    <div class="font-bold text-center text-lg" v-if="!order.getOrdersList.length">
      There isn't any order yet!
    </div>
    <order-item
      v-else
      v-for="order in order.getOrdersList"
      :order="order"
      :key="order"
    ></order-item>
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
})
</script>

<style lang="scss" scoped></style>
