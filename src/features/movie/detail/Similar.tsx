import React from "react";
import styled from "@emotion/styled";
import useSimilarMovie from "../useSimilarMovie";

interface Props {
  id: string;
}

const Similar = ({ id }: Props) => {
  const { isLoading, data } = useSimilarMovie(id);

  return (
    <Base>
      <HeaderWrapper>
        <Header>
          <Title>비슷한 작품</Title>
        </Header>
        <ContentsWrapper>
          {isLoading || !data ? (
            <div>Loading....</div>
          ) : (
            data.data.results?.map((result) => (
              <SimilarMovie
                id={result.id}
                posterPath={result.poster_path}
                title={result.title}
                voteAverage={result.vote_average}
              />
            ))
          )}
        </ContentsWrapper>
      </HeaderWrapper>
    </Base>
  );
};

export default Similar;

const Base = styled.section``;

const HeaderWrapper = styled.div``;

const Header = styled.header``;

const Title = styled.h2``;

const ContentsWrapper = styled.div``;
