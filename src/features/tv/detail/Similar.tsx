import React from "react";
import styled from "@emotion/styled";
import useSimilarTv from "../useSimilarTv";
import SimilarTv from "./SimilarTv";

interface Props {
  id: string;
}

const Similar = ({ ...props }: Props) => {
  const { id } = props;
  const { isLoading, data } = useSimilarTv(id);

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
              <SimilarTv
                id={result.id}
                posterPath={result.poster_path}
                title={result.name}
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

const Base = styled.section`
  padding: 11px 15px;
  border-bottom: 1px solid #ededed;
`;

const HeaderWrapper = styled.div``;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 15px;
  row-gap: 24px;
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
