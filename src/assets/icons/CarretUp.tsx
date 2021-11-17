import { FC } from "react";
import { IPropsIcons } from "../interface/icons";

const Icon: FC<IPropsIcons> = function ({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M24 22h-24l12-20z" />
    </svg>
  );
};

export default Icon;
