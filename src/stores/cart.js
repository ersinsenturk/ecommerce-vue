import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])
  const deliveryPrice = ref(10)
  const addToCart = (product) => {
    cart.value.push(product)
    storeCartToLocal()
  }
  const removeFromCart = (product) => {
    const index = cart.value.findIndex((item) => item.id === product.id)
    cart.value.splice(index, 1)
    storeCartToLocal()
  }

  const getCart = computed(() => cart.value)
  const storeCartToLocal = () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }
  const getCartFromLocal = () => {
    const data = localStorage.getItem('cart')
    if (data) cart.value = JSON.parse(data)
  }
  const deleteCartFromLocal = () => {
    localStorage.removeItem('cart')
  }

  const getCartItemPrices = computed(() => {
    return cart.value.map((item) => item.price)
  })

  const calculatePrice = computed(() => {
    return getCartItemPrices.value.reduce((total, num) => {
      return total + num
    }, 0)
  })

  const emptyCart = () => {
    cart.value = []
    deleteCartFromLocal()
  }
  return {
    addToCart,
    removeFromCart,
    getCart,
    cart,
    getCartFromLocal,
    deliveryPrice,
    calculatePrice,
    emptyCart
  }
})
