import { VFC } from "react";
import axios from "axios";
import Layout from "src/components/Layout";
import { API_URL } from "src/config";
import { Col } from "src/styles/grid";
import { H1 } from "src/styles/typography";
import GridTemplate from "src/templatetes/GridTemplate";
import { parseCookies } from "src/utils/helpers";

interface IUser {
  email: string;
  username: string;
}

type Props = {
  user: IUser;
};

const Dashboard: VFC<Props> = function ({ user }) {
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

export const getServerSideProps = async (context) => {
  const { req } = context;
  const { token } = parseCookies(req);
  let user = null;
  if (token) {
    try {
      const { data } = await axios.get(`${API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      user = data;
    } catch (err) {
      console.log(err);
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
