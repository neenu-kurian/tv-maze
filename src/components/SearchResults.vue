<template>
  <div class="flex flex-col gap-6">
    <div v-if="loading">
      <AppLoader message="Searching..." />
    </div>
    <div v-else-if="'error' in shows">
      {{ shows.error }}
    </div>
    <div class="text-center" v-else-if="shows && shows.length === 0">
      No shows found matching "{{ searchQuery }}"
    </div>
    <div class="flex gap-3 flex-wrap" v-else>
      <ShowCard v-for="show in shows" :key="show.id" :show="show" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ShowCard from './ShowCard.vue';
import AppLoader from './AppLoader.vue';
import type { CustomError, Show } from '@/types/index.ts';

defineProps<{
  searchQuery: string;
  shows: Show[] | CustomError;
  loading: boolean;
}>();
</script>

<style scoped>

</style>
