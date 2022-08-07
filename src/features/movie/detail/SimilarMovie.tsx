import React from "react";
import styled from "@emotion/styled";

interface SimilarMovieProps {
  id: number;
  posterPath: string;
  title: string;
  voteAverage: number;
}

const SimilarMovie = ({ ...props }: SimilarMovieProps) => {
  const { id, posterPath, title, voteAverage } = props;

  return (
    <Link href={`/movie/${id}`} target="_blank">
      <CardContainer>
        <PosterWrapper>
          <Poster src={`${process.env.REACT_APP_IMAGE_PREFIX}/${posterPath}`} />
        </PosterWrapper>
        <Info>
          <Title>{title}</Title>
          <VoteAverage>평균 ★ {voteAverage}</VoteAverage>
        </Info>
      </CardContainer>
    </Link>
  );
};

export default SimilarMovie;

const Link = styled.a`
  text-decoration: none;
`;
const CardContainer = styled.div`
  max-width: 140px;
`;

const PosterWrapper = styled.div`
  width: 140px;
  height: 204px;
  border: 1px solid rgb(234, 233, 232);
`;
const Poster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  vertical-align: top;
  object-fit: cover;
`;
const Info = styled.div`
  margin: 5px 10px 0px 0px;
`;
const Title = styled.div`
  color: rgb(41, 42, 50);
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const VoteAverage = styled.div`
  margin-top: 2px;
  color: rgb(120, 120, 120);
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
