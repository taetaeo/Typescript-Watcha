import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { popularApi } from "../../../apis/tvApi";
import { ListResponse, TvDetail } from "../../../types";

const usePopularTv = () => {
  return useQuery<AxiosResponse<ListResponse<TvDetail>>, AxiosError>(
    "popularTv",
    popularApi
  );
};

export default usePopularTv;
