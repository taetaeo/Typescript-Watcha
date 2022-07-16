import { AxiosError } from "axios";
import { useQuery } from "react-query";
import axiosInstance from "../apis";
import {} from "../apis/movieApi";

const useLatestMovie = () => {
  return useQuery<axiosResponse<MoviePageDetail>, AxiosError>("latestMovie");
};

export default useLatestMovie;
