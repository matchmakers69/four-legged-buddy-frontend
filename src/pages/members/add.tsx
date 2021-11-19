import { FC } from "react";
import { GetServerSideProps, GetStaticProps } from "next";
import AddMemberForm from "src/components/Forms/AddMemberForm";
import Layout from "src/components/Layout";
import withProtectedRoute from "src/HOC/withProtectedRoute";
import { H1, Paragraph } from "src/styles/typography";

const AddMember: FC = function () {
  return (
    <Layout pageTitle="Members - Add member">
      Add member
      <AddMemberForm />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = withProtectedRoute(() => {
  return {
    props: {},
  };
});

export default AddMember;
