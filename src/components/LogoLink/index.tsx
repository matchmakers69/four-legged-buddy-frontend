import { VFC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "./LogoLink.styled";

type LogoLinkProps = {
  width: number;
  height: number;
};

const LogoLink: VFC<LogoLinkProps> = function ({ width, height }) {
  return (
    <>
      <Link passHref href="/">
        <Logo>
          <Image src="/media/svg/logo-main.svg" height={height} width={width} alt="4leggedbuddy-logo" />
        </Logo>
      </Link>
    </>
  );
};

export default LogoLink;
