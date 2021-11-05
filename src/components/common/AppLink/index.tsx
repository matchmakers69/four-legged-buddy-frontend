import { FC, ReactNode } from "react";
import cx from "classnames";
import Link, { LinkProps } from "next/link";
import * as S from "./AppLink.styled";

interface AppLinkProps extends LinkProps {
  variant: string;
  children: ReactNode;
  endIcon?: ReactNode;
}

const AppLink: FC<AppLinkProps> = ({ href, variant, children, endIcon: endIconProp }) => {
  const appLinkClasses = cx(`appLink-${variant}`);
  const endIcon = endIconProp && <span className="icon-link">{endIconProp}</span>;
  return (
    <Link passHref href={href}>
      <S.StyledLink className={appLinkClasses}>
        {children} {endIcon}
      </S.StyledLink>
    </Link>
  );
};

export default AppLink;
