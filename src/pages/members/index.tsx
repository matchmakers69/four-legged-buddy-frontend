import { VFC, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import Error from "next/error";
import Layout from "src/components/Layout";
import MemberItem from "src/components/Members/MemberItem";
import { API_URL } from "src/config";
import constants from "src/constants";
import withProtectedRoute from "src/HOC/withProtectedRoute";
import { IMember } from "src/interface/members";
import { Row } from "src/styles/grid";
import { H4 } from "src/styles/typography";
import GridTemplate from "src/templatetes/GridTemplate";

const { HOME } = constants.routes;

type IMembersProps = {
  members: IMember[];
  errorCode: number;
  isCookieToken: boolean;
};

const Members: VFC<IMembersProps> = function ({ members, errorCode, isCookieToken }) {
  const [newMembers] = useState(members);

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }
  return (
    <Layout pageTitle="Members">
      <GridTemplate>
        <div>
          <Row className="row">
            {!members.length || (!members && <H4 className="h4">Sorry no members yet</H4>)}
            {members.map((member) => {
              return <MemberItem key={member.id} member={member} />;
            })}
          </Row>
        </div>
      </GridTemplate>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = withProtectedRoute(async ({ isCookieToken }) => {
  try {
    const res = await axios.get<AxiosResponse<IMember[]>>(`${API_URL}/members`);
    const members = res.data;

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
        members,
        isCookieToken,
      },
    };
  } catch (error) {
    return {
      // props: {
      //   errorCode: 404
      // }
      redirect: {
        destination: "/connection-api",
        permanent: false,
      },
    };
  }
});

export default Members;
