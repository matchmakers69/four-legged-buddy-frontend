import type { NextApiRequest, NextApiResponse } from "next";
import { destroyCookie, setCookie } from "nookies";
import constants from "src/constants";

const { LOGIN } = constants.routes;

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === "POST") {
    // Destroy cookies
    setCookie({ res }, "token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      expires: new Date(0),
      sameSite: "strict",
      path: "/",
    });
    res.status(200).json({
      message: "Success",
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({
      message: `Method ${req.method} not allowed`,
    });
  }
};

// const logout = async (req: unknown, res: NextApiResponse) => {
//   destroyCookie({ res }, "jwt", {
//     path: LOGIN,
//   });

//   res.status(200).end();
// };

// export default logout;
