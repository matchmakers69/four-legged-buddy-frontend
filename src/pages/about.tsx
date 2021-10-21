import { FC } from "react";
import useTranslation from "next-translate/useTranslation";
import Layout from "src/components/Layout";
import { Col } from "src/styles/grid";
import GridTemplate from "src/templatetes/GridTemplate";

const About: FC = () => {
  const { t } = useTranslation();
  return (
    <Layout pageTitle="About Us">
      <GridTemplate>
        <Col data-testid="page-wrapper" xs={12}>
          <h1>{t("about:title")}</h1>
          <p>{t("about:intro")}</p>
        </Col>
      </GridTemplate>
    </Layout>
  );
};

export default About;
