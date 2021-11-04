import { FC, ReactNode } from "react";
import cx from "classnames";
import { SpinnerIcon } from "src/assets/icons";
import * as S from "./Button.styled";

interface IButtonProps {
  disable?: boolean;
  fullWidth?: boolean;
  variant: string;
  className?: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  children: ReactNode;
  loading?: boolean;
  btnIcon?: ReactNode;
}

const Button: FC<IButtonProps> = ({
  disable = false,
  onClick = () => null,
  type,
  fullWidth = false,
  loading = false,
  variant,
  className = "",
  children,
  btnIcon: btnIconProp,
}) => {
  const buttonClasses = cx("btn", `btn--${variant}`, className, {
    "w-full justify-center": fullWidth,
  });

  const btnIcon = btnIconProp && <span className="btn-icon-wrapper">{btnIconProp}</span>;
  return (
    <S.Button className={buttonClasses} type={type} disabled={disable} onClick={onClick} data-testid="button">
      {loading && <SpinnerIcon className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />}
      {btnIcon}
      {children}
    </S.Button>
  );
};

export default Button;
