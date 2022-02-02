import axios from "axios";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
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
  token: string;
};

const Dashboard = function ({ user, userMembers, token }: IDashboardProps) {
  const router = useRouter();

  const handleDeleteUserMember = async (id: string) => {
    try {
      const res = await axios.delete(`${API_URL}/members/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
    props: { user, userMembers, token },
  };
};

export default Dashboard;
