import type { Show, CategorizedShows } from '@/types/index.ts';

/*function to categorise shows based on genre. Returns an object with genre as key and array of shows as value.
Loops through each show and then its genres, adding the show to the appropriate genre array in the result object.*/
export function categorizeShows(shows: Show[]): CategorizedShows {
  const showsByCategory: CategorizedShows = {};
  shows.forEach((show: Show) => {
    show.genres?.forEach((genre: string) => {
      if (!showsByCategory[genre]) {
        showsByCategory[genre] = [];
      }
      showsByCategory[genre].push(show);
    });
  });
  return showsByCategory;
}
