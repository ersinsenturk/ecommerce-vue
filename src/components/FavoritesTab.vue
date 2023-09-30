<template>
  <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    <div class="font-bold col-span-4 text-center text-lg" v-if="!favProducts.length">
      No favorite product yet!
    </div>
    <product-card
      v-else
      v-for="(product, i) in favProducts"
      :key="i"
      :product="product"
    ></product-card>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'
import { useProductsStore } from '../stores/products'
import ProductCard from './ProductCard.vue'
import { computed } from 'vue'

const user = useUserStore()
const products = useProductsStore()

const favProducts = computed(() =>
  products.products.filter((product) => user.getFavorites.includes(product.id))
)
</script>

<style lang="scss" scoped></style>
