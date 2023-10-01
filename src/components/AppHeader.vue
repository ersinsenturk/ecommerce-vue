<template>
  <header class="bg-white z-20 relative dark:bg-gray-500">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:p-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <router-link :to="{ name: 'home' }" class="w-8 sm:w-12">
          <span class="sr-only">Your Company</span>
          <img src="@/assets/logo.png" class="inline-block" alt="" />
        </router-link>
      </div>

      <div class="flex lg:gap-x-12 basis-9/12 lg:basis-5/12">
        <form class="w-full" @submit.prevent="searchSubmit">
          <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Search</label
          >
          <div class="relative w-full">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none dark:text-white"
            >
              <svg class="w-6 h-6">
                <use href="@/assets/sprite.svg#search"></use>
              </svg>
            </div>
            <input
              type="search"
              id="search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              v-model="search"
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 dark:bg-indigo-100 dark:hover:bg-indigo-300 dark:text-indigo-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 btn__open-menu"
          @click.prevent="toggleMenu"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
        <a
          href="#"
          class="inline-block text-sm font-semibold leading-6 text-gray-900 mr-4 dark:text-white"
          @click.prevent="toggleAuthModal"
          v-if="!user.userLoggedIn"
          >Login/Register
        </a>
        <router-link
          :to="{ name: 'profile' }"
          class="text-sm font-semibold leading-6 text-gray-900 mr-4"
          v-if="user.userLoggedIn"
        >
          <svg class="w-6 h-6 dark:text-white">
            <use href="@/assets/sprite.svg#profile"></use>
          </svg>
        </router-link>
        <router-link
          :to="{ name: 'cart' }"
          class="relative text-sm font-semibold leading-6 text-gray-900"
          v-if="user.userLoggedIn"
        >
          <div
            class="absolute -right-2 -top-2 bg-red-500 text-white rounded-full text-[10px] w-[18px] h-[18px] flex items-center justify-center"
            v-if="cart.getCart.length"
          >
            {{ cart.getCart.length }}
          </div>
          <svg class="w-6 h-6 dark:text-white">
            <use href="@/assets/sprite.svg#cart"></use>
          </svg>
        </router-link>

        <a
          href="#"
          class="theme-btn light-theme ml-3"
          @click.prevent="modal.theme = 'light'"
          v-if="modal.theme === 'dark'"
        >
          <svg class="w-6 h-6 dark:text-white">
            <use href="@/assets/sprite.svg#light"></use>
          </svg>
        </a>
        <a
          href="#"
          class="theme-btn dark-theme ml-3"
          @click.prevent="modal.theme = 'dark'"
          v-if="modal.theme === 'light'"
        >
          <svg class="w-6 h-6">
            <use href="@/assets/sprite.svg#dark"></use>
          </svg>
        </a>
      </div>
    </nav>

    <div class="mobile-menu" :class="{ hidden: !isOpenMenu }" role="dialog" aria-modal="true">
      <div class="fixed inset-0 z-10"></div>
      <div
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-400 px-4 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <router-link :to="{ name: 'home' }" class="w-8 sm:w-12">
            <span class="sr-only">Your Company</span>
            <img src="@/assets/logo.png" class="inline-block" alt="" />
          </router-link>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700 btn__close-menu"
            @click.prevent="toggleMenu"
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="py-6">
          <a
            href="#"
            class="block py-2.5 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50"
            @click.prevent="toggleAuthModal"
            v-if="!user.userLoggedIn"
            >Login/Register
          </a>
          <router-link
            :to="{ name: 'profile' }"
            class="text-base font-semibold py-2.5 leading-6 text-gray-900 dark:text-white mr-4 flex"
            v-if="user.userLoggedIn"
          >
            <svg class="w-6 h-6 mr-2 dark:text-white">
              <use href="@/assets/sprite.svg#profile"></use>
            </svg>
            Profile
          </router-link>
          <router-link
            :to="{ name: 'cart' }"
            class="relative text-sm font-semibold leading-6 text-gray-900 dark:text-white flex"
            v-if="user.userLoggedIn"
          >
            <div
              class="absolute -right-2 -top-2 bg-red-500 text-white rounded-full text-[10px] w-[18px] h-[18px] flex items-center justify-center"
              v-if="cart.getCart.length"
            >
              {{ cart.getCart.length }}
            </div>
            <svg class="w-6 h-6 mr-2 dark:text-white">
              <use href="@/assets/sprite.svg#cart"></use>
            </svg>
            Cart
          </router-link>

          <a
            href="#"
            class="theme-btn light-theme ml-3"
            @click.prevent="modal.theme = 'light'"
            v-if="modal.theme === 'dark'"
          >
            <svg class="w-6 h-6 dark:text-white">
              <use href="@/assets/sprite.svg#light"></use>
            </svg>
          </a>
          <a
            href="#"
            class="theme-btn dark-theme ml-3"
            @click.prevent="modal.theme = 'dark'"
            v-if="modal.theme === 'light'"
          >
            <svg class="w-6 h-6">
              <use href="@/assets/sprite.svg#dark"></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useModalStore } from '@/stores/modal'
const modal = useModalStore()
import { useUserStore } from '@/stores/user'
const user = useUserStore()
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
import { useRouter } from 'vue-router'
const router = useRouter()

const search = ref('')
const searchSubmit = () => {
  router.push({ name: 'home', query: { list: `search?q=${search.value}` } })
  search.value = ''
}

const toggleAuthModal = () => {
  modal.isOpen = !modal.isOpen
}

watch(
  modal.getTheme,
  (val) => {
    localStorage.setItem('theme', val)
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },
  { immediate: true }
)

const isOpenMenu = ref(false)
const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}
router.beforeEach((to, from, next) => {
  isOpenMenu.value = false
  next()
})
</script>

<style lang="scss" scoped></style>
