<template>
  <div
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-100 max-h-full bg-slate-500/40"
    :class="modal.hiddenClass"
    @click.self.prevent="modal.isOpen = false"
  >
    <div class="relative w-full max-w-md max-h-full left-0 right-0 m-auto">
      <app-spinner v-if="isLoading"></app-spinner>
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          class="absolute top-2 right-2 text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white close-modal"
          @click="modal.isOpen = false"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="p-8 pb-0">
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition dark:text-white"
                href="#"
                @click.prevent="tab = 'login'"
                :class="{
                  'hover:text-white text-white bg-indigo-500': tab === 'login',
                  'hover:text-indigo-800': tab === 'register'
                }"
                >Login</a
              >
            </li>
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition hover:text-indigo-800 dark:text-white"
                href="#"
                @click.prevent="tab = 'register'"
                :class="{
                  'hover:text-white text-white bg-indigo-500': tab === 'register',
                  'hover:text-indigo-800': tab === 'login'
                }"
                >Register</a
              >
            </li>
          </ul>
        </div>
        <login-form
          v-if="tab === 'login'"
          @showLoading="showLoading"
          @closeModal="closeModal"
        ></login-form>
        <register-form
          v-if="tab === 'register'"
          @showLoading="showLoading"
          @closeModal="closeModal"
        ></register-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'

import { ref } from 'vue'
const tab = ref('login')

import { useModalStore } from '@/stores/modal'
const modal = useModalStore()

const isLoading = ref(false)
const showLoading = (val) => {
  isLoading.value = val
}
const closeModal = () => {
  modal.isOpen = false
}
</script>

<style lang="scss" scoped></style>
