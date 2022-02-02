/* eslint-disable no-restricted-globals */
import { ParsedUrlQuery } from "querystring";
import { VFC } from "react";
import { GetServerSideProps } from "next";
import "react-toastify/dist/ReactToastify.css";
import Layout from "src/components/Layout";
import { API_URL } from "src/config";
import constants from "src/constants";
import withProtectedRoute from "src/HOC/withProtectedRoute";
import { IMember } from "src/interface/members";
import { Col } from "src/styles/grid";
import { H1 } from "src/styles/typography";
import GridTemplate from "src/templatetes/GridTemplate";

const { HOME } = constants.routes;

type IMemberProps = {
  member: IMember | null;
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const Member: VFC<IMemberProps> = function ({ member }) {
  return (
    <Layout pageTitle="Member">
      <GridTemplate>
        <Col data-testid="page-wrapper" xs={12}>
          <H1 className="h1 bold m-30-bottom">
            <span className="title-paragraph">{member ? member?.name : "Member does not exists"}</span>
          </H1>
        </Col>
      </GridTemplate>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = withProtectedRoute(async (context) => {
  const { slug } = context.params as IParams;

  try {
    const res = await fetch(`${API_URL}/members?slug=${slug}`);
    const members = await res.json();

    if (!members) {
      return {
        redirect: {
          destination: HOME,
          permanent: false,
        },
      };
    }

    return {
      props: {
        member: members?.[0] || null,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/connection-api",
        permanent: false,
      },
    };
  }
});

export default Member;
