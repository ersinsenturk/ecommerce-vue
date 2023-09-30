import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAeHQoJAuxOy3KXJM9vY9EPNbiNmJgMSFk',
  authDomain: 'ecommerce-7811e.firebaseapp.com',
  projectId: 'ecommerce-7811e',
  storageBucket: 'ecommerce-7811e.appspot.com',
  messagingSenderId: '978157457113',
  appId: '1:978157457113:web:96260d3381f3da0a3538c8'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, onAuthStateChanged, db, storage }
