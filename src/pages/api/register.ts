import cookie from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";
import { API_URL } from "src/config";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === "POST") {
    const { username, password, email } = req.body;
    const registerData = {
      username,
      password,
      email,
    };

    try {
      const strapiRes = await fetch(`${API_URL}/auth/local/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });
      const data = await strapiRes.json();

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", data.jwt, {
          httpOnly: true, // for now
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: "strict",
          path: "/",
        })
      );

      res.status(200).end();
    } catch (err) {
      res.status(500).end();
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({
      message: `Method ${req.method} not allowed`,
    });
  }
};
