<template>
  <div class="flex flex-col gap-6">
    <div v-if="loading">
      <AppLoader message="Searching..." />
    </div>
    <div v-else-if="'error' in shows" role="alert">
      {{ shows.error }}
    </div>
    <div class="text-center" v-else-if="shows && shows.length === 0">
      No shows found matching "{{ searchQuery }}"
    </div>
    <div class="flex gap-3 flex-wrap" role="list" v-else>
      <ShowCard v-for="show in shows" :key="show.id" :show="show" role="list-item"/>
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
