import { API_URL } from '../includes/config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const product = ref({})

  const loading = ref(false)

  const getProductDetail = async (id) => {
    loading.value = true
    try {
      const response = await fetch(`${API_URL}/product/${id}`)
      const data = await response.json()
      product.value = data
    } catch (error) {
      console.error(error)
      return error
    } finally {
      loading.value = false
    }
  }

  return { product, getProductDetail, loading }
})
