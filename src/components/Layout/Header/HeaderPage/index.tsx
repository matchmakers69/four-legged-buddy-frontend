import { FC } from "react";
import Nav from "src/components/Layout/Nav";
import LogoLink from "src/components/LogoLink";
import * as S from "../common.styled";

const HeaderPage: FC = () => {
  return (
    <S.SkewHeader>
      <S.LogoSkewHeaderwrapper>
        <S.LogoSkewHeaderwrapperInner>
          <LogoLink width={110} height={60} />
        </S.LogoSkewHeaderwrapperInner>
      </S.LogoSkewHeaderwrapper>
      <S.SkewHeaderNavbar>
        <Nav />
      </S.SkewHeaderNavbar>
    </S.SkewHeader>
  );
};

export default HeaderPage;
