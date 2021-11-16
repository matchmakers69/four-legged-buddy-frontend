import { VFC } from "react";
import axios, { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import Layout from "src/components/Layout";
import MemberItem from "src/components/Members/MemberItem";
import { API_URL } from "src/config";
import { IMember, IMembers } from "src/interface/members";
import { Row } from "src/styles/grid";
import { H4 } from "src/styles/typography";
import GridTemplate from "src/templatetes/GridTemplate";

const Members: VFC<IMembers> = function ({ members }) {
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

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get<AxiosResponse<IMember[]>>(`${API_URL}/members`);
  const members = res.data;

  if (!members) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      members,
    },
  };
};

export default Members;