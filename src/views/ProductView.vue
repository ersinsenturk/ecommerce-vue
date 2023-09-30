<template>
  <div class="pt-6">
    <app-spinner v-if="store.loading"></app-spinner>
    <div v-else>
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li>
            <div class="flex items-center">
              <router-link
                :to="{ name: 'home', query: { list: `category/${product.category}` } }"
                class="mr-2 text-sm font-medium text-gray-900"
              >
                {{ capitalizeFirstLetter(product.category) }}
              </router-link>

              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <router-link
                :to="{ name: 'home', query: { list: `search?q=${product.brand}` } }"
                class="mr-2 text-sm font-medium text-gray-900"
              >
                {{ product.brand }}
              </router-link>

              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>

          <li class="text-sm">
            <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">
              {{ product.title }}
            </a>
          </li>
        </ol>
      </nav>

      <div
        class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8"
      >
        <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          <img
            :src="product.images[0]"
            :alt="product.title"
            class="h-full w-full object-cover object-center"
          />
        </div>
        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              :src="product.images[1]"
              :alt="product.title"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              :src="product.images[2]"
              :alt="product.title"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div
          class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg"
        >
          <img
            :src="product.images[3]"
            :alt="product.title"
            class="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div
        class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16"
      >
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {{ product.title }}
          </h1>
        </div>

        <div class="mt-4 lg:row-span-3 lg:mt-0">
          <h2 class="sr-only">Product information</h2>
          <p class="text-3xl tracking-tight text-gray-900">${{ product.price }}</p>

          <div class="mt-6">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div class="flex items-center">
                <svg
                  class="h-5 w-5 flex-shrink-0"
                  :class="i < rating ? 'text-gray-900' : 'text-gray-200'"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  v-for="i in 5"
                  :key="i"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p class="sr-only">{{ rating }} out of 5 stars</p>
              <p>({{ rating }})</p>
            </div>
          </div>

          <form class="mt-10">
            <div class="w-full flex mt-10 items-center justify-between">
              <button
                type="submit"
                class="flex w-80 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                @click.prevent="actionCart"
              >
                {{ inCart ? 'Remove from bag' : 'Add to bag' }}
              </button>

              <button
                class="group border border-gray-400 rounded-lg py-3 px-3 hover:text-gray-800 transition-all duration-100"
                @click.prevent="toggleFavorite"
                :class="isFavorite ? 'text-red-600' : 'text-slate-400'"
              >
                <svg
                  class="w-6 h-6 transition-all duration-100 group-active:animate-[ping_1s_linear_1] group-active:text-red-600"
                >
                  <use href="@/assets/sprite.svg#favorite"></use>
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div
          class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6"
        >
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">
                {{ product.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- <div class="py-10 lg:col-span-3 lg:pb-16 lg:pr-8 lg:pt-6" id="reviews">
          <h2 class="text-lg font-bold text-gray-900">Reviews</h2>
          <div class="flex items-center p-4 border-b divide-slate-200">
            <figure class="basis-1/12 mr-4">
              <img src="https://placehold.co/200x200/png" class="inline-block w-full" alt="" />
            </figure>
            <div class="flex flex-col">
              <div class="text-gray-600 font-bold">rkingswood24</div>
              <div class="text-gray-400">This is some awesome thinking</div>
            </div>
          </div>

          <div class="flex items-center p-4 border-b divide-slate-200">
            <figure class="basis-1/12 mr-4">
              <img src="https://placehold.co/200x200/png" class="inline-block w-full" alt="" />
            </figure>
            <div class="flex flex-col">
              <div class="text-gray-600 font-bold">rkingswood24</div>
              <div class="text-gray-400">This is some awesome thinking</div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onBeforeMount } from 'vue'
import { useProductStore } from '@/stores/product'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

const store = useProductStore()
const { product } = storeToRefs(store)

const route = useRoute()
const id = Number(route.params.id)

onBeforeMount(async () => {
  await store.getProductDetail(id)
  renderRating()
})

import { useUserStore } from '@/stores/user'
const user = useUserStore()
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
const toggleFavorite = () => {
  user.favorite(id)
}
const isFavorite = ref(false)
watch(
  user.getFavorites,
  (val) => {
    isFavorite.value = val.find((fav) => fav === id)
  },
  { immediate: true }
)

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const rating = ref(0)
const renderRating = () => {
  rating.value = product.value.rating
}

const inCart = ref(false)
const actionCart = () => {
  if (inCart.value) {
    cart.removeFromCart(product.value)
  } else {
    cart.addToCart(product.value)
  }
}

watch(
  cart.getCart,
  (val) => {
    inCart.value = val.find((item) => item.id === id)
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped></style>
