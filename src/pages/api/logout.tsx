import type { NextApiResponse } from "next";
import { destroyCookie } from "nookies";

const logout = async (req: unknown, res: NextApiResponse) => {
  destroyCookie({ res }, "jwt", {
    path: "/login",
  });

  res.status(200).end();
};

export default logout;
