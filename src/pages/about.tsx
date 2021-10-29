import { FC } from "react";
import useTranslation from "next-translate/useTranslation";
import Layout from "src/components/Layout";
import { Col } from "src/styles/grid";
import { H1, Paragraph } from "src/styles/typography";
import GridTemplate from "src/templatetes/GridTemplate";

const About: FC = () => {
  const { t } = useTranslation();
  return (
    <Layout pageTitle="About Us">
      <GridTemplate>
        <Col data-testid="page-wrapper" xs={12}>
          <H1 className="h1">{t("about:title")}</H1>
          <Paragraph className="p">{t("about:intro")}</Paragraph>
        </Col>
      </GridTemplate>
    </Layout>
  );
};

export default About;
