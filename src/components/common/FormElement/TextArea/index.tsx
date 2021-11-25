import { VFC } from "react";
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
  error: any;
}

const TextArea: VFC<TextAreaProps> = function ({ label = "", name, register, placeholder, id, error = {} }) {
  return (
    <>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}

      <S.TextArea
        id={id}
        className={cx("form-control", error?.message && "is-invalid")}
        placeholder={placeholder}
        {...register(name)}
      />

      {error && <InputErrorMessage>{error?.message}</InputErrorMessage>}
    </>
  );
};

export default TextArea;
