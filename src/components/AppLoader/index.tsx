import { VFC, useEffect, ReactNode } from "react";
import { parseCookies } from "nookies";
import { useDispatch } from "react-redux";
import { logout } from "src/store/auth/actions";

interface IAppLoader {
  children: ReactNode;
}

const AppLoader: VFC<IAppLoader> = function ({ children }) {
  const dispatch = useDispatch();

  const cookies = parseCookies();
  useEffect(() => {
    const logoutUser = async () => {
      try {
        await dispatch(logout());
      } catch (err) {
        console.log(err);
      }
    };
    if (!cookies.jwt) {
      logoutUser();
    }
  }, [cookies.jwt, dispatch]);
  return <>{children}</>;
};

export default AppLoader;
