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
