import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <p>&copy; Przemek Lewtak {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
