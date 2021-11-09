import { FC } from "react";
import * as S from "./Footer.styled";

const Footer: FC = () => {
  return (
    <S.Footer className="contacts">
      <S.FooterContent>
        <p>&copy; Przemek Lewtak {new Date().getFullYear()}</p>
      </S.FooterContent>
    </S.Footer>
  );
};

export default Footer;
