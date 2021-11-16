import { VFC, ReactNode } from "react";
import cx from "classnames";
import Link, { LinkProps } from "next/link";
import * as S from "./AppLink.styled";

interface AppLinkProps extends LinkProps {
  variant: string;
  children: ReactNode;
  endIcon?: ReactNode;
}

const AppLink: VFC<AppLinkProps> = function ({ href, variant, children, endIcon: endIconProp }) {
  const appLinkClasses = cx(`appLink-${variant}`);
  const endIcon = endIconProp && <span className="icon-link">{endIconProp}</span>;
  return (
    <Link passHref href={href}>
      <S.StyledLink className={appLinkClasses}>
        <span className="text-button">{children}</span> {endIcon}
      </S.StyledLink>
    </Link>
  );
};

export default AppLink;
