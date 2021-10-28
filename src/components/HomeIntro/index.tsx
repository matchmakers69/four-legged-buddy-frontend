import { FC } from "react";
import SubtitlePageDecorator from "src/components/common/SubtitlePageDecorator";
import { Container } from "src/styles/grid";
import * as S from "./HomeIntro.styled";

const HomeIntro: FC = ({ children }) => {
  return (
    <header className="stage stage-home">
      <S.SectionHomeIntro className="stage-top">
        <Container className="container-1">
          <S.IntroTextWrapper>
            <SubtitlePageDecorator subTitle="Welcome!" />
            {children}
          </S.IntroTextWrapper>
        </Container>
      </S.SectionHomeIntro>
    </header>
  );
};

export default HomeIntro;
