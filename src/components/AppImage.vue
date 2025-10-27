<template>
  <div class="image-container">
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      class="image-content"
    />
    <div v-else class="fallback-content">
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
