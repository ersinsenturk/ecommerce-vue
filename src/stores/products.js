import { API_URL } from '../includes/config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const loading = ref(false)

export const useProductsStore = defineStore('products', () => {
  loading.value = true
  let products = ref({})

  async function getProducts(query) {
    const url = `${API_URL}/products/${query}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      products.value = data.products
    } catch (error) {
      console.error(error)
      return error
    } finally {
      loading.value = false
    }
  }

  return { products, getProducts, loading }
})
