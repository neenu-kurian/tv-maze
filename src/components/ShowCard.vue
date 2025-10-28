<template>
  <div class="flex flex-col gap-2 mb-5">
    <RouterLink :to="{ name: 'show-detail', params: { id: show.id } }">
      <article>
        <div
          class="w-[260px] h-[420px] bg-white rounded-xl overflow-hidden relative shadow-xl shrink-0 flex flex-col transition-transform duration-200 ease-in-out"
        >
          <AppImage :src="show.image?.original" :alt="show.name">
            <template #fallback>
              <div role="img" :aria-label="'No poster available for ' + show.name" class="h-full">
                <PhotoIcon />
              </div>
            </template>
          </AppImage>
          <ShowRating
            v-if="show.rating?.average"
            :score="show.rating.average"
            class="top-3 right-3 bg-black/80 text-white px-2.5 py-1.5 rounded-[10px] text-[13px]"
          />
        </div>
      </article>
    </RouterLink>
    <h3 class="text-base font-medium mt-2 mb-0 text-gray-800 text-left px-2 overflow-hidden">
      {{ show.name }}
    </h3>
  </div>
</template>

<script setup lang="ts">
import type { Show } from '@/types/index.ts';
import { RouterLink } from 'vue-router';
import AppImage from './AppImage.vue';
import ShowRating from './ShowRating.vue';
import { PhotoIcon } from '@heroicons/vue/24/outline';

defineProps<{
  show: Show;
}>();
</script>
