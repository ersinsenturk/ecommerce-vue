<template>
  <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold text-center tracking-tight text-gray-900">Products</h2>
    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <product-card v-for="(product, i) in products" :key="i" :product="product"></product-card>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { products as prodJson } from '@/stores/products'

const products = reactive(prodJson)
</script>

<style lang="scss" scoped></style>
