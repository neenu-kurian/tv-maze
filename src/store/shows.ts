import {
  fetchShowsByCategory,
  fetchShowData,
  fetchCastData,
  searchShows,
} from '@/services/index.ts';
import type {
  CategorizedShows,
  ShowsState,
  CustomError,
  Show,
  CastMember,
  CastError,
} from '@/types/index';
import { defineStore } from 'pinia';

export const useShowsStore = defineStore('shows', {
  state: (): ShowsState => ({
    showsByCategory: {},
    showDetails: {},
    loading: false,
    searchQuery: '',
    sortBy: 'rating-desc',
    searchResult: [],
    searchError: false,
  }),
  getters: {
    sortedShows(): CategorizedShows | CustomError {
      if ('error' in this.showsByCategory || !this.showsByCategory) {
        return this.showsByCategory;
      }
      const showsToSort = { ...this.showsByCategory };
      Object.entries(showsToSort).forEach(([genre, shows]) => {
        showsToSort[genre] = [...shows].sort((a, b) => {
          const ratingA = a.rating?.average || 0;
          const ratingB = b.rating?.average || 0;
          return this.sortBy === 'rating-asc' ? ratingA - ratingB : ratingB - ratingA;
        });
      });
      return showsToSort;
    },
    shows() {
      return this.sortedShows;
    },
  },
  actions: {
    async searchShows(query: string) {
      this.loading = true;
      this.searchQuery = query;
      this.searchResult = await searchShows(query);
      this.loading = false;
    },
    async getShowsByCategory() {
      this.loading = true;
      this.showsByCategory = await fetchShowsByCategory();
      this.loading = false;
    },
    setSearchText(text: string) {
      this.searchQuery = text;
    },
    setShowDetails(show: Show | CustomError) {
      if (show && 'id' in show && show.id !== undefined) {
        this.showDetails[show.id] = show;
      }
    },
    setCastDetails(cast: CastMember[] | CastError, id: number) {
      if (this.showDetails[id] && !('error' in this.showDetails[id])) {
        this.showDetails[id].cast = cast;
      }
    },
    async fetchShowDetails(id: number): Promise<Show | CustomError> {
      this.loading = true;
      const show = await fetchShowData(id);
      this.loading = false;
      this.setShowDetails(show);
      return show;
    },

    async fetchCastDetails(id: number): Promise<CastMember[] | CastError> {
      this.loading = true;
      const cast = await fetchCastData(id);
      this.loading = false;
      this.setCastDetails(cast, id);
      return cast;
    },
  },
});
