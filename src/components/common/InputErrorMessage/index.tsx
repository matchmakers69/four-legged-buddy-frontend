import { FC, ReactNode } from "react";
import { ErrorMessage } from "./InputErrorMessage.styled";

interface IProps {
  children: ReactNode;
}

const InputErrorMessage: FC<IProps> = function ({ children }) {
  return (
    <>
      <ErrorMessage className="invalid-feedback" role="alert">
        {children}
      </ErrorMessage>
    </>
  );
};

export default InputErrorMessage;
