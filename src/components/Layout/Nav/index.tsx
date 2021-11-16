import { FC } from "react";
import { useRouter } from "next/router";
import { ArrowRightIcon } from "src/assets/icons";
import AppLink from "src/components/common/AppLink";
import Button from "src/components/common/Button";
import constants from "src/constants";
import { routes } from "src/routes";
import * as S from "./Nav.styled";
import { linksMapper } from "./service/navLinksMapper";

const { REGISTER, LOGIN } = constants.routes;

const Nav: FC = function () {
  const router = useRouter();
  return (
    <S.NavContainer>
      <S.NavList>
        {routes.map((route) => {
          return (
            <S.NavListItem className={linksMapper[router.pathname] === route.path ? "active" : ""} key={route.label}>
              <AppLink variant="link" href={route.path}>
                {route.label}
              </AppLink>
            </S.NavListItem>
          );
        })}
        <S.NavListItem>
          <Button type="button" variant="link">
            <AppLink endIcon={<ArrowRightIcon className="icon-link" />} variant="button" href={REGISTER}>
              Register
            </AppLink>
          </Button>
        </S.NavListItem>
        <S.NavListItem>
          <Button type="button" variant="link">
            <AppLink endIcon={<ArrowRightIcon className="icon-link" />} variant="button" href={LOGIN}>
              Login
            </AppLink>
          </Button>
        </S.NavListItem>
      </S.NavList>
    </S.NavContainer>
  );
};

export default Nav;
