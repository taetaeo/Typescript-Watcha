import React from "react";
import styled from "@emotion/styled";
import useSimilarMovie from "../useSimilarMovie";

interface SimilarMovieProps {
  id: string;
  posterPath: string;
  title: string;
  voteAverage: number;
}

const SimilarMovie = ({ ...props }: SimilarMovieProps) => {
  const { id, posterPath, title, voteAverage } = props;

  return (
    <Link href={`/movie/${id}`} target="blank">
      <CardContainer>
        <PosterWrapper>
          <Poster />
        </PosterWrapper>
        <Info>
          <Title></Title>
          <VoteAverage></VoteAverage>
        </Info>
      </CardContainer>
    </Link>
  );
};

export default SimilarMovie;

const Base = styled.section``;

const HeaderWrapper = styled.div``;

const Header = styled.header``;

const Title = styled.h2``;

const ContentsWrapper = styled.div``;
