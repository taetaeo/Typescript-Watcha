import { AxiosError, AxiosResponse } from "axios";
import { Query, useQuery } from "react-query";
import { searchApi } from "../../apis/movieApi";
import { ListResponse, Movie } from "../../types";

const useMovieSearch = (query: string) => {
  const { isLoading, isError, data } = useQuery<
    AxiosResponse<ListResponse<Movie>>,
    AxiosError
  >(
    ["searchMovie", query],
    () => searchApi(query),
    { enabled: Boolean(query) } // Query가 있을 때만, useMovieSearch라는 훅이 동작하게 된다.
  );

  return {
    isLoading,
    isError,
    data: data?.data,
  };
};
export default useMovieSearch;
