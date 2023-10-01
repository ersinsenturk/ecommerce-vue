// import { API_URL } from '../includes/config'
import { defineStore } from 'pinia'
import { auth, db, onAuthStateChanged } from '../includes/firebase'
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
    if (userId) userLoggedIn.value = true
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

  const getUserState = () =>
    new Promise((resolve, reject) => onAuthStateChanged(auth, resolve, reject))

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
    getUserState,
    userLoggedIn,
    signout,
    favorite,
    getFavorites,
    updateUserProfile
  }
})
