<template>
  <div class="group relative">
    <div
      class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80"
    >
      <button
        class="absolute right-2 top-2 rounded-full bg-white hover:text-slate-800 p-2 z-10"
        @click="toggleFavorite(props.product.id)"
        :class="favClass(props.product.id) ? 'text-red-600' : 'text-slate-400'"
      >
        <svg class="w-6 h-6">
          <use href="@/assets/sprite.svg#favorite"></use>
        </svg>
      </button>
      <img
        :src="props.product.images[0]"
        alt="{{ props.product.title }}"
        class="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:opacity-75"
      />
    </div>
    <div class="mt-4 flex justify-between">
      <div class="text-left">
        <h3 class="text-sm text-gray-700 dark:text-white">
          <router-link :to="{ name: 'product', params: { id: props.product.id } }">
            <span aria-hidden="true" class="absolute inset-0"></span>
            {{ props.product.title }}
          </router-link>
        </h3>
        <p class="mt-1 text-sm text-gray-500 dark:text-white">{{ props.product.brand }}</p>
      </div>
      <p class="text-sm font-medium text-gray-900 dark:text-white">${{ props.product.price }}</p>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'

const props = defineProps(['product'])

const user = useUserStore()
const toggleFavorite = (id) => {
  user.favorite(id)
}
const favClass = (id) => {
  return user.getFavorites.includes(id) ? true : false
}
</script>

<style lang="scss" scoped></style>
