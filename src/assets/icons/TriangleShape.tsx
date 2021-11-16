import { FC } from "react";
import { IPropsIcons } from "../interface/icons";

const Icon: FC<IPropsIcons> = function ({ className }) {
  return (
    <svg
      className={className}
      id="devider-home"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1839.9 1041.82"
    >
      <path className="cls-1" d="M0,1044.38V0L1851.93,1046.75S0,1053.85,0,1044.38Z" />
    </svg>
  );
};

export default Icon;
