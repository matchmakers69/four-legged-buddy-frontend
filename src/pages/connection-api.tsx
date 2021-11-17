import { FC } from "react";
import AppLink from "src/components/common/AppLink";
import Button from "src/components/common/Button";
import Layout from "src/components/Layout";
import constants from "src/constants";
import { H1, H4 } from "src/styles/typography";

const { HOME } = constants.routes;

const ErrorConnection: FC = function () {
  return (
    <Layout pageTitle="Orcha Digital Health - Page Not Found">
      <div data-testid="component-wrapper">
        <header>
          <H1>Error conection</H1>
          <H4>Sorry we have some server issues, plase try later</H4>
        </header>
        <Button type="button" variant="link">
          <AppLink variant="button" href={HOME}>
            Back home
          </AppLink>
        </Button>
      </div>
    </Layout>
  );
};

export default ErrorConnection;
