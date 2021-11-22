import { useEffect } from "react";
import App from "next/app";
import type { AppProps, AppContext } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress"; // nprogress module
import { ThemeProvider } from "styled-components";
import AppLoader from "src/components/AppLoader";
import ReduxProvider from "src/store/ReduxProvider";
import { GlobalStyle } from "src/styles/Global";
import { theme } from "src/theme/theme";
import { parseCookies } from "src/utils/helpers";
import "nprogress/nprogress.css"; // styles of nprogress

const MyApp = function ({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }

    Router.events.on("routeChangeStart", () => {
      // dispatch here to switch of visible to close pop-up
      NProgress.start();
    });

    Router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });

    Router.events.on("routeChangeError", () => {
      NProgress.done();
    });
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

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { ctx } = appContext;
  const { token } = parseCookies(ctx.req);
  if (token !== undefined) {
    console.log(token, "token");
  }

  return { ...appProps };
};

export default MyApp;
