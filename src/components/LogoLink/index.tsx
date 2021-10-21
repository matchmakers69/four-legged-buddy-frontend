import { FC } from "react";
import Link from "next/link";
import { Logo } from "./LogoLink.styled";

const LogoLink: FC = () => {
  return (
    <div>
      <Link passHref href="/">
        <Logo>4 legged buddy</Logo>
      </Link>
    </div>
  );
};

export default LogoLink;
