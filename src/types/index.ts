export interface Show {
  id: number;
  name: string;
  genres: string[];
  status: string;
  runtime: number | null;
  premiered: string;
  rating: string | null;
  image: string | null;
  summary: string;
};

export type CategorizedShows = {
  [genre: string]: Show[];
};

export interface CustomError extends Error {
  error: boolean;
  id?: number;
};

export interface ImageProps {
  src: string | undefined;
  alt: string;
}

export type AppLoaderProps = {
  message?: string;
};
