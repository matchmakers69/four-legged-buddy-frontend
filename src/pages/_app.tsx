import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress"; // nprogress module
import { usePrevious } from "react-use";
import { ThemeProvider } from "styled-components";
import { logout } from "src/features/auth/actions";
import { clearUser } from "src/features/auth/slice";
import { setPathAndQuery } from "src/features/server/serverSlice";
import wrapper from "src/features/store";
import { useAppThunkDispatch } from "src/features/store";
import { useAppSelector } from "src/HOOKS/useCustomReduxSelector";
import { GlobalStyle } from "src/styles/Global";
import { theme } from "src/theme/theme";
import { parseCookies } from "src/utils/helpers";
import "nprogress/nprogress.css"; // styles of nprogress

const MyApp = function ({ Component, pageProps }: AppProps) {
  const dispatch = useAppThunkDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const prevState = usePrevious(user);
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

  useEffect(() => {
    if (!pageProps.isCookieToken) {
      dispatch(clearUser());
    }
  }, [dispatch, pageProps.isCookieToken]);

  useEffect(() => {
    if (prevState !== user && user === null) {
      dispatch(logout());
    }
  }, [dispatch, prevState, user]);

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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async ({ Component, ctx }) => {
  store.dispatch(
    setPathAndQuery({
      pathName: ctx.pathname,
      query: ctx.query,
    })
  );
  const { token } = parseCookies(ctx.req);
  return {
    pageProps: {
      // Call page-level getInitialProps
      // DON'T FORGET TO PROVIDE STORE TO PAGE
      ...(Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {}),
      // Some custom thing for all pages
      pathname: ctx.pathname,
      isCookieToken: token !== undefined,
    },
  };
});

export default wrapper.withRedux(MyApp);
