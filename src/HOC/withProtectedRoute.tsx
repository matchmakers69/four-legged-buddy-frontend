import constants from "src/constants";
import { parseCookies } from "src/utils/helpers";

const { LOGIN } = constants.routes;

const WithProtectedRoute = (gssp) => {
  return (context) => {
    const { req } = context;
    const { token } = parseCookies(req);

    if (!token) {
      return {
        redirect: {
          destination: LOGIN,
        },
      };
    }

    return gssp(context); // Continue on to call `getServerSideProps` logic
  };
};

export default WithProtectedRoute;
