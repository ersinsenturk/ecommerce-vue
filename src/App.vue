<template>
  <component :is="$route.meta.layout || 'div'"></component>
</template>
<script setup>
import { onMounted, provide, watch } from 'vue'
import { auth, onAuthStateChanged } from '@/includes/firebase'
import { useUserStore } from '@/stores/user'
import { useCartStore } from '@/stores/cart'
import { useProductsStore } from '@/stores/products'
import { useModalStore } from '@/stores/modal'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const user = useUserStore()
const { userLoggedIn } = storeToRefs(user)
const cart = useCartStore()
const modal = useModalStore()

onMounted(() => {
  getTheme()
  getProducts()
  onAuthStateChanged(auth, (loggedUser) => {
    if (loggedUser) {
      user.getUser(loggedUser.uid)
      userLoggedIn.value = true
    }
  })
  cart.getCartFromLocal()
})

const store = useProductsStore()
const route = useRoute()
const { products } = storeToRefs(store)
const getProducts = async () => {
  const params = route.query.list || ''
  await store.getProducts(params)
}
watch(route, getProducts)
provide('products', products)

const getTheme = () => {
  modal.theme = localStorage.getItem('theme') || modal.theme
}
</script>

<style lang="scss" scoped></style>
