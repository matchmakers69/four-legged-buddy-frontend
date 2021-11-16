import { VFC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const HeroHeaderIcon: VFC<IProps> = function ({ children }) {
  return <>{children}</>;
};

export default HeroHeaderIcon;
