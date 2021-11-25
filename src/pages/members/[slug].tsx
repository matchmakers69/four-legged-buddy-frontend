/* eslint-disable no-restricted-globals */
import { ParsedUrlQuery } from "querystring";
import { VFC } from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "src/components/common/Button/Button.styled";
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
  const router = useRouter();
  const onDeleteMember = async () => {
    try {
      const res = await axios.delete(`${API_URL}/members/${member.id}`);
      if (res.status === 200) {
        router.push("/members");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  };
  return (
    <Layout pageTitle="Member">
      <GridTemplate>
        <Col data-testid="page-wrapper" xs={12}>
          <H1 className="h1 bold m-30-bottom">
            <span className="title-paragraph">{member ? member?.name : "Member does not exists"}</span>
          </H1>

          <Button onClick={onDeleteMember} className="btn--danger" type="button">
            Remove member
          </Button>
        </Col>
      </GridTemplate>
      <ToastContainer />
    </Layout>
  );
};

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
