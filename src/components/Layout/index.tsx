import { FC } from "react";
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
  const locals = router?.locales ?? [];
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <S.PageRoot>
        <Header locales={locals} />
        <main>{children}</main>
        <Footer />
      </S.PageRoot>
    </>
  );
};

export default Layout;
