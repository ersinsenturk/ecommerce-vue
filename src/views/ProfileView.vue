<template>
  <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
    <div class="bg-slate-100 rounded-lg overflow-hidden">
      <div class="bg-[url('@/assets/profile-header.jpg')] bg-cover min-h-[180px]"></div>
      <div class="p-4">
        <div class="relative mt-[-10%] inline-block">
          <label
            for="dropzone-file"
            class="absolute -right-2 -top-2 w-8 h-8 z-10 bg-white p-1 text-indigo-500 rounded-full cursor-pointer"
          >
            <svg class="w-full h-full">
              <use class="w-full h-full" href="@/assets/sprite.svg#camera"></use>
            </svg>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>

          <figure class="inline-block rounded-lg overflow-hidden border-4 border-white">
            <img src="https://placehold.co/200x200" class="block max-w-full" alt="" />
          </figure>
        </div>

        <div class="text-lg font-bold">Username</div>
      </div>
    </div>

    <div
      class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
    >
      <ul class="flex flex-wrap -mb-px">
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >Profile</a
          >
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 text-indigo-500 border-b-2 border-indigo-600 rounded-t-lg active dark:text-indigo-500 dark:border-indigo-500"
            aria-current="page"
            >Favorites</a
          >
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >Orders</a
          >
        </li>
      </ul>
      <div class="tab-content text-left p-8">
        <h2 class="font-bold text-xl">Address</h2>
        <form action="">
          <div class="relative">
            <input
              type="text"
              id="floating_outlined"
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_outlined"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >Floating outlined</label
            >
          </div>
          <div>
            <label for="error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
              >Your name</label
            >
            <input
              type="text"
              id="error"
              class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
              placeholder="Error input"
            />
            <textarea
              class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
            ></textarea>
            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
              <span class="font-medium">Oh, snapp!</span> Some error message.
            </p>
          </div>
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Select an option</label
          >
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <button
            type="submit"
            class="text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      <div class="tab-content text-left p-8">Tab content</div>
      <div class="tab-content text-left p-8">Tab content</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
