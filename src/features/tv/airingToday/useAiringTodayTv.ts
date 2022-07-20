import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { airingTodayApi } from "../../../apis/tvApi";
import { ListResponse, TvDetail } from "../../../types";

const useAiringTodayTv = () => {
  return useQuery<AxiosResponse<ListResponse<TvDetail>>, AxiosError>(
    "airingTodayTv",
    airingTodayApi
  );
};

export default useAiringTodayTv;
