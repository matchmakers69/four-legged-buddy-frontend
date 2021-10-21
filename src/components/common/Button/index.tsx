import { FC, ReactNode } from "react";
import cx from "classnames";
import * as S from "./Button.styled";

interface IProps {
  disable?: boolean;
  fullWidth?: boolean;
  variant: string;
  className?: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  children: ReactNode;
}

const Button: FC<IProps> = ({
  disable = false,
  onClick = () => null,
  type,
  fullWidth = false,
  variant,
  className = "",
  children,
}) => {
  const buttonClasses = cx("btn", `btn--${variant}`, className, {
    "w-full justify-center": fullWidth,
  });
  return (
    <S.Button className={buttonClasses} type={type} disabled={disable} onClick={onClick} data-testid="button">
      {children}
    </S.Button>
  );
};

export default Button;
