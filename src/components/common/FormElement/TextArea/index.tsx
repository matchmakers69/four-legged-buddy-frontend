import cx from "classnames";
import { UseFormRegister, Path } from "react-hook-form";
import InputErrorMessage from "src/components/common/InputErrorMessage";
import * as S from "../common.styled";

type TextAreaProps<TFormValues> = {
  id: string;
  name: Path<TFormValues>;
  placeholder: string;
  label?: string;
  register?: UseFormRegister<TFormValues>;
  error: any;
};

// const TextArea: VFC<TextAreaProps> = function ({ label = "", name, register, placeholder, id, error = {} }) {
const TextArea = function <TFormValues extends Record<string, unknown>>({
  label,
  name,
  register,
  placeholder,
  id,
  error,
  ...props
}: TextAreaProps<TFormValues>) {
  return (
    <>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}

      <S.TextArea
        id={id}
        className={cx("form-control", error?.message && "is-invalid")}
        placeholder={placeholder}
        {...props}
        {...(register && register(name))}
      />

      {error && <InputErrorMessage>{error?.message}</InputErrorMessage>}
    </>
  );
};

export default TextArea;
