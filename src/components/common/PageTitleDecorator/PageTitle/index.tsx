import { FC } from "react";
import * as S from "../common.styled";

interface IProps {
  subTitle: string;
}

const PageTitle: FC<IProps> = ({ subTitle }) => {
  return <S.TitleDecorator>{subTitle}</S.TitleDecorator>;
};

export default PageTitle;
