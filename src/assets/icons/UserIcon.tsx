import { FC } from "react";

const Icon: FC = ({ ...props }) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 10">
    <path
      d="M7.686,8.629A2.887,2.887,0,0,0,8.692,6.441a2.959,2.959,0,0,0-5.917,0A2.887,2.887,0,0,0,3.781,8.629,4.7,4.7,0,0,0,1,12.912a.592.592,0,0,0,1.183,0,3.55,3.55,0,0,1,7.1,0,.592.592,0,0,0,1.183,0A4.7,4.7,0,0,0,7.686,8.629ZM5.734,8.206A1.765,1.765,0,1,1,7.509,6.441,1.77,1.77,0,0,1,5.734,8.206Zm5.763.188a2.929,2.929,0,0,0-.248-4.152A2.968,2.968,0,0,0,9.284,3.5a.588.588,0,1,0,0,1.176,1.76,1.76,0,0,1,.888,3.288.586.586,0,0,0-.03,1l.231.153.077.041a4.115,4.115,0,0,1,2.367,3.753.592.592,0,0,0,1.183,0A5.287,5.287,0,0,0,11.5,8.394Z"
      transform="translate(-1 -3.5)"
    />
  </svg>
);

export default Icon;
