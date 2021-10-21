import { FC, ReactNode } from "react";
import { Container, Row } from "src/styles/grid";

interface IProps {
  children: ReactNode;
}

const GridTemplate: FC<IProps> = ({ children }) => {
  return (
    <Container>
      <Row className="row">{children}</Row>
    </Container>
  );
};

export default GridTemplate;
