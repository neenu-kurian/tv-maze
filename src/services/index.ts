import type { CategorizedShows, CustomError } from '@/types/index.ts';
import { categorizeShows } from '@/utilities/categoriseShows.ts';

const API_URL = 'https://api.tvmaze.com';

export async function fetchShowsByCategory(): Promise<CategorizedShows | CustomError> {
  const response = await fetch(`${API_URL}/shows`)
    .then((res) => res.json())
    .then((data) => categorizeShows(data))
    .catch(() => ({
      error: true
    } as CustomError));
  return response;
}
