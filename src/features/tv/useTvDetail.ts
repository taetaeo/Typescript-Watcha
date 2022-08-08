import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { detailApi } from "../../apis/movieApi";
import { TvDetail } from "../../types";

const useTvDetail = (query: string) => {
  const queryFn = () => detailApi(query);

  // 첫번째 인자 : 배열로 queryKey 설정
  // 두번째 인자 : query함수
  // 세번째 인자(option) : query값이 있을 때만, 해당 api를 실행 (검색어가 있을때만 호출)
  return useQuery<AxiosResponse<TvDetail>, AxiosError>(
    ["tvDetail", query],
    queryFn
  );
};

export default useTvDetail;
