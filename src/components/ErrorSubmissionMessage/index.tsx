import { VFC, ReactNode } from "react";
import { ErrorMessage } from "./ErrorSubmissionMessage.styled";

interface Iprops {
  children: ReactNode;
}

const ErrorSubmissionMessage: VFC<Iprops> = function ({ children }) {
  return <ErrorMessage>{children}</ErrorMessage>;
};

export default ErrorSubmissionMessage;
