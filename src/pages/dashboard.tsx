import axios from "axios";
import Layout from "src/components/Layout";
import { API_URL } from "src/config";
import UserMembersList from "src/features/Members/UserMembersList";
import { IUserMember } from "src/interface/members";
import { Col } from "src/styles/grid";
import { H1 } from "src/styles/typography";
import GridTemplate from "src/templatetes/GridTemplate";
import { parseCookies } from "src/utils/helpers";

type IUser = {
  email: string;
  username: string;
};

type IDashboardProps = {
  user: IUser;
  userMembers: IUserMember[];
};

const Dashboard = function ({ user, userMembers }: IDashboardProps) {
  const handleDeleteUserMember = (id: string) => {
    console.log(id);
  };
  return (
    <Layout pageTitle="Dashboard">
      <GridTemplate>
        <Col data-testid="page-wrapper" xs={12}>
          <H1 className="h1 bold m-30-bottom">
            <span className="title-paragraph">Dashboard</span>
          </H1>
          <div>Username: {user?.username}</div>
          <div>Email: {user?.email}</div>
        </Col>
        <Col data-testid="page-wrapper" xs={12}>
          <UserMembersList members={userMembers} onDelete={handleDeleteUserMember} />
        </Col>
      </GridTemplate>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const { req } = context;
  const { token } = parseCookies(req);
  let user = null;
  let userMembers = [];
  if (token) {
    try {
      const [dataUser, dataUserMembers] = await Promise.all([
        await axios.get(`${API_URL}/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        await axios.get(`${API_URL}/members/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);

      user = dataUser.data;
      userMembers = dataUserMembers.data;
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
    props: { user, userMembers },
  };
};

export default Dashboard;
