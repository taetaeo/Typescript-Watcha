import React from "react";
import styled from "@emotion/styled";

const MovieDetailPage: React.FC = () => {
  return (
    <Base>
      <TopInfo>
        <PosterContainer>
          <Backdrop>
            <LeftBlur />
            <BackdropImage>
              <LeftGrandient />
              <RightGrandient />
            </BackdropImage>
            <RightBlur />
          </Backdrop>
        </PosterContainer>
        <Main>
          <Container>
            <PosterWrapper>
              <Poster />
            </PosterWrapper>
            <ContainerWrapper>
              <Title></Title>
              <Keyword></Keyword>
              <AverageRate></AverageRate>
              <Actions>
                <StarRate>
                  <StarRateText></StarRateText>
                  <RattingWrapper></RattingWrapper>
                </StarRate>
                <Divider />
                <ActionButtonContainer>
                  <ActionButton>보고싶어요</ActionButton>
                  <ActionButton>코멘트</ActionButton>
                  <ActionButton>보는중</ActionButton>
                  <ActionButton>더보기</ActionButton>
                </ActionButtonContainer>
              </Actions>
            </ContainerWrapper>
          </Container>
        </Main>
      </TopInfo>

      <BottomInfo>
        <ContentSectionContainer>
          {/* <DefulatInfo/>
          <Similar/> */}
        </ContentSectionContainer>
      </BottomInfo>
    </Base>
  );
};
export default MovieDetailPage;

const Base = styled.div`
  position: relative;
  background-color: #f8f8f8;
`;
const TopInfo = styled.div`
  border-radius: 1px solid rgb(227, 227, 227);
  background: rgb(255, 255, 255);
`;
const PosterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Backdrop = styled.div`
  display: flex;
  width: 100%;
  height: 394px;
  background-image: linear-gradient(
    -1800deg,
    rgba(0, 0, 0, 0.35) 2%,
    rgba(0, 0, 0, 0.2) 70%,
    rgba(0, 0, 0, 0.5) 100%
  );
  overflow: hidden;
`;

const LeftBlur = styled.div`
  flex: 1 1 0%;
`;

const RightBlur = styled.div``;

const LeftGrandient = styled.div``;

const RightGrandient = styled.div``;

const BackdropImage = styled.div``;

const PosterWrapper = styled.div``;

const Poster = styled.img``;

const Main = styled.div``;

const Container = styled.div``;

const ContainerWrapper = styled.div``;

const Title = styled.h1``;

const Keyword = styled.div``;

const AverageRate = styled.div``;

const Actions = styled.div``;

const StarRate = styled.div``;

const StarRateText = styled.div``;

const RattingWrapper = styled.div``;

const Divider = styled.div``;

const ActionButtonContainer = styled.div``;

const ActionButton = styled.button``;

const BottomInfo = styled.div``;
const ContentSectionContainer = styled.div``;
