import { parseCookies } from "nookies";
import constants from "src/constants";

const { LOGIN } = constants.routes;

const withProtectedRoute = (gssp) => {
  return (context) => {
    const { req } = context;
    const parsedCookies = parseCookies({ req });
    console.log(context, "parsedCookies");
    const { jwt } = parsedCookies;

    if (!jwt) {
      return {
        redirect: {
          destination: LOGIN,
        },
      };
    }

    return gssp(context); // Continue on to call `getServerSideProps` logic
  };
};

withProtectedRoute.displayName = "withProtectedRoute";

export default withProtectedRoute;
