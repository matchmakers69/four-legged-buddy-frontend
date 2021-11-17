import { VFC, useEffect, ReactNode } from "react";
import { parseCookies } from "nookies";

interface IAppLoader {
  children: ReactNode;
}

const AppLoader: VFC<IAppLoader> = function ({ children }) {
  const cookies = parseCookies();
  console.log({ cookies });
  useEffect(() => {
    if (cookies.jwt) {
      // dispatch clear user from store
      console.log("hello");
    }
  }, [cookies.jwt]);
  return <>{children}</>;
};

export default AppLoader;
