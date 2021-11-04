import { FC } from "react";
import LoginForm from "src/components/Forms/LoginForm";
import Layout from "src/components/Layout";
import { Col } from "src/styles/grid";
import { H1 } from "src/styles/typography";
import GridTemplate from "src/templatetes/GridTemplate";

const Login: FC = () => {
  return (
    <Layout pageTitle="Login">
      <GridTemplate>
        <Col data-testid="page-wrapper" xs={12}>
          <H1 className="h1">Login</H1>
          <LoginForm />
        </Col>
      </GridTemplate>
    </Layout>
  );
};

export default Login;
