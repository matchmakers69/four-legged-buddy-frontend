import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";
import { API_URL } from "src/config";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === "POST") {
    const { password, identifier } = req.body;
    const loginData = {
      password,
      identifier,
    };
    try {
      const login = await fetch(`${API_URL}/auth/local`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const loginResponse = await login.json();

      setCookie({ res }, "jwt", loginResponse.jwt, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });

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
