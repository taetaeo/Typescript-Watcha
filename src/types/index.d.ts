import { Collection } from "typescript";

interface Company {
  id: number;
  logo_path: string;
  name: string;
}
interface Language {
  iso_639_1: string;
  name: string;
}
export interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  original_language: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface MovieDetail extends Movie {
  belongs_to_collection: Collection;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  production_companies: Company[];
  production_countries: Company[];
  revenue: number;
  runtime: number;
  spoken_languages: Language[];
  status: string;
  tagline: string;
}
interface Image {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: null | string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface MovieImage {
  id: number;
  backdrop: Array<Image>;
  posters: Array<Image>;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface ListResponse<T> {
  dates: Dates;
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
