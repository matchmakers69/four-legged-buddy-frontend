import { VFC, ReactNode } from "react";
import { Container } from "src/styles/grid";
import * as S from "./HomeIntro.styled";

interface IProps {
  children: ReactNode;
}

const HomeIntro: VFC<IProps> = function ({ children }) {
  return (
    <S.SectionHomeIntro className="stage-top">
      <Container className="container-1">
        <S.IntroTextWrapper>{children}</S.IntroTextWrapper>
      </Container>
    </S.SectionHomeIntro>
  );
};

export default HomeIntro;
