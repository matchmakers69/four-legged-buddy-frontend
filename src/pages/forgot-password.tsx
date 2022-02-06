import { VFC } from "react";
import ForgotPasswordForm from "src/components/Forms/ForgotPasswordForm";
import Layout from "src/components/Layout";
import { Col } from "src/styles/grid";
import { H1 } from "src/styles/typography";
import GridTemplate from "src/templatetes/GridTemplate";

const PasswordReset: VFC = function () {
  return (
    <Layout pageTitle="ResetPassword">
      <GridTemplate>
        <Col data-testid="page-wrapper" xs={12}>
          <ForgotPasswordForm />
        </Col>
      </GridTemplate>
    </Layout>
  );
};

export default PasswordReset;
