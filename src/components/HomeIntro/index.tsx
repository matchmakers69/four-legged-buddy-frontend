import { FC } from "react";
import { Container } from "src/styles/grid";
import * as S from "./HomeIntro.styled";

const HomeIntro: FC = ({ children }) => {
  return (
    <S.SectionHomeIntro className="stage-top">
      <Container className="container-1">
        <S.IntroTextWrapper>{children}</S.IntroTextWrapper>
      </Container>
    </S.SectionHomeIntro>
  );
};

export default HomeIntro;
