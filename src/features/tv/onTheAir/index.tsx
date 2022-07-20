import styled from "@emotion/styled";
import React from "react";

import Card from "../../../components/Card";
import Slider from "../../../components/Slider";
import useOnTheAirTv from "./useOnTheAirTv";

const OnTheAirSection: React.FC = () => {
  const { data: OnTheAirTvResponse, isLoading } = useOnTheAirTv();

  const getYear = (date: string) => date.split("-")[0];

  return (
    <Base>
      <Title>Airing Today</Title>
      {isLoading || !OnTheAirTvResponse ? (
        <div>Loading....</div>
      ) : (
        <Slider>
          {OnTheAirTvResponse?.data?.results.map((tv) => (
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

export default OnTheAirSection;

const Base = styled.div`
  margin-bottom: 62px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;
