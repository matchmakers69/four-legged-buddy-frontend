import { FC } from "react";
import useTranslation from "next-translate/useTranslation";
import Layout from "src/components/Layout";
import { Col } from "src/styles/grid";
import GridTemplate from "src/templatetes/GridTemplate";

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <Layout pageTitle="Home page">
      <GridTemplate>
        <Col data-testid="page-wrapper" xs={12}>
          <h1>{t("common:greeting")}</h1>
        </Col>
      </GridTemplate>
    </Layout>
  );
};

export default Home;
