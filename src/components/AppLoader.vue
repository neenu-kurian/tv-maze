<template>
    <div class="w-16 h-16 border-4 border-blue-500 rounded-full animate-spinner bg-white mt-24 mx-auto"></div>
    <p v-if="message">{{ message }}</p>
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
