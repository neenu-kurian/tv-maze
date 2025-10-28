import type { Show, CategorizedShows, SearchResult, CustomError } from '@/types/index.ts';

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

export function normaliseSearchResults(
  results: SearchResult[] | CustomError,
): Show[] | CustomError {
  if (!('error' in results)) {
    return results.map((result: SearchResult) => result.show);
  }
  return results;
}
