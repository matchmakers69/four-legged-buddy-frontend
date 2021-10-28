import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "./LogoLink.styled";

const LogoLink: FC = () => {
  return (
    <div>
      <Link passHref href="/">
        <Logo>
          <Image src="/media/svg/logo-main.svg" height={90} width={80} alt="4leggedbuddy-logo" />
        </Logo>
      </Link>
    </div>
  );
};

export default LogoLink;
