import { VFC, useEffect, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { checkUserLoggedIn } from "src/store/auth/slice";

interface IAppLoader {
  children: ReactNode;
}

const AppLoader: VFC<IAppLoader> = function ({ children }) {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(checkUserLoggedIn())
  // }, []);
  return <>{children}</>;
};

export default AppLoader;
