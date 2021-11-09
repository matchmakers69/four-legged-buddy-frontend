import { FC, useEffect } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import ReduxProvider from "src/store/ReduxProvider";
import { GlobalStyle } from "src/styles/Global";
import { theme } from "src/theme/theme";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>4leggedbuddy</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&family=Roboto+Slab:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ReduxProvider>
    </>
  );
};
export default MyApp;
