import { FC } from "react";
import Nav from "src/components/Layout/Nav";
import LogoLink from "src/components/LogoLink";
import * as S from "./common.styled";
import HeaderPage from "./HeaderPage";

type IHeaderProps = {
  isHeaderSkew: boolean;
};

const Header: FC<IHeaderProps> = ({ isHeaderSkew }) => {
  return (
    <>
      {isHeaderSkew ? (
        <HeaderPage />
      ) : (
        <S.Header data-testid="header" isHeaderSkew={isHeaderSkew}>
          <S.HeaderNav className="bcg-transparent header-navbar">
            <S.LogoHeaderwrapper>
              <LogoLink width={110} height={60} />
            </S.LogoHeaderwrapper>

            <Nav />
          </S.HeaderNav>
        </S.Header>
      )}
    </>
  );
};

export default Header;
