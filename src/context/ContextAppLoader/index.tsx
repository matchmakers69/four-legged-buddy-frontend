import { createContext, ReactNode, FC, useState, useEffect } from "react";

const defaultTheme = "white";

interface IContextProps {
  children: ReactNode;
}

const ContextAppLoader = createContext(defaultTheme);

const AppLoaderProvider: FC<IContextProps> = function ({ children }) {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const currentTheme = "lightblue";
    console.log(currentTheme);
    setTheme(currentTheme);
  }, []);
  return <ContextAppLoader.Provider value={theme}>{children}</ContextAppLoader.Provider>;
};

export default AppLoaderProvider;
