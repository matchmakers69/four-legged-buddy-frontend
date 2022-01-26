import cx from "classnames";
import { DeepMap, FieldError, Path, UseFormRegister } from "react-hook-form";
import InputErrorMessage from "src/components/common/InputErrorMessage";
import * as S from "../common.styled";

export type FormInputTextProps<TFormValues> = {
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
  id: string;
  placeholder: string;
  label?: string;
  type: "text" | "email" | "number" | "password";
  error: any;
};

const InputText = function <TFormValues extends Record<string, unknown>>({
  type,
  label = "",
  name,
  register,
  placeholder,
  id,
  error,
}: FormInputTextProps<TFormValues>) {
  return (
    <>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}

      <S.Input
        id={id}
        className={cx("form-control", error?.message && "is-invalid")}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <InputErrorMessage>{error?.message}</InputErrorMessage>}
    </>
  );
};

export default InputText;
