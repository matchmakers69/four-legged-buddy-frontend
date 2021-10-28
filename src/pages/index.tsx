import { FC } from "react";
import useTranslation from "next-translate/useTranslation";
import HomeIntro from "src/components/HomeIntro";
import Layout from "src/components/Layout";
import { H1 } from "src/styles/typography";

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <Layout pageTitle="Home page">
      <HomeIntro>
        <div data-testid="page-wrapper">
          <H1 className="h1 bold">{t("common:greeting")}</H1>
        </div>
      </HomeIntro>
    </Layout>
  );
};

export default Home;
