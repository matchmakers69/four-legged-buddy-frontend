import { FC } from "react";
import Layout from "src/components/Layout";
import { Col } from "src/styles/grid";
import { H1 } from "src/styles/typography";
import GridTemplate from "src/templatetes/GridTemplate";

const Profile: FC = () => {
  return (
    <Layout pageTitle="Profile">
      <GridTemplate>
        <Col data-testid="page-wrapper" xs={12}>
          <H1 className="h1">Profile</H1>
        </Col>
      </GridTemplate>
    </Layout>
  );
};

export default Profile;
