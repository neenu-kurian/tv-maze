import type { CategorizedShows, CastMember, CustomError, Show, CastError } from '@/types/index.ts';
import { API_URL } from '@/constants.ts';
import { categorizeShows, normaliseSearchResults } from '@/utilities/normaliser.ts';

export async function fetchShowsByCategory(): Promise<CategorizedShows | CustomError> {
  const response = await fetch(`${API_URL}/shows`)
    .then((res) => res.json())
    .then((data) => categorizeShows(data))
    .catch(
      () =>
        ({
          error: true,
        }) as CustomError,
    );
  return response;
}

export async function fetchShowData(id: number): Promise<Show | CustomError> {
  const response = await fetch(`${API_URL}/shows/${id}`)
    .then((res) => res.json())
    .catch(() => ({
      error: true,
      id,
    }));
  return response;
}

export async function fetchCastData(id: number): Promise<CastMember[] | CastError> {
  const response = await fetch(`${API_URL}/shows/${id}/cast`)
    .then((res) => res.json())
    .catch(() => ({
      hasError: true,
      id,
    }));
  return response;
}

export async function searchShows(query: string): Promise<Show[] | CustomError> {
  const response = await fetch(`${API_URL}/search/shows?q=${query}`)
    .then((res) => res.json())
    .then((data) => normaliseSearchResults(data))
    .catch(() => ({
      error: true,
    }));
  return response;
}
