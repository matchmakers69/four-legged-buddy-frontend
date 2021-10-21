import { FC } from "react";
import cx from "classnames";
import { useForm } from "react-hook-form";

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
      {label && <label htmlFor={name}>{label}</label>}

      <textarea
        id={id}
        className={cx("form-control", errors[name] && "is-invalid")}
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

export default TextArea;
