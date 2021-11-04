import { FC } from "react";
import Layout from "src/components/Layout";
import { Col } from "src/styles/grid";
import { H1 } from "src/styles/typography";
import GridTemplate from "src/templatetes/GridTemplate";

const Members: FC = () => {
  return (
    <Layout pageTitle="About Us">
      <GridTemplate>
        <Col data-testid="page-wrapper" xs={12}>
          <H1 className="h1">Active members</H1>
        </Col>
      </GridTemplate>
    </Layout>
  );
};

export default Members;
