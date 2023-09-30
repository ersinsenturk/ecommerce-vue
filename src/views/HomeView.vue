<template>
  <div class="mx-auto max-w-2xl p-2 sm:p-6 lg:max-w-7xl">
    <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white">Products</h2>
    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <app-spinner v-if="store.loading"></app-spinner>
      <product-card v-for="(product, i) in products" :key="i" :product="product"></product-card>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { inject } from 'vue'
import { useProductsStore } from '@/stores/products'
const store = useProductsStore()

const products = inject('products')
</script>

<style lang="scss" scoped></style>
