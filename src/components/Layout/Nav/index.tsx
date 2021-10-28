import { FC } from "react";
import { useRouter } from "next/router";
import AppLink from "src/components/AppLink";
import { routes } from "src/routes";
import * as S from "./Nav.styled";
import { linksMapper } from "./service/navLinksMapper";

const Nav: FC = () => {
  const router = useRouter();
  return (
    <S.NavContainer>
      <S.NavList>
        {routes.map((route) => {
          return (
            <S.NavListItem className={linksMapper[router.pathname] === route.path ? "active" : ""} key={route.label}>
              <AppLink href={route.path} label={route.label} />
            </S.NavListItem>
          );
        })}
      </S.NavList>
    </S.NavContainer>
  );
};

export default Nav;
