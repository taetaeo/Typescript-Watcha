import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { topRatedApi } from "../../../apis/tvApi";
import { ListResponse, TvDetail } from "../../../types";

const useTopRateTv = () => {
  return useQuery<AxiosResponse<ListResponse<TvDetail>>, AxiosError>(
    "topRateTv",
    topRatedApi
  );
};

export default useTopRateTv;
