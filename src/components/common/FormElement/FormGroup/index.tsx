import { VFC, ReactNode } from "react";
import * as S from "./FormGroup.styled";

interface FormGroupProps {
  children: ReactNode;
}

const FormGroup: VFC<FormGroupProps> = function ({ children }) {
  return <S.FormGroup className="form-group">{children}</S.FormGroup>;
};

export default FormGroup;
