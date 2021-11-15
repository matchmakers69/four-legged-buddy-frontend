import { ParsedUrlQuery } from "querystring";
import { VFC, useState } from "react";
import axios from "axios";
import { GetStaticProps } from "next";
import Button from "src/components/common/Button";
import AddMemberForm from "src/components/Forms/AddMemberForm";
import Layout from "src/components/Layout";
import { API_URL } from "src/config";
import { IMember } from "src/interfaces/members";
import { Col } from "src/styles/grid";
import { H1 } from "src/styles/typography";
import GridTemplate from "src/templatetes/GridTemplate";

type IMemberProps = {
  member: IMember;
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const Member: VFC<IMemberProps> = ({ member }) => {
  const [isInView, setIsInView] = useState(false);

  const toggleAddMemberForm = (): void => {
    setIsInView(true);
  };
  console.log(member);
  return (
    <Layout pageTitle="Member">
      <GridTemplate>
        <Col data-testid="page-wrapper" xs={12}>
          <H1 className="h1">{member ? member?.name : "Member does not exists"}</H1>
          <Button onClick={toggleAddMemberForm} type="button" variant="button">
            <span className="button-text">Add new member</span>
          </Button>
          {isInView && <AddMemberForm />}
        </Col>
      </GridTemplate>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  try {
    const res = await axios.get<IMember[]>(`${API_URL}/members`);

    const paths = res.data.map(({ slug }) => ({
      params: { slug },
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (err) {
    console.log(err);
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const res = await fetch(`${API_URL}/members?slug=${slug}`);
  const members = await res.json();

  return {
    props: {
      member: members[0],
    },
    revalidate: 1,
  };
};

export default Member;
