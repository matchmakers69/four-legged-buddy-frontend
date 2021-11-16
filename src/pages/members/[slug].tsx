import { ParsedUrlQuery } from "querystring";
import { VFC, useState } from "react";
import { GetStaticProps, GetServerSideProps } from "next";
import Button from "src/components/common/Button";
import AddMemberForm from "src/components/Forms/AddMemberForm";
import Layout from "src/components/Layout";
import { API_URL } from "src/config";
import withProtectedRoute from "src/HOC/withProtectedRoute";
import { IMember } from "src/interface/members";
import { Col } from "src/styles/grid";
import { H1 } from "src/styles/typography";
import GridTemplate from "src/templatetes/GridTemplate";

type IMemberProps = {
  member: IMember;
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const Member: VFC<IMemberProps> = function ({ member }) {
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

// export const getStaticPaths = async () => {
//   try {
//     const res = await axios.get<IMember[]>(`${API_URL}/members`);
//     const paths = res.data.map(({ slug }) => ({
//       params: { slug },
//     }));

//     return {
//       paths,
//       fallback: true,
//     };
//   } catch (err) {
//     console.log(err);
//   }
// };

export const getServerSideProps: GetServerSideProps = withProtectedRoute(async (context) => {
  const { slug } = context.params as IParams;
  const res = await fetch(`${API_URL}/members?slug=${slug}`);
  const members = await res.json();

  return {
    props: {
      member: members[0],
    },
  };
});

export default Member;
