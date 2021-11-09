import { FC, ReactNode } from "react";
import { Container } from "src/styles/grid";

interface IProps {
  children: ReactNode;
}

const GridTemplate: FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default GridTemplate;
