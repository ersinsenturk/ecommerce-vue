<template>
  <header class="bg-white z-20 relative dark:bg-gray-500">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:p-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <router-link :to="{ name: 'home' }" class="w-8 sm:w-12">
          <span class="sr-only">Your Company</span>
          <svg
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-103.93 -103.93 504.79 504.79"
            stroke="#ffffff"
            stroke-width="0"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)">
              <rect
                x="-103.93"
                y="-103.93"
                width="504.79"
                height="504.79"
                rx="252.395"
                strokewidth="0"
                class="fill-[#6366f1] dark:fill-white"
              ></rect>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#FFFFFF"
              stroke-width="5.938680000000001"
            ></g>
            <g id="SVGRepo_iconCarrier" class="fill-white dark:fill-[#6366f1]">
              <path
                d="M294.737,209.65l-39.61-39.611l37.811-75.622c4.003-8.005,4.076-16.19,0.202-22.459c-3.874-6.268-11.228-9.862-20.177-9.862 H220.1c-13.01-27.539-41.045-46.646-73.471-46.646c-32.421,0-60.454,19.107-73.464,46.646h-31.61V17.013c0-4.143-3.357-7.5-7.5-7.5 H7.5c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h19.055v221.924c0,4.143,3.357,7.5,7.5,7.5h9.612 c-1.838,3.271-2.894,7.056-2.894,11.089c0,12.349,9.852,22.396,21.961,22.396c12.11,0,21.963-10.047,21.963-22.396 c0-4.033-1.057-7.817-2.894-11.089h76.465c-1.837,3.271-2.893,7.056-2.893,11.089c0,12.349,9.851,22.396,21.961,22.396 c12.11,0,21.963-10.047,21.963-22.396c0-4.033-1.057-7.817-2.893-11.089h12.921c4.143,0,7.5-3.357,7.5-7.5 c0-4.143-3.357-7.5-7.5-7.5H41.555v-21.625h161.3c7.549,0,15.564-2.494,22.692-6.621l34.077,34.075 c1.406,1.406,3.314,2.196,5.303,2.196c1.989,0,3.897-0.79,5.304-2.197l24.507-24.509 C297.666,217.327,297.666,212.579,294.737,209.65z M177.337,257.63c3.839,0,6.963,3.317,6.963,7.396s-3.124,7.396-6.963,7.396 c-3.838,0-6.961-3.317-6.961-7.396S173.499,257.63,177.337,257.63z M62.734,257.63c3.839,0,6.963,3.317,6.963,7.396 s-3.124,7.396-6.963,7.396c-3.838,0-6.961-3.317-6.961-7.396S58.896,257.63,62.734,257.63z M245.589,155.573h-4.927l-21.781-21.782 c1.661-3.222,3.113-6.544,4.322-9.958h38.255L245.589,155.573z M272.963,77.095c3.634,0,6.338,1.002,7.417,2.749 c1.08,1.746,0.767,4.613-0.858,7.863l-10.563,21.126H226.94c0.597-3.994,0.903-8.06,0.903-12.173c0-6.745-0.841-13.295-2.398-19.565 H272.963z M146.631,30.448c36.51,0.001,66.213,29.703,66.213,66.213c0.001,17.685-6.886,34.312-19.393,46.818 c-12.507,12.506-29.135,19.393-46.82,19.393c-36.509,0-66.211-29.703-66.211-66.212C80.423,60.152,110.124,30.448,146.631,30.448z M41.555,77.095h26.264c-1.557,6.271-2.398,12.82-2.398,19.565c0,4.137,0.315,8.2,0.915,12.173h-24.78V77.095z M79.136,202.312 H41.555v-31.738h37.581V202.312z M41.555,155.573v-31.74h28.557c2.272,6.381,5.313,12.398,9.024,17.934v13.807H41.555z M94.136,202.312v-31.738h18.91c5.885,2.686,12.141,4.686,18.672,5.903v25.835H94.136z M184.3,202.312h-37.582v-24.44 c11.797-0.013,23.2-2.539,33.621-7.298h3.961V202.312z M202.854,202.312H199.3v-17.866l15.105,15.104 C210.541,201.285,206.522,202.312,202.854,202.312z M264.927,228.856l-68.253-68.249c2.566-2.016,5.04-4.178,7.384-6.52 c2.343-2.343,4.505-4.817,6.52-7.383l68.249,68.25L264.927,228.856z"
              ></path>
            </g>
          </svg>
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
            <svg
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-103.93 -103.93 504.79 504.79"
              stroke="#ffffff"
              stroke-width="0"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)">
                <rect
                  x="-103.93"
                  y="-103.93"
                  width="504.79"
                  height="504.79"
                  rx="252.395"
                  strokewidth="0"
                  class="fill-[#6366f1] dark:fill-white"
                ></rect>
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#FFFFFF"
                stroke-width="5.938680000000001"
              ></g>
              <g id="SVGRepo_iconCarrier" class="fill-white dark:fill-[#6366f1]">
                <path
                  d="M294.737,209.65l-39.61-39.611l37.811-75.622c4.003-8.005,4.076-16.19,0.202-22.459c-3.874-6.268-11.228-9.862-20.177-9.862 H220.1c-13.01-27.539-41.045-46.646-73.471-46.646c-32.421,0-60.454,19.107-73.464,46.646h-31.61V17.013c0-4.143-3.357-7.5-7.5-7.5 H7.5c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h19.055v221.924c0,4.143,3.357,7.5,7.5,7.5h9.612 c-1.838,3.271-2.894,7.056-2.894,11.089c0,12.349,9.852,22.396,21.961,22.396c12.11,0,21.963-10.047,21.963-22.396 c0-4.033-1.057-7.817-2.894-11.089h76.465c-1.837,3.271-2.893,7.056-2.893,11.089c0,12.349,9.851,22.396,21.961,22.396 c12.11,0,21.963-10.047,21.963-22.396c0-4.033-1.057-7.817-2.893-11.089h12.921c4.143,0,7.5-3.357,7.5-7.5 c0-4.143-3.357-7.5-7.5-7.5H41.555v-21.625h161.3c7.549,0,15.564-2.494,22.692-6.621l34.077,34.075 c1.406,1.406,3.314,2.196,5.303,2.196c1.989,0,3.897-0.79,5.304-2.197l24.507-24.509 C297.666,217.327,297.666,212.579,294.737,209.65z M177.337,257.63c3.839,0,6.963,3.317,6.963,7.396s-3.124,7.396-6.963,7.396 c-3.838,0-6.961-3.317-6.961-7.396S173.499,257.63,177.337,257.63z M62.734,257.63c3.839,0,6.963,3.317,6.963,7.396 s-3.124,7.396-6.963,7.396c-3.838,0-6.961-3.317-6.961-7.396S58.896,257.63,62.734,257.63z M245.589,155.573h-4.927l-21.781-21.782 c1.661-3.222,3.113-6.544,4.322-9.958h38.255L245.589,155.573z M272.963,77.095c3.634,0,6.338,1.002,7.417,2.749 c1.08,1.746,0.767,4.613-0.858,7.863l-10.563,21.126H226.94c0.597-3.994,0.903-8.06,0.903-12.173c0-6.745-0.841-13.295-2.398-19.565 H272.963z M146.631,30.448c36.51,0.001,66.213,29.703,66.213,66.213c0.001,17.685-6.886,34.312-19.393,46.818 c-12.507,12.506-29.135,19.393-46.82,19.393c-36.509,0-66.211-29.703-66.211-66.212C80.423,60.152,110.124,30.448,146.631,30.448z M41.555,77.095h26.264c-1.557,6.271-2.398,12.82-2.398,19.565c0,4.137,0.315,8.2,0.915,12.173h-24.78V77.095z M79.136,202.312 H41.555v-31.738h37.581V202.312z M41.555,155.573v-31.74h28.557c2.272,6.381,5.313,12.398,9.024,17.934v13.807H41.555z M94.136,202.312v-31.738h18.91c5.885,2.686,12.141,4.686,18.672,5.903v25.835H94.136z M184.3,202.312h-37.582v-24.44 c11.797-0.013,23.2-2.539,33.621-7.298h3.961V202.312z M202.854,202.312H199.3v-17.866l15.105,15.104 C210.541,201.285,206.522,202.312,202.854,202.312z M264.927,228.856l-68.253-68.249c2.566-2.016,5.04-4.178,7.384-6.52 c2.343-2.343,4.505-4.817,6.52-7.383l68.249,68.25L264.927,228.856z"
                ></path>
              </g>
            </svg>
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
