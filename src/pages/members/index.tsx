import { VFC } from "react";
import axios, { AxiosResponse } from "axios";
import PageTitle from "src/components/common/PageTitleDecorator/PageTitle";
import Layout from "src/components/Layout";
import MemberItem from "src/components/Members/MemberItem";
import { API_URL } from "src/config";
import { IMember } from "src/interfaces/members";
import { IMembers } from "src/interfaces/members";
import { Row } from "src/styles/grid";
import { H4 } from "src/styles/typography";
import GridTemplate from "src/templatetes/GridTemplate";

const Members: VFC<IMembers> = ({ members }) => {
  return (
    <Layout pageTitle="Members">
      <GridTemplate>
        <div>
          <Row className="row">
            {!members.length && <H4 className="h4">Sorry no members yet</H4>}
            {members.map((member) => {
              return <MemberItem key={member.id} member={member} />;
            })}
          </Row>
        </div>
      </GridTemplate>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await axios.get<AxiosResponse<IMember[]>>(`${API_URL}/members`);
  const members = res.data;

  return {
    props: {
      members,
    },
    revalidate: 1,
  };
}

export default Members;
