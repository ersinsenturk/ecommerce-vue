<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>
<script setup></script>

<style lang="scss" scoped>
.fade- {
  &enter-from {
    opacity: 0;
  }
  &enter-active {
    transition: all 0.5s linear;
  }
  &leave-to {
    transition: all 0.5s linear;
    opacity: 0;
  }
}
</style>
