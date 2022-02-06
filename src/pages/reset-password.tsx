import { VFC } from "react";
import Layout from "src/components/Layout";
import { Col } from "src/styles/grid";
import { H1 } from "src/styles/typography";
import GridTemplate from "src/templatetes/GridTemplate";

const PasswordReset: VFC = function () {
  return (
    <Layout pageTitle="ResetPassword">
      <GridTemplate>
        <Col data-testid="page-wrapper" xs={12}>
          <H1 className="h1 bold m-30-bottom">
            <span className="title-paragraph">Password reset</span>
          </H1>
          Password reset
        </Col>
      </GridTemplate>
    </Layout>
  );
};

export default PasswordReset;
