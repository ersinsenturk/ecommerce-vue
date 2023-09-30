<template>
  <form @submit.prevent="submitForm" class="flex flex-col">
    <div class="relative mb-4">
      <input
        type="text"
        id="name"
        class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        v-model="name"
      />
      <label
        for="name"
        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >Name</label
      >
    </div>
    <div class="relative">
      <textarea
        id="address"
        class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        v-model="address"
      ></textarea>
      <label
        for="address"
        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        Address
      </label>
    </div>
    <button
      type="submit"
      class="text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-4 text-center self-end disabled:opacity-75 disabled:hover:bg-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      :disabled="disableButton"
    >
      Submit
    </button>
  </form>
</template>

<script setup>
import { computed, ref } from 'vue'
const emit = defineEmits(['sendProfileData'])

const { user } = defineProps(['user'])
const name = ref(user.name)
const address = ref(user.address || '')

const disableButton = computed(
  () => name.value === user.name && address.value === (user.address || '')
)

const submitForm = () => {
  emit('sendProfileData', { name: name.value, address: address.value })
  console.log()
}
</script>

<style lang="scss" scoped></style>
