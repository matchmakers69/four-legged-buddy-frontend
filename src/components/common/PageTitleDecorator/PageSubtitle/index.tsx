import { VFC } from "react";
import * as S from "../common.styled";

interface IProps {
  subTitle: string;
}

const PageSubtitle: VFC<IProps> = function ({ subTitle }) {
  return <S.SubtitleDecorator>{subTitle}</S.SubtitleDecorator>;
};

export default PageSubtitle;
