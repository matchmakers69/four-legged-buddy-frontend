import { FC, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "src/components/Layout/Footer";
import Header from "src/components/Layout/Header";
import * as S from "./Layout.styled";

interface LayoutProps {
  pageTitle: string;
}

const Layout: FC<LayoutProps> = ({ pageTitle, children }) => {
  const router = useRouter();
  const isHeaderSkew = router.pathname !== "/";

  useEffect(() => {
    /**
     * @isHeaderSkew flag checks if body tag has background image
     * @isHeaderSkew set true, class to body tag will be added
     */
    if (isHeaderSkew) {
      document.body.classList.add("body-with-background");
    }
    return () => {
      document.body.classList.remove("body-with-background");
    };
  }, [isHeaderSkew]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <S.PageRoot>
        <Header isHeaderSkew={isHeaderSkew} />
        <main>{children}</main>
        <Footer />
      </S.PageRoot>
    </>
  );
};

export default Layout;
