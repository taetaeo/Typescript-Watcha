import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { latestApi } from "../../../apis/tvApi";
import { TvDetail } from "../../../types";

const useLatestTv = () => {
  return useQuery<AxiosResponse<TvDetail>, AxiosError>("latestTv", latestApi);
};

export default useLatestTv;
