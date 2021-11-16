import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";
import { API_URL } from "src/config";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === "POST") {
    const { password, identifier } = req.body;
    try {
      const strapiRes = await fetch(`${API_URL}/auth/local`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier,
          password,
        }),
      });
      const data = await strapiRes.json();
      if (strapiRes.ok) {
        setCookie({ res }, "jwt", data.jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });

        res.status(200).json({
          user: data.user,
        });
      } else {
        res.status(data.statusCode).json({
          message: data.message[0].messages[0].message,
        });
      }
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
