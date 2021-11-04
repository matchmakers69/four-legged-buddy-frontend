import { FC } from "react";
import RegisterForm from "src/components/Forms/RegisterForm";
import Layout from "src/components/Layout";
import { Col } from "src/styles/grid";
import { H1 } from "src/styles/typography";
import GridTemplate from "src/templatetes/GridTemplate";

const Register: FC = () => {
  return (
    <Layout pageTitle="Register">
      <GridTemplate>
        <Col data-testid="page-wrapper" xs={12}>
          <H1 className="h1">Register</H1>
          <RegisterForm />
        </Col>
      </GridTemplate>
    </Layout>
  );
};

export default Register;
