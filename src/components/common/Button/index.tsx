import { VFC, ReactNode } from "react";
import cx from "classnames";
import { SpinnerIcon } from "src/assets/icons";
import * as S from "./Button.styled";

const defaultProps = {
  variant: "",
};

type IButtonProps = {
  disable?: boolean;
  fullWidth?: boolean;
  variant?: string;
  className?: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  children: ReactNode;
  loading?: boolean;
  btnIcon?: ReactNode;
} & typeof defaultProps; // intersekcja typu

const Button: VFC<IButtonProps> = function ({
  disable = false,
  onClick = () => null,
  type,
  fullWidth = false,
  loading = false,
  variant = "",
  className = "",
  children,
  btnIcon: btnIconProp,
}) {
  const buttonClasses = cx("btn", `btn--${variant}`, className, {
    "w-full": fullWidth,
  });

  const btnIcon = btnIconProp && <span className="btn-icon-wrapper">{btnIconProp}</span>;
  return (
    <S.Button className={buttonClasses} type={type} disabled={disable} onClick={onClick} data-testid="button">
      {loading && (
        <span className="spinner-icon-wrapper">
          <SpinnerIcon className="animate-spin" />
        </span>
      )}
      {btnIcon}
      {children}
    </S.Button>
  );
};

export default Button;
