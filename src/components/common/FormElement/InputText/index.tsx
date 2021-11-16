import { VFC } from "react";
import cx from "classnames";
import { useForm } from "react-hook-form";
import InputErrorMessage from "src/components/common/InputErrorMessage";
import * as S from "../common.styled";

interface InputProps {
  id: string;
  name: string;
  placeholder: string;
  label?: string;
  type: "text" | "email" | "number" | "password";
  register: ReturnType<typeof useForm>["register"];
  errors?: any;
}

const InputText: VFC<InputProps> = function ({ type, label = "", name, register, placeholder, id, errors = {} }) {
  return (
    <>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}

      <S.Input
        id={id}
        className={cx("form-control", errors[name] && "is-invalid")}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />

      {errors[name] && <InputErrorMessage>{errors[name]?.message}</InputErrorMessage>}
    </>
  );
};

export default InputText;
