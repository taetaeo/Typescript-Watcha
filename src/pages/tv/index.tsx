import React from "react";
import LatestMovieSection from "../../features/movie/latest";
import AiringTodayTvSection from "../../features/tv/airingToday";
import OnTheAirSection from "../../features/tv/onTheAir";
import PopularSection from "../../features/tv/popular";
import TopRateSection from "../../features/tv/topRate";

const TvPage: React.FC = () => {
  return (
    <>
      <LatestMovieSection />
      <AiringTodayTvSection />
      <OnTheAirSection />
      <PopularSection />
      <TopRateSection />
    </>
  );
};
export default TvPage;
