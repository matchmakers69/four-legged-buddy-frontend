import { FC } from "react";
import cx from "classnames";
import { useForm } from "react-hook-form";

interface InputProps {
  id: string;
  name: string;
  placeholder: string;
  label?: string;
  type: "text" | "email" | "number" | "password";
  register: ReturnType<typeof useForm>["register"];
  errors?: any;
}

const InputText: FC<InputProps> = ({ type, label = "", name, register, placeholder, id, errors = {} }) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}

      <input
        id={id}
        className={cx("form-control", errors[name] && "is-invalid")}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />

      {errors[name] && (
        <span className="invalid-feedback" role="alert">
          {errors[name]?.message}
        </span>
      )}
    </>
  );
};

export default InputText;
