import styled from "@emotion/styled";
import React from "react";

import Card from "../../../components/Card";
import Slider from "../../../components/Slider";
import usePopularTv from "./useOnTheAirTv";

const PopularSection: React.FC = () => {
  const { data: PopularTvResponse, isLoading } = usePopularTv();

  const getYear = (date: string) => date.split("-")[0];

  return (
    <Base>
      <Title>인기 상영작</Title>
      {isLoading || !PopularTvResponse ? (
        <div>Loading....</div>
      ) : (
        <Slider>
          {PopularTvResponse?.data?.results.map((tv) => (
            <Card
              key={tv.id}
              linkUrl={`/tv/${tv.id}`}
              title={tv.name}
              posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${tv.poster_path}`}
              voteAverage={tv.vote_average}
              year={getYear(tv.first_air_date)}
            />
          ))}
        </Slider>
      )}
    </Base>
  );
};

export default PopularSection;

const Base = styled.div`
  margin-bottom: 62px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;
