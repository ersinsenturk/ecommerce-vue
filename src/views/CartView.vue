<template>
  <div class="mx-auto max-w-2xl lg:p-4 sm:px-6 lg:max-w-7xl lg:px-8 text-center min-h-screen">
    <div
      v-if="!cart.getCart.length && !order.orderComplete"
      class="text-center border shadow-md rounded-lg p-12 px-24 inline-block dark:bg-gray-200"
    >
      <div class="w-16 inline-block text-red-700">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="text-3xl font-bold">No items added to cart yet!</div>
      <router-link
        :to="{ name: 'home' }"
        class="btn-primary inline-block font-semibold p-3 mt-4 text-sm uppercase rounded-md"
      >
        Back to shopping
      </router-link>
    </div>
    <div
      v-if="!order.orderComplete && cart.getCart.length"
      class="flex flex-col lg:flex-row shadow-md text-left"
    >
      <div class="basis-full lg:basis-3/4 bg-white p-4 lg:p-10 dark:bg-gray-200">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-lg lg:text-2xl">Shopping Cart</h1>
        </div>
        <div class="flex mt-4 lg:mt-10 lg:mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-3/5">Product Details</h3>

          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5"></h3>
        </div>
        <cart-item
          v-for="item in cart.getCart"
          :item="item"
          :key="item"
          @removeFromCart="removeFromCart"
        >
        </cart-item>
        <router-link
          :to="{ name: 'home' }"
          class="flex font-semibold text-indigo-500 text-sm mt-10"
        >
          <svg class="fill-current mr-2 text-indigo-500 w-4" viewBox="0 0 448 512">
            <path
              d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
            />
          </svg>
          Continue Shopping
        </router-link>
      </div>

      <div class="basis-full lg:basis-1/4 px-8 py-10 bg-slate-100">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">{{ cart.length }} Items</span>
          <span class="font-semibold text-sm">${{ cart.calculatePrice }}</span>
        </div>
        <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select
            v-model="deliveryPrice"
            @change="updatePrice"
            class="block p-2 text-gray-600 w-full text-sm"
          >
            <option value="10">Standard shipping - $10</option>
            <option value="20">Fast shipping - $20</option>
          </select>
        </div>

        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>${{ totalPrice }}</span>
          </div>
          <button
            class="btn-primary font-semibold py-3 text-sm uppercase w-full rounded-md"
            @click.prevent="completeOrder"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
    <app-spinner v-if="isLoading"></app-spinner>
    <div
      v-if="order.orderComplete"
      class="text-center border shadow-md rounded-lg p-12 px-24 inline-block dark:bg-gray-200"
    >
      <div class="w-16 inline-block text-green-700">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="text-3xl font-bold">Congratulations</div>
      <div class="text-3xl font-bold">Order Completed</div>
      <router-link
        :to="{ name: 'home' }"
        class="btn-primary inline-block font-semibold p-3 mt-4 text-sm uppercase rounded-md"
      >
        Back to shopping
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
const user = useUserStore()
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
import { useOrderStore } from '@/stores/order'
const order = useOrderStore()
import { computed, onBeforeUnmount, ref } from 'vue'
import CartItem from '@/components/CartItem.vue'

const removeFromCart = (product) => {
  cart.removeFromCart(product)
}

const deliveryPrice = ref(10)
const updatePrice = () => {
  cart.deliveryPrice = Number(deliveryPrice.value)
}

const totalPrice = computed(() => cart.calculatePrice + cart.deliveryPrice)

const isLoading = ref(false)
const completeOrder = async () => {
  isLoading.value = true
  try {
    const orderObj = { uid: user.user.id, transactions: cart.getCart, totalPrice }
    await order.createOrder(orderObj)
    cart.emptyCart()
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}
onBeforeUnmount(() => {
  order.orderComplete = false
})
</script>

<style lang="scss" scoped></style>
