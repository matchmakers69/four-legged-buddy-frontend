import { VFC, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";
import { parseCookies } from "nookies";
import { useDispatch } from "react-redux";
import { logout } from "src/store/auth/actions";

interface IAppLoader {
  children: ReactNode;
}

const AppLoader: VFC<IAppLoader> = function ({ children }) {
  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get("token");
      console.log(token);
    }
    loadUserFromCookies();
  }, []);
  return <>{children}</>;
};

export default AppLoader;
