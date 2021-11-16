import { VFC, ReactNode } from "react";
import { Container } from "src/styles/grid";

interface IProps {
  children: ReactNode;
}

const GridTemplate: VFC<IProps> = function ({ children }) {
  return <Container>{children}</Container>;
};

export default GridTemplate;
