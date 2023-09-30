<template>
  <div class="flex items-center hover:bg-gray-100 py-5">
    <div class="flex w-3/5">
      <div class="w-20">
        <img class="h-24 object-cover" :src="props.item.thumbnail" :alt="props.item.title" />
      </div>
      <div class="flex flex-col justify-evenly ml-4 flex-grow">
        <span class="font-bold text-md">{{ props.item.title }}</span>
        <span class="text-gray-500 text-sm">{{ props.item.brand }}</span>
      </div>
    </div>

    <span class="text-center w-1/5 font-semibold text-sm">${{ props.item.price }}</span>
    <span class="text-center w-1/5 font-semibold text-sm">
      <button @click.prevent="emit('removeFromCart', props.item)">
        <svg class="w-6 h-6">
          <use href="@/assets/sprite.svg#remove"></use>
        </svg>
      </button>
    </span>
  </div>
</template>

<script setup>
const props = defineProps(['item'])
const emit = defineEmits(['removeFromCart'])
</script>

<style lang="scss" scoped></style>
