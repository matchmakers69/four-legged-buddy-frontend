import { FC } from "react";
import Link, { LinkProps } from "next/link";
import * as S from "./AppLink.styled";

interface AppLinkProps extends LinkProps {
  label: string;
}

const AppLink: FC<AppLinkProps> = ({ href, label }) => {
  return (
    <Link passHref href={href}>
      <S.StyledLink>{label}</S.StyledLink>
    </Link>
  );
};

export default AppLink;
