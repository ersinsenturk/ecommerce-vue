<template>
  <header class="bg-white z-20 relative">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <router-link :to="{ name: 'home' }" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-10 w-auto" src="@/assets/ecommerce.png" alt="" />
        </router-link>
      </div>

      <div class="flex lg:gap-x-12 basis-8/12 lg:basis-5/12">
        <form class="w-full">
          <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Search</label
          >
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-6 h-6">
                <use href="@/assets/sprite.svg#search"></use>
              </svg>
            </div>
            <input
              type="search"
              id="search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
          class="inline-block text-sm font-semibold leading-6 text-gray-900 mr-4"
          @click.prevent="toggleAuthModal"
          >Log in/Register
        </a>
        <router-link
          :to="{ name: 'profile' }"
          class="text-sm font-semibold leading-6 text-gray-900 mr-4"
        >
          <svg class="w-6 h-6">
            <use href="@/assets/sprite.svg#profile"></use>
          </svg>
        </router-link>
        <router-link :to="{ name: 'cart' }" class="text-sm font-semibold leading-6 text-gray-900">
          <svg class="w-6 h-6">
            <use href="@/assets/sprite.svg#cart"></use>
          </svg>
        </router-link>

        <a href="#" class="theme-btn light-theme ml-3">
          <svg class="w-6 h-6">
            <use href="@/assets/sprite.svg#light"></use>
          </svg>
        </a>
        <a href="#" class="theme-btn dark-theme ml-3">
          <svg class="w-6 h-6">
            <use href="@/assets/sprite.svg#dark"></use>
          </svg>
        </a>
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="hidden mobile-menu" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-10"></div>
      <div
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="@/assets/ecommerce.png" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 btn__close-menu">
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
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <!-- <div class="space-y-2 py-6">
              <form>
                <label for="search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-6 h-6">
                      <use href="@/assets/sprite.svg#search"></use>
                    </svg>
                  </div>
                  <input type="search" id="search"
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search" required />
                  <button type="submit"
                    class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Search
                  </button>
                </div>
              </form>
            </div> -->
            <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                @click.prevent="toggleAuthModal"
                >Log in/Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useModalStore } from '@/stores/modal'
const store = useModalStore()
function toggleAuthModal() {
  store.isOpen = !store.isOpen
}
</script>

<style lang="scss" scoped></style>
