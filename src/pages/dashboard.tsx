import { VFC } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import nookies from "nookies";
import Layout from "src/components/Layout";
import { API_URL } from "src/config";
import { Col } from "src/styles/grid";
import { H1 } from "src/styles/typography";
import GridTemplate from "src/templatetes/GridTemplate";

interface IUser {
  email: string;
  username: string;
}

type Props = {
  user: IUser;
};

const Dashboard: VFC<Props> = function ({ user }) {
  const router = useRouter();
  const { email, username } = user;

  return (
    <Layout pageTitle="Dashboard">
      <GridTemplate>
        <Col data-testid="page-wrapper" xs={12}>
          <H1 className="h1">Dashboard</H1>
          <div>Username: {username}</div>
          <div>Email: {email}</div>
        </Col>
      </GridTemplate>
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  let user = null;
  if (cookies?.jwt) {
    try {
      const { data } = await axios.get(`${API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
        },
      });
      user = data;
    } catch (e) {
      console.log(e);
    }
  }

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
  return {
    props: { user },
  };
};

export default Dashboard;
