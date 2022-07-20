import React from "react";
import LatestMovieSection from "../../features/movie/latest";
import AiringTodayTvSection from "../../features/tv/airingToday";

const TvPage: React.FC = () => {
  return (
    <>
      <LatestMovieSection />
      <AiringTodayTvSection />
    </>
  );
};
export default TvPage;
