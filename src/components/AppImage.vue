<template>
  <div class="h-full">
    <img v-if="src" :src="src" :alt="alt" class="w-full h-full object-cover relative"/>
    <div v-else>
      <slot name="fallback">
        <span>{{ 'No Image Available' }}</span>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ImageProps } from '@/types/index.ts';

defineProps<ImageProps>();
</script>
