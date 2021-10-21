import { FC } from "react";
import LanguageSwitcherMenu from "src/components/LanguageSwitcherMenu";
import Nav from "src/components/Layout/Nav";
import LogoLink from "src/components/LogoLink";
import { Col, Container, Row } from "src/styles/grid";
import * as S from "./Header.styled";

interface IHeaderProps {
  locales: string[];
}

const Header: FC<IHeaderProps> = ({ locales }) => {
  return (
    <S.Header data-testid="header">
      <Container>
        <Row className="row">
          <Col xs={4} sm={5}>
            <LogoLink />
          </Col>
          <Col xs={8} sm={7}>
            <S.HeaderMenu>
              <Nav />
              <LanguageSwitcherMenu locales={locales} />
            </S.HeaderMenu>
          </Col>
        </Row>
      </Container>
    </S.Header>
  );
};

export default Header;
