import { FC } from "react";
import { Col, ContainerNarrow, Row } from "src/styles/grid";
import * as S from "./Footer.styled";

const Footer: FC = () => {
  return (
    <S.Footer className="contacts">
      <S.FooterContent>
        <ContainerNarrow>
          <Row className="row">
            <Col xs={12}>
              <p>&copy; Przemek Lewtak {new Date().getFullYear()}</p>
            </Col>
          </Row>
        </ContainerNarrow>
      </S.FooterContent>
    </S.Footer>
  );
};

export default Footer;
