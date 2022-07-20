import React from "react";
import LatestMovieSection from "../../features/movie/latest";
import AiringTodayTvSection from "../../features/tv/airingToday";
import OnTheAirSection from "../../features/tv/onTheAir";

const TvPage: React.FC = () => {
  return (
    <>
      <LatestMovieSection />
      <AiringTodayTvSection />
      <OnTheAirSection />
    </>
  );
};
export default TvPage;
