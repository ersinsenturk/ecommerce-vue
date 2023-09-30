// import { API_URL } from '../includes/config'
import { defineStore } from 'pinia'
import { auth, db } from '../includes/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export const useUserStore = defineStore('user', () => {
  const defaultState = {
    favorites: [],
    orders: [],
    address: '',
    avatar: ''
  }
  const userObj = ref(defaultState)
  const userLoggedIn = ref(false)
  // const cart = ref([])
  // const deliveryPrice = ref(10)

  const register = async (values) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      )
      const { uid } = userCredential.user
      await setDoc(doc(db, 'users', uid), {
        email: values.email,
        name: values.fullname
      })
      userObj.value = {
        id: uid,
        email: values.email,
        name: values.fullname
      }
      userLoggedIn.value = true
    } catch (error) {
      console.error(error.code, error.message)
    }
  }

  const login = async (values) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, values.email, values.password)
      await getUser(user.uid)
      userLoggedIn.value = true
    } catch (error) {
      throw Error(error.message)
    }
  }

  const router = useRouter()
  const route = useRoute()

  const signout = async () => {
    await signOut(auth)
    userLoggedIn.value = false
    resetState()

    if (route.meta.requiresAuth) router.push({ name: 'home' })
  }

  const getUser = async (userId) => {
    const docRef = doc(db, 'users', userId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      userObj.value = {
        ...userObj.value,
        ...docSnap.data(),
        id: userId
      }
    } else {
      console.log('No such document!')
    }
  }

  const favorite = async (id) => {
    const favIndex = userObj.value.favorites.findIndex((fav) => fav === id)

    if (favIndex === -1) {
      userObj.value.favorites.push(id)
    } else {
      userObj.value.favorites.splice(favIndex, 1)
    }
    const userRef = doc(db, 'users', userObj.value.id)
    await updateDoc(userRef, { favorites: userObj.value.favorites })
  }
  const getFavorites = computed(() => {
    return userObj.value.favorites
  })

  const updateUserProfile = async (data) => {
    try {
      const userRef = doc(db, 'users', userObj.value.id)
      await updateDoc(userRef, data)
    } catch (error) {
      console.error(error)
    }
  }

  const resetState = () => {
    userObj.value = defaultState
  }

  return {
    user: userObj,
    register,
    login,
    getUser,
    userLoggedIn,
    signout,
    favorite,
    getFavorites,
    updateUserProfile
  }
})
