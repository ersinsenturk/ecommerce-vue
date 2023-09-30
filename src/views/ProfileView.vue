<template>
  <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
    <div class="bg-slate-100 rounded-lg overflow-hidden dark:bg-slate-500">
      <div
        class="bg-[url('@/assets/profile-header.jpg')] bg-cover min-h-[90px] lg:min-h-[180px]"
      ></div>
      <div class="p-4">
        <div class="relative mt-[-10%] inline-block">
          <label
            for="dropzone-file"
            class="absolute -right-2 -top-2 w-6 h-6 lg:w-8 lg:h-8 z-10 bg-white p-1 text-indigo-500 rounded-full cursor-pointer"
          >
            <svg class="w-full h-full">
              <use class="w-full h-full" href="@/assets/sprite.svg#camera"></use>
            </svg>
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              @change="updateAvatar"
              accept="image/png,image/jpeg,image/jpg"
            />
          </label>

          <figure
            class="max-w-[100px] lg:max-w-[160px] inline-block rounded-lg overflow-hidden bg-white border-4 border-white"
          >
            <img
              :src="user.avatar || 'https://placehold.co/160x160'"
              class="block max-w-full"
              alt=""
            />
          </figure>
        </div>
        <div class="flex justify-between items-center">
          <div class="text-lg font-bold dark:text-white">{{ user.name }}</div>
          <button
            class="btn-primary text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center disabled:opacity-75 disabled:hover:bg-indigo-500 dark:focus:ring-blue-800"
            @click="signout"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>

    <div
      class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 pb-8 dark:text-gray-200 dark:border-white"
    >
      <div class="flex flex-wrap mb-4">
        <a
          href="#"
          class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
          v-for="(tab, index) in tabs"
          :key="index"
          @click.prevent="selectedTab = index"
          :class="
            selectedTab === index
              ? 'text-indigo-500 border-indigo-600 dark:text-white dark:border-white'
              : 'border-transparent'
          "
        >
          {{ index }}
        </a>
      </div>
      <component
        :is="tabs[selectedTab]"
        :user="user"
        @sendProfileData="sendProfileData"
      ></component>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { useCartStore } from '@/stores/cart'
import { useOrderStore } from '@/stores/order'
import Profile from '@/components/ProfileTab.vue'
import Favorites from '@/components/FavoritesTab.vue'
import Orders from '@/components/OrdersTab.vue'

const store = useUserStore()
const { user } = storeToRefs(store)
const cart = useCartStore()
const order = useOrderStore()

const tabs = {
  Profile,
  Favorites,
  Orders
}
const selectedTab = ref('Profile')

const sendProfileData = (val) => {
  store.updateUserProfile(val)
}

const updateAvatar = (e) => {
  const file = e.target.files[0]
  if (file.size > 1 * 1024 * 1024) {
    return console.error('File size must be maximum 1MB')
  }
  const reader = new FileReader()

  reader.readAsDataURL(file)

  reader.onload = function () {
    user.value.avatar = reader.result
    store.updateUserProfile({ avatar: user.value.avatar })
  }

  reader.onerror = function () {
    console.log(reader.error)
  }
}
const signout = () => {
  store.signout()
  cart.emptyCart()
  order.emptyOrders()
}
</script>

<style lang="scss" scoped></style>
