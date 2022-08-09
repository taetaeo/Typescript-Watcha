import React from "react";
import styled from "@emotion/styled";

import LatestMovieSection from "../../features/movie/latest";
import AiringTodayTvSection from "../../features/tv/airingToday";
import OnTheAirSection from "../../features/tv/onTheAir";
import PopularSection from "../../features/tv/popular";
import TopRateSection from "../../features/tv/topRate";

const TvPage: React.FC = () => {
  return (
    <>
      <Main>
        <Container>
          <LatestMovieSection />
          <AiringTodayTvSection />
          <OnTheAirSection />
          <PopularSection />
          <TopRateSection />
        </Container>
      </Main>
    </>
  );
};
export default TvPage;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;
const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;
