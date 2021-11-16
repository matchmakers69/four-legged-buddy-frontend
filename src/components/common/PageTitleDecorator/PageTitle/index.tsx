import { VFC } from "react";
import * as S from "../common.styled";

interface IProps {
  subTitle: string;
}

const PageTitle: VFC<IProps> = function ({ subTitle }) {
  return <S.TitleDecorator>{subTitle}</S.TitleDecorator>;
};

export default PageTitle;
