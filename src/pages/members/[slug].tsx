import { VFC } from "react";
import axios from "axios";
import Layout from "src/components/Layout";
import { API_URL } from "src/config";
import { IMember } from "src/interfaces/members";
import { Col } from "src/styles/grid";
import { H1 } from "src/styles/typography";
import GridTemplate from "src/templatetes/GridTemplate";

type IMemberProps = {
  member: IMember;
};

const Member: VFC<IMemberProps> = ({ member }) => {
  return (
    <Layout pageTitle="Member">
      <GridTemplate>
        <Col data-testid="page-wrapper" xs={12}>
          <H1 className="h1">{member ? member?.name : "Member does not exists"}</H1>
        </Col>
      </GridTemplate>
    </Layout>
  );
};

export async function getStaticPaths() {
  try {
    const res = await axios.get<IMember[]>(`${API_URL}/members`);

    const paths = res.data.map((member) => ({
      params: { slug: member.slug },
    }));
    return {
      paths,
      fallback: true,
    };
  } catch (err) {
    console.log(err);
  }
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/members?slug=${slug}`);
  const members = await res.json();

  return {
    props: {
      member: members[0],
    },
    revalidate: 1,
  };
}

export default Member;
