<template>
  <div>
    <div
      @click="$router.back()"
      class="inline-flex ml-3 items-center gap-2 font-medium my-7 cursor-pointer bg-none border-none p-0 text-base text-black"
    >
      <ArrowLeftIcon class="w-4 h-4" />
      Back to shows
    </div>
    <AppLoader v-if="loading" message="Loading show details..." />
    <div v-else-if="error" class="text-center" role="alert">{{ error }}</div>
    <div v-else-if="show">
      <div class="p-5 md:flex gap-6">
        <div class="relative">
          <AppImage
            :src="show.image?.original"
            :alt="show.name"
            class="relative md:max-w-[350px] rounded-xl overflow-hidden shadow-lg mx-auto shrink-0"
          >
            <template #fallback>
              <div role="img" :aria-label="'No poster available for ' + show.name">
                <PhotoIcon />
              </div>
            </template>
          </AppImage>
          <ShowRating
            v-if="show.rating?.average"
            :score="show.rating.average"
            large
            class="top-3 left-2 bg-black/80 px-2.5 py-1.5 rounded-[10px]"
          />
        </div>
        <div class="flex-1">
          <h1 class="text-black text-4xl font-bold mb-3">{{ show.name }}</h1>
          <div class="flex gap-2 mb-4 flex-wrap">
            <InfoChip
              v-if="show.premiered"
              label="Year"
              :value="new Date(show.premiered).getFullYear().toString()"
            />
            <InfoChip v-if="show.runtime" label="Duration" :value="`${show.runtime}m`" />
            <InfoChip v-if="show.status" label="Status" :value="show.status" />
          </div>
          <div v-if="show.genres?.length" class="flex gap-2 mb-4 flex-wrap">
            <InfoChip v-for="(genre, index) in show.genres" :key="index" :label="genre" />
          </div>

          <div v-html="sanitiseHtml(show.summary)" class="mb-8 leading-[1.7] text-black"></div>
        </div>
      </div>
      <div v-if="cast && !Array.isArray(cast) && cast.hasError">
        {{ cast.message }}
      </div>
      <div v-else-if="cast && Array.isArray(cast) && cast.length" class="px-5 mb-10">
        <h2 class="text-2xl font-bold mt-5">Top Cast</h2>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6 mt-5">
          <CastMemberComponent
            v-for="member in cast.slice(0, MAX_CAST_MEMBERS_TO_DISPLAY)"
            :key="member.person?.id"
            :member="member"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { sanitiseHtml } from '@/composables/sanitiseHtml.ts';
import { useRoute } from 'vue-router';
import { useShowsStore } from '@/store/shows.ts';
import InfoChip from '@/components/InfoChip.vue';
import ShowRating from '@/components/ShowRating.vue';
import AppImage from '@/components/AppImage.vue';
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';
import AppLoader from '@/components/AppLoader.vue';
import CastMemberComponent from '@/components/CastMember.vue';
import { PhotoIcon } from '@heroicons/vue/24/outline';
import { storeToRefs } from 'pinia';
import { MAX_CAST_MEMBERS_TO_DISPLAY } from '@/constants';

const route = useRoute();
const showStore = useShowsStore();
const loading = ref(true);
const error = ref<string | null>(null);
const id = Number(route.params.id);
const { showDetails } = storeToRefs(showStore);

const show = computed(() => {
  const details = showDetails.value[id];
  if (!details || 'error' in details) return;
  return details;
});

const cast = computed(() => {
  const details = showDetails.value[id];
  if (!details || 'error' in details) return;
  return details.cast;
});

onMounted(async () => {
  loading.value = true;
  const showDetail = showDetails.value;
  if (showDetail && (Object.keys(showDetail).length === 0 || !showDetail[id])) {
    const showDetailResponse = await showStore.fetchShowDetails(id);
    if ('error' in showDetailResponse) {
      error.value = 'Failed to load show details. Please try again later.';
      loading.value = false;
      return;
    }
    await showStore.fetchCastDetails(id);
  }
  loading.value = false;
});
</script>
