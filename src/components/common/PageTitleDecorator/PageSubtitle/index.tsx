import { FC } from "react";
import * as S from "../common.styled";

interface IProps {
  subTitle: string;
}

const PageSubtitle: FC<IProps> = ({ subTitle }) => {
  return <S.SubtitleDecorator>{subTitle}</S.SubtitleDecorator>;
};

export default PageSubtitle;
