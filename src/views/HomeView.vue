<template>
  <div>
    <header class="sticky top-0 bg-white py-6 -mt-8 mb-8 flex flex-col gap-4 shadow-md z-1">
      <h1 class="text-3xl font-bold text-gray-900 md:text-left md:ml-5 text-center">TV Maze</h1>
      <div class="md:flex items-center gap-16 w-full px-5 block">
        <SearchInput
          v-model="searchQuery"
          @enter="handleSearch"
          @update:modelValue="handleSearch"
        />
        <SortDropdown v-model="sortBy" :options="sortOptions" class="mt-5 md:mt-0" />
      </div>
    </header>

    <div class="pl-10 mt-15">
      <template v-if="isSearching">
        <SearchResults :search-query="searchQuery" :shows="searchResult" :loading="searchLoading" />
      </template>

      <template v-else>
        <AppLoader v-if="loading" :message="'Loading shows...'" />
        <template v-else>
          <template v-if="error">
            <div>
              <p>{{ error }}</p>
            </div>
          </template>
          <template v-else>
            <template v-if="Object.keys(sortedShows).length === 0">
              <div>
                <p>No shows found</p>
              </div>
            </template>
            <template v-else>
              <template v-for="(showsByGenre, genre) in sortedShows" :key="genre">
                <section>
                  <div class="flex items-center gap-2 mb-4 align-middle">
                    <h2 class="text-xl font-bold text-gray-900 m-0">{{ genre }}</h2>
                    <ArrowRightIcon class="w-5 h-5 text-gray-600 relative top-1/2" />
                  </div>
                  <div role="list" class="flex gap-5 overflow-x-auto pb-4 align-stretch max-w-[94%]">
                    <ShowCard v-for="(show, index) in showsByGenre" :key="index" :show="show" />
                  </div>
                </section>
              </template>
            </template>
          </template>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, onUnmounted } from 'vue';
import ShowCard from '@/components/ShowCard.vue';
import SearchResults from '@/components/SearchResults.vue';
import { useShowsStore } from '@/store/shows.ts';
import { storeToRefs } from 'pinia';
import SearchInput from '@/components/SearchInput.vue';
import AppLoader from '@/components/AppLoader.vue';
import SortDropdown from '@/components/SortDropdown.vue';
import { sortOptions } from '@/constants.ts';
import { ArrowRightIcon } from '@heroicons/vue/24/outline';

const showsStore = useShowsStore();
const { loading, sortedShows, sortBy, showsByCategory, searchQuery, searchResult } =
  storeToRefs(showsStore);
const error = ref<string | null>(null);
const searchLoading = ref(false);
const isSearching = computed(() => searchQuery.value.trim() !== '');

let searchTimeout: number | null = null;

const handleSearch = async () => {
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }
  searchLoading.value = true;
  searchTimeout = setTimeout(async () => {
    if (searchQuery.value.trim() === '') {
      clearSearch();
      searchLoading.value = false;
      return;
    }
    await showsStore.searchShows(searchQuery.value).then(() => {
      searchLoading.value = false;
    });
  }, 1000);
};

const clearSearch = () => {
  searchQuery.value = '';
  showsStore.setSearchText('');
};

onMounted(async () => {
  loading.value = true;
  if ('error' in showsByCategory.value) {
    error.value = 'Failed to load shows. Please try again later.';
    return;
  }
  if (Object.keys(showsByCategory.value).length === 0) {
    await showsStore.getShowsByCategory();
  }
  loading.value = false;
});

onUnmounted(() => {
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }
});
</script>
