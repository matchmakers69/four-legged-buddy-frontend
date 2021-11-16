import type { NextApiResponse } from "next";
import { destroyCookie } from "nookies";
import constants from "src/constants";

const { LOGIN } = constants.routes;

const logout = async (req: unknown, res: NextApiResponse) => {
  destroyCookie({ res }, "jwt", {
    path: LOGIN,
  });

  res.status(200).end();
};

export default logout;
