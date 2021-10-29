import { FC } from "react";
import * as S from "./PageTitleDecorator.styled";

interface IProps {
  subTitle: string;
}

const PageTitleDecorator: FC<IProps> = ({ subTitle }) => {
  return <S.PageTopline>{subTitle}</S.PageTopline>;
};

export default PageTitleDecorator;
