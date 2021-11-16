import { FC } from "react";
import cx from "classnames";
import DropDownAccountMenu from "src/components/DropDownAccountMenu";
import Nav from "src/components/Layout/Nav";
import LogoLink from "src/components/LogoLink";
import * as S from "./common.styled";

type IHeaderProps = {
  isHeaderSkew: boolean;
};

const Header: FC<IHeaderProps> = function ({ isHeaderSkew }) {
  return (
    <S.Header className={isHeaderSkew ? "header-page" : ""} data-testid="header" isHeaderSkew={isHeaderSkew}>
      <S.HeaderNav className={cx(`bcg-transparent ${isHeaderSkew ? "header-navbar-skew" : "header-navbar"}`)}>
        {isHeaderSkew ? (
          <S.LogoSkewHeaderwrapper>
            <S.LogoSkewHeaderwrapperInner>
              <LogoLink width={110} height={60} />
            </S.LogoSkewHeaderwrapperInner>
          </S.LogoSkewHeaderwrapper>
        ) : (
          <S.LogoHeaderwrapper>
            <LogoLink width={110} height={60} />
          </S.LogoHeaderwrapper>
        )}

        <S.HeaderRight className={`header-right ${isHeaderSkew ? "header-right-skew" : "header-right-navbar"}`}>
          <Nav />
          <DropDownAccountMenu />
        </S.HeaderRight>
      </S.HeaderNav>
    </S.Header>
  );
};

export default Header;
