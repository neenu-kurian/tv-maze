<template>
  <div class="flex flex-col items-center justify-center mt-24">
    <div
      class="w-16 h-16 border-4 border-gray-400 rounded-full animate-spinner bg-white mx-auto"
      data-testid="app-loader"
    ></div>
    <p class="text-center mt-4" v-if="message" data-testid="loading-message">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import type { AppLoaderProps } from '@/types/index.ts';

defineProps<AppLoaderProps>();
</script>

<style scoped>
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>
