import { FC } from "react";
import AppLink from "src/components/common/AppLink";
import Button from "src/components/common/Button";
import Layout from "src/components/Layout";
import constants from "src/constants";
import { H1, H4 } from "src/styles/typography";

const { HOME } = constants.routes;

const PageNotFound: FC = function () {
  return (
    <Layout pageTitle="Orcha Digital Health - Page Not Found">
      <div data-testid="component-wrapper">
        <header>
          <H1>404</H1>
          <H4>Sorry, there is nothing here</H4>
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

export default PageNotFound;
