<template>
  <app-header></app-header>
  <router-view> </router-view>
  <!-- <router-view v-slot="{ Component }"> -->
  <!-- <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition> -->
  <app-auth></app-auth>
</template>
<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppAuth from '@/components/AppAuth.vue'
</script>

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
