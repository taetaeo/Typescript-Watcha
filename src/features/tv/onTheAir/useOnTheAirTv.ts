import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { onTheAirApi } from "../../../apis/tvApi";
import { ListResponse, TvDetail } from "../../../types";

const useOnTheAirTv = () => {
  return useQuery<AxiosResponse<ListResponse<TvDetail>>, AxiosError>(
    "onTheAirTv",
    onTheAirApi
  );
};

export default useOnTheAirTv;
