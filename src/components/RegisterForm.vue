<template>
  <div class="px-6 py-6 lg:px-8">
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign up to our platform</h3>

    <Form @submit="submitForm" :validation-schema="userSchema">
      <div class="relative z-0 w-full mb-6 group">
        <Field
          type="email"
          name="email"
          id="email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />

        <label
          for="email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email
        </label>
        <ErrorMessage name="email" class="text-sm text-red-600 font-bold" />
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <Field
          type="password"
          name="password"
          id="password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />

        <label
          for="password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
        <ErrorMessage name="password" class="text-sm text-red-600 font-bold" />
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <Field
          type="password"
          name="repeat_password"
          id="repeat_password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />

        <label
          for="repeat_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Confirm password
        </label>
        <ErrorMessage name="repeat_password" class="text-sm text-red-600 font-bold" />
      </div>

      <div class="relative z-0 w-full mb-6 group">
        <Field
          type="text"
          name="fullname"
          id="fullname"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />

        <label
          for="fullname"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Full Name
        </label>
        <ErrorMessage name="fullname" class="text-sm text-red-600 font-bold" />
      </div>

      <button
        type="submit"
        class="text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { string, object, ref } from 'yup'

const emit = defineEmits(['showLoading', 'closeModal'])

let userSchema = object({
  email: string().email().required(),
  password: string().min(6).required(),
  repeat_password: string()
    .required()
    .oneOf([ref('password')], 'Passwords do not match'),
  fullname: string().min(3).required()
})

import { useUserStore } from '@/stores/user'
const user = useUserStore()

const submitForm = async (values, { resetForm }) => {
  emit('showLoading', true)
  try {
    await user.register(values)
  } catch (error) {
    console.error(error.message)
  } finally {
    emit('showLoading', false)
    emit('closeModal', true)
    resetForm()
  }
}
</script>

<style lang="scss" scoped></style>
