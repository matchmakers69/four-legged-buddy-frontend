import { VFC, useEffect, ReactNode } from "react";

interface IAppLoader {
  children: ReactNode;
}

const AppLoader: VFC<IAppLoader> = function ({ children }) {
  useEffect(() => {
    console.log("loading here");
  }, []);
  return <>{children}</>;
};

export default AppLoader;
