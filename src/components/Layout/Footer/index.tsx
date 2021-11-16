import { VFC } from "react";
import * as S from "./Footer.styled";

const Footer: VFC = function () {
  return (
    <S.Footer className="contacts">
      <S.FooterContent>
        <p>&copy; Przemek Lewtak {new Date().getFullYear()}</p>
      </S.FooterContent>
    </S.Footer>
  );
};

export default Footer;
