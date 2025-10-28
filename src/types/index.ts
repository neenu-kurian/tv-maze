export type Image = {
  original: string;
};

export type Rating = {
  average: number | null;
};

export type CastMember = {
  person: {
    id: number;
    name: string;
    image: Image | null;
  };
  character: {
    id: number;
    name: string;
  };
};

export type SearchResult = {
  score: number;
  show: Show;
};

export interface ShowsState {
  showsByCategory: CategorizedShows | CustomError;
  showDetails: Record<number, Show | CustomError>;
  loading: boolean;
  searchQuery: string;
  sortBy: string;
  searchResult: Show[] | CustomError;
  searchError: boolean;
}

export interface RouteSearch {
  query: {
    search?: string;
  };
}

export interface Show {
  id: number;
  name: string;
  genres: string[];
  status: string;
  runtime: number | null;
  premiered: string;
  rating: Rating;
  image: Image | null;
  summary: string;
  cast: CastMember[] | CastError;
}

export type CategorizedShows = {
  [genre: string]: Show[];
};

export interface CustomError {
  error: boolean;
  id?: number;
}

export interface CastError {
  hasError: boolean;
  message: string;
  id?: number;
}

export interface AppLoaderProps {
  message?: string;
}

export interface ImageProps {
  src: string | undefined;
  alt: string;
}

export interface InfoChipProps {
  label: string;
  value?: string | number;
}

export interface SearchInputProps {
  modelValue?: string;
  placeholder?: string;
}

export interface SortOption {
  value: string;
  label: string;
}

export interface SortDropdownProps {
  modelValue?: string;
  options: SortOption[];
}
