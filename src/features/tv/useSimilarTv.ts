import React from "react";
import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { similarApi } from "../../apis/tvApi";
import { ListResponse, TvDetail } from "../../types";

const useSimilarTv = (id: string) => {
  return useQuery<AxiosResponse<ListResponse<TvDetail>>, AxiosError>(
    ["similarTv", id],
    () => similarApi(id)
  );
};

export default useSimilarTv;
