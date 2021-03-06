import { VFC } from "react";
import RegisterForm from "src/components/Forms/RegisterForm";
import Layout from "src/components/Layout";
import { Col } from "src/styles/grid";
import { H1 } from "src/styles/typography";
import GridTemplate from "src/templatetes/GridTemplate";

const Register: VFC = function () {
  return (
    <Layout pageTitle="Register">
      <GridTemplate>
        <Col data-testid="page-wrapper" xs={12}>
          <H1 className="h1 bold m-30-bottom">
            <span className="title-paragraph">Register</span>
          </H1>
          <RegisterForm />
        </Col>
      </GridTemplate>
    </Layout>
  );
};

export default Register;
