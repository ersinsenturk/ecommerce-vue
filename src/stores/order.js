import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { db } from '../includes/firebase'
import { collection, addDoc, getDocs, query, where, serverTimestamp } from 'firebase/firestore'

export const useOrderStore = defineStore('order', () => {
  const order = ref()
  const orders = ref([])
  const orderComplete = ref(false)

  const createOrder = async (orderObj) => {
    const orderTransactions = orderObj.transactions.map((order) => {
      return {
        title: order.title,
        price: order.price,
        brand: order.brand,
        thumbnail: order.thumbnail
      }
    })

    order.value = {
      uid: orderObj.uid,
      transactions: JSON.stringify(orderTransactions),
      totalPrice: orderObj.totalPrice.value
    }
    try {
      await addDoc(collection(db, 'orders'), {
        ...order.value,
        timestamp: serverTimestamp()
      })
      orderComplete.value = true
    } catch (error) {
      console.error(error)
    }
  }

  const getOrders = async (uid) => {
    orders.value = []
    const q = query(collection(db, 'orders'), where('uid', '==', uid))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      orders.value.push(doc.data())
    })
  }

  const getOrdersList = computed(() => orders.value)

  const emptyOrders = () => (orders.value = [])

  return { orders, createOrder, orderComplete, getOrders, getOrdersList, emptyOrders }
})
