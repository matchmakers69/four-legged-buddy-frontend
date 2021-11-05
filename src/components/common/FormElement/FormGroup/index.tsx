import { FC, ReactNode } from "react";
import * as S from "./FormGroup.styled";

interface FormGroupProps {
  children: ReactNode;
}

const FormGroup: FC<FormGroupProps> = ({ children }) => {
  return <S.FormGroup className="form-group">{children}</S.FormGroup>;
};

export default FormGroup;
