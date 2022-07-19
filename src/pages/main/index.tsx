import React from "react";
import LatestMovieSection from "../../features/movie/latest";
import NowPlayingSection from "../../features/movie/nowPlaying";
import styled from "@emotion/styled";
import PopularSection from "../../features/movie/popular";
import TopRateSection from "../../features/movie/topRate";
import UpComingSection from "../../features/movie/upComing";

const MainPage: React.FC = () => {
  return (
    <>
      <Main>
        <Container>
          <LatestMovieSection />
          <NowPlayingSection />
          <PopularSection />
          <TopRateSection />
          <UpComingSection />
        </Container>
      </Main>
    </>
  );
};
export default MainPage;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;
const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;
