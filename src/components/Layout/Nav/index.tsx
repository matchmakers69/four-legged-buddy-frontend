import { FC } from "react";
import AppLink from "src/components/AppLink";
import * as S from "./Nav.styled";

const Nav: FC = () => {
  return (
    <S.NavContainer>
      <S.NavList>
        <S.NavListItem>
          <AppLink href="/" label="Home" />
        </S.NavListItem>
        <S.NavListItem>
          <AppLink href="/about" label="About" />
        </S.NavListItem>
        <S.NavListItem>
          <AppLink href="/contact" label="Contact" />
        </S.NavListItem>
      </S.NavList>
    </S.NavContainer>
  );
};

export default Nav;
