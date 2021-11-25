import { FC } from "react";
import { GetServerSideProps } from "next";
import AddMemberForm from "src/components/Forms/AddMemberForm";
import Layout from "src/components/Layout";
import withProtectedRoute from "src/HOC/withProtectedRoute";
import { Col } from "src/styles/grid";
import { H1 } from "src/styles/typography";
import GridTemplate from "src/templatetes/GridTemplate";

const AddMember: FC = function () {
  return (
    <Layout pageTitle="Members - Add member">
      <GridTemplate>
        <Col data-testid="page-wrapper" xs={12}>
          <H1 className="h1 bold m-30-bottom">
            <span className="title-paragraph">Add member</span>
          </H1>
          <AddMemberForm />
        </Col>
      </GridTemplate>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = withProtectedRoute(() => {
  return {
    props: {},
  };
});

export default AddMember;
