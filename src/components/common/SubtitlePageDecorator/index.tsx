import { FC } from "react";
import * as S from "./SubtitlePageDecorator.styled";

interface IProps {
  subTitle: string;
}

const SubtitlePageDecorator: FC<IProps> = ({ subTitle }) => {
  return <S.PageTopline>{subTitle}</S.PageTopline>;
};

export default SubtitlePageDecorator;
