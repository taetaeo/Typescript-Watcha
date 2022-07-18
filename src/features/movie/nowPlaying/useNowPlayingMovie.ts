import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { nowPlayingApi } from "../../../apis/movieApi";
import { ListResponse, MovieDetail } from "../../../types";

const useNowPlayingMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "nowPlayinMovie",
    nowPlayingApi
  );
};

export default useNowPlayingMovie;
