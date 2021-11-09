import { FC, ReactNode } from "react";
import * as S from "./HeaderSkewTemplate.styled";

interface IProps {
  children: ReactNode;
}

const HeaderSkewTemplate: FC<IProps> = ({ children }) => {
  return (
    <S.HeroSkewHeader className="hero-section-header">
      <S.InnerHeader className="inner-header">
        <S.HeaderContent>{children}</S.HeaderContent>
      </S.InnerHeader>
    </S.HeroSkewHeader>
  );
};

export default HeaderSkewTemplate;
