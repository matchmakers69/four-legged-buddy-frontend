import { FC } from "react";
import cx from "classnames";
import { useForm } from "react-hook-form";
import InputErrorMessage from "src/components/common/InputErrorMessage";
import * as S from "../common.styled";

interface TextAreaProps {
  id: string;
  name: string;
  placeholder: string;
  label?: string;
  register: ReturnType<typeof useForm>["register"];
  errors?: any;
}

const TextArea: FC<TextAreaProps> = ({ label = "", name, register, placeholder, id, errors = {} }) => {
  return (
    <>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}

      <S.TextArea
        id={id}
        className={cx("form-control", errors[name] && "is-invalid")}
        placeholder={placeholder}
        {...register(name)}
      />

      {errors[name] && <InputErrorMessage>{errors[name]?.message}</InputErrorMessage>}
    </>
  );
};

export default TextArea;
